let string = "";

let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

gsap.from("body>h1", {
  y: -500,
  rotate: "20deg",
  opacity: 0,
  scale: 5,
  duration: 1,
});
