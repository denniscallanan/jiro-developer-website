function scrolly_docs()
{
	var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	var list = document.querySelector(".docs-list");
	var content = document.querySelector(".docs-content");

	if (scroll > 103)
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