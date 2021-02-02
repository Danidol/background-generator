const btn = document.querySelector("button")
const body = document.querySelector("body")
function backgroundChanger() {
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  return `rgb(${r}, ${g}, ${b})`
}

btn.addEventListener("click", () => {
  body.style.backgroundColor = backgroundChanger()
})
