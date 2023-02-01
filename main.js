// 初始變數
const todoList = document.querySelector("#my-todo")
const doneList = document.querySelector("#my-done")
const main = document.querySelector(".main")
const addBtn = document.querySelector("#add-btn")
const input = document.querySelector("#new-todo")

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

// Create
const createItem = (text) => {
  const newItem = document.createElement("li")
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa-solid fa-trash-can"></i>
  `
  todoList.appendChild(newItem)
}

// Add
const addItem = () => {
    // 避免空字串
    const inputValue = input.value
    if(!inputValue.trim()) {
        return alert("請輸入內容唷~")
    } else {
        createItem(inputValue)
        input.value = ''
    }
}

// Delete
const deleteItem = (item) => {
  if (item.target.classList.contains("delete")) {
    item.target.parentElement.remove()
  } 
}

// Done
const doneItem = (item) => {
  console.log(item.target);
  if(item.target.tagName === "LABEL"){
    item.target.parentNode.remove()
    const newItem = document.createElement("li")
    newItem.innerHTML = `
      <label for="done" class="checked">${item.target.innerText}</label>
      <i class="delete fa-solid fa-trash-can"></i>
    `
    doneList.appendChild(newItem)
  } 
}

// Import default data
for (let todo of todos) {
  createItem(todo)
}

// Add Btn
input.addEventListener("keydown", input => {
    if (input.keyCode === 13) {
        addItem()
    }
})

addBtn.addEventListener("click", addItem)

// Done Btn
todoList.addEventListener('click', item => doneItem(item))

// Delete Btn
main.addEventListener("click", item => deleteItem(item))