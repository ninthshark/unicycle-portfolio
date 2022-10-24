const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const year = document.getElementById("year");

const contactForm = document.forms[0];

const date = new Date();
const fullYear = date.getFullYear();

year.innerHTML = fullYear;

const navSlide = () => {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
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

const clearForm = () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  name.value = "";
  email.value = "";
  message.value = "";
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

// Get contact detail from contact form
const formSubmit = () => {
  const messagePosition = document.querySelector(".three");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const { name, email, message } = event.target.elements;
    const info = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    const textInfo = `<p class="message">Thank you for your message, ${capitalize(
      info.name
    )}. We will be in touch soon.</p>`;
    clearForm();
    messagePosition.insertAdjacentHTML("beforeend", textInfo);
  });
};

const start = () => {
  navSlide();
  // formSubmit();
};

start();
