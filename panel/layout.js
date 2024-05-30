document.body.style["zoom"] = "90%";

const contactBtn = document.createElement("button");
contactBtn.id = "contacts-btn";
contactBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="22"><title>contacts</title><path d="M20,0H4V2H20V0M4,24H20V22H4V24M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M12,6.75A2.25,2.25 0 0,1 14.25,9A2.25,2.25 0 0,1 12,11.25A2.25,2.25 0 0,1 9.75,9A2.25,2.25 0 0,1 12,6.75M17,17H7V15.5C7,13.83 10.33,13 12,13C13.67,13 17,13.83 17,15.5V17Z" /></svg>`;
document.body.appendChild(contactBtn);

function toggleContactBar(chatSidebar) {
	chatSidebar.style.display = chatSidebar.style.display === "none" ? "flex" : "none";
}

function modifyLayout() {
	document.querySelector("header")?.remove();
	document.getElementById("app").firstElementChild["style"].width = "111vw";
	const chatSidebar = document.getElementById("side").parentElement;
	chatSidebar.style.display = "none";
	chatSidebar.style.position = "absolute";
	chatSidebar.style.maxWidth = "unset";
	chatSidebar.parentElement.style.minWidth = "111vw";

	const chatList = document.getElementById("pane-side").firstElementChild.firstElementChild.firstElementChild;
	chatList.addEventListener("click", toggleContactBar.bind(this, chatSidebar));
	contactBtn.addEventListener("click", toggleContactBar.bind(this, chatSidebar));
}

setTimeout(modifyLayout, 6000);

const cssStyleSheet = new CSSStyleSheet();
cssStyleSheet.replace(`
#app > div{
	width: 111vw;
}

#main {
	width: 111vw;
}

div:has(> #side) {
	display: none;
	position: absolute;
	max-width: unset;
}

#app > div > div[tabIndex="-1"]{
	min-width: 111vw;
}

#contacts-btn{
	text-align: center;
	box-shadow: 0 1px 4px rgba(200, 200, 200, 0.2), 0 1px 2px rgba(200, 200, 200, 0.3);
	padding: 0.4em;
	border-radius: 50%;
	font-size: medium;
	background-color: lime;
	cursor: pointer;
	position: fixed;
	left: 5px;
	bottom: 1em;
	z-index:100;
	cursor:pointer;
}`);
document.adoptedStyleSheets.push(cssStyleSheet);
