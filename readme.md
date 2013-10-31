# geolocation-stream

Use HTML5 [Geolocation](https://developer.mozilla.org/en/Using_geolocation) to watch
location changes the node way -- with streams.

## Installation

```sh
npm install geolocation-stream --save
```

## Usage

In this example, `movement` is a readable stream that speaks stream events: `data`, `error` and `end`. That means you can pipe movement output to anything that accepts streams, such as an XHR. in this case the `data` events will be lat/lon position updates using the `watchPosition` part of HTML5 geolocation.

```js
var movement = require('geolocation-stream')()

movement.on('data', function(data) {
  console.log(data)
})

movement.on('error', function(err) {
  console.error(err)
})
```

Bundle it up into a browser-friendly file using [browserify](http://blakeembrey.com/articles/introduction-to-browserify/):

```sh
npm install browserify -g
browserify src.js -o bundle.js
```

## Demo

Your browser's Geolocation API may [not work](http://stackoverflow.com/a/5431823/95670)
with the `file://` protocol, so you can just pop open index.html in your browser.
Instead you'll need to run a server locally to see the demo. Luckily that's not so hard:

```
npm install -g ecstatic
ecstatic demo
```

Open [localhost:8000](http://localhost:8000) in your browser and pop open the Javascript console
to see your location stream.

## License

MIT