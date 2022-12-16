// Night Mode Toggle
const nightModeToggle = document.getElementById("button");
nightModeToggle.addEventListener("click", function () {
	document.body.classList.toggle("night-mode");
});

// Load the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
	player = new YT.Player("ytplayer", {
		height: "360",
		width: "640",
		videoId: "M7Z2tgJo8Hg",
	});
}

document.getElementById("logs").addEventListener("click", displayDevTube);

function displayDevTube() {
	let login = document.getElementById("bod");
	let devTube = document.getElementById("devtube");

	login.style.display = "none";
	devTube.style.display = "contents";
}
