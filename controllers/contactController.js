import Contact from "../models/contactModel.js";
import asyncHandler from "express-async-handler";

const createContact = async (req, res) => {
	const { Name, Email, PhoneNum, Message } = req.body;
	const contact = new Contact({
		Name,
		Email,
		PhoneNum,
		Message,
	});
	try {
		const createdContact = await contact.save();
		res.status(200).json(createdContact);
	} catch (error) {
		res.status(500).json({ message: "Failed to send contact us" });
	}
};

export default createContact;