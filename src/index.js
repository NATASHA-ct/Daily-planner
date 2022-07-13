import _ from "lodash";
import "./style.css";

// Array of Objects with projects area properties
const listItems = [
  {
    description: "wash the dishes",
    completed: "unchecked",
    index: 0,
  },

  {
    description: "complete To Do list project",
    completed:"unchecked",
    index: 1,
  },
  
];

const toDoList = document.querySelector('.main');

const TASKS = () => {
  let taskList = "";

  for (let taskIndex = 0; taskIndex < listItems.length; 
  taskIndex += 1) {

    const infor = `
        <div class="list-item" > 

        <input type="checkbox" name="task" value="task" ${listItems[taskIndex].completed}>  
        <label for="item">${listItems[taskIndex].description}</label>

        <span class="material-symbols-outlined">
        more_vert</span>            
        </div>
            `;
    taskList += infor;
   
  }
   
  toDoList.innerHTML = taskList;
  console.log(toDoList);
};
TASKS();
