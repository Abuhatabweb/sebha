let count = document.querySelector(".count")
let reset = document.querySelector(".reset")
let label = document.querySelector("label")
let colorBtn = document.querySelector("img")
let circle1 = document.querySelector(".circle1")
let circle2 = document.querySelector(".circle2")

backFromStorage()

count.onclick = function(){
    countNumber =Number(label.innerHTML) 
    countNumber++
    label.innerHTML = countNumber
    addToStorage(countNumber)
}

reset.onclick = function() {
    label.innerHTML = "0"
    addToStorage(label.innerHTML)
}

function addToStorage(count){
    window.localStorage.setItem("sebha-count" , count)
}

function backFromStorage(){
    label.innerHTML = localStorage.getItem("sebha-count")
    circle1.style.backgroundColor = localStorage.getItem("sebha-color")
    circle2.style.backgroundColor = localStorage.getItem("sebha-color")
}

let colors = ["#eb7070" , "#4fe574" , "#8070eb" , "#b854d5"]
colorBtn.onclick = function(){
    let colorIndex = Math.floor(Math.random() * colors.length)
    circle1.style.backgroundColor = colors[colorIndex]
    circle2.style.backgroundColor = colors[colorIndex]
    console.log(colors[colorIndex])
    window.localStorage.setItem("sebha-color" , colors[colorIndex])
}