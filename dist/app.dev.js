"use strict";

// SELECTORS
var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list"); // EVENT LISTENERS

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck); // FUNCTIONS

function addTodo(event) {
  event.preventDefault(); // Todo DIV

  var todoDiv = document.createElement("div");
  todoDiv.classList.add("todo"); // create li 

  var newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo); // check button 

  var completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton); // bin button

  var trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton); // AJOUTER TODO A TODO LIST

  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(e) {
  var item = e.target; // DELETE TO DO 

  if (item.classList[0] === "trash-btn") {
    var todo = item.parentElement;
    todo.remove();
  }
}