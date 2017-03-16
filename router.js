var Router = require('sheet-router')

var Home = require('./components/home')
var App = require('./components/app')
var Weird = require('./components/weird')
var Cool = require('./components/cool')


var router = Router({ default: '/' }, [
  ['/', () => Home ],
  ['/weird', () => Weird],
  ['/cool', () => Cool]

])

module.exports = router
