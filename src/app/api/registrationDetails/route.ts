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
      designation,
      address,
      city,
      state,
      pincode,
      foodChoice,
      accompanyingPerson,
      accommodation,
      membershipNumber,
      paymentMethod,
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
      designation,
      address,
      city,
      state,
      pincode,
      foodChoice,
      accompanyingPerson,
      accommodation,
      membershipNumber,
      paymentMethod,
      createdAt: new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "Asia/Kolkata",
      }).format(new Date()),
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
      paymentMethod: any;
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
          <li><strong>Payment Method:</strong> ${newUser.paymentMethod}</li>
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
      membershipNumber: any;
      createdAt: any;
    }) => `
        <p style="font-size: 18px;">Dear ${newUser.title} ${
      newUser.fullName
    },</p>
        <p style="font-size: 18px;">
          Thank you for registering to APTICON 2024!
        </p>
        <p style="font-size: 18px;">
          Here are your registration details:
        </p>
        <ul style="font-size: 18px;">
          <li><strong>Name:</strong> ${newUser.fullName}</li>
          <li><strong>Email:</strong> ${newUser.email}</li>
          <li><strong>Mobile Number:</strong> ${newUser.whatsappNumber}</li>
          <li><strong>Transaction ID:</strong> ${newUser.transactionId}</li>
          <li><strong>Fee Type:</strong> ${newUser.feeType}</li>
          <li><strong>Date of Birth:</strong> ${newUser.dob}</li>
          ${
            newUser.membershipNumber
              ? `<li><strong>APTI membership Number:</strong> ${newUser.membershipNumber}</li>`
              : ""
          }
          <li><strong>Registered At:</strong> ${newUser.createdAt}</li>
        </ul> 
        <p style="font-size: 18px;">
          The confirmation of your registration will be communicated at your registered Email Id and WhatsApp No. after the verification of your transaction details.
        </p>
        <p style="font-size: 18px;">
          Please stay tuned for further updates.
        </p>
        <p style="font-size: 18px;">Best regards,</p>
        <p style="font-size: 18px; font-weight: bold;">Organizing Committee</p>
        <p style="font-size: 18px; font-weight: bold;"> APTICON 2024</p>
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
        to: ["regn@apticon2024.com"],
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
        subject: `APTICON 2024, Thank you for registering`,
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
      newUser.paymentMethod,
      newUser.designation,
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
