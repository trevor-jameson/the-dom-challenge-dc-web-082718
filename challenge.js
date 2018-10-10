let counter = document.querySelector("#counter")
let plusButton = document.querySelector("button#\\+")
let minusButton = document.querySelector("#\\-")
let likeButton = document.querySelector("#\\<3")
let pauseButton = document.querySelector("#pause")
const likes = {}
// let pauseButton = document.querySelector("#pause")

// 1. As a user, i should see the timer increment every second once the page has loaded
function countUp() {
  counter.innerText = Number(counter.innerText) + 1
}
setInterval(countUp, 1000)
//
// // 2. As a user, i can manually increment and decrement the counter as i like
plusButton.addEventListener('click', () => {
  counter.innerText = Number(counter.innerText) + 1
})

minusButton.addEventListener('click', () => {
  counter.innerText = Number(counter.innerText) - 1
})

// 3. As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
likeButton.addEventListener('click', () => {
  if (likes[counter.innerText]) {
    likes[counter.innerText] += 1
  } else {
    likes[counter.innerText] = 1
  }
})

// 4. As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
pauseButton.addEventListener('click', ())

// 5. As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"
