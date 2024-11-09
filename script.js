const input = document.querySelector(".input-task");
const errorMsg = document.querySelector(".error-message");
const addBtn = document.querySelector("#add-btn");
const toDoList = document.querySelector("#to-do-list-container");

const listContainer = document.createElement("ul");
listContainer.classList.add("list");
listContainer.style.display = "none";
toDoList.appendChild(listContainer);

errorMsg.style.display = "none";
window.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);

addBtn.addEventListener("click", () => {
  const val = input.value.trim();

  if (!val) {
    errorMsg.style.display = "block";
    return;
  }

  addListItem(val);
  saveTasksToLocalStorage();
  input.value = "";
});

function addListItem(value) {
  const li = document.createElement("li");
  const listText = document.createElement("input");
  listText.classList.add("task-name");
  listText.readOnly = true;
  listText.type = "text";
  listText.value = value;

  const setDiv = document.createElement("div");
  setDiv.classList.add("set-list");

  const editButton = createButton("ri-pencil-line", "edit");
  const saveButton = createButton("ri-save-line", "save", { display: "none" });
  const deleteButton = createButton("ri-delete-bin-5-line", "delete");

  setDiv.append(editButton, saveButton, deleteButton);

  li.append(listText, setDiv);
  listContainer.appendChild(li);
  listContainer.style.display = "flex";
}

function createButton(iconClass, actionClass, style = {}) {
  const button = document.createElement("i");
  button.classList.add(iconClass, actionClass);
  Object.assign(button.style, style);
  return button;
}

listContainer.addEventListener("click", (e) => {
  const button = e.target;
  const li = button.closest("li");

  if (!li) return;
  const listText = li.querySelector(".task-name");
  const editButton = li.querySelector(".edit");
  const saveButton = li.querySelector(".save");

  if (button.classList.contains("edit")) {
    listText.readOnly = false;
    listText.classList.add("editable");
    editButton.style.display = "none";
    saveButton.style.display = "inline-block";
  } else if (button.classList.contains("save")) {
    listText.readOnly = true;
    listText.classList.remove("editable");
    editButton.style.display = "inline-block";
    saveButton.style.display = "none";
    saveTasksToLocalStorage();
  } else if (button.classList.contains("delete")) {
    li.remove();
    saveTasksToLocalStorage();
    if (listContainer.children.length === 0) {
      listContainer.style.display = "none";
    }
  }
});

function saveTasksToLocalStorage() {
  const tasks = [];

  document.querySelectorAll(".task-name").forEach((task) => {
    tasks.push(task.value);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  tasks.forEach((task) => addListItem(task));
  if (tasks.length > 0) {
    listContainer.style.display = "flex";
  }
}
