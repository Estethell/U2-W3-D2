const testo = document.getElementById("testo");
const saveBtn = document.getElementById("btn-save");
const cancelBtn = document.getElementById("btn-cancella");
const lista = document.getElementById("ul");

const save = (e) => {
  e.preventDefault();
  const content = testo.value;
  localStorage.setItem("testo-memory", content);
  alert("salvato!");
  const li = document.createElement("li");
  li.innerText = testo.value;
  lista.appendChild(li);
};
const reset = () => {
  const confirmed = confirm("resettare la memoria?");
  if (confirmed) {
    testo.value = "";
    localStorage.removeItem(testo - memory);
    lista.innerHTML = "";
  }
};

window.onload = () => {
  saveBtn.onclick = save;
};
