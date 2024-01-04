import React, {useState} from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.send(
				'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
				'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
				e.target,
				'YOUR_USER_ID' // Replace with your EmailJS user ID
			)
			.then(
				(result) => {
					console.log('Email sent successfully:', result.text);
					// Reset form after successful submission
					setFormData({
						name: '',
						email: '',
						message: '',
					});
				},
				(error) => {
					console.error('Error sending email:', error.text);
				}
			);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
			<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
			<textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required></textarea>
			<button type="submit">Send</button>
		</form>
	);
};

export default ContactForm;
