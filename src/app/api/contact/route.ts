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
      subject: formData.get("subject") as string,
      createdAt: new Date().toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    };

    const adminEmailTemplate = (newUser: any) => `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h1 style="font-size: 24px; color: #333; text-align: center;">APTICON Conference 2024 - Contact Request</h1>
        <p style="font-size: 18px;">Hi,</p>
        <p style="font-size: 18px;"><strong>${newUser.name}</strong> wants to connect with you regarding the APTICON Conference 2024!</p>
        <p style="font-size: 18px;">Here are their details:</p>
        <ul style="font-size: 18px;">
          <li><strong>Email:</strong> ${newUser.email}</li>
          <li><strong>Message:</strong> ${newUser.message}</li>
          <li><strong>Mobile No:</strong> ${newUser.mobileNo}</li>
          <li><strong>Subject:</strong> ${newUser.subject}</li>
          <li><strong>Created At:</strong> ${newUser.createdAt}</li>
        </ul>
        <p style="font-size: 18px;">Please respond to their inquiry at your earliest convenience.</p>
        <p style="font-size: 18px;">Best regards,</p>
        <p style="font-size: 18px; font-weight: bold;">APTICON Team</p>
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
          ul {
            font-size: 16px;
          }
        }
      </style>
    `;

    const newResend = new Resend(apiKey);
    const newRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "dev@ravindrachoudhary.in",
        to: ["info@apticon2024.com", "ravi.sirvi609@gmail.com"],
        subject: `${newUser.name} wants to connect with you!`,
        html: adminEmailTemplate(newUser),
      }),
    });

    if (newRes.ok) {
      const data = await newRes.json();
    } else {
      console.error("Error sending email:", newRes.status);
    }

    const userEmailTemplate = (newUser: any) => `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
        <h1 style="font-size: 24px; color: #333; text-align: center; margin-bottom: 20px;">APTICON Conference 2024 - Thank You for Reaching Out!</h1>
        <p style="font-size: 18px;">Hi ${newUser.name},</p>
        <p style="font-size: 18px;">
          Thank you for reaching out regarding the APTICON Conference 2024! We have received your request and will get back to you soon.
        </p>
        <p style="font-size: 18px;">
          Here are the details you provided:
        </p>
        <ul style="font-size: 18px;">
          <li><strong>Name:</strong> ${newUser.name}</li>
          <li><strong>Email:</strong> ${newUser.email}</li>
          <li><strong>Message:</strong> ${newUser.message}</li>
          <li><strong>Mobile No:</strong> ${newUser.mobileNo}</li>
          <li><strong>Subject:</strong> ${newUser.subject}</li>
          <li><strong>Request Submitted At:</strong> ${newUser.createdAt}</li>
        </ul>
        <p style="font-size: 18px;">
          We appreciate your interest in our conference and will ensure that your questions are answered promptly.
        </p>
        <p style="font-size: 18px;">
          If you need to contact us directly, please feel free to call us at <strong>8107199052</strong>.
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
          ul {
            font-size: 16px;
          }
        }
      </style>
    `;

    const userResend = new Resend(apiKey);
    const userRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "dev@ravindrachoudhary.in",
        to: `${newUser.email}`,
        subject: `Thanks for Connecting, ${newUser.name}`,
        html: userEmailTemplate(newUser),
      }),
    });

    if (userRes.ok) {
      const data = await userRes.json();
    } else {
      console.error("Error sending email:", userRes.status);
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
