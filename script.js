document.querySelectorAll(".map-point").forEach(point => {
  point.addEventListener("click", () => {
    const link = point.getAttribute("data-link");
    window.location.href = link;
  });
});
