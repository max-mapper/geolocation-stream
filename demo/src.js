var movement = require('../index')()

movement.on('data', function(data) {
  console.log(data)
})

movement.on('error', function(err) {
  console.error(err)
})