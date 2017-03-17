var ReactDOM = require('react-dom')
var hrefHandler = require('sheet-router/href')

var App = require('./components/app')
var state = require('./data/state')


hrefHandler((click) => {
  state.path = click.pathname
  render(state)
})

function showAnimal (animal) {
  state.weird[animal].isVisible = !state.weird[animal].isVisible
  render(state)
}

state.path ='/'
state.showAnimal = showAnimal

var target = document.getElementById('main')

function render () {
  var view = App(state)
  ReactDOM.render(view, target)
  console.log(state.weird.pig.isVisible);
}

render(state)
