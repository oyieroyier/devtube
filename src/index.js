// This function toggles between Dark Mode and Light Mode
const nightModeToggle = document.getElementById("button");
nightModeToggle.addEventListener("click", function () {
	document.body.classList.toggle("night-mode");
});

/*
The following function makes the SVG used to indicate Dark Mode and Light Mode
also change colour (blaco or white) depending on the mode chosen.

In dark mode, it is white; implying "Click here to enable Light Mode"
*/
const buttonColorChange = document.getElementById("button");

let index = 0;
const colors = ["white", "black"];
const backgroundColors = ["black", "white"];

buttonColorChange.addEventListener("click", () => {
	buttonColorChange.style.backgroundColor = colors[index];
	buttonColorChange.style.color = backgroundColors[index];

	index = index >= colors.length - 1 ? 0 : index + 1;
});

document.getElementById("fom").addEventListener("submit", displayDevTube);
document.getElementById("sign").addEventListener("submit", displayDevTube);
document
	.getElementById("remove-signup")
	.addEventListener("click", removeSignup);

/*
	This Function displays the Landing Page of DevTube.
	It is triggered when one clicks "Sign Up or Login" on the mock Authentication Page.
	By default, the landing page is set to "display:none" before the form is submitted.
*/
function displayDevTube(e) {
	e.preventDefault();
	let login = document.getElementById("bod");
	let devTube = document.getElementById("devtube");
	let body = document.querySelector("body");

	login.style.display = "none";

	let p = document.createElement("p");

	p.innerHTML = `
	<p>You are being redirected to DevTube within 5 seconds...</p>
	<p>If not redirected, click <button> here </button> </p>
	`;
	p.style.fontSize = "20px";
	p.style.color = "aliceblue";
	body.appendChild(p);

	setTimeout(() => {
		p.style.display = "none";
		devTube.style.display = "contents";
	}, 1000);
}

/*
	This Function displays the Login page for existing users.
	It is triggered when one clicks "Login Here" on the mock Authentication Page.
	By default, the Login page for existing users is set to "display:none" before the button
	is clicked.
*/
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

/*
	This function targets the input entered by a DevTube user in the
	search bar.
	When the user submits the search, the function captures the input
	and then triggers another function that runs the search words in
	the YouTube API.
*/
function search() {
	document.getElementById("fomu").addEventListener("submit", (e) => {
		e.preventDefault();
		let search = e.target.search.value;
		let para = document.getElementById("about");
		para.remove();
		fetchSearch(search);
	});
}
search();

// Calls the YouTube API using my API Key and the search query.
function fetchSearch(search) {
	let apiKey = "AIzaSyAxliesP43YasDnhL_YGvvwAwlHMTtkaQY";
	fetch(
		`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=5&q=${search}`
	)
		.then((response) => response.json())
		.then(renderResult);
}

function renderResult(data) {
	let list = document.getElementById("res");
	list.textContent = "";

	data.items.forEach((element) => {
		let listed = document.createElement("li");
		let vids = document.createElement("a");
		let thumbnail = document.createElement("img");

		thumbnail.src = element.snippet.thumbnails.default.url;
		thumbnail.style.borderRadius = "10px";
		thumbnail.style.margin = "5px";
		vids.href = "#";
		vids.textContent = element.snippet.title;
		vids.onclick = () => {
			let videoId = element.id.videoId;
			let renderingDiv = document.getElementById("ytplayer");

			renderingDiv.innerHTML =
				'<iframe src="https://www.youtube.com/embed/' +
				videoId +
				'" width="100%" height="100%"></iframe>';
			getConsole();
		};

		list.appendChild(listed);
		listed.appendChild(vids);
		vids.appendChild(thumbnail);
	});
}

/*
	Embeds the Online IDE by Sphere Engine on the page. Only triggered once the user selects their chosen video from the search results.
*/
function getConsole() {
	SEC_HTTPS = true;
	SEC_BASE = "compilers.widgets.sphere-engine.com";
	(function (d, s, id) {
		SEC = window.SEC || (window.SEC = []);
		var js,
			fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s);
		js.id = id;
		js.src =
			(SEC_HTTPS ? "https" : "http") + "://" + SEC_BASE + "/static/sdk/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	})(document, "script", "sphere-engine-compilers-jssdk");
}
