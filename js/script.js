const txtTarefa = document.querySelector("#txtTarefa");
const btnAdicionar = document.querySelector("#btnAdicionar");
const btnTema = document.querySelector("#btnTema");
const listaTarefas = document.querySelector("#listaTarefas");
const contadorTarefas = document.querySelector("#contadorTarefas");

let totalTarefas = 0;

btnAdicionar.addEventListener("click", () => {
  const textoTarefa = txtTarefa.value.trim();
  if (textoTarefa === "") return;

  totalTarefas++;
  const horarioAtual = new Date().toLocaleTimeString();
  const itemLista = document.createElement("li");
  itemLista.textContent = `${totalTarefas}. ${textoTarefa} – ${horarioAtual}`;

  listaTarefas.appendChild(itemLista);
  txtTarefa.value = "";

  if (listaTarefas.children.length > 10) {
    listaTarefas.removeChild(listaTarefas.firstElementChild);
  }

  contadorTarefas.textContent = listaTarefas.children.length;
});

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("escuro");
  document.body.classList.toggle("claro");
});