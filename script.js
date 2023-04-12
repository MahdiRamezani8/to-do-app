import { $, getId, getClass, getTag } from "./main-js"

// var $ = document;
// let addBtn = $.getElementById('add')
// let toDoes = $.getElementById('to-does')
// let text = $.getElementById('text')
// let clear = $.getElementById('empty')
// let colors = $.querySelectorAll('.color')
// let color = $.getElementsByClassName('color')
// let list = $.getElementsByClassName('to-do')
// var sum = ""

// colors.forEach((item , index) => {
//     item.addEventListener("click" , () => {
//         sum = color[index].style.backgroundColor;
//         text.style.backgroundColor = sum
//     })
// })

// // clear input
// clear.addEventListener('click', () => {
//     text.value = ""
//     text.style.backgroundColor = "white"
//     sum = "#aaa"
// })

// // function addLi() {      
// //     if (text.value == "") {
// //         return false;
// //     }
// //     let liElem = $.createElement('li');
// //     liElem.className = "to-do"
// //     liElem.innerHTML = text.value
// //     liElem.style.backgroundColor = sum

// //     let iconElem = $.createElement('i');
// //     iconElem.className = "fa fa-minus-square ielem"


// //     text.value = ""
// //     sum = "#aaa"
// //     text.style.backgroundColor = "#fff"

// //     liElem.append(iconElem) 
// //     toDoes.append(liElem)

// //     let removeIcon = Array.from($.querySelectorAll('.ielem'))
// //     removeIcon.forEach(element => {
// //         element.addEventListener('click', () => {
// //           element.parentElement.remove()
// //         })
// //     });
// // }

// $.body.addEventListener('keypress', () => {
//     if (event.keyCode == 13) {
//         addLi()
//     }
// })

// addBtn.addEventListener('click', addLi)