function addTask() {
  const taky = document.getElementById("taky");
  const taskList = document.getElementById("taskList");

  if (taky.Value !== "") {
    const task = document.createElement("li");
    const checkbox = document.createElement("input");
    const deletBtn = document.createElement("button");
    deletBtn.innerHTML = "Delete";
    deletBtn.addEventListener("click", function () {
      task.remove();
    });
    checkbox.type = "checkbox";
    task.appendChild(checkbox);
    task.innerHTML += taky.value;
    task.appendChild(deletBtn);
    taskList.appendChild(task);
    taky.value = "";
  }
}
