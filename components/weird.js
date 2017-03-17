var React = require('react')

module.exports = Weird

function Weird (){
  return (
    <div>
      <h1>Hey weirdo!</h1>
      <div id="container">
        <div id="square" onClick={(ev) => alert("Hi!")}></div>
        <div id="square"></div>
        <div id="square"></div>
        <div id="square"></div>
      </div>
    </div>
  )
}
