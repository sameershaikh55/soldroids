import React from "react";

const Roadmap = () => {
	const data = [
		{
			t: "Phase 1",
			p: "We start our roadmap with airdropping 10 Soldroids to random holders. We will also be giving away 75 SOL to holders who held on to their Soldroid for the first week.",
		},
		{
			t: "Phase 2",
			p: "In the second stage of our roadmap, we will launch our online merch store. We will strive to create merch that is wearable and fashionable based around different peoples tastes.",
		},
		{
			t: "Phase 3",
			p: "In the third stage of our roadmap we plan to create an accompanying NFT to the Soldroids. Holding a Soldroid will behave as a mint pass for this project allowing you first access.",
		},
		{
			t: "Phase 4",
			p: "We charge 3.5% royalties on aftermarket, 85% of royalties earnt will go into a community wallet. This will be distributed to all holders on a weekly basis.",
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
									<h1 className="me-3 text-white sofia">Roadmap</h1>
									<div className="w-100 line"></div>
								</div>

								<div className="inner_roadmap">
									<section class="timeline">
										<ol>
											{data.map((prev, i) => {
												return (
													<li>
														<div className="text-center text-white">
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
