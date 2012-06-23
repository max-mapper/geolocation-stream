var stream = require('stream')
var util = require('util')

function GeolocationStream(options) {
  var me = this
  stream.Stream.call(me)
  this.readable = true
  this.startMonitoring(options)
}

util.inherits(GeolocationStream, stream.Stream)

module.exports = function(options) {
  return new GeolocationStream(options)
}

module.exports.GeolocationStream = GeolocationStream

GeolocationStream.prototype.startMonitoring = function(options) {
  this.watchID = navigator.geolocation.watchPosition(
    this.onPosition.bind(this),
    this.onError.bind(this),
    options
  )
}

GeolocationStream.prototype.stopMonitoring = function() {
  navigator.geolocation.clearWatch(this.watchID)
  this.emit('end')
}

GeolocationStream.prototype.onPosition = function(position) {
  this.emit('data', position)
}

GeolocationStream.prototype.onError = function(position) {
  this.emit('error', position)
}
