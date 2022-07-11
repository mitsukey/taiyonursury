window.onload = (event) => {
  const pagebanner = document.getElementsByClassName('page-banner');
  let height = pagebanner[0].clientHeight;
  if (location.pathname == "/20211115/") {
    height = document.getElementById("firstview").clientHeight;
  }
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 700,
    speedAsDuration: true,
    easing: "easeInOutQuad",
  });

  const header = document.getElementsByClassName("menu-main-container");
  const pageTop = document.getElementById("page-top");
  const buttonOpenMobileMenu = document.getElementById(
    "button-open-mobile-menu"
  );

  const header_transparency_toggle = (e) => {
    let c = "test";
    if (location.pathname == "/20211115/") {
      c = "on_firstview";
    }

    switch (e) {
      case "add":
        header[0].classList.add(c);
        header[0].classList.remove("slidein");
        header[0].classList.add("slideout");
        if (!pageTop.classList.contains("on_firstview")) {
          pageTop.classList.remove("slidein");
          pageTop.classList.add("slideout");
        }
        buttonOpenMobileMenu.classList.remove("slidein");
        buttonOpenMobileMenu.classList.add("slideout");
        break;
      case "remove":
        header[0].classList.remove(c);
        header[0].classList.remove("slideout");
        header[0].classList.add("slidein");
        if (pageTop.classList.contains("on_firstview")) {
          pageTop.classList.remove("on_firstview");
        } else {
          pageTop.classList.remove("slideout");
          pageTop.classList.add("slidein");
        }
        buttonOpenMobileMenu.classList.remove("slideout");
        buttonOpenMobileMenu.classList.add("slidein");
        break;
    }
  };
  window.onscroll = (event) => {
    let scroll = window.scrollY;

    if (scroll > height) {
      header_transparency_toggle("remove");
    } else {
      header_transparency_toggle("add");
    }
  };
};
