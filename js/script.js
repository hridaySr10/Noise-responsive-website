//.............button........................///
let li = document.querySelectorAll("header .header-box nav ul li a");

li.forEach((e) => {
  e.addEventListener("mouseover", function () {
    li.forEach((item) => {
      item.classList.remove("li-active");
    });
    e.classList.add("li-active");
  });
});

//...............header scroll..........................//

$(document).ready(function () {
  let initialScroll = 0;
  $(window).scroll(function () {
    let finalScroll = $(this).scrollTop();
    if (finalScroll > initialScroll) {
      $("header").css("top", "-88px");
      $("header").css("border", "1px solid rgba(255, 255, 255, .13)");
      $("header").css("background-color", "#0A0C10");
    } else if (finalScroll === 0) {
      $("header").css("top", "0px");
      $("header").css("border", "none");
      $("header").css("background-color", "transparent");
    } else {
      $("header").css("top", "0px");
    }
    initialScroll = finalScroll;
  });
});

//................dropdown-menu....................//

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const dropdownBox = dropdown.querySelector(".dropdown-box");

  dropdownBox.style.opacity = "0";
  dropdownBox.style.visibility = "hidden";
  dropdownBox.style.top = "90%";

  dropdown.addEventListener("mouseenter", () => {
    dropdownBox.style.opacity = "1";
    dropdownBox.style.visibility = "visible";
    dropdownBox.style.top = "83%";
  });

  dropdown.addEventListener("mouseleave", (event) => {
    if (!dropdown.contains(event.relatedTarget)) {
      dropdownBox.style.opacity = "0";
      dropdownBox.style.visibility = "hidden";
      dropdownBox.style.top = "90%";
    }
  });

  dropdownBox.addEventListener("mouseenter", () => {
    dropdownBox.style.opacity = "1";
    dropdownBox.style.visibility = "visible";
    dropdownBox.style.top = "83%";
  });

  dropdownBox.addEventListener("mouseleave", (event) => {
    if (!dropdown.contains(event.relatedTarget)) {
      dropdownBox.style.opacity = "0";
      dropdownBox.style.visibility = "hidden";
      dropdownBox.style.top = "90%";
    }
  });
});

//...................sidebar.....................//

document.addEventListener("DOMContentLoaded", function () {
  const svgIcon = document.querySelector(".side-menu .svg-icon");
  const icon = document.querySelector(".side-menu .icon");
  const sideMenuBox = document.querySelector(".side-menu-box");
  const body = document.body;

  svgIcon.addEventListener("click", function () {
    svgIcon.classList.add("hide");
    icon.classList.add("show");
    sideMenuBox.classList.remove("to-right");
    body.classList.add("sidebar-open");
  });

  icon.addEventListener("click", function () {
    icon.classList.remove("show");
    svgIcon.classList.remove("hide");
    sideMenuBox.classList.add("to-right");
    body.classList.remove("sidebar-open");
  });
});

//...............sidebar accordion..............................//

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accOr) => {
  const icon = accOr.querySelector(".icon");
  const answer = accOr.querySelector(".nav-heading-contents");

  accOr.addEventListener("click", () => {
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      icon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

//.................podcast swiper....................//

new Swiper(".podcastSwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  spaceBetween: 1,
  grabCursor: false,
  centeredSlides: true,
  loop: true,
  lazyLoading: true,
});

//..............sidebar-podcast-slider..........//
new Swiper(".sidebar-podcast", {
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  spaceBetween: 1,
  grabCursor: false,
  centeredSlides: true,
  loop: true,
  lazyLoading: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 15,
      centeredSlides: true,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

//...................track slider.................//

new Swiper(".trackSwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  loop: true,
  lazyLoading: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 1.2,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },

    500: {
      slidesPerView: 1.6,
      spaceBetween: 10,
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    700: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    800: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },

    924: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 3.5,
      spaceBetween: 35,
    },

    1200: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },

    1400: {
      slidesPerView: 3.5,
      spaceBetween: 50,
    },

    1600: {
      slidesPerView: 3.2,
      spaceBetween: 60,
    },
  },
  effect: "creative",
  creativeEffect: {
    perspective: true,
    limitProgress: 8,
    prev: {
      translate: ["-120%", "40px", 0],
      origin: "bottom",
    },
    next: {
      translate: ["120%", "40px", 0],
      origin: "bottom",
    },
  },
});

