// scripts.js

document.querySelectorAll('a.new_tab').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });



const currentPage = window.location.pathname.split("/").pop() || "index.html";


document.querySelectorAll(".nav-btn").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
    }
  });