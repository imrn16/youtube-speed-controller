(function () {
	console.log("content.js loaded");
	//const player = document.querySelector("#movie_player");
	const player = document.querySelector("#ytd-player");
	if (!player) {
		console.log("Player not found");
		return;
	}

	console.log("Player found, appending controls");
	const controls = document.createElement("div");
	controls.id = "root";
	//player.parentElement.appendChild(controls);
	player.appendChild(controls);

	// Load Tailwind CSS
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = chrome.runtime.getURL("dist/assets/index.css");
	document.head.appendChild(link);

	// Load React app
	const script = document.createElement("script");
	script.src = chrome.runtime.getURL("dist/assets/index.js");
	document.body.appendChild(script);
})();