import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

// IMPORTING SCROLL
import { Link } from "react-scroll";

const Header = ({ isOpen, ClickEvent }) => {
	// FOR NAVBAR SCROLLING EFFECT START
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".header_container");
		if (header !== null) {
			header.classList.toggle("sticky", window.scrollY > 1);
		}
	});
	// FOR NAVBAR SCROLLING EFFECT END

	return (
		<div className="header_container">
			<div className="page_container w-100">
				<div className="container-fluid w-100">
					<div className="row w-100">
						<div className="col-11 col-md-12 pe-0 mx-auto">
							<div className="row">
								<div className="col-12 pe-0 w-100">
									<div className="d-flex justify-content-between align-items-center w-100">
										<div>
											<Link
												to="home"
												smooth={true}
												duration={100}
												spy={true}
												offset={-10}
												className="logo"
											>
												Soldroids
											</Link>
										</div>

										<div className="d-block d-md-none me-0 pe-0">
											{(!isOpen && (
												<GiHamburgerMenu
													color="#fff"
													fontSize="2rem"
													className="pointer"
													onClick={ClickEvent}
												/>
											)) || (
												<FaTimes
													color="#fff"
													fontSize="2rem"
													className="pointer"
													onClick={ClickEvent}
												/>
											)}
										</div>

										<ul className="list-unstyled d-none d-md-flex align-items-center mb-0">
											<li className="mb-0">
												<Link
													activeClass="activeNav"
													to="home"
													smooth={true}
													duration={300}
													spy={true}
													className="ms-4 f18"
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
													className="ms-4 f18"
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
													className="ms-4 f18"
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
													className="ms-4 f18"
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
													offset={-110}
													className="ms-4 f18"
												>
													FAQ
												</Link>
											</li>
											<li className="mb-0">
												<Link
													activeClass="activeNav"
													to="connect"
													smooth={true}
													duration={300}
													spy={true}
													offset={-100}
													className="ms-4 connectBtn"
												>
													<button className="px-3 py-1">Connect</button>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
