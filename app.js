const btn = document.querySelector("button")
const body = document.querySelector("body")
const container = document.querySelector(".container")
function backgroundChanger() {
  let randomColor = function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min
  }
  let r = randomColor(0, 255)
  let g = randomColor(0, 255)
  let b = randomColor(0, 255)
  return `rgb(${r}, ${g}, ${b})`
}

btn.addEventListener("click", () => {
  let color = backgroundChanger()
  body.style.backgroundColor = color
  container.style.color = color
})
// another solution

// const btn = document.querySelector("button")
// const body = document.querySelector("body")
// function backgroundChanger() {
//   let r = Math.floor(Math.random() * 255)
//   let g = Math.floor(Math.random() * 255)
//   let b = Math.floor(Math.random() * 255)
//   return `rgb(${r}, ${g}, ${b})`
// }

// btn.addEventListener("click", () => {
//   body.style.backgroundColor = backgroundChanger()
// })
