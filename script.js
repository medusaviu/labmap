// script.js - lógica de navegação e animações leves
document.addEventListener("DOMContentLoaded", () => {
  const svg = document.getElementById("island-svg");
  if (!svg) return;

  const pins = svg.querySelectorAll(".pin");

  pins.forEach(pin => {
    // clique => navega
    pin.addEventListener("click", () => {
      const link = pin.getAttribute("data-link");
      if (link) window.location.href = link;
    });

    // teclado: Enter / Space ativam
    pin.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        pin.click();
      }
    });

    // acessibilidade: mostrar label via aria-live (opcional)
    pin.addEventListener("focus", () => {
      // nada extra por enquanto
    });
  });

  // animação sutil das trilhas (dash offset)
  const trails = svg.querySelectorAll(".trail");
  trails.forEach(t => {
    t.style.strokeDasharray = "8 8";
    let offset = 0;
    function animateDash() {
      offset = (offset - 0.7) % 10000;
      t.style.strokeDashoffset = offset;
      requestAnimationFrame(animateDash);
    }
    animateDash();
  });
});
