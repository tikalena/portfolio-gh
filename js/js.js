let lastScrollTop = 0;
     navBar = document.getElementsByClassName("navBar");
window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document
        .documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                navBar.style.top="-80px"
            } else {
                navBar.style.top="0";
            }
                lastScrollTop = scrollTop;
            })