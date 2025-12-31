import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, country, message } = body;

    // Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || 587),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1) Mail to you
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER,
      subject: `New Assessment Lead – ${name || "Unknown"}`,
      html: `
        <h2>New Assessment Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Country:</strong> ${country}</p>
        <p><strong>Message:</strong><br/>${message || "-"} </p>
      `,
    });

    // 2) Auto-reply to user
    if (email) {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "We received your assessment request – VJC Overseas",
        html: `
          <p>Hi ${name || "there"},</p>
          <p>Thank you for reaching out to <strong>VJC Overseas</strong>. We have received your details and one of our Germany / PR experts will contact you shortly.</p>
          <p>If this is urgent, you can call us on <strong>+91 91604 49000</strong>.</p>
          <p>Regards,<br/>VJC Overseas Team</p>
        `,
      });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Email error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
