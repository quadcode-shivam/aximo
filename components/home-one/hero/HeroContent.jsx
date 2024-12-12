import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import Link from "next/link";
import ShapeImg from "../../../public/images/v1/shape1.png";
import User1Img from "../../../public/images/v1/user1.png";
import User2Img from "../../../public/images/v1/user2.png";
import User3Img from "../../../public/images/v1/user3.png";
function HeroContent() {
	return (
		<FadeInStaggerTwo className="aximo-hero-content">
			<FadeInStaggerTwoChildren>
				<h3 className="text-white">Secure Your Business with Our </h3><h1>Cybersecurity Solutions</h1>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<p>
					We provide advanced cybersecurity solutions tailored to protect your business in a
					digital-first world. Contact us to secure your operations.
				</p>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<div className="aximo-hero-user-wrap">
					<div className="aximo-hero-user-thumb">
						<div className="aximo-hero-user-thumb-item">
							<Image src={User1Img} alt="User1Img" />
						</div>
						<div className="aximo-hero-user-thumb-item">
							<Image src={User3Img} alt="User3Img" />
						</div>
						<div className="aximo-hero-user-thumb-item">
							<Image src={User2Img} alt="User2Img" />
						</div>
					</div>
					<div className="aximo-hero-user-data">
						<p>Believed by more than a thousand people</p>
					</div>
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<Link className="aximo-call-btn" href="/contact-us">
					Book a free consultation <i className="icon-call"></i>
				</Link>
				<div className="aximo-hero-shape">
					<Image src={ShapeImg}  alt="ShapeImg" />
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroContent;
