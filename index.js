const express = require('express')

const app = express()
app.use(express.json()) // for parsing application/x-www-form-urlencoded

app.get ('*', async (req, res) => {

	console.log(req.headers["authorization"])
    console.log(req.headers["x-num-subscribers"])
	res.send(200)
})

app.post ('*', async (req, res) => {

	console.log(req.body)
	res.send(200)
})
app.listen(5000)
