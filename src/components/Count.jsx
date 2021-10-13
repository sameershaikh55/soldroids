import React from "react";
import { useTimer } from "react-timer-hook";

const Count = ({ expiryTimestamp }) => {
	const { seconds, minutes, hours, days } = useTimer({
		expiryTimestamp,
		onExpire: () => console.warn("onExpire called"),
	});
	return (
		<>
			<div>
				<div className="timer_cont d-flex align-items-center justify-content-center fw500 px-4 pb-1">
					<span>{days}</span>
					<span className="px-2 pb-3">:</span>
					<span>{hours}</span>
					<span className="px-2 pb-3">:</span>
					<span>{minutes}</span>
					<span className="px-2 pb-3">:</span>
					<span>{seconds}</span>
				</div>
			</div>
		</>
	);
};

export default Count;
