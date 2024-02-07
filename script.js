let done = 0
let not = 0

let sumDone = []
let numNotDone = []

let timesDone = JSON.parse(localStorage.getItem("sumDone"))
let timesUnDone = JSON.parse(localStorage.getItem("notDone"))
let percentageDone = JSON.parse(localStorage.getItem("percentage"))

const delBtn = document.getElementById("del-el")

if (timesDone) {
    sumDone.length = timesDone
    document.getElementById("has-el").textContent = `Has done: ${sumDone.length} times`
    
}

if (timesUnDone) {
    numNotDone.length = timesUnDone
    document.getElementById("not-el").textContent = `Has not done: ${numNotDone.length} times`
}

if (percentageDone) {
    save()
}

function hasDone() {
    done += 1
    sumDone.push(done)
    document.getElementById("has-el").textContent = `Has done: ${sumDone.length} times`
    save()
    localStorage.setItem("sumDone", JSON.stringify(sumDone.length))
    
}

function notDone() {
    not += 1
    numNotDone.push(not)
    document.getElementById("not-el").textContent = `Has not done: ${numNotDone.length} times`
    save()
    localStorage.setItem("notDone", JSON.stringify(numNotDone.length))
    
}

function save() {
    let sumOfTimes = sumDone.length + numNotDone.length
    let percentage = numNotDone.length / sumOfTimes * 100
    document.getElementById("rate-el").textContent = `The progress rate is: ${percentage}%`
    localStorage.setItem("percentage", JSON.stringify(percentage))
}

delBtn.addEventListener("click", function () {
    sumDone = []
    numNotDone = []

    localStorage.clear("sumDone")
    localStorage.clear("notDone")
    localStorage.clear("percentage")

    document.getElementById("has-el").textContent = `Has done: ${sumDone.length} times`
    document.getElementById("not-el").textContent = `Has not done: ${numNotDone.length} times`
    document.getElementById("rate-el").textContent = `The progress rate is: 0%`
    
})