import Button from '../reusable/Button';
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
		console.log("updated");
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.send(
				"service_3ql33we",
				"template_0id40pl",
				{
					from_name: form.name,
					to_name: "Kolby",
					from_email: form.email,
					to_email: "kolbywallin@gmail.com",
					subject: form.subject,
					message: form.message,
				},
				"n1B0enxCb91h9bDa3"
			)
			.then(
				() => {
					alert("Thank you. I will get back to you as soon as possible.");

					setForm({
						name: "",
						email: "",
						subject: "",
						message: "",
					});
				},
				(error) => {

					console.log(error);
					alert("Something went wrong.");
				}
			);
	};

	return (
		<div className="w-full lg-w-1/2">
			<div className="leading-loose">
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="max-w-xl m-4 p-6 sm-p-10 bg-secondary-light dark-bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark-text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark-text-primary-light mb-2"
							htmlFor="name"
						>
							Name
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark-border-primary-dark border-opacity-50 text-primary-dark dark-text-secondary-light bg-ternary-light dark-bg-ternary-dark rounded-md shadow-sm text-md"
							id="name"
							name="name"
							onChange={handleChange}
							cols="14"
							placeholder="Your Name"
							rows="1"
							aria-label="name"
						></textarea>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark-text-primary-light mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark-border-primary-dark border-opacity-50 text-primary-dark dark-text-secondary-light bg-ternary-light dark-bg-ternary-dark rounded-md shadow-sm text-md"
							id="email"
							name="email"
							onChange={handleChange}
							cols="14"
							placeholder="Your Email"
							rows="1"
							aria-label="email"
						></textarea>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark-text-primary-light mb-2"
							htmlFor="subject"
						>
							Subject
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark-border-primary-dark border-opacity-50 text-primary-dark dark-text-secondary-light bg-ternary-light dark-bg-ternary-dark rounded-md shadow-sm text-md"
							id="subject"
							name="subject"
							onChange={handleChange}
							cols="14"
							placeholder="Subject"
							rows="1"
							aria-label="subject"
						></textarea>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark-text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark-border-primary-dark border-opacity-50 text-primary-dark dark-text-secondary-light bg-ternary-light dark-bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							onChange={handleChange}
							cols="14"
							placeholder="What do you want to say?"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover-bg-indigo-600 focus-ring-1 focus-ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Send Message"
							type="submit"
							aria-label="Send Message"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
