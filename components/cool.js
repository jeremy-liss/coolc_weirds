var React = require('react')

module.exports = Cool

function Cool (){
  return (
    <div>
      <h1>Hey coolio!</h1>
      <p>
        <button onClick={myMove}>
          Click Me
        </button>
      </p>
      <div id="container">
        <div id="animate"></div>
      </div>
    </div>
  )
}


function myMove() {
  var elem = document.getElementById("animate")
  var pos = 0
  var id = setInterval(frame, 1)

  function frame() {
    if (pos == 570) {
      clearInterval(id)
    } else {
      pos++;
      elem.style.top = pos + 'px'
      elem.style.left = pos + 'px'
    }
  }
}
