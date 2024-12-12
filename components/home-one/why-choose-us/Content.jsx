import Image from "next/image";
import Star2Img from "./star2.png";

function Content() {
	return (
		<div className="aximo-default-content">
			<h2>
				<span className="aximo-title-animation">
					Exceptional
					<span className="aximo-title-icon">
						<Image src={Star2Img} alt="Star2Img" />
					</span>
				</span>
				workflows for success
			</h2>
			<p>
				We emphasize seamless communication and collaboration at every stage, ensuring that the final outcome
				perfectly aligns with our clients' goals and expectations.
			</p>
			<p>
				Our streamlined processes adapt to project complexity, delivering efficient and tailored solutions that
				exceed expectations.
			</p>
		</div>
	);
}

export default Content;
