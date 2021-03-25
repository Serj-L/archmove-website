// scroll-bar width calculation
const getscrollbarWidth = () => {
    const outer = document.createElement("div");

    outer.style.position = "adsolute";
    outer.style.top = "-9999px";
    outer.style.width = "50px";
    outer.style.height = "50px";
    outer.style.overflow = "scroll";
    outer.style.visibility = "hidden";
    document.body.appendChild(outer);
    const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollbarWidth;
}
// /scroll-bar width calculation

// burger menu
const burgerMenu = document.querySelector(".header__burger-btn");
if (burgerMenu) {
    const menuWrapper = document.querySelector(".header__nav-wrapper");
    const body = document.querySelector("body");
    const navLink = document.querySelector(".header__nav-item");
    burgerMenu.addEventListener("click", function (e) {
        burgerMenu.classList.toggle("active");
        menuWrapper.classList.toggle("active");
        body.classList.toggle("lock");
        navLink.addEventListener("click", function (e) {
            burgerMenu.classList.remove("active");
            menuWrapper.classList.remove("active");
            body.classList.remove("lock");

        });

    });

}

/* $(document).ready(function() {
	$(".header__burger-btn").click(function(event) {
		$(".header__burger-btn, .header__nav-wrapper").toggleClass("active")
        if($(".header__burger-btn").hasClass("active"))
        $(".header__nav").css({"padding-right": getscrollbarWidth}),
        $("body").css({"padding-right": getscrollbarWidth}),
        $(".header__nav-link").click(function(event) {
            $(".header__burger-btn, .header__nav-wrapper").removeClass("active")
            $("body").removeClass("lock")
            $("body").css({"padding-right": ""})
            $(".header__nav").css({"padding-right": ""})
        }),
        $(window).resize(function() {
            $(".header__burger-btn, .header__nav-wrapper").removeClass("active")
            $("body").removeClass("lock")
            $("body").css({"padding-right": ""})
            $(".header__nav").css({"padding-right": ""})
        })
        else ($(".header__nav").css({"padding-right": ""})),
        $("body").css({"padding-right": ""})
        $("body").toggleClass("lock")
	});
} */
// /burger menu