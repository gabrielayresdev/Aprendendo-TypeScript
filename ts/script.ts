// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

const btn = document.querySelector("button");

function handleClick(event: PointerEvent) {
  const target = event.currentTarget;
  const nav = document.getElementById("nav");
  if (target instanceof HTMLElement) {
    nav?.classList.toggle("active");
    const active = nav?.classList.contains("active");
    if (active) {
      target.setAttribute("aria-expanded", "true");
      target.setAttribute("aria-label", "Fechar Menu");
    } else {
      target.setAttribute("aria-expanded", "false");
      target.setAttribute("aria-label", "Abrir Menu");
    }
  }
}

if (btn instanceof HTMLElement)
  // querySelector retorna um Element, por isso, o evento de pointerdown não pode ser adicionado
  btn?.addEventListener("pointerdown", handleClick);
