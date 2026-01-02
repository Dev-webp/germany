import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, experience, degree } = body;

    const headers = request.headers;
    const referer = headers.get("referer") || "Direct visit";

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || 587),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1) EMAIL TO YOU (Admin)
    await transporter.sendMail({
      from: `"VJC Overseas" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_USER,
      subject: `🎯 NEW Germany Lead - ${name}`,
      html: `
        <h2 style="color: #f97316;">New Germany Assessment Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> <strong>${phone}</strong></p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Education:</strong> ${degree}</p>
        <p><strong>Landing Page:</strong> <a href="${referer}">${referer}</a></p>
        <div style="background: #fef3c7; padding: 15px; border-left: 5px solid #f59e0b; margin: 20px 0;">
          <p><strong>📞 Call Immediately: +91 91604 49000</strong></p>
        </div>
        <hr><p style="font-size: 12px; color: #666;">VJC Overseas - Bangalore</p>
      `,
    });

    // 2) THANK YOU AUTO-REPLY TO USER
    await transporter.sendMail({
      from: `"VJC Overseas" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: `✅ Thank You ${name} - Germany Assessment Received`,
      html: `
        <h2 style="color: #f97316;">Thank You ${name}!</h2>
        <p>We've received your Germany Opportunity Card assessment request.</p>
        <p>One of our immigration experts will contact you within <strong>24 hours</strong>.</p>
        
        <div style="background: #dbeafe; padding: 20px; border-left: 5px solid #3b82f6; margin: 20px 0;">
          <p><strong>📞 Urgent? Call Now:</strong></p>
          <p style="font-size: 24px; margin: 10px 0; color: #1e40af;"><strong>+91 91604 49000</strong></p>
        </div>
        
        <p style="font-size: 14px; color: #666;">
          Best regards,<br>
          VJC Overseas Team<br>
          <a href="https://vjcoverseas.com">vjcoverseas.com</a> | Hyderabad | Bangalore | USA
        </p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
