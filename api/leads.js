// Contact form API endpoint for Vercel serverless functions
// Receives POST from the contact form, stores the submission, and returns success

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
    const { name, email, company, service, message, source } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    // Log the submission (visible in Vercel logs)
    const timestamp = new Date().toISOString();
    console.log(JSON.stringify({
      type: "lead",
      timestamp,
      source: source || "contact_form",
      name,
      email,
      company: company || "",
      service: service || "",
      message: message.substring(0, 500),
    }));

    // Return success with a message that includes the booking link
    return res.status(200).json({
      success: true,
      message: "Thank you for reaching out! We'll respond within 1 business day. In the meantime, feel free to book a free discovery call directly.",
      bookingLink: "https://calendly.com/pooleintelligence/discovery-call",
    });
  } catch (error) {
    console.error("[Lead Error]", error);
    return res.status(500).json({ error: "Something went wrong. Please try again or email us directly at hello@pooleintelligencegroup.com." });
  }
}