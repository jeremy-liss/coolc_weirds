var ReactDOM = require('react-dom')
var hrefHandler = require('sheet-router/href')

var App = require('./components/app')

var state = {}

hrefHandler((click) => {
  state.path = click.pathname
  render(state)
})

state.path ='/'

var target = document.getElementById('main')

function render () {
  var view = App(state)
  ReactDOM.render(view, target)
}

render()
