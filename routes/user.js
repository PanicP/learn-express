import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  return res.send('this is user route')
  // return res.send(Object.values(req.context.models.users));
})

router.get('/:userId', (req, res) => {
  return res.send('this is user route with params: ' + req.params.userId)
  // return res.send(req.context.models.users[req.params.userId])
})

export default router