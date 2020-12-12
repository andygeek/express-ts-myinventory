const express = require('express')
const app = express()
const port = 8082

// Define a route handler
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
