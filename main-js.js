const $ = document;
let getId = id => $.getElementById(id)
let getClass = className => $.getElementsByClassName(className)
let getTag = tagName => $.getElementsByTagName(tagName)

export {$, getId, getClass, getTag}