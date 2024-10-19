import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { PiFastForwardBold, PiRewindBold, PiFastForward, PiRewind } from "react-icons/pi";

const App = () => {
	const [speed, setSpeed] = useState(1.0);
	const [prevSpeed, setPrevSpeed] = useState(1.0);
	const [isVisible, setIsVisible] = useState(false);
	const [toggleVisible, setToggleVisible] = useState(true);

	const boostIntervalRef = useRef(null);

	const [btnFFClicked, setBtnFFClicked] = useState(false);
	const [btnRWClicked, setBtnRWClicked] = useState(false);

	useEffect(() => {
		const video = document.querySelector("video");
		if (video) {
			video.playbackRate = speed;
		}

		let boostInterval;
		const handleKeyDown = (e) => {
			if (e.key === "[") {
				decreaseSpeed();
			} else if (e.key === "]") {
				increaseSpeed();
			} else if (e.key === `\\`) {
				if (!boostIntervalRef.current) {
					setPrevSpeed(speed);
					boostSpeed();
					boostIntervalRef.current = setInterval(boostSpeed, 100);
				}
				//boost view
			} else if (e.key === `'`) {
				resetSpeed();
				//hide
			} else if (e.key === `;`) {
				setToggleVisible(!toggleVisible);
				//hide view
			}
		};

		const handleKeyUp = (e) => {
			if (e.key === `\\`) {
				clearInterval(boostIntervalRef.current);
				boostIntervalRef.current = null; // Clear the interval reference
				setSpeed(prevSpeed); // Restore speed to previous value after boosting
			}
		};

		const handleMouseEnter = (e) => {
			if (!e.relatedTarget || e.relatedTarget.closest("#yt-speed-controls") === null) {
				setIsVisible(true);
			}
		};

		const handleMouseLeave = (e) => {
			if (!e.relatedTarget || e.relatedTarget.closest("#yt-speed-controls") === null) {
				setIsVisible(false);
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		const videoElement = document.querySelector("video");
		if (videoElement) {
			videoElement.addEventListener("mouseenter", handleMouseEnter);
			videoElement.addEventListener("mouseleave", handleMouseLeave);
		}

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
			if (videoElement) {
				videoElement.removeEventListener("mouseenter", handleMouseEnter);
				videoElement.removeEventListener("mouseleave", handleMouseLeave);
			}
		};
	}, [speed, isVisible, toggleVisible]);

	const increaseSpeed = () => {
		setSpeed((prevSpeed) => Math.min(prevSpeed + 0.25, 16.0));
	};

	const decreaseSpeed = () => {
		setSpeed((prevSpeed) => Math.max(prevSpeed - 0.25, 0.25));
	};

	const resetSpeed = () => {
		setSpeed(1.0);
	};

	const boostSpeed = () => {
		setSpeed(16.0);
	};

	return (
		toggleVisible &&
		isVisible && (
			<div
				id="yt-speed-controls"
				className="absolute imran top-6 right-10 h-12 text-sm w-40 bg-neutral-900 bg-opacity-60 text-white rounded-full flex items-center z-auto pointer-events-auto border-2 border-neutral-800">
				<div className="flex justify-center mr-auto w-1/3 hover:bg-opacity-50 bg-opacity-0 bg-neutral-500 rounded-l-full h-12 justify-items-center align-center bg-prple-600">
					<button
						className="flex justify-center items-center h bg-rd-700 w-full hovr:text-red-500 bg-netral-400"
						onClick={decreaseSpeed}>
						<PiRewind
							className="flex"
							size={"16"}
						/>
					</button>
				</div>

				<div className="h-6 w-px bg-gray-400"></div>

				<div className="flex w-1/2 h-12  justify-between bg-rd-900 hover:bg-opacity-50 bg-opacity-0 bg-neutral-500">
					<button
						className="flex items-center justify-center bg-gren-400 w-full h-full text-xl font-bold"
						style={{ userSelect: "none" }}
						onClick={resetSpeed}>
						{speed.toFixed(2)}
					</button>
				</div>

				<div className="h-6 w-px bg-gray-400"></div>

				<div className="flex ml-auto w-1/3 bg-prple-400 rounded-r-full h-12 justify-items-center hover:bg-opacity-50 bg-opacity-0 bg-neutral-500 rounded-l-xl">
					<button
						className="flex justify-center items-center bg-gren-700 w-full justify-center  actve:text-red-500"
						onClick={increaseSpeed}>
						<PiFastForward
							className="flex"
							size={"16"}
						/>
					</button>
				</div>
			</div>
		)
	);
};

export default App;

{
	/* <button
					className="flex justify-center items-center h-6 bg-rd-700 w-full hovr:text-red-500 bg-netral-400"
					onClick={decreaseSpeed}
					onMouseDown={() => {
						decreaseSpeed
						setBtnRWClicked(true)}}
					onMouseUp={() => setBtnRWClicked(false)}>
						{btnRWClicked ? <PiRewindBold
						className="flex"
						size={"16"}
					/> : <PiRewind
					className="flex"
					size={"16"}
				/>}
				</button> */
}

{
	/* <button
					className="flex justify-center items-center bg-gren-700 w-full justify-center  actve:text-red-500"
					onClick={increaseSpeed}
					onMouseDown={() => {
						increaseSpeed
						setBtnFFClicked(true)}}
					onMouseUp={() => setBtnFFClicked(false)}>
						{btnFFClicked ? <PiFastForwardBold
						className="flex"
						size={"16"}
					/> : <PiFastForward
					className="flex"
					size={"16"}
				/>}
					
				</button> */
}
