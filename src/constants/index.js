// Import images
import statefarm from '../images/company/statefarm.jpg';
import siu from '../images/company/siu.jpg'
import musicStreamer from '../images/musicStreamer.jpg'
import rockPaperScissors from '../images/rockPaperScissors.jpg';
import euplora from '../images/euplora.jpg';
import iris from '../images/Iris.JPG';

export const aboutMeData = [
	{
		id: 1,
		bio: 'I am a senior at Southern Illinois University pursuing a major in computer science. I am very grateful to have multiple years of experience working as a software engineering intern at a fortune 50 company, State Farm. While working at State Farm I have vastly improved my technical skills, personal/professional skills, and have learned a number of new technologies, including AWS. I am a dedicated worker and a passionate learner and look forward to the challenges and experiences I have ahead of me.',
	},
	{
		id: 2,
		bio: 'In my free time I love hanging out with friends, playing video games, and trying new hobbies. Some of these hobbies include weight lifting, soccer, golf, disc golf, rock climbing, and boxing!',
	},
];

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "experience",
		title: "Experience",
	},
	{
		id: "projects",
		title: "Projects"
	},
	{
		id: "contact",
		title: "Contact",
	},
];

export const experiences = [
	{
		title: "Software Engineer Intern",
		company_name: "State Farm",
		icon: statefarm,
		iconBg: "#383E56",
		date: "May 2021 - August 2021",
		points: [
			"• Developing a self-service Gitlab application using the MERN stack.",
			"• Collaborating with product managers, developers, and other interns to create the application.",
			"• Participating in code reviews, plannings, and stand-ups as part of the AGILE methodology.",
		],
	},
	{
		title: "BS in Computer Science",
		company_name: "Southern Illinois University - Carbondale",
		icon: siu,
		iconBg: "#E6DEDD",
		date: "August 2021 - Present",
		points: [
			"Course Work:",
			"• Programming Distributed Applications",
			"• Introduction to Design and Analysis of Algorithms",
			"• Linux/Unix Programming",
			"• Calculus 2",
		],
	},
	{
		title: "Software Engineer Intern",
		company_name: "State Farm",
		icon: statefarm,
		iconBg: "#383E56",
		date: "May 2022 - August 2023",
		points: [
			"• Developing and maintaining web applications using a Vue.js front-end and Django framework back-end.",
			"• Collaborating with development team to create and deliver a reliable, high-quality geospatial mapping product.",
			"• Implementing responsive features and pushing changes fixing user-submitted tickets.",
			"• Utilizing Terraform to create infrastructure for an applications API using AWS resources.",
			"• Achieved my AWS Certified Cloud Practitioner certification."
		],
	},
	{
		title: "Software Engineer Intern",
		company_name: "State Farm",
		icon: statefarm,
		iconBg: "#383E56",
		date: "May 2024 - Present",
		points: [
			"• Writing high quality frontend solutions in typescript with an Angular framework.",
			"• Created a health check API that returns the health status of my teams application using AWS Lambda and API Gateway.",
			"• Developed a winning hackathon project that could help save over $30,000 per year."
		],
	},
];

export const projectsData = [
	{
		id: 1,
		title: 'Ecommerce Website',
		description: "This is a basic ecommerce website that I developed with two of my brothers. The UI was created with React.js and the products and images were hosted remotely and pulled from an S3 bucket. " +
			"The website is deployed using Route53 and cloudfront AWS resources. This project was my introduction to using AWS. The website is fully operational and has two products currently listed for purchase.",
		img: euplora,
	},
	{
		id: 2,
		title: 'Distributed Music Streamer',
		description: "This is a multi-threaded client/server music streaming application. " +
			"These clients are all connected through the server allowing for messaging between clients. This application also has mp3 file uploading functionality giving clients the ability " +
			"to upload any song/sound clip they would like. All clients are able to access any song uploaded to the server.",
		img: musicStreamer,
	},
	{
		id: 3,
		title: 'Iris Classifier',
		description: "This is a machine learning project that aims to classify the family of iris given instances with 4 features. The features being petal length, petal width, sepal length, and sepal width. " +
		"I used four different types of classifiers in this project to try and achieve the best results, I used: Perceptron, kNN, Decision Tree, and SVM. The results showed that ",
		img: iris,
	},
	{
		id: 4,
		title: 'Rock Paper Scissors App',
		description: "This is a basic android application that I developed along with two of my brothers. This game is a basic 'Rock Paper Scissors' style game but it has two different modes. " +
			"One game mode is 'Easy' where the computer picks a random choice of the three options. In the 'Medium' game mode the computer will analyze your past guesses to predict your choice. " +
			"The game also has fun animations of the chosen objects 'battling'.",
		img: rockPaperScissors,
	},
];