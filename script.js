const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', event => {
  event.preventDefault();
  const text = todoInput.value.trim();
  if (!text) {
   return;
  }

  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  const todoCheckbox = document.createElement('input');
  todoCheckbox.type = 'checkbox';
  todoCheckbox.className = 'todo-checkbox';
  todoCheckbox.addEventListener('change', () => {
    listItem.classList.toggle('completed', todoCheckbox.checked);
  });

  const todoText = document.createElement('p');
  todoText.className = 'todo-text';
  todoText.textContent = text;
  todoText.addEventListener('click', () => {
    todoCheckbox.checked = !todoCheckbox.checked;
    listItem.classList.toggle('completed', todoCheckbox.checked);
  });

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });

  listItem.appendChild(todoCheckbox);
  listItem.appendChild(todoText);
  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);

  todoInput.value = '';
  todoInput.focus();
});
