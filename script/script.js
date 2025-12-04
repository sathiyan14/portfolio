window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");

  if (!header) return;
  // console.log('windo', window.scrollY) // prevents the error

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    header.style.backgroundColor = "skyblue";
  } else {
    header.classList.remove("scrolled");
    header.style.backgroundColor = "";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#skill-slider", {
    type: "loop",
    arrows: false,
    pagination: false,
    drag: false, // no manual drag
    autoWidth: true, // cards can have their own width

    autoScroll: {
      speed: 1.2, // change speed as you like
      pauseOnHover: true, // pause when mouse enters slider
      pauseOnFocus: false,
    },
  });

  // IMPORTANT: mount with Extensions when using CDN
  splide.mount(window.splide.Extensions);
});

const track = document.querySelector(".skills-track");

if (track) {
  track.addEventListener("mouseover", () => {
    track.style.animationPlayState = "paused";
  });

  track.addEventListener("mouseout", () => {
    track.style.animationPlayState = "running";
  });
}

// document.addEventListener("DOMContentLoaded", function () {
//   let skills = [
//     "../images/html.png",
//     "../images/css.png",
//     "../images/js.png",
//     "../images/laravel.png",
//     "../images/sql.png",
//     "../images/java.png",
//     "../images/spring.png"
//   ];

//   let i = 0;
//   const skillImg = document.getElementById("skill1");

//   // Set first image
//   skillImg.src = skills[i];

//   // Change image every time animation ends
//   skillImg.addEventListener("animationiteration", function () {
//     i = (i + 1) % skills.length;
//     skillImg.src = skills[i];
//   });
// });

function sendMail(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let gmailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    "&to=" +
    encodeURIComponent("sathiyanp4@gmail.com") +
    "&su=" +
    encodeURIComponent("New message from " + name) +
    "&body=" +
    encodeURIComponent(
      "Name: " +
        name +
        "\n" +
        "Email: " +
        email +
        "\n\n" +
        "Message:\n" +
        message
    );

  window.open(gmailUrl, "_blank");

  // Show popup
  document.getElementById("successPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("successPopup").style.display = "none";
}
