const userMenuBtn = document.getElementById("user-menu-btn");
const userDropdown = document.getElementById("user-dropdown");
const toggleBtn = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

userMenuBtn.addEventListener("click", () => {
  userDropdown.classList.toggle("hidden");
});

// إغلاق القائمة عند الضغط خارجها
document.addEventListener("click", (e) => {
  if (!userMenuBtn.contains(e.target) && !userDropdown.contains(e.target)) {
    userDropdown.classList.add("hidden");
  }
});

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
  sidebar.classList.add("translate-x-full");
  overlay.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("aside a[href]");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = this.getAttribute("href");

      // تجاهل الروابط التي تبدأ بـ "#"
      if (target.startsWith("#")) return;

      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = target;
      }, 400);
    });
  });
});

function filterTable(columnIndex, query) {
  const table = document.getElementById("exTable");
  const rows = table
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr");
  query = query.toLowerCase();

  for (let row of rows) {
    const cell = row.getElementsByTagName("td")[columnIndex];
    if (cell) {
      const text = cell.textContent || cell.innerText;
      row.style.display = text.toLowerCase().includes(query) ? "" : "none";
    }
  }
}
