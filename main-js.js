const $ = document;
let getId = id => $.getElementById(id)
let getClass = className => $.querySelectorAll(className)
let getTag = tagName => $.getElementsByTagName(tagName)

export {
    $,
    getId,
    getClass,
    getTag
}