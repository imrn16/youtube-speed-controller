(function () {
	console.log("content.js loaded");
  
	function initialize() {
	  const players = document.querySelectorAll("#ytd-player, #inline-preview-player");
	  if (players.length === 0) {
		console.log("Players not found");
		return;
	  }
  
	  players.forEach(player => {
		console.log("Player found, appending controls");
		const controls = document.createElement("div");
		controls.id = "root";
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
	  });
	}
  
	const observer = new MutationObserver(() => {
	  const players = document.querySelectorAll("#ytd-player, #inline-preview-player");
	  if (players.length > 0) {
		observer.disconnect();
		initialize();
	  }
	});
  
	observer.observe(document.body, { childList: true, subtree: true });
  })();
  