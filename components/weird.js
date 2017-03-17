var React = require('react')

module.exports = Weird

function Weird (props){
  var showAnimal = props.showAnimal

  return (
    <div>
      <h1>Hey weirdo!</h1>
      <div id="container">
        <div id="square" onClick={() => props.showAnimal('pig')}>
          {props.weird.pig.isVisible ? <img src={props.weird.pig.href}/> : '' }
        </div>
        <div id="square" onClick={() => props.showAnimal('monkey')}>
          {props.weird.monkey.isVisible ? <img src={props.weird.monkey.href}/> : '' }
        </div>
        <div id="square" onClick={() => props.showAnimal('cow')}>
          {props.weird.cow.isVisible ? <img src={props.weird.cow.href}/> : '' }
        </div>
        <div id="square" onClick={() => props.showAnimal('cat')}>
          {props.weird.cat.isVisible ? <img src={props.weird.cat.href}/> : '' }
        </div>
      </div>
    </div>
  )
}
