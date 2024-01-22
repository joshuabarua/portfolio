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
			console.log('Form sent successfully:', result.text);

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
		<main className="h-screen w-[100%] flex justify-center items-end flex-col ">
			<section className=" w-[80%] mb-[10%] flex justify-center items-center flex-col">
				<h1 className="dark-text dark:light-text text-3xl xl:leading-tight font-bold">Contact</h1>
				<form
					onSubmit={handleSubmit}
					ref={formRef}
					className="flex flex-col text-dark-color dark:text-light-color  justify-center items-left gap-2 h-[700px] w-[550px] rounded-md">
					{/* Name */}
					<label htmlFor="email-name" className="block  text-lg font-medium dark-text dark:light-text">
						Name
					</label>
					<div className="relative mb-2">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
							<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
							</svg>
						</div>
						<input
							type="text"
							id="email-name"
							name="from_name"
							value={formData.from_name}
							onChange={handleInputChange}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-100 dark:focus:border-slate-100 focus:dark:text-light-color"
							placeholder="John Smith"
						/>
					</div>
					{/* EMAIL */}
					<label htmlFor="email-address" className="block text-lg font-medium dark-text dark:light-text">
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
							name="from_email"
							value={formData.from_email}
							onChange={handleInputChange}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg  block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:dark:text-light-color"
							placeholder="john@smith.com"
						/>
					</div>
					{/* Subject */}
					<label htmlFor="email-subject" className="block text-lg font-medium dark-text dark:light-text">
						Subject
					</label>
					<div className="relative mb-2">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
							<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h14M1 6h14M1 11h7" />
							</svg>
						</div>
						<input
							type="text"
							id="email-subject"
							name="subject"
							value={formData.subject}
							onChange={handleInputChange}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:dark:text-light-color block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
							placeholder="Lets work together!"
						/>
					</div>
					<div>
						<label htmlFor="message" className="block mb-2 text-lg font-medium dark-text dark:light-text">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows="4"
							value={formData.message}
							onChange={handleInputChange}
							className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:dark:text-light-color dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
							placeholder="Write your thoughts here..."></textarea>
					</div>
					<input type="hidden" name="to_name" value="Joshua Barua-Fowle" />

					<button type="submit" className="h-[40px] w-[100%] rounded-md p-3 bg-slate-200 dark:bg-slate-700">
						Send
					</button>
				</form>
			</section>
		</main>
	);
};

export default ContactForm;
