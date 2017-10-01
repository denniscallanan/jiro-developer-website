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