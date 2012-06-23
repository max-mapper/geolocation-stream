var movement = require('geolocationstream')()

movement.on('data', function(data) {
  console.log('position', data)
})

movement.on('error', function(err) {
  console.log('error!', err)
})
