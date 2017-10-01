var user = "";
var loggedIn = false;

function hideLogin()
{
	var text = loggedIn ? user : "Login";
	login.classList.remove("visible");
	loginButton.innerHTML = text;
}

function toggleLogin()
{
	if (login.classList.contains("visible"))
	{
		hideLogin();
	}
	else
	{
		login.classList.add("visible");
		loginButton.innerHTML = "X";
	}
}

document.querySelector("main").addEventListener("click", function()
{
	hideLogin();
});

document.querySelector("#login .login").onclick = function()
{
	loggedIn = true;
	user = username.value;
	hideLogin();
}