
// // const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
// // styleSwitcherToggle.addEventListener("click", ()  {
// //     document.querySelector(".style-switcher").classList.toggle("open")
// // })



// // Toggling the style switcher (open/close the style switcher panel)
// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
// styleSwitcherToggle.addEventListener("click", () => {
//     document.querySelector(".style-switcher").classList.toggle("open");
// });

// // Hide the style switcher on scroll
// window.addEventListener("scroll", () => {
//     if (document.querySelector(".style-switcher").classList.contains("open")) {
//         document.querySelector(".style-switcher").classList.remove("open");
//     }
// });

// // Theme color change functionality
// const alternateStyles = document.querySelectorAll(".alternate-style");
// function setActiveStyle(color) {
//     alternateStyles.forEach((style) => {
//         if (color === style.getAttribute("title")) {
//             style.removeAttribute("disabled");
//         } else {
//             style.setAttribute("disabled", "true");
//         }
//     });
// }

// // Dark and light mode toggle
// const dayNight = document.querySelector(".day-night");
// dayNight.addEventListener("click", () => {
//     dayNight.querySelector("i").classList.toggle("fa-sun");
//     dayNight.querySelector("i").classList.toggle("fa-moon");
//     document.body.classList.toggle("dark");
// });

// // Apply the correct icon when page loads based on the current mode
// window.addEventListener("load", () => {
//     if (document.body.classList.contains("dark")) {
//         dayNight.querySelector("i").classList.add("fa-sun");
//     } else {
//         dayNight.querySelector("i").classList.add("fa-moon");
//     }
// });
