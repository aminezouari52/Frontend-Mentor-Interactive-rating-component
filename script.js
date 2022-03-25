const ratings = document.querySelectorAll('.rating')
const button = document.querySelector('.button')
const container = document.querySelector('.container')
const thankYou = document.querySelector('.thank-you')
const numberSelected = document.querySelector('.number-selected')

let number = 0

ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    removeSelected()
    rating.classList.add('selected')
    number = rating.innerText
  })
})

button.addEventListener('click', () => {
  container.classList.add('not-active')
  thankYou.classList.add('active')
  numberSelected.innerText = number
})

function removeSelected() {
  ratings.forEach((rating) => {
    rating.classList.remove('selected')
  })
}
