// Import images
import statefarm from '../images/company/statefarm.jpg';
import siu from '../images/company/siu.jpg'
import WebImage1 from '../images/web-project-1.jpg';
import musicStreamer from '../images/musicStreamer.jpg'
import rockPaperScissors from '../images/rockPaperScissors.jpg';
import euplora from '../images/euplora.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const aboutMeData = [
	{
		id: 1,
		bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	},
	{
		id: 2,
		bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
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
		company_name: "StateFarm",
		icon: statefarm,
		iconBg: "#383E56",
		date: "June 2021 - August 2021",
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
		company_name: "StateFarm",
		icon: statefarm,
		iconBg: "#383E56",
		date: "May 2022 - Present",
		points: [
			"• Developing and maintaining web applications using a Vue.js front-end and Django framework back-end.",
			"• Collaborating with development team to create and deliver a reliable, high-quality product.",
			"• Implementing responsive features and pushing changes fixing user-submitted tickets.",
			"• Utilizing Terraform to create infrastructure for an applications API using AWS resources.",
		],
	},
];

export const projectsData = [
	{
		id: 1,
		title: 'Distributed System Music Streamer',
		description: "This is a multi-threaded client/server music streaming application. This music streamer runs each client on their own seperate thread as part of a thread pool. " +
			"These clients are all connected through the server allowing for messaging between clients. This application also has mp3 file uploading functionality giving clients the ability " +
			"to upload any song/sound clip they would like. All clients are able to access any song uploaded to the server.",
		link: "https://github.com/Kolbyw/cs412-FinalProject",
		linkType: "Github",
		img: musicStreamer,
	},
	{
		id: 2,
		title: 'Rock Paper Scissors App',
		description: "This is a basic android application that I developed along with two of my brothers. This game is a basic 'Rock Paper Scissors' style game but it has two different modes. " +
			"One game mode is 'Easy' where the computer picks a random choice of the three options. In the 'Medium' game mode the computer will analyze your past guesses to predict your choice. " +
			"The game also has fun animations of the chosen objects 'battling'.",
		link: "https://play.google.com/store/apps/details?id=com.wallinsoftware.rockpaperscissors&hl=en_US&gl=US",
		linkType: "App",
		img: rockPaperScissors,
	},
	{
		id: 3,
		title: 'Ecommerce Website',
		description: "This is a basic ecommerce website that I developed with two of my brothers. The UI was created with React.js and the products and images were hosted remotely and pulled from an S3 bucket. " +
			"The website is deployed using Route53 and cloudfront AWS resources. This project was my introduction to using AWS. The website is fully operational and has two products currently listed for purchase.",
		link: "https://www.euplora.com",
		linkType: "Website",
		img: euplora,
	},
];

export const singleProjectData = {
	ProjectHeader: {
		title: 'Project Management UI',
		publishDate: 'Jul 26, 2021',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
			},
			{
				id: 2,
				details:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
			},
			{
				id: 3,
				details:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
			},
			{
				id: 4,
				details:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/realstoman',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/realstoman',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/c/StomanStudio',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
