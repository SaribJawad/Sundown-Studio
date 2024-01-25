const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

var fixedImage = document.querySelector(".fixed-image");
var elemContainer = document.querySelector(".elem-container");
elemContainer.addEventListener("mouseenter", () => {
  fixedImage.style.display = "block";
});

elemContainer.addEventListener("mouseleave", () => {
  fixedImage.style.display = "none";
});

let elem = document.querySelectorAll(".elem");
elem.forEach((e) => {
  e.addEventListener("mousemove", () => {
    fixedImage.style.backgroundImage = `url(${e.getAttribute("data-image")})`;
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
});

const data = [
  {
    title: "Design",
    desc: "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",
    image:
      "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg",
  },
  {
    title: "Project",
    desc: "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",
    image:
      "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp",
  },
  {
    title: "Execution",
    desc: "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.",
    image:
      "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg",
  },
];

var h1s = document.querySelectorAll(".btns h1");
var output = document.querySelector("#output");
var pro = document.querySelector("#heading-img");
h1s.forEach(function (h1, indx) {
  h1.addEventListener("click", function () {
    changeColor(this);
    output.textContent = `${data[indx].desc}`;
    pro.style.backgroundImage = `url(${data[indx].image})`;
  });
});

function changeColor(btn) {
  var btns = document.querySelectorAll("h1");
  btns.forEach(function (b) {
    b.classList.remove("clic");
  });
  btn.classList.add("clic");
}

var loader = document.querySelector("#loader");
setTimeout(() => {
  loader.style.top = "-100%";
}, 4000);
