import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import sgMail from "@sendgrid/mail";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, propertyType, projectType, message, referral } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required." });
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      console.error("SENDGRID_API_KEY not set");
      return res.status(500).json({ error: "Email service not configured." });
    }

    sgMail.setApiKey(apiKey);

    const msg = {
      to: "ben@l1buildersny.com",
      from: "ben@l1buildersny.com",
      replyTo: email,
      subject: `New Lead: ${name} — ${projectType || "General Inquiry"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone || "—"}</td></tr>
          <tr><td><strong>Property Type</strong></td><td>${propertyType || "—"}</td></tr>
          <tr><td><strong>Project Type</strong></td><td>${projectType || "—"}</td></tr>
          <tr><td><strong>Referral</strong></td><td>${referral || "—"}</td></tr>
          <tr><td><strong>Message</strong></td><td>${message || "—"}</td></tr>
        </table>
      `,
    };

    try {
      await sgMail.send(msg);
      return res.json({ success: true });
    } catch (err) {
      console.error("SendGrid error:", err);
      return res.status(500).json({ error: "Failed to send email." });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
