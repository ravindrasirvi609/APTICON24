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

    const { name, email, transactionId, feeType, mobileNumber } =
      await req.json();

    const newUser = {
      name,
      email,
      mobileNumber,
      transactionId,
      feeType,
      createdAt: new Date().toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    };

    const adminEmailTemplate = (newUser: {
      name: any;
      email: any;
      mobileNumber: any;
      transactionId: any;
      feeType: any;
      createdAt: any;
    }) => `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h1 style="font-size: 24px; color: #333; text-align: center;">APTICON Conference 2024 - New Registration</h1>
        <p style="font-size: 18px;">Hi,</p>
        <p style="font-size: 18px;"><strong>${newUser.name}</strong> has registered for APTICON Conference 2024!</p>
        <p style="font-size: 18px;">Here are their details:</p>
        <ul style="font-size: 18px;">
          <li><strong>Name:</strong> ${newUser.name}</li>
          <li><strong>Email:</strong> ${newUser.email}</li>
          <li><strong>Mobile Number:</strong> ${newUser.mobileNumber}</li>
          <li><strong>Transaction ID:</strong> ${newUser.transactionId}</li>
          <li><strong>Fee Type:</strong> ${newUser.feeType}</li>
          <li><strong>Registered At:</strong> ${newUser.createdAt}</li>
        </ul>
        <p style="font-size: 18px;">Please follow up with them as necessary.</p>
        <p style="font-size: 18px;">Best regards,</p>
        <p style="font-size: 18px; font-weight: bold;">APTICON Team</p>
      </div>
    `;

    const userEmailTemplate = (newUser: {
      name: any;
      email: any;
      transactionId: any;
      mobileNumber: any;
      feeType: any;
      createdAt: any;
    }) => `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
        <h1 style="font-size: 24px; color: #333; text-align: center; margin-bottom: 20px;">APTICON Conference 2024 - Thank You for Registering!</h1>
        <p style="font-size: 18px;">Hi ${newUser.name},</p>
        <p style="font-size: 18px;">
          Thank you for registering for APTICON Conference 2024! We have received your registration and will keep you updated with the latest information.
        </p>
        <p style="font-size: 18px;">
          Here are the details you provided:
        </p>
        <ul style="font-size: 18px;">
          <li><strong>Name:</strong> ${newUser.name}</li>
          <li><strong>Email:</strong> ${newUser.email}</li>
          <li><strong>Mobile Number:</strong> ${newUser.mobileNumber}</li>
          <li><strong>Transaction ID:</strong> ${newUser.transactionId}</li>
          <li><strong>Fee Type:</strong> ${newUser.feeType}</li>
          <li><strong>Registered At:</strong> ${newUser.createdAt}</li>
        </ul>
        <p style="font-size: 18px;">We look forward to seeing you at the conference!</p>
        <p style="font-size: 18px;">Best regards,</p>
        <p style="font-size: 18px; font-weight: bold;">APTICON Team</p>
      </div>
    `;

    const resend = new Resend(apiKey);
    const adminResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "dev@ravindrachoudhary.in",
        to: ["info@apticon2024.com", "ravi.sirvi609@gmail.com"],
        subject: `${newUser.name} has registered for APTICON 2024!`,
        html: adminEmailTemplate(newUser),
      }),
    });

    if (!adminResponse.ok) {
      throw new Error(`Error sending admin email: ${adminResponse.status}`);
    }

    const userResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "dev@ravindrachoudhary.in",
        to: newUser.email,
        subject: `Thank You for Registering, ${newUser.name}`,
        html: userEmailTemplate(newUser),
      }),
    });

    if (!userResponse.ok) {
      throw new Error(`Error sending user email: ${userResponse.status}`);
    }

    return NextResponse.json({
      message: "Registration successful",
      user: newUser,
    });
  } catch (error: any) {
    console.error("Error handling registration:", error);
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
