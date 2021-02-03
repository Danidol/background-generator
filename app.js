const btn = document.querySelector("button")
const body = document.querySelector("body")
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
  body.style.backgroundColor = backgroundChanger()
})
