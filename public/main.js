const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

// CreateDrop function:
//   Create a new drop
//   Append it to the drops container

const createDrops = () => {
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
  const createLi = document.createElement('li')
  createLi.style.top = '0px'
  createLi.style.left = `${Math.round(document.body.clientWidth * Math.random())}px`
  const createFigure = document.createElement('figure')
  createLi.appendChild(createFigure)
  createFigure.className = 'newFlakes'
  $('ul.flakes').appendChild(createLi)
}

// Animate function:
//   For every drop in the drops container,
//     Increase it's 'top' property

const animate = () => {
  const drops = $$('.drops li')
  for (var i = 0; i < drops.length; i++) {
    drops[i].style.top = `${parseInt(drops[i].style.top) + 3}px`
  }
  const flakes = $$('.flakes li')
  for (var t = 0; t < flakes.length; t++) {
    flakes[t].style.top = `${parseInt(flakes[t].style.top) + 1.5}px`
  }
}

// Main function:
//   When a button is clicked, call CreateDrop function
//   At an interval, call Animate function

const main = () => {
  $('button.makeItRain').addEventListener('click', createDrops)
  $('button.makeItSnow').addEventListener('click', createFlakes)
  setInterval(animate, 16.6) // sets the reset time
}

document.addEventListener('DOMContentLoaded', main)
