const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

// create the precipitation on button click

const createDrops = () => {
  console.log('drops')
  const li = document.createElement('li')
  const figure = document.createElement('figure')
  figure.style.backgroundImage
  li.appendChild(figure)
  $('ul.drops').appendChild(li)
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

const box = $('.box1')

setInterval(() => {
  box.style.top = '0px'
}, 1000)

const animate = () => {
  box.style.top = `${parseInt(box.style.top) + 1}px`
}

setInterval(animate, 16.66)

setTimeout(() => {
  box.style.backgroundColor = 'green'
}, 5000)

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
