document.addEventListener("DOMContentLoaded", () => {
  let title = document.querySelector(".title");
  let title2 = document.querySelector(".title2");
  let title3 = document.querySelector(".title3");
  let bg = document.querySelector(".about");

  window.addEventListener("scroll", () => {
    let scrool = window.scrollY;
    let scrool2 = window.scrollY;
    if (scrool < 500) {
      bg.classList.remove("a");
    }

    if (scrool > 500) {
      title.style.display = "block";
      title2.style.display = "block";
      title3.style.display = "block";
      title.style.opacity = 0.4 + scrool / 1000;
      bg.classList.add("a");

      if (scrool > 650) {
        title.style.opacity = 1 - (scrool * 0.9999) / 1000;
        bg.classList.add("b");
      }
      if (scrool < 800) {
        title2.style.opacity = 0;
        bg.classList.remove("c");
        bg.classList.remove("d");
      }
      if (scrool > 800) {
        title.style.opacity = 0;
        title2.style.opacity = 0.4 + scrool / 1000;
        bg.classList.add("c");
      }
      if (scrool > 950) {
        title2.style.opacity = 1 - (scrool * 0.5999) / 1000;
        bg.classList.add("d");
      }
      if (scrool < 1100) {
        title3.style.opacity = 0;
        bg.classList.remove("e");
      }

      if (scrool > 1100) {
        title3.style.opacity = 0.4 + scrool / 1000;
        title2.style.opacity = 0;
        bg.classList.add("e");
      }
      if (scrool < 1250) {
        title3.style.opacity = 0;
        bg.classList.remove("f");
      }
      if (scrool > 1250) {
        title3.style.opacity = 0.9 - (scrool * 0.1) / 1000;
      }
      if (scrool > 1500) {
        title3.style.opacity = 0;
        bg.classList.add("f");
      }
    } else {
      title.style.display = "none";
      title2.style.display = "none";
      title3.style.display = "none";
      title.style.opacity = 0;
      title2.style.opacity = 0;
      title3.style.opacity = 0;
      bg.classList.remove("a");
    }
  });
});
