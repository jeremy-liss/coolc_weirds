var Router = require('sheet-router')

var Home = require('./components/home')
var App = require('./components/app')




var router = Router({ default: '/' }, [
  ['/',       () => Home ],

])

module.exports = router
