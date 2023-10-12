export default function scroll() {
  // Evento de rolagem
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      // Rolar para a esquerda
      const scrollcontainer = document.querySelector(
        ".scroll-container"
      ) as HTMLElement;

      scrollcontainer.scrollLeft -= 50;
    } else if (event.key === "ArrowRight") {
      // Rolar para a direita
      const scrollcontainer = document.querySelector(
        ".scroll-container"
      ) as HTMLElement;

      scrollcontainer.scrollLeft += 50;
    }
  });
}
