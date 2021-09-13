import React, { useState, useEffect } from "react";

import "./styles.scss";

export default function Counter() {
	const [seconds, setSeconds] = useState(0);
	const [secondsDec, setSecondsDec] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [minutesDec, setMinutesDec] = useState(0);
	const [hours, setHours] = useState(0);
	const [hoursDec, setHoursDec] = useState(0);

	const [stopped, setStopped] = useState(false);

	let timeout = setTimeout(() => {
		if (seconds === 9) {
			setSeconds(0);
			setSecondsDec(secondsDec + 1);

			if (secondsDec === 5) {
				setSecondsDec(0);
				setMinutes(minutes + 1);

				if (minutes === 9) {
					setMinutes(0);
					setMinutesDec(minutesDec + 1);

					if (minutesDec === 5) {
						setMinutesDec(0);
						setHours(hours + 1);

						if (hours === 9) {
							setHours(0);
							setHoursDec(hoursDec + 1);
						} else setHours(hours + 1);
					} else setMinutesDec(minutesDec + 1);
				} else setMinutes(minutes + 1);
			} else setSecondsDec(secondsDec + 1);
		} else setSeconds(seconds + 1);
	}, 1000);

	const stop = () => {
		clearTimeout(timeout);
	};

	useEffect(() => {
		if (
			seconds === 9 &&
			secondsDec === 5 &&
			minutes === 9 &&
			minutesDec === 5 &&
			hours === 9 &&
			hoursDec === 9
		) {
			clearTimeout(timeout);
			setStopped(true);
		}
	}, [seconds]);

	return (
		<div className="seconds-counter">
			<div className={`timer-container ${stopped ? "stopped" : ""}`}>
				<i className="far fa-clock digit"></i>
				<div className="number digit">{hoursDec}</div>
				<div className="number digit">{hours}</div>
				<p className="digit">:</p>
				<div className="number digit">{minutesDec}</div>
				<div className="number digit">{minutes}</div>
				<p className="digit">:</p>
				<div className="number digit">{secondsDec}</div>
				<div className="number digit">{seconds}</div>
			</div>
			<div className="buttons-container">
				<button
					className="button start"
					onClick={() => {
						timeout;
						setStopped(false);
					}}></button>
				<button
					className="button stop"
					onClick={() => {
						stop();
						setStopped(true);
					}}></button>
			</div>
		</div>
	);
}
