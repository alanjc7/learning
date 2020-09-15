// let elem = document.querySelector('.pulse');
// let animation = elem.animate({
//   opacity: [0.5, 1],
//   transform: ['scale(0.5)', 'scale(1)'],
// }, {
//   direction: 'alternate',
//   time: 700,
//   iterations: Infinity,
// });


// //html
// <div class="pulse" style="width: 150px;">
//   Hello world!
// </div>

//-----

div {
    width: 100px;
    height: 100px;
    background-color: red;
    position: relative;
}

<!DOCTYPE html>
<html>
<body>
<div />
</body>
</html>

// original function from last week

let div = document.getElementsByTagName("div")[0]
let currentOpacity = 1

function change(div) {
  if ( currentOpacity > 0) {
    currentOpacity = currentOpacity - 0.1;
  }
  div.style.opacity = currentOpacity;
}

setInterval(() => change(div), 300);

// customisable by time

let div = document.getElementsByTagName("div")[0]
let currentOpacity = 1

function change(div, steps) {
  let increment = 1 / steps
  if ( currentOpacity > 0) {
    currentOpacity = currentOpacity - increment;
  }
  div.style.opacity = currentOpacity;
}

function fade(div, steps, time) {
  setInterval(() => change(div, steps), time/steps)
}

fade(div, 100, 1000)

// customisable by frames per second

let div = document.getElementsByTagName("div")[0]
let currentOpacity = 1

function change(div, steps) {
  let increment = 1 / steps
  if ( currentOpacity > 0) {
    currentOpacity = currentOpacity - increment;
  }
  div.style.opacity = currentOpacity;
}

function fade(div, stepsPS, time) {
  steps = stepsPS * time / 1000
  setInterval(() => change(div, steps), time/steps)
}

fade(div, 1, 3000)

// requestAnimationFrame

function move(timestamp){
    leftpos += 5
    div.style.left = leftpos + 'px'
    requestAnimationFrame(move) // call requestAnimationFrame again to animate next frame
}
requestAnimationFrame(move) // call requestAnimationFrame and pass into it animation function

//

let div = document.getElementsByTagName("div")[0]
let currentOpacity = 1

function change(div, steps) {
  let increment = 1 / steps
  if ( currentOpacity > 0) {
    currentOpacity = currentOpacity - increment;
  }
  div.style.opacity = currentOpacity;
}

function fade(div, stepsPS, time) {
  steps = stepsPS * time / 1000
  setInterval(() => requestAnimationFrame(() => change(div, steps)), time/steps)
}

fade(div, 60, 5000)

// do above example without setInterval

let div = document.getElementsByTagName("div")[0]
var currentOpacity = 1
var start = null;
var timestamp = + new Date

function change(div, steps) {
  let increment = 1 / steps
  if ( currentOpacity > 0) {
    currentOpacity = currentOpacity - increment;
  }
  div.style.opacity = currentOpacity;
}

function fade(timestamp, div, stepsPS, time) {
  steps = stepsPS * time / 1000
  if (!start) start = timestamp;
  var progress = timestamp - start;
  if (progress < time) {
    requestAnimationFrame(() => change(div, steps))
  }
}

fade(timestamp, div, 60, 5000)
// requestAnimationFrame(function(timestamp){
//   fade(timestamp, div, 60, 5000)
// })


let adiv = document.getElementsByTagName("div")[0]
let starttime

function moveit(timestamp, div, dist, duration){
    var timestamp = timestamp
    const runtime = timestamp - starttime
    var progress = runtime / duration
    progress = Math.min(progress, 1)
    div.style.left = (dist * progress).toFixed(2) + 'px'
    if (runtime < duration){
        requestAnimationFrame(function(timestamp){
            moveit(timestamp, div, dist, duration)
        })
    }
}

requestAnimationFrame(function(timestamp){
    starttime = timestamp
    moveit(timestamp, adiv, 400, 2000) // 400px over 2 seconds
})
