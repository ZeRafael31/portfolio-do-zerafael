class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.removeProperty("animation");
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
  }

  handleClick() {
    const isActive = this.navList.classList.contains(this.activeClass);
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
  
    if (!isActive) {
      this.animateLinks();
    } else {
      this.navLinks.forEach((link) => (link.style.animation = ""));
    }
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (!this.mobileMenu || !this.navList || this.navLinks.length === 0) return;
    this.addClickEvent();
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();