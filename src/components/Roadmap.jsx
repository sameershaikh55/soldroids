import React from "react";

const Roadmap = () => {
	const data = [
		{
			t: "Phase 1",
			p: "We start our roadmap with airdropping 10 Soldroids to random holders. This is is a very minor stage but also an important one for us just to say a small thank you to a lucky sum who minted. At this point, we will also be giving away 75 SOL to holders who do not list within the first week.",
		},
		{
			t: "Phase 2",
			p: "In the second stage of our roadmap, we will launch our online merch store. Designs are yet to be determined but we will strive to create one that is wearable and fashionable based around different peoples tastes.",
		},
		{
			t: "Phase 3",
			p: "In the third stage of our roadmap we plan to create an accompanying NFT to the Soldroids. Holding a Soldroid will behave as a mint pass for this project allowing you first access. We believe rewarding those who support us from the start is important and this accompanies that.",
		},
		{
			t: "Phase 4",
			p: "'In addition to the above for our roadmap, as mentioned previously, all holders that do not have their Soldroid listed will receive a portion of the 85% of royalties received every 2 weeks.",
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
