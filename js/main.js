const textBox = document.getElementById('tasksListBox')// input for text to put on task list
const foodButton = document.getElementById('addFoodToList')//button to add ingredients on task list
const addHellsList = document.getElementById('hellsFoodList')// appended Li's on task list
const tasksTxt = document.getElementById('TasksNum') // number of tasks left as they get striked out
const clearBasketBtn = document.getElementById('clearBasket') // clear all li in task list ul
const clearComp = document.getElementById('clearCompleted') // clear completed list items in ul
const compLine = document.querySelectorAll('completeLine')
const incompLine = document.querySelectorAll('incompleteLine')
foodButton.addEventListener('click', addFoodToList)// when insert ingredients button is clicked on add food to tasklist

function addFoodToList(e) {
    e.preventDefault()
    if (textBox.value === '') {
        return
    }
    const li = document.createElement('li')
    console.log(li)
    const text = textBox.value
    console.log(text)
    li.innerText = text
    console.log(li)
    addHellsList.appendChild(li)
    li.className = "incompleteLine"
    console.log(li.incompleteLine)
    textBox.value = ''
    li.addEventListener('click', function(){
    li.style.textDecoration = 'line-through'
    li.className = "completeLine"
    console.log(li.completeLine)
    })
    let clear = clearBasketBtn
    let incomp = incompLine
    clear.addEventListener('click', function(){
    addHellsList.removeChild(li)
    })
    complete = clearComp
    const removeCompLine = compLine
    complete.addEventListener('click', function(){
    addHellsList.classList.remove(removeCompLine)
    })
}


console.log(addFoodToList)
console.log(addHellsList)
