tailwind.config = {
  darkMode: "class",
};

const toggle = document.getElementById("theme-toggle");
const html = document.documentElement;

function setTheme(mode) {
  if (mode === "dark") {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

toggle.addEventListener("click", () => {
  const current = html.classList.contains("dark") ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  setTheme(next);
});

// Apply saved theme on load
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

const datatable = new DataTable("#exTable", {
  perPage: 15,
  perPageSelect: [5, 10, 15, 30, 100],
  labels: {
    placeholder: "🔍 ابحث...",
    perPage: "{select}",
    noRows: "لا توجد سجلات",
    info: "{rows} سجل",
  },
});
