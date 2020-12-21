import 'dotenv/config.js'
import cors from 'cors'
import express from 'express'

// import models from './models'
import routes from './routes/index.js'

const app = express()

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors())

// Built-In Middleware

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Custom Middleware

app.use((req, res, next) => {
  // req.context = {
  //   models,
  //   me: models.users[1],
  // }
  next()
})

// * Routes * //

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  })
})

app.use('/users', routes.userRouter)
// app.use('/session', routes.session)
// app.use('/users', routes.user)
// app.use('/messages', routes.message)

// module.exports = app
export default app