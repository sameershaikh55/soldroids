import React from "react";
import { Link } from "react-scroll";
import twitter from "../assets/twitter.svg";
import discord from "../assets/discord.svg";

const Footer = () => {
	return (
		<div className="footer_container py-5 sofia">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								<div className="col-12">
									<div>
										<Link
											to="home"
											smooth={true}
											duration={100}
											spy={true}
											offset={-10}
											className="logo sofia"
										>
											Soldroids
										</Link>
									</div>

									<div className="d-flex flex-column flex-md-row flex-wrap mt-5">
										<div>
											<h5 className="text-white sofia mb-3">Navigation</h5>
											<ul className="list-unstyled d-flex align-items-center mb-0">
												<li className="mb-0">
													<Link
														activeClass="activeNav"
														to="home"
														smooth={true}
														duration={600}
														spy={true}
														offset={-500}
														className="f18"
													>
														Home
													</Link>
												</li>
												<li className="mb-0">
													<Link
														activeClass="activeNav"
														to="about"
														smooth={true}
														duration={600}
														spy={true}
														offset={-500}
														className="f18"
													>
														About Us
													</Link>
												</li>
												<li className="mb-0">
													<Link
														activeClass="activeNav"
														to="roadmap"
														smooth={true}
														duration={600}
														spy={true}
														offset={-500}
														className="f18"
													>
														Roadmap
													</Link>
												</li>
												<li className="mb-0">
													<Link
														activeClass="activeNav"
														to="team"
														smooth={true}
														duration={600}
														spy={true}
														offset={-500}
														className="f18"
													>
														Team
													</Link>
												</li>
												<li className="mb-0">
													<Link
														activeClass="activeNav"
														to="faq"
														smooth={true}
														duration={600}
														spy={true}
														offset={-500}
														className="f18"
													>
														FAQ
													</Link>
												</li>
											</ul>
										</div>
										<div className="mt-5 mt-md-0 mx-md-5 px-md-4">
											<h5 className="text-white sofia mb-2 mb-md-3">
												Useful Links
											</h5>
											<ul className="list-unstyled d-flex align-items-center mb-0">
												<li className="mb-0">
													<li className="mb-0">
														<Link
															activeClass="activeNav"
															to="team"
															smooth={true}
															duration={600}
															spy={true}
															offset={-500}
															className="f18"
														>
															Terms & Conditions
														</Link>
													</li>
												</li>
											</ul>
										</div>
										<div className="mt-5 mt-md-0 d-flex share">
											<a href="">
												<img src={twitter} alt="" className="me-3" />
											</a>
											<a href="">
												<img src={discord} alt="" />
											</a>
										</div>
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

export default Footer;
