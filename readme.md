# domnode-geolocation

use HTML5 [Geolocation](https://developer.mozilla.org/en/Using_geolocation) to watch location changes the node way -- with streams

    var movement = new GeolocationStream()

`movement` is a readable stream and speaks stream events: `data`, `error` and `end`. that means you can pipe movement output to anything that accepts streams, such as an XHR. in this case the `data` events will be lat/lon position updates using the `watchPosition` part of HTML5 geolocation

## to generate demo-bundle.js using browserify:

    npm install browserify -g
    browserify demo.js -o demo-bundle.js


MIT LICENSE