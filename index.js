let myname = "Bella"
let greeting = "Welcome back, " + myname + " 👋"
let welcomeEl = document.getElementById('welcome-el') 
welcomeEl.innerText = greeting

let count = 0
let combined = ''
let first_save = false
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')


function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    if (first_save){
        let new_count = " - " + count
        combined += new_count
        saveEl.textContent = combined
    } else {
        first_save = true
        combined = count 
        saveEl.textContent = combined
    }
    count = 0
    countEl.innerText = 0
}
function changeValue(key) {
    switch (key) {
      case 'ArrowUp': // Up arrow
        count++;
        break;
      case 'ArrowDown': // Down arrow
        count--;
        break;
      default:
        // do nothing
    }
    console.log(count); // Print the current count
  }
  
  // Add a keydown event listener to the window
  window.addEventListener('ArrowUp', (event) => changeValue(event.key));