import React from "react";
import i1 from "../assets/about/i1.svg";

const About = () => {
	return (
		<div id="about" className="about_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row gy-4 align-items-center">
								<div className="col-10 col-md-5 col-lg-3 mx-auto">
									<img className="w-100" src={i1} alt="" />
								</div>
								<div className="col-12 col-md-7 col-lg-9">
									<p className="text-white sans f22">
										Soldroids are 3,333 randomly generated unique Droids on the
										Solana blockchain. We are currently pricing Soldroids at 1.5
										SOL. We are planning to launch on the 22nd of October at
										22:00 CET. We are a project that aim for longevity, thus we
										have chosen to limit the supply to only 3,333 Droids and to
										give 85% of royalties earned back to holders. This will be
										paid out weekly.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
