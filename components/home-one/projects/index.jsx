"use client";
import Image from "next/image";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Project1Img from "../../../public/images/v1/project1.png";
import Project2Img from "../../../public/images/v1/project2.png";
import Project3Img from "../../../public/images/v1/project3.png";
import Project4Img from "../../../public/images/v1/project4.png";
import Star2Img from "../../../public/images/v1/star2.png";
import ProjectCard from "./ProjectCard";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "Managed EDR Services",
		description: "Advanced endpoint protection with cutting-edge tools like CrowdStrike, SentinelOne, and Microsoft Defender.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "24x7 Managed SOC Services",
		description: "Round-the-clock security monitoring and threat detection via a robust Security Operations Center.",
		img: Project2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Security Assessment & Compliance",
		description: "Ensuring adherence to industry standards like ISO 27001, PCI DSS, HIPAA, and GDPR.",
		img: Project3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Web Application Penetration Testing",
		description: "Identifying vulnerabilities in web applications, including OWASP Top 10 testing and API security.",
		img: Project4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Threat Hunting Services",
		description: "Proactively identifying and mitigating hidden threats in your network and systems.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Incident Response Solutions",
		description: "Fast and efficient resolution of security breaches to minimize downtime and risk.",
		img: Project2Img,
	},
];


const swiperSettings = {
	spaceBetween: 24,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination, Mousewheel],
	mousewheel: true,
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 3.5,
		},
	},
};
function Projects() {
	return (
		<div className="section dark-bg aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center light">
					<h3 className="text-white">Explore a diverse array of</h3>
				<h2>
					<span className="aximo-title-animation">
						innovative projects
						<span className="aximo-title-icon">
							<Image src={Star2Img} alt="Star2Img" />
						</span>
					</span>
				</h2>

				</div>
			</div>
			<div className="swiper aximo-project-slider">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;
