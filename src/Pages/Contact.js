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
				<form onSubmit={handleSubmit} className="flex  flex-col justify-center items-left gap-2 w-[50%] h-[550px] min-w-[280px] max-w-[500px] mr-2 rounded-md">
					{/* Name */}
					<label for="email-name" class="block  text-sm font-medium text-gray-900 dark:text-white">
						Name
					</label>
					<div class="relative mb-2">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
							<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
							</svg>
						</div>
						<input
							type="text"
							id="email-name"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-100 dark:focus:border-slate-100"
							placeholder="John Smith"
						/>
					</div>
					{/* EMAIL */}
					<label for="email-address" class="block text-sm font-medium text-gray-900 dark:text-white">
						Email
					</label>
					<div className="relative mb-2">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
							<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
								<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
								<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
							</svg>
						</div>
						<input
							type="text"
							id="email-address"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="john@smith.com"
						/>
					</div>
					{/* Subject */}
					<label for="email-subject" class="block text-sm font-medium text-gray-900 dark:text-white">
						Subject
					</label>
					<div className="relative mb-2">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
							<svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h14M1 6h14M1 11h7" />
							</svg>
						</div>
						<input
							type="text"
							id="email-subject"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="name@flowbite.com"
						/>
					</div>
					<div>
						<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Message
						</label>
						<textarea
							id="message"
							rows="4"
							class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Write your thoughts here..."></textarea>
					</div>
					<button type="submit" className="h-[40px] w-[100%] rounded-md p-3 bg-gray-700 ">
						Send
					</button>
				</form>
			</section>
		</main>
	);
};

export default ContactForm;
