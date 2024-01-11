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
		<main className="h-screen w-[100%] flex justify-end items-end flex-col ">
			<section className=" w-[60%] pb-[100px]">
				<h1 className="text-3xl  pb-1  text-dark-heading dark:text-light-heading md:text-2xl xl:text-4xl xl:leading-tight font-bold">Contact</h1>
				<form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2 w-[50%] h-[550px] rounded-md">
					<input type="text" className="h-[40px] w-[80%] rounded-lg pl-3" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
					<input className="h-[40px] w-[80%] rounded-md p-3" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
					<input className="h-[40px] w-[80%] rounded-md p-3" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
					<textarea className="h-[300px] w-[80%] rounded-md p-3" name="message" value={formData.message} onChange={handleChange} placeholder="Message" required></textarea>
					<button type="submit" className="h-[40px] w-[80%] rounded-md p-3 bg-blue-400">
						Send
					</button>
				</form>
			</section>
		</main>
	);
};

export default ContactForm;
