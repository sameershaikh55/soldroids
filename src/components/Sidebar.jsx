import React from "react";

// IMPORTING SCROLL
import { Link } from "react-scroll";

const Sidebar = ({ isOpen, ClickEvent }) => {
	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				top: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<ul className="list-unstyled mb-0">
				<li className="mb-0">
					<Link
						activeClass="activeNav"
						to="home"
						smooth={true}
						duration={300}
						spy={true}
					>
						Home
					</Link>
				</li>
				<li className="mb-0">
					<Link
						activeClass="activeNav"
						to="about"
						smooth={true}
						duration={300}
						spy={true}
						offset={-100}
					>
						About Us
					</Link>
				</li>
				<li className="mb-0">
					<Link
						activeClass="activeNav"
						to="roadmap"
						smooth={true}
						duration={300}
						spy={true}
						offset={-50}
					>
						Roadmap
					</Link>
				</li>
				<li className="mb-0">
					<Link
						activeClass="activeNav"
						to="team"
						smooth={true}
						duration={300}
						spy={true}
						offset={-50}
					>
						Team
					</Link>
				</li>
				<li className="mb-0">
					<Link
						activeClass="activeNav"
						to="faq"
						smooth={true}
						duration={300}
						spy={true}
					>
						FAQ
					</Link>
				</li>
				<li className="mb-0 mt-4">
					<Link
						activeClass="activeNav"
						to="connect"
						smooth={true}
						duration={300}
						spy={true}
						offset={-100}
						className="connectBtn f30"
					>
						<button className="px-3 py-1">Connect</button>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
