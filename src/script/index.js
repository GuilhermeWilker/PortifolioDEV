function menuAbrir() {
  let menuAbrir = document.querySelector("nav ul");

  if (menuAbrir.classList.contains("open")) {
    menuAbrir.classList.remove("open");
  } else {
    menuAbrir.classList.add("open");
  }
}

function redirecionarPageProjeto() {
  window.location.href = "projetos.html";
}
