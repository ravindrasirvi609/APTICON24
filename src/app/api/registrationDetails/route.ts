import { appendRowToSheet } from "@/ googleSheets";
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

    const {
      title,
      fullName,
      email,
      transactionId,
      feeType,
      whatsappNumber,
      countryCode,
      dob,
      aadharNumber,
      gender,
      institution,
      address,
      city,
      state,
      pincode,
      foodChoice,
      accompanyingPerson,
      accommodation,
      membershipNumber,
    } = await req.json();

    const newUser = {
      title,
      fullName,
      email,
      whatsappNumber,
      transactionId,
      feeType,
      countryCode,
      dob,
      aadharNumber,
      gender,
      institution,
      address,
      city,
      state,
      pincode,
      foodChoice,
      accompanyingPerson,
      accommodation,
      membershipNumber,

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
      title: any;
      fullName: any;
      email: any;
      whatsappNumber: any;
      transactionId: any;
      feeType: any;
      countryCode: any;
      dob: any;
      aadharNumber: any;
      gender: any;
      institution: any;
      address: any;
      city: any;
      state: any;
      pincode: any;
      foodChoice: any;
      accompanyingPerson: any;
      accommodation: any;
      membershipNumber: any;
      createdAt: any;
    }) => `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h1 style="font-size: 24px; color: #333; text-align: center;">APTICON Conference 2024 - New Registration</h1>
        <p style="font-size: 18px;">Hi,</p>
        <p style="font-size: 18px;"><strong>${newUser.fullName}</strong> has registered for APTICON Conference 2024!</p>
        <p style="font-size: 18px;">Here are their details:</p>
        <ul style="font-size: 18px;">
          <li><strong>Title:</strong> ${newUser.title}</li>
          <li><strong>Name:</strong> ${newUser.fullName}</li>
          <li><strong>Email:</strong> ${newUser.email}</li>
          <li><strong>Mobile Number:</strong> ${newUser.whatsappNumber}</li>
          <li><strong>Transaction ID:</strong> ${newUser.transactionId}</li>
          <li><strong>Fee Type:</strong> ${newUser.feeType}</li>
          <li><strong>Membership Number:</strong> ${newUser.membershipNumber}</li>
          <li><strong>Country Code:</strong> ${newUser.countryCode}</li>
          <li><strong>Date of Birth:</strong> ${newUser.dob}</li>
          <li><strong>Aadhar Number:</strong> ${newUser.aadharNumber}</li>
          <li><strong>Gender:</strong> ${newUser.gender}</li>
          <li><strong>Institution:</strong> ${newUser.institution}</li>
          <li><strong>Address:</strong> ${newUser.address}</li>
          <li><strong>City:</strong> ${newUser.city}</li>
          <li><strong>State:</strong> ${newUser.state}</li>
          <li><strong>Pincode:</strong> ${newUser.pincode}</li>
          <li><strong>Food Choice:</strong> ${newUser.foodChoice}</li>
          <li><strong>Accompanying Person:</strong> ${newUser.accompanyingPerson}</li>
          <li><strong>Accommodation:</strong> ${newUser.accommodation}</li>
          <li><strong>Registered At:</strong> ${newUser.createdAt}</li>
        </ul>
        <p style="font-size: 18px;">Please follow up with them as necessary.</p>
        <p style="font-size: 18px;">Best regards,</p>
        <p style="font-size: 18px; font-weight: bold;">APTICON Team</p>
      </div>
    `;

    const userEmailTemplate = (newUser: {
      title: any;
      fullName: any;
      email: any;
      whatsappNumber: any;
      transactionId: any;
      feeType: any;
      countryCode: any;
      dob: any;
      aadharNumber: any;
      gender: any;
      institution: any;
      address: any;
      city: any;
      state: any;
      pincode: any;
      foodChoice: any;
      accompanyingPerson: any;
      accommodation: any;
      createdAt: any;
    }) => `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
        <h1 style="font-size: 24px; color: #333; text-align: center; margin-bottom: 20px;">APTICON Conference 2024 - Thank You for Registering!</h1>
        <p style="font-size: 18px;">Dear ${newUser.title} ${newUser.fullName},</p>
        <p style="font-size: 18px;">
          Thank you for registering to APTICON 2024!

        </p>
        <p style="font-size: 18px;">
Your registration will be confirmed upon verification of your transaction details. You will receive your registration number on your registered WhatsApp number and email address. Please stay tuned for further updates.
       </p>

        <p style="font-size: 18px;">Best regards,</p>
        <p style="font-size: 18px; font-weight: bold;">APTICON Organizing Committee</p>
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
        from: "admin@apticon2024.com",
        to: ["info@apticon2024.com", "ravi.sirvi609@gmail.com"],
        subject: `${newUser.fullName} has registered for APTICON 2024!`,
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
        from: "admin@apticon2024.com",
        to: newUser.email,
        subject: `APTICON 2024, Thankyou for registering`,
        html: userEmailTemplate(newUser),
      }),
    });

    if (!userResponse.ok) {
      throw new Error(`Error sending user email: ${userResponse.status}`);
    }
    await appendRowToSheet([
      newUser.title,
      newUser.fullName,
      newUser.email,
      newUser.whatsappNumber,
      newUser.transactionId,
      newUser.feeType,
      newUser.countryCode,
      newUser.dob,
      newUser.aadharNumber,
      newUser.gender,
      newUser.institution,
      newUser.address,
      newUser.city,
      newUser.state,
      newUser.pincode,
      newUser.foodChoice,
      newUser.accompanyingPerson,
      newUser.accommodation,
      newUser.createdAt,
      newUser.membershipNumber,
    ]);
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
