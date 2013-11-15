var movement = require('../index')()
require('console-log').show(true)

movement.on('data', function(data) {
  console.log(data, JSON.stringify(data))
})

movement.on('error', function(err) {
  console.error(data, JSON.stringify(data))
})