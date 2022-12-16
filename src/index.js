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

document.getElementById("fom").addEventListener("submit", displayDevTube);
document.getElementById("sign").addEventListener("submit", displayDevTube);
document
	.getElementById("remove-signup")
	.addEventListener("click", removeSignup);
function displayDevTube(e) {
	e.preventDefault();
	let login = document.getElementById("bod");
	let devTube = document.getElementById("devtube");
	let body = document.querySelector("body");

	login.style.display = "none";

	let p = document.createElement("p");

	p.innerHTML = `
	<p>You are being redirected to DevTube in 5 seconds...</p>
	<p>If not redirected, click <button> here </button> </p>
	`;
	p.style.fontSize = "20px";
	body.appendChild(p);

	setTimeout(() => {
		p.style.display = "none";
		devTube.style.display = "contents";
	}, 5000);
}

function removeSignup() {
	let signup = document.getElementById("login");
	let signin = document.getElementById("signin-redirect");
	let p = document.getElementById("have-account");
	let welcomeMessage = document.getElementById("wel");
	let additionalMessage = document.getElementById("come");

	welcomeMessage.textContent = "Welcome Back to DevTube";
	p.style.display = "none";
	additionalMessage.style.display = "none";
	signup.style.display = "none";
	signin.style.display = "contents";
}
