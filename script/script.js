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

let nav = document.getElementById("close");
let navbar = document.getElementById("open");
let link =document.querySelector(".header nav");
let body=document.querySelector("body");
function show() {
  if (window.innerWidth <= 991) {
    nav.style.display = "block";
    navbar.style.display = "none";
    link.style.display="flex";
    body.style.overflow="hidden";
  }
  
}

function cancel() {
  if (window.innerWidth <= 991) {
    nav.style.display = "none";
    navbar.style.display = "block";
    link.style.display="none";
        body.style.overflow="";
  }

}
window.addEventListener("resize", function () {
  if (window.innerWidth > 991) {
    nav.style.display = "";
    navbar.style.display = "";
    link.style.display="";
  }
}); 


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
