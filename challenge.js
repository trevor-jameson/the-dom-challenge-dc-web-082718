let counter = document.querySelector("#counter")
let plusButton = document.querySelector("button#\\+")
let minusButton = document.querySelector("#\\-")
let likeButton = document.querySelector("#\\<3")
let pauseButton = document.querySelector("#pause")
const likes = {}

pauseButton.className = ("running")

// 1. As a user, i should see the timer increment every second once the page has loaded
let countUp = () => {
  counter.innerText = Number(counter.innerText) + 1
}
let countInterval = setInterval(countUp, 1000)

//
// // 2. As a user, i can manually increment and decrement the counter as i like
let clickUp = () => {
  counter.innerText = Number(counter.innerText) + 1
}
plusButton.addEventListener('click', clickUp)

let clickDown = () => {
  counter.innerText = Number(counter.innerText) - 1
}
minusButton.addEventListener('click', clickDown)

// 3. As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
let clickLike = () => {
  if (likes[counter.innerText]) {
    likes[counter.innerText] += 1
  } else {
    likes[counter.innerText] = 1
  }
}

likeButton.addEventListener('click', clickLike)

// 4. As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
let changePause = () => {
  if (pauseButton.classList.contains("running")) {
    // Remove all previously added event listeners, except changePause
    clearInterval(countInterval)
    plusButton.removeEventListener('click', clickUp)
    minusButton.removeEventListener('click', clickDown)
    likeButton.removeEventListener('click', clickLike)

    // Change class/state to 'paused'
    pauseButton.className = ("paused")
    console.log('now paused')
  } else if (pauseButton.classList.contains("paused")) {
    // Add all previously removed event listeners, except changePause
    setInterval(countInterval, 1000)
    plusButton.addEventListener('click', clickUp)
    minusButton.addEventListener('click', clickDown)
    likeButton.addEventListener('click', clickLike)

    // Change class/state to 'running'
    pauseButton.className = ("running")
    console.log('now running')
  }
}
pauseButton.addEventListener('click', changePause)

// 5. As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"
