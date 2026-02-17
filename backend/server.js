const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const requestIp = require("request-ip");
const axios = require("axios");

const app = express();
const PORT = 5000;

/* ==================================================
   ✅ CORS (SAME AS REFERENCE)
================================================== */
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(requestIp.mw());

/* ==================================================
   ✅ HEALTH CHECK
================================================== */
app.get("/home", (req, res) => {
  res.status(200).json("Jagsons Pride backend working");
});

/* ==================================================
   ✅ GMAIL TRANSPORTER
================================================== */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "info@jagsonspride.in",
    pass: "xuzk jcuo muly fzmt", // Gmail App Password
  },
});

/* ==================================================
   ✅ AUTO REPLY (USER)
================================================== */
const sendAutoReply = async (email, name) => {
  return transporter.sendMail({
    from: `"Jagsons Pride" <info@jagsonspride.in>`,
    to: email,
    subject: "Thank You for Your Interest!",
    html: `
      <div style="font-family:Arial;max-width:600px;margin:auto;border:1px solid #ddd;border-radius:8px;">
        <div style="background:#047bc5;color:#fff;padding:15px;text-align:center;">
          <h2>Thank You for Contacting Us!</h2>
        </div>
        <div style="padding:20px;">
          <p>Hi ${name},</p>
          <p>Thank you for your interest in <b>Jagsons Pride</b>.</p>
          <p>Our team will get in touch with you shortly.</p>
          <p>If you have any questions, call us at 📞 <a href="tel:+918886661686">+91 888 666 1686</a></p>
        </div>
        <div style="background:#f5f5f5;padding:10px;text-align:center;">
          Warm regards,<br/>Team Jagsons Projects
        </div>
      </div>
    `,
  });
};

/* ==================================================
   ✅ ADMIN NOTIFICATION
================================================== */
const notifyAdmin = async (lead) => {
  return transporter.sendMail({
    from: `"Jagsons Pride" <info@jagsonspride.in>`,
    to: "info@jagsonspride.in",
    subject: "New Website Lead - Jagsons Pride",
    html: `
      <table style="width:100%;border-collapse:collapse;font-family:Arial;">
        <tr><td><b>Name</b></td><td>${lead.name}</td></tr>
        <tr><td><b>Email</b></td><td>${lead.email}</td></tr>
        <tr><td><b>Mobile</b></td><td>${lead.mobile}</td></tr>
        <tr><td><b>IP</b></td><td>${lead.ip}</td></tr>
      </table>
    `,
  });
};

/* ==================================================
   ✅ TELECRM INTEGRATION (SAME STYLE)
================================================== */
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
      {
        type: "SYSTEM_NOTE",
        text: "Lead Source: Jagsons Pride Website",
      },
    ],
  };

  const response = await axios.post(telecrmUrl, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: telecrmAuth,
    },
  });

  return response.data;
};

/* ==================================================
   ✅ MAIN API ROUTE
================================================== */
app.post("/home/send-email", async (req, res) => {
  const { name, email, mobile } = req.body;
  const ip = req.clientIp || "Unknown";

  console.log("📩 Incoming Lead:", { name, email, mobile, ip });

  if (!name || !email || !mobile) {
    return res.status(400).json({
      error: "Name, email, and mobile are required.",
    });
  }

  try {
    await sendAutoReply(email, name);
    await notifyAdmin({ name, email, mobile, ip });
    await pushToTeleCRM({ name, email, mobile, ip });

    res.status(200).json({
      message: "Lead submitted successfully",
    });
  } catch (error) {
    console.error("❌ ERROR:", error);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
});

/* ==================================================
   ✅ START SERVER
================================================== */
app.listen(PORT, () => {
  console.log(`🚀 Jagsons server running on http://localhost:${PORT}`);
});
