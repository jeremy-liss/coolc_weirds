var React = require('react')

module.exports = Weird

function Weird (props){
  var showAnimal = props.showAnimal

  var animals = Object.keys(props.weird)

  return (
    <div>
    <h1>Hey weirdo!</h1>

    <div id="container">

      {animals.map(function(animal){

      return (


          <div id="square" onClick={() => props.showAnimal(animal)}>
            {props.weird[animal].isVisible ? <img src={props.weird[animal].href}/> : '' }
          </div>

      )
      })}
    </div>
    </div>
  )
}
