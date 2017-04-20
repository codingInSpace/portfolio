import express from 'express'
import { Server } from 'http'
import path from 'path'
import webpack from 'webpack'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevMiddleware from 'webpack-dev-middleware'
import cors from 'cors'

const app = express()
app.use(cors())

const developing = process.env.NODE_ENV !== 'production'
const port =  process.env.PORT || 8080

const config = require('./webpack.config.dev.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
	lazy: false,
	noInfo: true, 
	publicPath: config.output.publicPath,
	stats: {colors: true}
}))

// static files
app.use(express.static(__dirname + "/public/"))
console.log(__dirname + "/public/")

app.use(webpackHotMiddleware(compiler, {
	log: console.log, 
	path: '/__webpack_hmr', 
	heartbeat: 10 * 1000
}))

app.get("*", function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

const server = new Server(app)
server.listen(process.env.PORT || 1337, () => {
	console.log("Listening on %j", server.address());
})
