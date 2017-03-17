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
      <div id="container">
        <div id="square" onClick={() => props.showAnimal('dog')}>
          {props.weird.dog.isVisible ? <img src={props.weird.dog.href}/> : '' }
        </div>
        <div id="square" onClick={() => props.showAnimal('horse')}>
          {props.weird.horse.isVisible ? <img src={props.weird.horse.href}/> : '' }
        </div>
        <div id="square" onClick={() => props.showAnimal('rabbit')}>
          {props.weird.rabbit.isVisible ? <img src={props.weird.rabbit.href}/> : '' }
        </div>
        <div id="square" onClick={() => props.showAnimal('poo')}>
          {props.weird.poo.isVisible ? <img src={props.weird.poo.href}/> : '' }
        </div>
      </div>
      <div id="container">
        <div id="square" onClick={() => props.showAnimal('mouse')}>
          {props.weird.mouse.isVisible ? <img src={props.weird.mouse.href}/> : '' }
        </div>
        <div id="square" onClick={() => props.showAnimal('frog')}>
          {props.weird.frog.isVisible ? <img src={props.weird.frog.href}/> : '' }
        </div>
        <div id="square" onClick={() => props.showAnimal('panda')}>
          {props.weird.panda.isVisible ? <img src={props.weird.panda.href}/> : '' }
        </div>
        <div id="square" onClick={() => props.showAnimal('lion')}>
          {props.weird.lion.isVisible ? <img src={props.weird.lion.href}/> : '' }
        </div>
      </div>
    </div>
  )
}
