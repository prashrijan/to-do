const input = document.querySelector(".input-task");

const errorMsg = document.querySelector(".error-message");

const addBtn = document.querySelector("#add-btn");

const toDoList = document.querySelector("#to-do-list-container");

const listContainer = document.createElement("ul");
listContainer.classList.add("list");

addBtn.addEventListener("click", (e) => {
  errorMsg.style.display = "none";
  const val = input.value;

  if (!val) {
    errorMsg.style.display = "block";
    return;
  }

  let lists = createlist(val);

  if (!lists) return;

  toDoList.appendChild(lists);
});

function createlist(value) {
  const li = document.createElement("li");

  const listText = document.createElement("input");
  listText.readOnly = true;
  listText.type = "text";
  listText.value = value;

  const setDiv = document.createElement("div");
  setDiv.classList.add("set-list");

  const editButton = document.createElement("i");
  editButton.addEventListener("click", () => {
    listText.readOnly = false;
  });

  const deleteButton = document.createElement("i");

  deleteButton.addEventListener("click", (e) => {
    const element = e.target.parentElement.parentElement;
    element.remove();
  });

  editButton.classList.add("ri-pencil-line");
  editButton.classList.add("edit");

  deleteButton.classList.add("ri-delete-bin-5-line");
  deleteButton.classList.add("delete");

  setDiv.appendChild(editButton);
  setDiv.appendChild(deleteButton);

  li.appendChild(listText);
  li.appendChild(setDiv);

  listContainer.appendChild(li);
  return listContainer;
}
