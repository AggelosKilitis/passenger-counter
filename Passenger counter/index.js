let countEl = document.getElementById("count-el")
let savedEl = document.getElementById("saved-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    savedEl.textContent += countStr
    count = 0
    countEl.textContent = count

    console.log(count)
}
