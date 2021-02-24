const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

const navSlide = () => {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animate Links

    // navLinks.forEach((link, index) => {
    //   if (link.style.animation) {
    //     link.style.animation = "";
    //   } else {
    //     link.style.animation = `navLinkFade 0.3s ease forwards ${
    //       index / 7 + 0.3
    //     }s`;
    //   }
    // });

    // Burger animation
    burger.classList.toggle("toggle");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // link.classList.toggle("active-link");
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });
  });
};

navSlide();
