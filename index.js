import express from 'express'

const PORT = 1234
const app = express()

app.get("/hello", (req, res) => {
  res.send("Hello worlddddd");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})