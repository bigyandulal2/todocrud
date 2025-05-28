const form = document.getElementById("todo-form");
const formInput = document.querySelector("input");
const todolist = document.getElementById("todo-list");
const updateBtn = document.getElementById("update");
const submitBtn = document.getElementById("submit-btn");
updateBtn.style.display = "none";
let currentEdit = null;
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("i am here");
  if (currentEdit) {
    handleUpdate();
    return;
  }
  const itemlist = document.createElement("li");
  const p = document.createElement("p");
  itemlist.classList.add("list-item");
  const add = document.createElement("button");
  const remove = document.createElement("button");
  if (!event.target.userinput.value.trim()) {
    alert("please write something ");
    return;
  }

  p.textContent = event.target.userinput.value;
  itemlist.appendChild(p);
  itemlist.appendChild(add);
  itemlist.appendChild(remove);
  add.textContent = "update";
  add.classList.add("btn-add");
  remove.textContent = "remove";
  remove.classList.add("btn-remove");
  todolist.appendChild(itemlist);

  event.target.userinput.value = "";
  remove.addEventListener("click", function (event) {
    event.stopPropagation();
    itemlist.remove();
  });
  add.addEventListener("click", function (e) {
    e.stopPropagation();
    currentEdit = itemlist;
    formInput.value = p.textContent;
    formInput.focus();

    submitBtn.style.display = "none";
    updateBtn.style.display = "inline-block";
  });

  formInput.value = "";
});

function handleUpdate() {
  if (!formInput.value.trim()) {
    alert("please enter the updated value");
    return;
  }
  const p = currentEdit.querySelector("p");
  p.textContent = formInput.value.trim();
  resetForm();
}

function resetForm() {
  currentEdit = null;
  formInput.value = "";
  submitBtn.style.display = "inline-block";
  updateBtn.style.display = "none";
}
