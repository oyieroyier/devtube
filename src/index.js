// Night Mode Toggle
const nightModeToggle = document.getElementById("button");
nightModeToggle.addEventListener("click", function () {
	document.body.classList.toggle("night-mode");
});

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
	}, 1000);
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

function search() {
	document.getElementById("fomu").addEventListener("submit", (e) => {
		e.preventDefault();
		let search = e.target.search.value;
		fetchSearch(search);
	});
}
search();

function fetchSearch(search) {
	let apiKey = "AIzaSyAxliesP43YasDnhL_YGvvwAwlHMTtkaQY";
	fetch(
		`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=2&q=${search}`
	)
		.then((response) => response.json())
		// .then(data => console.log(data))
		.then(renderResult);
}

function renderResult(data) {
	let list = document.getElementById("res");

	data.items.forEach((element) => {
		let listed = document.createElement("li");
		let vids = document.createElement("a");
		let thumbnail = document.createElement("img");

		thumbnail.src = element.snippet.thumbnails.default.url;
		vids.href = `https://www.youtube.com/watch?v=${element.id.videoId}`;
		vids.textContent = element.snippet.title;

		list.appendChild(listed);
		listed.appendChild(vids);
		vids.appendChild(thumbnail);
	});
}
