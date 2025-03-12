const inputBox = document.getElementById("inputBox");
const listContainer = document.querySelector("list-container");


function addtask(){
  if(inputBox.value === ''){
}
else{
  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span)
}

inputBox.value = '';
saveData();

}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }
  else{
    if(e,target.tagName === "SPAN"){
      e.target.parentElement.remove();
    }
  }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
  
showTask();