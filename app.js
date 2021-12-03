$(document).ready(function () {
  $('.review-list').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow'><ion-icon name='arrow-back-outline'></ion-icon></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow'><ion-icon name='arrow-forward-outline'></ion-icon></button>",
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  });
});

window.addEventListener("load", () => {
  const menu = document.querySelector(".menu");
  const menuToggle = document.querySelector(".menu-toggle");
  const menuBg = document.querySelector(".menu-bg");
  const menuClose = document.querySelector(".menu-close");

  menuToggle.addEventListener("click", () => {
    menu.classList.add("is-active");
    menuBg.classList.add("is-active");
    menuClose.classList.add("is-active");
  });

  menuClose.addEventListener("click", () => {
    menu.classList.remove("is-active");
    menuBg.classList.remove("is-active");
    menuClose.classList.remove("is-active");
  });
});