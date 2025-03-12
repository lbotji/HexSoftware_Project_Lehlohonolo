const inputBox = document.querySelector("inputBox");
const addBtn = document.querySelector("addBtn");
const todoList = document.querySelector("todoList");

const addTodo = ()=>{
  const inputText = inputBox.ariaValueMax.trim();
  if(inputText.length<=0){
    alert("You must write something in your to do");
  }

  const li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = inputText;
  li.appendChild(p);

  todoList.appendChild(li);
  inputBox.value = "";
}


addBtn.addEventListener("click , addTodo")