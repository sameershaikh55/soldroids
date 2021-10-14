import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({ t, p }) => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div
			onClick={() => setCollapsed(!collapsed)}
			className="custom_accordion text-white sans py-3 ps-2 pe-3 pointer"
		>
			<div>
				<div className="d-flex align-items-center" s>
					<h5
						style={{
							transition: "0.4s",
						}}
						className="f20 w-100 py-2 px-2 px-md-3 mb-0 fw600"
					>
						{t}
					</h5>
					<IoIosArrowDown
						style={{
							transform: collapsed && "rotate(180deg)",
							transition: "0.4s",
						}}
						className="icon1 pointer"
						fontSize="2rem"
						color="#fff"
					/>
				</div>
				<div
					style={{
						transition: "0.4s",
						height: (collapsed && "auto") || "0px",
						overflowY: (collapsed && "initial") || "hidden",
					}}
					className="ps-2 pe-4 ps-md-3 pe-md-5 mb-0"
				>
					<p
						id="content"
						style={{
							opacity: (collapsed && "1") || "0",
							transitionDelay: collapsed && "0.8s",
							transition: collapsed && "0.8s",
						}}
						className="f20 pt-4 pb-1 mb-0"
					>
						{p}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
