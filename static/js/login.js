function toggleLogin()
{
	if (login.classList.contains("visible"))
	{
		login.classList.remove("visible");
		loginButton.innerHTML = "Login";
	}
	else
	{
		login.classList.add("visible");
		loginButton.innerHTML = "X";
	}
}

document.querySelector("main").addEventListener("click", function()
{
	login.classList.remove("visible");
	loginButton.innerHTML = "Login";
});