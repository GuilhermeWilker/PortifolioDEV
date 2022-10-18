let count = 1;
document.getElementById("radio1").checked = true;
setInterval(function () {
  slideImg();
}, 2500);

function slideImg() {
  count++;
  if (count > 2) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}

// função do menu responsivo
function menuAbrir() {
  let menuAbrir = document.querySelector("nav ul");

  if (menuAbrir.classList.contains("open")) {
    menuAbrir.classList.remove("open");
  } else {
    menuAbrir.classList.add("open");
  }
}

// função botões
function redirecionarPageProjeto() {
  window.location.href = "projetos.html";
}
