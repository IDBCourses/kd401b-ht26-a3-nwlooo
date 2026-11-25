const link = document.querySelector("#palette");
const button = document.querySelector("#theme");
const type = document.querySelector("#type");
const readmodeButton = document.querySelector("#readingmode");

button.addEventListener("click", function () {
  const dark = link.getAttribute("href") === "dark.css";
  link.setAttribute("href", dark ? "light.css" : "dark.css");
  if (dark) {
    button.textContent = "Dark mode";
  } else {
    button.textContent = "Light mode";
  }
});

readmodeButton.addEventListener("click", function() {
  const read = type.getAttribute("href") === "reading.css";
  type.setAttribute("href", read ? "type.css" : "reading.css");
  if (read) {
    readmodeButton.textContent = "Reading mode: off";
  } else {
    readmodeButton.textContent = "Reading mode: on";
  }
});

