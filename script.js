import {
    $,
    getId,
    getClass,
    getTag
} from "./main-js.js"

const addToDoButton = getId('add')
const toDoes = getId('todoes-container')
const inputElem = getId('input')
const clearInput = getId('empty')
const colors = Array.from(getClass('.color'))
const inputElemStyles = getComputedStyle(inputElem)

window.addEventListener('load', event => {
    let localIndex = null
    let todoInfo = null
    console.log(localStorage.length);
    for (let index = 0; index < localStorage.length; index++) {
        localIndex = 'todo' + index
        todoInfo = JSON.parse(localStorage.getItem(localIndex))
        console.log(todoInfo);
        addTodoFunction(todoInfo.text, todoInfo.color, localIndex)
    }
})

colors.forEach(item => item.addEventListener("click", (event) => inputElem.style.backgroundColor = event.target.style.backgroundColor))

clearInput.addEventListener('click', clearInputFunc)
addToDoButton.addEventListener('click', () => addTodoFunction(inputElem.value, inputElemStyles.backgroundColor, 'todo' + localStorage.length))
$.body.addEventListener('keypress', (event) => event.keyCode == 13 && addTodoFunction(inputElem.value, inputElemStyles.backgroundColor, 'todo' + localStorage.length))

function clearInputFunc() {
    inputElem.value = ""
    inputElem.style.backgroundColor = ""
}

function addTodoFunction(text, color, index) {
    if (!text) {
        return;
    }
    const textAndColor = {text: text, color: color}
    localStorage.setItem(index, JSON.stringify(textAndColor))
    toDoes.insertAdjacentHTML(
        'beforeend',
        `<li class="to-do" style="background-color: ${color}">
          ${text}
          <i class="fa fa-minus-square remove-todo"></i>
        </li>`
    )
    clearInputFunc()
}

toDoes.addEventListener('click', (event) => (event.target.tagName === "I") && event.target.parentElement.remove())