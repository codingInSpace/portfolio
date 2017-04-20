import express from 'express'
import { Server } from 'http'
import webpack from 'webpack'
import WebpackHotMiddleware from 'webpack-hot-middleware'

const app = express()

const developing = process.env.NODE_ENV !== 'production'
const port =  process.env.PORT || 8080

const config = require('./webpack.config.dev.js')
const compiler = webpack(config)

app.use(require("webpack-dev-middleware")(compiler, {
	noInfo: true, publicPath: config.output.publicPath
}))

app.use(require("webpack-hot-middleware")(compiler, {
	log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}))

app.get("*", function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

const server = new Server(app)
server.listen(process.env.PORT || 1337, () => {
	console.log("Listening on %j", server.address());
})
