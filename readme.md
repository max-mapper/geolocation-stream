# geolocation-stream

geolocation-stream is a node module that lets you use the HTML5
[Geolocation API](https://developer.mozilla.org/en/Using_geolocation) to watch
location changes the node way -- with streams! It's designed for use with
[browserify](http://blakeembrey.com/articles/introduction-to-browserify/).

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

Bundle it up into a browser-friendly file:

```sh
npm install browserify -g
browserify src.js -o bundle.js
```

## Demo

Your browser's Geolocation API may [not work](http://stackoverflow.com/a/5431823/95670)
with the `file://` protocol, so you can't just pop open `demo/index.html` in your browser.
Instead you'll need to run an HTTP server locally. Luckily that's not so hard:

```
npm install -g ecstatic
ecstatic demo
```

Open [localhost:8000](http://localhost:8000) in your browser and open the Javascript console. Behold
your geolocation stream! It should look something like this:

```js
{
  timestamp:1383203179029,
  coords:{
    speed:null,
    heading:null,
    altitudeAccuracy:null,
    accuracy:28,
    altitude:null,
    longitude:-122.4236727,
    latitude:37.752089
  }
}
```

## License

MIT