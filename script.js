const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
