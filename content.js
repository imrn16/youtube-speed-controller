(function () {
    console.log("content.js loaded");

    function initialize() {
        console.log("Initializing...");

        const players = document.querySelectorAll("#ytd-player, #inline-preview-player");
        if (players.length === 0) {
            console.log("Players not found");
            return;
        }

        players.forEach((player) => {
            console.log("Found player, appending controls");

            if (player.querySelector("#root")) {
                console.log("React app already initialized");
                return;
            }

            const controls = document.createElement("div");
            controls.id = "root";
            player.appendChild(controls);

            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = chrome.runtime.getURL("dist/assets/index.css");
            document.head.appendChild(link);

            const script = document.createElement("script");
            script.src = chrome.runtime.getURL("dist/assets/index.js");
            script.onload = () => {
                console.log("React app loaded");
            };
            document.body.appendChild(script);
        });
    }

    const observer = new MutationObserver(() => {
        const players = document.querySelectorAll("#ytd-player, #inline-preview-player");
        if (players.length > 0) {
            players.forEach((player) => {
                if (!player.querySelector("#root")) {
                    initialize();
                }
            });
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    initialize();
})();
