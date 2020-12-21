import app from './app.js'

// const app = appInstance
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})