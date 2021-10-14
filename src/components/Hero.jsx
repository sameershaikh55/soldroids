import React from "react";
import { Link } from "react-scroll";

// IMG
import mouse from "../assets/mouse.svg";
import Count from "./Count";

const Hero = () => {
	let startDate = new Date();
	let endDate = new Date("2021-10-22T20:00:00Z");
	let seconds = Math.round((endDate.getTime() - startDate.getTime()) / 1000);
	const time = new Date();
	time.setSeconds(time.getSeconds() + seconds); // 10 minutes timer

	return (
		<div
			id="home"
			className="hero_container d-flex justify-content-center align-items-center"
		>
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 text-center text-white">
							<h1 className="sofia f70">Welcome to</h1>
							<h1 className="sofia fw900 main">Soldroids</h1>
							<div>
								<Count expiryTimestamp={time} />
							</div>
							<Link
								to="about"
								smooth={true}
								duration={300}
								offset={-100}
								spy={true}
								className="sofia f20 text-white text-decoration-none pointer"
							>
								<img src={mouse} alt="" className="me-2" /> Scroll down to learn
								more
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
