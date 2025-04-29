function checkInput() {
  const input = document.getElementById("interestInput");
  const addButton = document.getElementById("addButton");
  addButton.disabled = input.value.trim() === "";
}

function addInterest() {
  const input = document.getElementById("interestInput");
  const list = document.getElementById("interestList");
  if (input.value.trim() !== "") {
    const item = document.createElement("div");
    item.className = "interest-item";
    item.textContent = input.value;
    list.appendChild(item);
    input.value = "";
    checkInput(); // Para desabilitar novamente após adicionar
  }
}

function clearList() {
  document.getElementById("interestList").innerHTML = "";
}
