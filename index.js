var ReactDOM = require('react-dom')
var hrefHandler = require('sheet-router/href')

var App = require('./components/app')

var state = {
  weird: {
    0: {
      position: 0,
      href: 'http://ih0.redbubble.net/image.43641488.8075/sticker,220x200-pad,220x200,ffffff.u2.jpg',
      isVisible: false
    },
    1: {
      position: 1,
      href: 'http://pix.iemoji.com/images/emoji/apple/ios-9/256/monkey-face.png',
      isVisible: true
    }
  }
}

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
