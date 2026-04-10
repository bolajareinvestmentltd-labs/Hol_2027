import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, message, formType } = body;

    const firstName = fullName ? fullName.split(' ')[0] : 'Supporter';
    const adminEmail = process.env.EMAIL_USER;

    // --- 1. USER AUTO-REPLY LOGIC ---
    let userSubject = "Message Received";
    let userMessage = "Thank you for reaching out to the campaign.";

    if (formType === 'empowerment') {
      userSubject = "Your Empowerment Registration is Confirmed 🗳️";
      userMessage = "Thank you for registering for the Kwara Empowerment Initiative. Your details have been successfully captured in our system. We are committed to uplifting the grassroots, and you will be notified immediately when the next phase begins.";
    } else if (formType === 'volunteer') {
      userSubject = `Welcome to the Movement, ${firstName} 🇳🇬`;
      userMessage = "We are absolutely thrilled to have you join as a grassroots ambassador. The Masterplan requires dedicated people like you to become a reality. A campaign coordinator from your local ward will be in touch shortly with your next steps.";
    } else {
      userSubject = "Thank you for contacting HOL 2027";
      userMessage = "We have received your message and suggestions. Our strategy team reads every submission and will get back to you shortly.";
    }

    const userHtmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0A192F; padding: 30px 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 28px; letter-spacing: 2px;">HOL <span style="color: #D4AF37;">2027</span></h1>
          <p style="color: #94a3b8; margin-top: 5px; font-size: 14px;">Legacy of Service, Future for Kwara</p>
        </div>
        <div style="padding: 40px 30px; background-color: #ffffff;">
          <p style="font-size: 18px; color: #1e293b; font-weight: bold;">Dear ${firstName},</p>
          <p style="font-size: 16px; color: #475569; line-height: 1.6;">${userMessage}</p>
          <div style="margin-top: 40px; border-top: 2px solid #f1f5f9; padding-top: 20px;">
            <p style="font-size: 16px; color: #1e293b; margin-bottom: 5px;">In service,</p>
            <p style="font-size: 18px; font-weight: bold; color: #0A192F; margin: 0;">Alhaji Hakeem Lawal</p>
            <p style="font-size: 14px; color: #64748b; margin-top: 2px;">Gubernatorial Candidate, Kwara 2027</p>
          </div>
        </div>
      </div>
    `;

    // --- 2. ADMIN DATA CAPTURE LOGIC ---
    const adminSubject = `🚨 New ${formType.toUpperCase()} Submission: ${fullName}`;
    const adminText = `
      NEW PORTAL SUBMISSION
      =====================
      Form Type: ${formType.toUpperCase()}
      Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      
      Message/Suggestion: 
      ${message || "No message provided."}
    `;

    // --- 3. SENDING THE EMAILS ---
    if (adminEmail && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: adminEmail, pass: process.env.EMAIL_PASS },
      });

      // Send both emails simultaneously
      await Promise.all([
        transporter.sendMail({ from: `"HOL 2027 Campaign" <${adminEmail}>`, to: email, subject: userSubject, html: userHtmlTemplate }),
        transporter.sendMail({ from: `"HOL 2027 System" <${adminEmail}>`, to: adminEmail, subject: adminSubject, text: adminText })
      ]);
      console.log(`✅ Success: Processed ${formType} submission for ${email}`);
    } else {
      console.log(`⚠️ Simulated mode. Would have sent auto-reply to ${email} and data to admin.`);
    }

    return NextResponse.json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
