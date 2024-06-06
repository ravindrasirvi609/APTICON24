import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error(
        "Missing Resend API key. Set the RESEND_API_KEY environment variable."
      );
    }

    const formData = await req.formData();
    const newUser = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      mobileNo: formData.get("phone") as string,
      createdAt: new Date().toISOString(),
    };

    const resend = new Resend(apiKey);

    const emailFormData = new FormData();
    emailFormData.append("from", "dev@ravindrachoudhary.in");
    emailFormData.append("to", "ravi.sirvi609@gmail.com");
    emailFormData.append(
      "subject",
      `${newUser.name} wants to connect with you!`
    );
    emailFormData.append(
      "html",
      `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h1 style="font-size: 24px; color: #333;">Connection Request</h1>
        <p style="font-size: 18px;">Hi,</p>
        <p style="font-size: 18px;"><strong>${newUser.name}</strong> wants to connect with you!</p>
        <p style="font-size: 18px;">Here are their details:</p>
        <ul style="font-size: 18px;">
          <li>Email: ${newUser.email}</li>
          <li>Message: ${newUser.message}</li>
          <li>Mobile No: ${newUser.mobileNo}</li>
          <li>Created At: ${newUser.createdAt}</li>
        </ul>
      </div>
    `
    );

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body: emailFormData,
    });

    const responseBody = await res.text();
    if (!res.ok) {
      console.error(`Error sending email: ${res.status}`, responseBody);
      throw new Error(`Error sending email: ${res.status}`);
    }

    const confirmationEmailData = new FormData();
    confirmationEmailData.append("from", "dev@ravindrachoudhary.in");
    confirmationEmailData.append("to", newUser.email);
    confirmationEmailData.append(
      "subject",
      `Thanks for Connecting, ${newUser.name}`
    );
    confirmationEmailData.append(
      "html",
      `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
        <h1 style="font-size: 24px; color: #333; text-align: center; margin-bottom: 20px;">Connection Request</h1>
        <p style="font-size: 18px;">Hi ${newUser.name},</p>
        <p style="font-size: 18px;">
          Thank you for reaching out! I have received your request and will get back to you soon.
        </p>
        <p style="font-size: 18px;">
          If you need to contact me directly, please feel free to call me at <strong>8107199052</strong>.
        </p>
        <p style="font-size: 18px;">Best regards,</p>
        <p style="font-size: 18px; font-weight: bold;">Ravindra Choudhary</p>
      </div>
      <style>
        @media only screen and (max-width: 600px) {
          div {
            padding: 15px;
            font-size: 16px;
          }
          h1 {
            font-size: 22px;
          }
          p {
            font-size: 16px;
          }
        }
      </style>
    `
    );

    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body: confirmationEmailData,
    });

    const confirmationResponseBody = await confirmationRes.text();
    if (!confirmationRes.ok) {
      console.error(
        `Error sending confirmation email: ${confirmationRes.status}`,
        confirmationResponseBody
      );
      throw new Error(
        `Error sending confirmation email: ${confirmationRes.status}`
      );
    }

    return NextResponse.json({
      message: "User added successfully",
      user: newUser,
    });
  } catch (error: any) {
    console.error("Error adding user:", error.message);
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
