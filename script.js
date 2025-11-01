// pega todos os pinos dentro do SVG
document.addEventListener("DOMContentLoaded", () => {
  const svg = document.getElementById("island-svg");
  if(!svg) return;

  const pins = svg.querySelectorAll(".pin");

  pins.forEach(pin => {
    // clicando: navega para data-link
    pin.addEventListener("click", () => {
      const link = pin.getAttribute("data-link");
      if (link) window.location.href = link;
    });

    // teclado: Enter / Space também devem ativar o link
    pin.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        pin.click();
      }
    });

    // acessibilidade: título/lable visível via aria-label já no SVG, mas podemos mostrar tooltip programático se quiser
    pin.addEventListener("mouseover", () => {
      pin.setAttribute("aria-pressed", "false");
    });
  });

  // opcional: animação da trilha (give the trail a moving dashed effect)
  const trails = svg.querySelectorAll(".trail");
  trails.forEach((t) => {
    const len = t.getTotalLength();
    t.style.strokeDasharray = "8 8";
    t.style.strokeDashoffset = "0";
    // simple loop animation with JS
    let offset = 0;
    function animateDash(){
      offset = (offset - 1) % 10000;
      t.style.strokeDashoffset = offset;
      requestAnimationFrame(animateDash);
    }
    animateDash();
  });
});
