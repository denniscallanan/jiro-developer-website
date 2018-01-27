function scrolly_docs()
{
	var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	var list = document.querySelector(".docs-list");
	var content = document.querySelector(".docs-content");
	var style = window.getComputedStyle(login, null);
	var height = Number(style.height.substr(0, style.height.length - 2));

	if (scroll > 103 + height)
	{
		list.classList.add("scrolled");
		content.classList.add("scrolled");
	}
	else
	{
		list.classList.remove("scrolled");
		content.classList.remove("scrolled");
	}
}

document.addEventListener("scroll", scrolly_docs);