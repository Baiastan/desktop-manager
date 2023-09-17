import express from "express";
import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import { sendMessage } from "../controllers/sendNotifications.js";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);
const router = express.Router();

// Middleware function to attach the Twilio client to the request object

const twilioClient = (req, res, next) => {
  req.twilioClient = client;
  next();
};

router.post("/send-sms", twilioClient, sendMessage);

export default router;
