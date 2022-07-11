const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuOpenButton = document.getElementById("button-open-mobile-menu");
const menuItems = document.querySelectorAll("#menu-main-1 li");
let isOpen = false;
const body = document.querySelector("body");

// スクロールを禁止にする関数
function disableScroll(event) {
  event.preventDefault();
}

mobileMenuOpenButton.addEventListener("click", () => {
  if (!isOpen) {
    isOpen = true;
    if (mobileMenu.classList.contains("slideout")) {
      mobileMenu.classList.remove("slideout");
    }
    mobileMenu.classList.add("slidein");
    body.classList.add("overflowHidden");
    document.addEventListener("touchmove", disableScroll, { passive: false });
    document.addEventListener("mousewheel", disableScroll, { passive: false });
  } else {
    isOpen = false;
    mobileMenu.classList.remove("slidein");
    mobileMenu.classList.add("slideout");
    body.classList.remove("overflowHidden");
    document.removeEventListener("touchmove", disableScroll, {
      passive: false,
    });
    document.removeEventListener("mousewheel", disableScroll, {
      passive: false,
    });
  }
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    isOpen = false;
    mobileMenuOpenButton.classList.remove("opened");
    mobileMenuOpenButton.setAttribute("aria-expanded", "false");
    mobileMenu.classList.add("slideout");
    mobileMenu.classList.remove("slidein");
    body.classList.remove("overflowHidden");
    document.removeEventListener("touchmove", disableScroll, {
      passive: false,
    });
    document.removeEventListener("mousewheel", disableScroll, {
      passive: false,
    });
  });
});
