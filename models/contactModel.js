import mongoose from "mongoose";

const ContactSchema = mongoose.Schema(
	{
		Name: {
			type: String,
			required: true,
		},
		Email: {
			type: String,
			required: true,
		},
		PhoneNum: {
			type: String,
			required: true,
		},
		Message: {
			type: String,
			required: true,
		}
	},
	{
		timestamps: true,
	}
);

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;
