let d = new Date();
let year = d.getFullYear();
document.getElementById("year").textContent = year;

let modified = document.lastModified;
document.getElementById("updated").textContent = modified;