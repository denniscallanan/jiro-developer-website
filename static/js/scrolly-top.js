function scrolly_top()
{
	var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

	if (scroll > 220)
	{
		topButton.classList.add("visible");
	}
	else
	{
		topButton.classList.remove("visible");
	}
}

document.addEventListener("scroll", scrolly_top);