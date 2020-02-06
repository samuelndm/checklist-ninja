const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/routes')

require('./database')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(routes)

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT)
})
