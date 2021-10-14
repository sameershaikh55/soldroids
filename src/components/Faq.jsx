import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
	return (
		<div id="faq" className="">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								<div className="col-12">
									<div className="d-flex align-items-center w-100 mb-4">
										<h1 className="me-3 text-white sofia nowrap">FAQ</h1>
										<div className="w-100 line"></div>
									</div>

									<div className="team_card_container">
										{[1, 1, 1, 1].map((prev, i) => {
											return (
												<div key={i}>
													<Accordion />
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
	);
};

export default Faq;
