import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import Thumb1Img from "../../../public/images/v1/t_thumb1.png";
import Thumb2Img from "../../../public/images/v1/t_thumb2.png";
import Thumb3Img from "../../../public/images/v1/t_thumb3.png";
import Thumb4Img from "../../../public/images/v1/t_thumb4.png";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Exceptional customer experience!",
		description:
			"Outstanding customer service that exceeded all expectations! Even with a last-minute order, everything was delivered on time, and the design was just perfect. The recipient was equally thrilled with the quality and attention to detail.",
		author: "William Jack",
		designation: "Founder@XYZ",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "Unmatched creativity and vision",
		description:
			"Partnering with Mthemeus was a game-changer for our brand. Their creativity and visionary approach breathed new life into our visual identity. The logo perfectly captures who we are, becoming instantly recognizable. We couldn't be more satisfied with the outcome!",
		author: "Smith Align",
		designation: "Business Owner",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Innovative, professional, and top-tier service",
		description:
			"I cannot express how impressed I am with their team. They’re not only exceptionally talented but also highly professional. They took our ideas and transformed them in ways we couldn’t have envisioned. Their innovative approach and dedication were crucial to the success of our project.",
		author: "Milano Joe",
		designation: "Entrepreneur",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "A complete brand transformation",
		description:
			"Mthemeus took our brand from ordinary to extraordinary. Their branding expertise and creative design work elevated our marketing materials to new heights. We've seen an immediate boost in brand recognition, and our customers have definitely taken notice.",
		author: "Danial Mark",
		designation: "Marketing Director",
		img: Thumb4Img,
	},
];


function Testimonial() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
				<h2>
						Clients consistently
						<span className="aximo-title-animation">
							thrilled with our work
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial, index) => (
						<FadeInStagger index={index} className="col-lg-6" key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
