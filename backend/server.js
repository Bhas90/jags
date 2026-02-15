const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const requestIp = require("request-ip");
const axios = require("axios");

const app = express();

/* --------------------------------------------------
   ✅ CORS SETUP — Restrict to trusted origins only
-------------------------------------------------- */
const allowedOrigins = [
  "https://jagsonspride.in",
  "https://www.jagsonspride.in",
  "http://localhost:5173", // keep for local dev
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

app.use(bodyParser.json());
app.use(requestIp.mw());

/* --------------------------------------------------
   ✅ Health Check
-------------------------------------------------- */
app.get("/home", (req, res) => {
  res.status(200).json("Backend working");
});

/* --------------------------------------------------
   ✅ Gmail Transporter (Use App Password)
-------------------------------------------------- */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "info@jagsonspride.in",
    pass: "xuzk jcuo muly fzmt", // Gmail App password
  },
});

/* --------------------------------------------------
   ✅ Auto Reply Email
-------------------------------------------------- */
const sendAutoReply = async (email, name) => {
  const mailOptions = {
    from: `"Jagsons Pride" <info@jagsonspride.in>`,
    to: email,
    subject: "Thank You for Your Interest!",
    html: `
      <div style="font-family:Arial;max-width:600px;margin:auto;border:1px solid #ddd;border-radius:8px;">
        <div style="background:#047bc5;color:#fff;padding:15px;text-align:center;">
          <h2 style="margin:0;">Thank You for Contacting Us!</h2>
        </div>
        <div style="padding:20px;">
          <p>Hi ${name},</p>
          <p>Thank you for your interest in <b>Jagsons Pride</b>. Our team will get in touch soon.</p>
          <p>For quick assistance, call <a href="tel:+919392925831">+91 93929 25831</a>.</p>
        </div>
        <div style="background:#f5f5f5;padding:10px;text-align:center;">
          Warm regards,<br/>Team Jagsons Projects
        </div>
      </div>`,
  };
  return transporter.sendMail(mailOptions);
};

/* --------------------------------------------------
   ✅ Admin Notification
-------------------------------------------------- */
const notifyAdmin = async (lead) => {
  const mailOptions = {
    from: `"Jagsons Pride" <info@jagsonsprojects.com>`,
    to: "info@jagsonspride.in",
    subject: "New Website Lead - Jagsons Pride",
    html: `
      <div style="font-family:Arial;max-width:600px;margin:auto;border:1px solid #ddd;border-radius:8px;">
        <div style="background:#047bc5;color:#fff;padding:15px;text-align:center;">
          <h2 style="margin:0;">New Inquiry Received</h2>
        </div>
        <div style="padding:20px;">
          <p><b>Name:</b> ${lead.name}</p>
          <p><b>Email:</b> ${lead.email}</p>
          <p><b>Mobile:</b> ${lead.mobile}</p>
          <p><b>IP Address:</b> ${lead.ip}</p>
        </div>
      </div>`,
  };
  return transporter.sendMail(mailOptions);
};

/* --------------------------------------------------
   ✅ TeleCRM Integration
-------------------------------------------------- */
const pushToTeleCRM = async (lead) => {
  const telecrmUrl =
    "https://api.telecrm.in/enterprise/6979a73f15227bfb0eb37ef8/autoupdatelead";
  const telecrmAuth =
    "Bearer 2ed19ec3-8711-4f95-9c6e-aef77e3e8fb31769673527181:83b1a6e9-48eb-4c84-8465-3c1834410cf9";

  const payload = {
    fields: {
      name: lead.name,
      phone: lead.mobile,
      email: lead.email,
      ip_address: lead.ip,
    },
    actions: [
      { type: "SYSTEM_NOTE", text: "Lead Source: Jagsons Pride Website" },
    ],
  };

  try {
    const response = await axios.post(telecrmUrl, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: telecrmAuth,
      },
    });
    console.log("✅ TeleCRM Response:", response.data);
  } catch (err) {
    console.error("❌ TeleCRM Error:", err.response?.data || err.message);
  }
};

/* --------------------------------------------------
   ✅ Main Lead Route
-------------------------------------------------- */
app.post("/home/send-email", async (req, res) => {
  const { name, email, mobile } = req.body;
  const ip = req.clientIp || "Unknown";

  if (!name || !email || !mobile) {
    return res
      .status(400)
      .json({ error: "Name, email, and mobile are required." });
  }

  try {
    console.log("📩 New lead received:", { name, email, mobile, ip });
    await sendAutoReply(email, name);
    await notifyAdmin({ name, email, mobile, ip });
    await pushToTeleCRM({ name, email, mobile, ip });

    res.status(200).json({ message: "Lead submitted successfully!" });
  } catch (err) {
    console.error("❌ FULL ERROR:", err);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: err.message });
  }
});

