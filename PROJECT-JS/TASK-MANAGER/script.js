const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText === '') {
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="done-button">Done</button>
    <button class="edit-button">Edit</button>
    <button class="delete-button">Delete</button>
  `;
  taskList.appendChild(li);

  newTaskInput.value = '';

  const doneButton = li.querySelector('.done-button');
  const editButton = li.querySelector('.edit-button');
  const deleteButton = li.querySelector('.delete-button');

  doneButton.addEventListener('click', () => markTaskAsDone(li));
  editButton.addEventListener('click', () => editTask(li));
  deleteButton.addEventListener('click', () => deleteTask(li));
}

function markTaskAsDone(taskElement) {
  taskElement.classList.toggle('done');
}

function editTask(taskElement) {
  const taskTextElement = taskElement.querySelector('span');
  const newTaskText = prompt('Edit task:', taskTextElement.textContent);

  if (newTaskText !== null && newTaskText.trim() !== '') {
    taskTextElement.textContent = newTaskText.trim();
  }
}

function deleteTask(taskElement) {
  taskElement.remove();
}
