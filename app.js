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


colorBtn.onclick = function(){
    let colors = ["A" ,"B" , "C" , "D" , "E", "F" ,0,1,2,3,4,5,6,7,8,9]
    let finalColor = []
    for(let i=0 ;i < 6; i++){
        finalColor.push(colors[Math.floor(Math.random() * colors.length)])
    }
    finalColor = finalColor.join("")
    circle1.style.backgroundColor = `#${finalColor}`
    circle2.style.backgroundColor = `#${finalColor}`
    window.localStorage.setItem("sebha-color" , `#${finalColor}`)
}
