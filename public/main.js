const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

// CreateDrop function:
//   Create a new drop
//   Append it to the drops container

const createDrops = () => {
  console.log('drops')
  const createLi = document.createElement('li')
  createLi.style.top = '0px'
  createLi.style.left = `${Math.round(document.body.clientWidth * Math.random())}px`
  const createFigure = document.createElement('figure')
  createLi.appendChild(createFigure)
  createFigure.className = 'newDrops'
  $('ul.drops').appendChild(createLi)
}

const createFlakes = () => {
  console.log('flakes')
  const li = document.createElement('li')
  const figure = document.createElement('figure')
  figure.style.backgroundImage
  li.appendChild(figure)
  $('ul.flakes').appendChild(li)
}

// Animate function:
//   For every drop in the drops container,
//     Increase it's 'top' property

// const animate = () => {
//   console.log('animate')
//   createLi.style.top = `${parseInt(createLi.style.top) + 1}px` // controls the rate of fall
// }

// setInterval(() => {
//   createLi.style.top = '-50px' // moves it -50px from the top, off the page
//   createLi.style.left = '100px' // moves it left 100px should be randomized
// }, 5000) // sets the reset time
//
// setInterval(animate, 16.66) // sets the interval for when we call animal again

// Main function:
//   When a button is clicked, call CreateDrop function
//   At an interval, call Animate function

const animate = () => {
  const drops = $$('.drops li')
  for (var i = 0; i < drops.length; i++) {
    drops[i].style.top = `${parseInt(drops[i].style.top) + 1}px`
  }
}

const main = () => {
  $('button.makeItRain').addEventListener('click', createDrops)
  $('button.makeItSnow').addEventListener('click', createFlakes)

  setInterval(animate, 16.6) // sets the reset time

  // setInterval(animate, 16.66) // sets the interval for when we call animal again
}

// When document is ready, call Main function

document.addEventListener('DOMContentLoaded', main)
