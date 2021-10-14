import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
	const faqData = [
		{
			t: "When am I gonna be able to mint a Soldroid?",
			p: "Public Sale will start on 22nd October, 10pm CET.",
		},
		{
			t: "What is the mint price?",
			p: "Mint price will be 1.5 SOL.",
		},
		{
			t: "What is the total supply of Soldroids?",
			p: "There will be a total of 3,333 Soldroids. 700 are currently reserved for whitelist.",
		},
		{
			t: "How many Soldroids can I mint?",
			p: "You can mint a maximum of 5 Soldroids but there will be a maximum of 1 per transaction.",
		},
		{
			t: "What will royalties be on the aftermarket?",
			p: "We will charge 3.5% royalties on the aftermarket. 85% of those royalties will be given back to Soldroid holders on a weekly basis.",
		},
	];

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
										{faqData.map((prev, i) => {
											return (
												<div key={i}>
													<Accordion t={prev.t} p={prev.p} />
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
