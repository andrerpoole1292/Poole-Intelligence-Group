// Contact form API endpoint for Vercel serverless functions
// Receives POST from the contact form, sends email via Resend to hello@pooleintelligencegroup.com
import { Resend } from "resend";

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, company, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const timestamp = new Date().toISOString();

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return res.status(500).json({
        error: "Email service not configured. Please contact us at hello@pooleintelligencegroup.com.",
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const companyLine = company ? `\nCompany: ${company}` : "";
    const serviceLine = service ? `\nService Interest: ${service}` : "";

    const { error } = await resend.emails.send({
      from: "Poole Intelligence Group <hello@pooleintelligencegroup.com>",
      to: ["hello@pooleintelligencegroup.com"],
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` (${company})` : ""}`,
      text: [
        `New contact form submission (${timestamp})`,
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        companyLine,
        serviceLine,
        "",
        `Message:`,
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <h2 style="color: #1B2A4A;">New Contact Form Submission</h2>
        <p style="color: #666; font-size: 12px;">${timestamp}</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px; margin: 16px 0;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #1B2A4A;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #1B2A4A;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #1B2A4A;">Company</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(company || "N/A")}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #1B2A4A;">Service Interest</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(service || "Not specified")}</td></tr>
        </table>
        <h3 style="color: #1B2A4A;">Message</h3>
        <blockquote style="background: #f5f7fa; padding: 16px; border-radius: 8px; border-left: 4px solid #1B2A4A; margin: 0; color: #333;">${escapeHtml(message).replace(/\n/g, "<br>")}</blockquote>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
        <p style="color: #999; font-size: 12px;">Sent via pooleintelligencegroup.com contact form &mdash; reply to this email to respond directly to <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({
        error: "Failed to send message. Please email us directly at hello@pooleintelligencegroup.com.",
      });
    }

    console.log(
      JSON.stringify({
        type: "lead",
        timestamp,
        source: "contact_form",
        name,
        email,
        company,
        service,
        status: "email_sent",
      })
    );

    return res.status(200).json({
      success: true,
      message:
        "Thank you! We've received your message and will be in touch within 1 business day. In the meantime, feel free to book a free discovery call directly.",
      bookingLink: "https://calendly.com/pooleintelligence/discovery-call",
    });
  } catch (error) {
    console.error("[Lead Error]", error);
    return res.status(500).json({
      error: "Something went wrong. Please try again or email us directly at hello@pooleintelligencegroup.com.",
    });
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}