import React, { useState, useEffect } from "react";
import "./App.css";
import { PiFastForwardBold, PiRewindBold, PiFastForward, PiRewind } from "react-icons/pi";

const App = () => {
	const [speed, setSpeed] = useState(1.0);
	const [btnFFClicked, setBtnFFClicked] = useState(false)
	const [btnRWClicked, setBtnRWClicked] = useState(false)

	useEffect(() => {
		const video = document.querySelector("video");
		if (video) {
			video.playbackRate = speed;
		}
	}, [speed]);

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
		<div className="absolute imran top-6 right-20 min-h-6 text-sm w-24 bg-neutral-700 bg-opacity-20 text-white rounded-full flex items-center z-auto pointer-events-auto">
			<div className="flex justify-center mr-auto w-1/3 hover:bg-neutral-400 rounded-l-full h-6 justify-items-center align-center bg-prple-600">

				<button
					className="flex justify-center items-center h-6 bg-rd-700 w-full hovr:text-red-500 bg-netral-400"
					onClick={decreaseSpeed}>
						<PiRewind
					className="flex"
					size={"16"}
				/>
				</button>


			</div>

			<div className="h-4 w-px bg-gray-400"></div>

			<div className="flex w-1/2 h-6  justify-between bg-rd-900 hover:bg-neutral-300 ">
				<button
					className="flex items-center justify-center bg-gren-400 w-full h-full text-xs font-bold"
					onClick={resetSpeed}>
					{speed.toFixed(2)}
				</button>
			</div>

			<div className="h-4 w-px bg-gray-400"></div>

			<div className="flex ml-auto w-1/3 bg-prple-400 rounded-r-full h- justify-items-center hover:bg-neutral-400 rounded-l-xl">
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
	);
};

export default App;






				{/* <button
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
				</button> */}





	{/* <button
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
					
				</button> */}
