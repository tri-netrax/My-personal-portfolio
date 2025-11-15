/* SIDEBAR */
function toggleSidebar() {
  const bar = document.getElementById("sidebar");
  bar.style.right = bar.style.right === "0px" ? "-280px" : "0px";
}

/* TYPEWRITER */
const textArray = [
  "Full Stack Developer",
  "Frontend Developer",
  "MERN Stack Developer",
];

let index = 0;
let charIndex = 0;
const speed = 100;
const typewriter = document.querySelector(".typewriter");

function typeEffect() {
  if (charIndex < textArray[index].length) {
    typewriter.innerHTML += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(eraseEffect, 1200);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typewriter.innerHTML = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(typeEffect, 300);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);


/* CONTACT FORM (Demo Only) */
const form = document.querySelector(".contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const data = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: data,
    headers: { "Accept": "application/json" }
  })
  .then(response => {
    if (response.ok) {
      status.innerText = "Message sent successfully!";
      form.reset();
    } else {
      status.innerText = "Oops! Something went wrong.";
    }
  })
  .catch(() => {
    status.innerText = "Oops! Something went wrong.";
  });
});











// const form = document.querySelector(".contact-form");
const statusMsg = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const res = await fetch(form.action, {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  });

  if (res.ok) {
    statusMsg.textContent = "Message Sent Successfully ✔";
    statusMsg.classList.add("show");

    form.reset();

    setTimeout(() => {
      statusMsg.classList.remove("show");
    }, 3000);
  } else {
    statusMsg.textContent = "Something went wrong!";
    statusMsg.classList.add("show");
  }
});





// =====================
// Smooth scrolling + active highlight + auto close sidebar
// Smooth scrolling + active highlight + auto close sidebar

const navLinks = document.querySelectorAll(".nav-links a");
const sideLinks = document.querySelectorAll(".sidebar a");
const sections = document.querySelectorAll("section");
const sidebar = document.getElementById("sidebar");

// ACTIVE NAV-LINK ON SCROLL
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  // desktop nav highlight
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

  // sidebar highlight
  sideLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// SIDEBAR AUTO CLOSE WHEN CLICK
// sideLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     toggleSidebar();
//   });
// });

// // SIDEBAR TOGGLE FUNCTION (if not added)
// function toggleSidebar() {
//   sidebar.classList.toggle("active");
// }










// contact================
// const form = document.querySelector(".contact-form");
const statusTxt = document.querySelector("#form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: data,
    headers: { "Accept": "application/json" }
  })
  .then(() => {
    statusTxt.textContent = "Message Sent Successfully!";
    statusTxt.classList.add("show");
    form.reset();

    setTimeout(() => {
      statusTxt.classList.remove("show");
    }, 3000);
  })
  .catch(() => {
    statusTxt.textContent = "Something went wrong!";
    statusTxt.classList.add("show");
  });
});










