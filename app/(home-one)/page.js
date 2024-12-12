import About from "@/components/home-one/about";
import AutoSlider from "@/components/home-one/auto-slider";
import Hero from "@/components/home-one/hero";
import Projects from "@/components/home-one/projects";
import Services from "@/components/home-one/services";
import Teams from "@/components/home-one/teams";
import Testimonial from "@/components/home-one/testimonial";
import WhyChooseUs from "@/components/home-one/why-choose-us";

// Teams images
import Team1Img from "@/public/images/team/team1.png";
import Team2Img from "@/public/images/team/team2.png";
import Team3Img from "@/public/images/team/team3.png";
import Team4Img from "@/public/images/team/team4.png";
const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Managed EDR Services",
		description:
			"Advanced endpoint protection with CrowdStrike, SentinelOne, and Microsoft Defender.",
		icon: "icon-design-tools", // Retained from the previous icon
		keyFeatures: [
			"AI-Powered Detection",
			"Automated Incident Response",
			"Real-time Monitoring",
			"Threat Hunting",
		],
	},
	{
		id: crypto.randomUUID(),
		title: "24x7 Managed SOC Services",
		description:
			"Continuous security monitoring through a state-of-the-art Security Operations Center.",
		icon: "icon-branding", // Retained from the previous icon
		keyFeatures: [
			"Real-time Threat Detection",
			"SIEM Integration",
			"Incident Response",
		],
	},
	{
		id: crypto.randomUUID(),
		title: "Security Assessment & Compliance Services",
		description:
			"Ensure compliance with standards like ISO 27001, PCI DSS, HIPAA, and GDPR.",
		icon: "icon-web", // Retained from the previous icon
		keyFeatures: [
			"Gap Analysis",
			"Risk Assessments",
			"Regulatory Audits",
		],
	},
	{
		id: crypto.randomUUID(),
		title: "Web Application Penetration Testing",
		description:
			"Identify vulnerabilities in web applications.",
		icon: "icon-design-thinking", // Retained from the previous icon
		keyFeatures: [
			"OWASP Top 10 Testing",
			"API Security",
			"Business Logic Assessment",
		],
	},
];


const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Andrew Mark",
		designation: "Creative Director",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Jack Taylor",
		designation: "Senior Designer",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Martine Joy",
		designation: "Project Manager",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Adam Straw",
		designation: "Web Developer",
		img: Team4Img,
	},
];
export default function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<Projects />
			<WhyChooseUs />
			<Testimonial />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}
