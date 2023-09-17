import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export const sendMessage = async (req, res) => {
  try {
    const { phoneNumber, message } = req.body;
    const client = req.twilioClient;

    const result = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });

    res.status(200).json({ success: "Message was sent!", data: result.sid });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
