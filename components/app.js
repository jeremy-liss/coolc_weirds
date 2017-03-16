var React = require('react')

var router = require('../router.js')


module.exports = function App (props) {
  var name = props.name
  var currentPath = props.path
  var MainComponent = router(currentPath)

  return (
    <div>

      <div className='navbar'>
        <a href='/'>HOME</a> |
        <a href='/weird'> WEIRD SOUNDS</a> |
        <a href='/cool'> COOL COLOURS</a>
      </div>

      {MainComponent(props)}
    </div>
  )
}
