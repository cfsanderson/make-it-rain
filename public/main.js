const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

// create the precipitation on button click

const createDrops = () => {
  console.log('drops')
  const createLi = document.createElement('li')
  const createFigure = document.createElement('figure')
  createLi.appendChild(createFigure)
  createFigure.className = 'newDrops'
  $('ul.drops').appendChild(createLi)
  const falling = () => {
    console.log('falling')
  }

  // $('.newDrops')
  //
  // setInterval(() => {
  //   box.style.top = '-50px' // moves it -50px from the top, off the page
  //   box.style.left = '100px' // moves it left 100px
  // }, 12000) // 12000 sets the amount of falling time
  //
  // const animate = () => {
  //   box.style.top = `${parseInt(box.style.top) + 2}px` // controls the rate of fall
  // }
  //
  // setInterval(animate, 16.66)
  //
  // setTimeout(() => {
  //   box.style.backgroundColor = 'green'
  // }, 5000)
}

const createFlakes = () => {
  console.log('flakes')
  const li = document.createElement('li')
  const figure = document.createElement('figure')
  figure.style.backgroundImage
  li.appendChild(figure)
  $('ul.flakes').appendChild(li)
}

// listen for button clicks

const main = () => {
  $('button.makeItRain').addEventListener('click', createDrops)
  $('button.makeItSnow').addEventListener('click', createFlakes)
}

const box = $('.drop1')

setInterval(() => {
  box.style.top = '-50px' // moves it -50px from the top, off the page
  box.style.left = '100px' // moves it left 100px should be randomized
}, 5000) // sets the reset time

const animal = () => {
  box.style.top = `${parseInt(box.style.top) + 2}px` // controls the rate of fall
}

setInterval(animal, 16.66) // sets the interval for when we call animal again

setTimeout(() => {
  // box.style.backgroundColor = 'green'
}, 1000)

document.addEventListener('DOMContentLoaded', main)

// make a raindrop "pop" into existence at a random (math.random?) place on the x axis at top of the page

// and drop off the visible portion of the page with increasing velocity
// set timeout on 'click' and 'doubleclick' event listeners to change from raindrop to snowflake?
// get a random

// const update = () => {
//   const hue = qs('input[name=hue]').value
//   const saturation = qs('input[name=saturation]').value
//   const lightness = qs('input[name=lightness]').value
//   const alpha = qs('input[name=alpha]').value
//   const hsla = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
//   qs('h2').textContent = hsla
//   qs('.picker figure').style.backgroundColor = hsla
// }
//
// const randomize = () => {
//   qs('input[name=hue]').value = Math.round(Math.random() * 360)
//   qs('input[name=saturation]').value = Math.round(Math.random() * 100)
//   qs('input[name=lightness]').value = Math.round(Math.random() * 100)
//   qs('input[name=alpha]').value = 1
//   update()
// }
//
// const save = () => {
//   const rain = $('button[name=makerain]').value
//   const hsla = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
//   const li = document.createElement('li')
//   const figure = document.createElement('figure')
//   figure.style.backgroundColor = hsla
//   li.appendChild(figure)
//   qs('ul.library').appendChild(li)
// }
//
// const main = () => {
//   const inputs = qsa('.picker input')
//   for (var i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener('input', update)
//   }
//   qs('.actions .random').addEventListener('click', randomize)
//   qs('.actions .save').addEventListener('click', save)
//   update()
// }
