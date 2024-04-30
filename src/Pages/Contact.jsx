import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
	const formRef = useRef();
	const [formData, setFormData] = useState({
		from_name: '',
		from_email: '',
		subject: '',
		message: '',
		to_name: 'Joshua Barua-Fowle',
	});

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const result = await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_PUBLIC_KEY);
			setFormData({
				from_name: '',
				from_email: '',
				subject: '',
				message: '',
				to_name: 'Joshua Barua-Fowle',
			});
		} catch (error) {
			console.error('Failed to send form:', error);
		}
	};

	return (
		<>
			<h1 className="dark-text dark:light-text text-2xl xl:leading-tight page-title ">Contact</h1>
			<main className="flex w-full flex-col items-center justify-center">
				<section className="flex w-[60%]">
					<form
						onSubmit={handleSubmit}
						ref={formRef}
						className="text-dark-color dark:text-light-color items-left flex  h-[700px] w-[550px] flex-col justify-center gap-2 rounded-md">
						{/* Name */}
						<label htmlFor="email-name" className="dark-text  dark:light-text block text-lg font-medium">
							Name
						</label>
						<div className="relative mb-2">
							<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
								<svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
									<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
								</svg>
							</div>
							<input
								type="text"
								id="email-name"
								name="from_name"
								required
								value={formData.from_name}
								onChange={handleInputChange}
								className="focus:dark:text-light-color block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-lg text-gray-900 focus:border-slate-100  focus:ring-slate-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-slate-100 dark:focus:ring-slate-100"
								placeholder="John Smith"
							/>
						</div>

						{/* EMAIL */}
						<label htmlFor="email-address" className="dark-text dark:light-text block text-lg font-medium">
							Email
						</label>
						<div className="relative mb-2">
							<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
								<svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
									<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
									<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
								</svg>
							</div>
							<input
								type="text"
								id="email-address"
								name="from_email"
								required
								value={formData.from_email}
								onChange={handleInputChange}
								className="focus:dark:text-light-color block w-full rounded-lg border border-gray-300  bg-gray-50 p-2.5 ps-10 text-lg  text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
								placeholder="john@smith.com"
							/>
						</div>

						{/* Subject */}
						<label htmlFor="email-subject" className="dark-text dark:light-text block text-lg font-medium">
							Subject
						</label>
						<div className="relative mb-2">
							<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
								<svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h14M1 6h14M1 11h7" />
								</svg>
							</div>
							<input
								type="text"
								id="email-subject"
								name="subject"
								required
								value={formData.subject}
								onChange={handleInputChange}
								className="focus:dark:text-light-color block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-lg text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 "
								placeholder="Lets work together!"
							/>
						</div>

						{/* Message */}
						<div>
							<label htmlFor="message" className="dark-text dark:light-text mb-2 block text-lg font-medium">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								required
								value={formData.message}
								onChange={handleInputChange}
								className="focus:dark:text-light-color block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
								placeholder="Write your thoughts here..."></textarea>
						</div>
						<input type="hidden" name="to_name" value="Joshua Barua-Fowle" />

						<button type="submit" className="h-[40px] w-[100%] rounded-md bg-slate-200 p-3 dark:bg-slate-700">
							Send
						</button>
					</form>
				</section>
			</main>
		</>
	);
};

export default ContactForm;
