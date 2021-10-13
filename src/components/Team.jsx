import React from "react";
import i1 from "../assets/team/i1.svg";
import i2 from "../assets/team/i2.svg";
import i3 from "../assets/team/i3.svg";

const Team = () => {
	const data = [
		{
			i: i1,
			t: "Coen",
			p: "Founder & Lead Designer",
		},
		{
			i: i2,
			t: "Ruii",
			p: "Founder",
		},
		{
			i: i3,
			t: "Luke",
			p: "Head Admin",
		},
	];

	return (
		<div id="team" className="team_container pt-5">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								<div className="col-12">
									<div className="d-flex align-items-center w-100 mb-4">
										<h1 className="me-3 text-white inconsolata nowrap">
											Meet the Team
										</h1>
										<div className="w-100 line"></div>
									</div>

									<div className="container-fluid">
										<div className="team_card_container">
											{data.map((prev, i) => {
												return (
													<div key={i} className="inner_card text-center">
														<img className="w-100" src={prev.i} alt="" />
														<h3 className="mb-1 mt-3 text-white"> {prev.t} </h3>
														<p className="f20 color1"> {prev.p} </p>
													</div>
												);
											})}
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

export default Team;
