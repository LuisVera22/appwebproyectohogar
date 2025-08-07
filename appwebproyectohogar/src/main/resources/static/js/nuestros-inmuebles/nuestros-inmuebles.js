document.getElementById("moreFilters").addEventListener("click", function () {
    const sidebar = document.getElementById("filterSidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("show");
    overlay.classList.toggle("show");
});

document.getElementById("overlay").addEventListener("click", function () {
    const sidebar = document.getElementById("filterSidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.remove("show");
    overlay.classList.remove("show");
});