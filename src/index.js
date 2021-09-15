const express = require('express')
const cors = require('cors')
const app = express()

const http = require('http')
const server = http.createServer(app)

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: '*' }))

app.get('/', (req, res) => res.json({
  status: 'success',
  message: 'Server is running successfully'
}))

app.get('/webhook', (req, res) => {
  res.json({
    message: 'aea'
  })
})

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})
