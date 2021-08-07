const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello From Huy Nguyen! Test CI/CD Updated 07/08.........')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})