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

colors.forEach(item => item.addEventListener("click", (event) => inputElem.style.backgroundColor = event.target.style.backgroundColor))

clearInput.addEventListener('click', clearInputFunc)
addToDoButton.addEventListener('click', addTodoFunction)
$.body.addEventListener('keypress', (event) => event.keyCode == 13 && addTodoFunction())

function clearInputFunc() {
    inputElem.value = ""
    inputElem.style.backgroundColor = ""
}

function addTodoFunction() {
    if (!inputElem.value) {
        return;
    }

    toDoes.insertAdjacentHTML(
        'beforeend',
        `<li class="to-do" style="background-color: ${inputElemStyles.backgroundColor}">
          ${inputElem.value}
          <i class="fa fa-minus-square remove-todo"></i>
        </li>`
      )

    clearInputFunc()
}

toDoes.addEventListener('click', (event) => {
    if (event.target.tagName === "I") {
        event.target.parentElement.remove()
    }
})