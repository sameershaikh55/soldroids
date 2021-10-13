import React from "react";

const Roadmap = () => {
	const data = [
		{
			t: "10% - Holders Airdrop",
			p: "When 10% of the Soldroids are minted we will be airdropping 10 Soldroids to some lucky holders.",
		},
		{
			t: "25% - Sol Raffle",
			p: "When 25% of the Soldroids are minted we will be giving away a total of 75 SOL to holders who have not listed.",
		},
		{
			t: "50% 1/1 Soldroid Rewards",
			p: "When 50% of the Soldroids are minted we will be rewarding the holders of the 6 1/1 Droids with 6 SOL.",
		},
		{
			t: "75% Merch",
			p: "When 75% of the Soldroids are minted we will be opening a Soldroids merch store that will only be available to holders.",
		},
		{
			t: "100% - V2",
			p: "When 100% of the Soldroids sell out we are gonna be working on another project, each Soldroid you hold will give you presale access to our future project.",
		},
	];

	return (
		<div id="roadmap" className="roadmap_container pt-5">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								<div className="col-12"></div>
								<div className="d-flex align-items-center w-100">
									<h1 className="me-3 text-white inconsolata">Roadmap</h1>
									<div className="w-100 line"></div>
								</div>

								<div className="inner_roadmap">
									<section class="timeline">
										<ol>
											{data.map((prev, i) => {
												return (
													<li>
														<div className="text-start text-white">
															<time className="inconsolata">{prev.t}</time>
															<span className="sans">{prev.p}</span>
														</div>
													</li>
												);
											})}
										</ol>
									</section>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