//............................library slider.................//

new Swiper(".swiperLibraries", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  loop: true,
  lazyLoading: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".nav-right",
    prevEl: ".nav-left",
  },
  pagination: {
    el: ".swiper-custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className}">
        <span class="number">${index + 1}</span>
        <span class="line"></span>
      </div>`;
    },
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 25,
    },

    640: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },

    800: {
      slidesPerView: 3,
      spaceBetween: 25,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    1400: {
      slidesPerView: 4,
      spaceBetween: 50,
    },

    1600: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  },
  effect: "slide",
});

//.......................spotlight options artist......................//

const spotlightButtons = document.querySelectorAll(
  ".spotlight> .spotlight-options> .container .spotlight-options-box> button"
);
const artists = document.querySelectorAll(
  ".spotlight-artist-box .artist-image"
);
const spotlightText = document.querySelectorAll(
  ".spotlight .spotlight-box .spotlight-text"
);
const spotlightMusicBox = document.querySelectorAll(
  ".spotlight .spotlight-music .spotlight-music-box"
);

spotlightButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    spotlightButtons.forEach((btn) => {
      btn.style.color = "white";
    });
    button.style.color = "#ffb300";

    artists.forEach((image) => {
      image.classList.remove("active");
    });
    spotlightText.forEach((text) => {
      text.classList.remove("spotlight-text-active");
    });
    spotlightMusicBox.forEach((musicBox) => {
      musicBox.classList.remove("spotlight-music-box-active");
    });
    artists[index].classList.add("active");
    spotlightText[index].classList.add("spotlight-text-active");
    spotlightMusicBox[index].classList.add("spotlight-music-box-active");
  });
});

//.................................subscribe from validation....................//

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;
  if (name.length === 0) {
    nameError.innerHTML = "Enter full name";
    nameError.classList.remove("success-icon");
    return false;
  }
  if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
    nameError.innerHTML = "Write full name";
    nameError.classList.remove("success-icon"); // Remove green color
    return false;
  }
  nameError.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';
  nameError.classList.add("success-icon"); // Add green color
  return true;
}

function validateEmail() {
  var email = document.getElementById("contact-email").value;
  if (email.length === 0) {
    emailError.innerHTML = "Enter full email";
    emailError.classList.remove("success-icon"); // Remove green color
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "Email invalid";
    emailError.classList.remove("success-icon"); // Remove green color
    return false;
  }
  emailError.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';
  emailError.classList.add("success-icon"); // Add green color
  return true;
}

function validateForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();

  const submitError = document.getElementById("submit-error");

  if (!isNameValid || !isEmailValid) {
    submitError.innerHTML = "Please fix errors to submit";
    return false;
  }

  submitError.innerHTML = "Form submitted successfully!";
  submitError.style.color = "green"; // Success message
  return true;
}

function validateForm() {
  if (!validateName() || !validateEmail()) {
    submitError.innerHTML = "please fix the error to submit";

    submitError.style.display = "block";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}

//.......................................loading..............................//

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("body").style.overflow = "hidden";

  setTimeout(function () {
    document.querySelector(".loading").classList.add("hide-loading");
    document.querySelector("body").style.overflow = "auto";
  }, 3400);
});

//.............................scrollReveal......................//
var h1 = {
  distance: "50%",
  delay: 3600,
  origin: "left",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".h1", h1);

var p = {
  distance: "50%",
  delay: 3700,
  origin: "left",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".p", p);

var heroBtn = {
  distance: "50%",
  delay: 3800,
  origin: "left",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".hero-btn-box", heroBtn);

// hero back image

var heroBackImg = {
  delay: 3800,
  rotate: { x: 0, y: 180, z: 0 },
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".heroBackImg", heroBackImg);

var trackH1 = {
  delay: 300,
  distance: "40%",
  origin: "top",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
  reset: true,
};

ScrollReveal().reveal(".track-h1", trackH1);
ScrollReveal().reveal(".libraries-h1", trackH1);
ScrollReveal().reveal(".trending-h1", trackH1);
ScrollReveal().reveal(".subsH1", trackH1);

var trendingBtn = {
  delay: 300,
  distance: "40%",
  origin: "bottom",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
  reset: true,
};
ScrollReveal().reveal(".t-btn", trendingBtn);
ScrollReveal().reveal(".inputBtn", trendingBtn);
ScrollReveal().reveal(".footerBtn", trendingBtn);

// spotlight artist buttons

var spotlightBtn1 = {
  delay: 300,
  distance: "40%",
  origin: "bottom",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
  reset: true,
};
ScrollReveal().reveal(".spotlightBtn-1", spotlightBtn1);

var spotlightBtn2 = {
  delay: 400,
  distance: "40%",
  origin: "bottom",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
  reset: true,
};
ScrollReveal().reveal(".spotlightBtn-2", spotlightBtn2);

var spotlightBtn3 = {
  delay: 500,
  distance: "40%",
  origin: "bottom",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: false,
  reset: true,
};
ScrollReveal().reveal(".spotlightBtn-3", spotlightBtn3);

// end spotlight artist buttons

var subsImg = {
  delay: 300,
  rotate: { x: 0, y: 180, z: 0 },
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  viewFactor: 0.2,
  reset: true,
  mobile: true,
};

ScrollReveal().reveal(".subs-img", subsImg);

// for trending boxes..

var trendingBox1 = {
  delay: 450,
  distance: "40%",
  origin: "left",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
  reset: false,
};
ScrollReveal().reveal(".trending-box-1", trendingBox1);

var trendingBox2 = {
  delay: 400,
  distance: "40%",
  origin: "left",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
  reset: false,
};
ScrollReveal().reveal(".trending-box-2", trendingBox2);

var trendingBox3 = {
  delay: 350,
  distance: "10%",
  origin: "top",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
  reset: false,
};
ScrollReveal().reveal(".trending-box-3", trendingBox3);

var trendingBox4 = {
  delay: 400,
  distance: "40%",
  origin: "right",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
  reset: false,
};
ScrollReveal().reveal(".trending-box-4", trendingBox4);

var trendingBox5 = {
  delay: 450,
  distance: "40%",
  origin: "right",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
  reset: false,
};
ScrollReveal().reveal(".trending-box-5", trendingBox5);

//....................scroll to top ................//

const btn = document.querySelector(".top-btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.style.opacity = "1";
    btn.style.visibility = "visible";
    btn.style.bottom = "6%";
  } else {
    btn.style.opacity = "0";
    btn.style.visibility = "hidden";
    btn.style.bottom = "80%";
  }
});
btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//.......................modal offer countdown...................................//

let input = document.querySelectorAll(".timer-box > input");

function clock() {
  const old = "30 April 2025 12:00 am";
  const oldDt = new Date(old);
  const newDt = new Date();
  let diff = (oldDt - newDt) / 1000;

  if (diff < 0) return;
  input[0].value = Math.floor(diff / 3600 / 24);
  input[1].value = Math.floor((diff / 3600) % 24);
  input[2].value = Math.floor((diff / 60) % 60);
  input[3].value = Math.floor(diff % 60);
}
clock();
setInterval(() => {
  clock();
}, 1000);

//................................modal popup.......................//

setTimeout(() => {
  let modal = document.querySelector(".modal");
  modal.classList.add("show");
}, 25000);

//............................modal close..........................//

let closeModal = document.querySelector(".close-box> .ri-close-circle-fill");
let modal = document.querySelector(".modal");
let modalBox = document.querySelector(".modal-box");

closeModal.addEventListener("click", function () {
  modal.classList.remove("show");
});

modal.addEventListener("click", function (event) {
  if (!modalBox.contains(event.target)) {
    modal.classList.remove("show");
  }
});
