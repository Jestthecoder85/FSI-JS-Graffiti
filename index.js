
// Select some elements...
let header = document.querySelector ('#page-header')
header.style.textAlign = "left"
let dogImages = document.querySelectorAll ('.dog-image')
for(let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.borderRadius = '50px'
}

let pupNames = document.querySelectorAll ('.dog-name')
for(let i = 0; i < pupNames.length; i++) {
    pupNames[i].style.textAlign = "left"
}