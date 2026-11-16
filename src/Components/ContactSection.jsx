import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { socialMediaUrl } from "../data/Details.js";

const TO_NAME = "Joshua Barua-Fowle";

const emptyForm = {
	from_name: "",
	from_email: "",
	subject: "",
	message: "",
};

const STATUS_TEXT = {
	sending: "Sending…",
	sent: "Thanks, your message is on its way. I'll get back to you soon.",
	error: "Something went wrong. Please try again, or reach me on LinkedIn.",
};

// Shared by the desktop and mobile contact pages; layout adapts in CSS.
export default function ContactSection() {
	const formRef = useRef();
	const [formData, setFormData] = useState(emptyForm);
	// idle | sending | sent | error
	const [status, setStatus] = useState("idle");
	const { linkdein, github } = socialMediaUrl;

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (status === "sent" || status === "error") setStatus("idle");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("sending");
		try {
			await emailjs.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				formRef.current,
				process.env.REACT_APP_PUBLIC_KEY
			);
			setFormData(emptyForm);
			setStatus("sent");
		} catch (error) {
			console.error("Failed to send form:", error);
			setStatus("error");
		}
	};

	return (
		<section className="contact">
			<div className="contact_intro personalDetails">
				<h2 className="contact_heading">
					Let's build
					<br />
					something.
				</h2>
				<p className="contact_lede">
					Have a project in mind, a role to talk about, or just want to say
					hello? Send me a message.
				</p>
				<div className="contact_links">
					<a href={linkdein} target="_blank" rel="noreferrer noopener">
						LinkedIn ↗
					</a>
					<a href={github} target="_blank" rel="noreferrer noopener">
						GitHub ↗
					</a>
				</div>
			</div>

			<form className="contact_form" onSubmit={handleSubmit} ref={formRef}>
				<div className="contact_row">
					<div className="contact_field">
						<label htmlFor="contact-name">Name</label>
						<input
							type="text"
							id="contact-name"
							name="from_name"
							autoComplete="name"
							required
							value={formData.from_name}
							onChange={handleInputChange}
							placeholder="Your name"
						/>
					</div>
					<div className="contact_field">
						<label htmlFor="contact-email">Email</label>
						<input
							type="email"
							id="contact-email"
							name="from_email"
							autoComplete="email"
							required
							value={formData.from_email}
							onChange={handleInputChange}
							placeholder="you@example.com"
						/>
					</div>
				</div>

				<div className="contact_field">
					<label htmlFor="contact-subject">Subject</label>
					<input
						type="text"
						id="contact-subject"
						name="subject"
						required
						value={formData.subject}
						onChange={handleInputChange}
						placeholder="Let's work together"
					/>
				</div>

				<div className="contact_field">
					<label htmlFor="contact-message">Message</label>
					<textarea
						id="contact-message"
						name="message"
						rows="5"
						required
						value={formData.message}
						onChange={handleInputChange}
						placeholder="Tell me a bit about it…"
					/>
				</div>

				<input type="hidden" name="to_name" value={TO_NAME} />

				<div className="contact_actions">
					<button
						type="submit"
						className="contact_submit"
						disabled={status === "sending"}>
						{status === "sending" ? "SENDING" : "SEND MESSAGE"}
						<span aria-hidden="true">→</span>
					</button>
					<p className={`contact_status is-${status}`} role="status" aria-live="polite">
						{STATUS_TEXT[status] || ""}
					</p>
				</div>
			</form>
		</section>
	);
}
