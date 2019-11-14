const router = require("express").Router()


const going = [

]
const notgoing = [

]

router.post('/going', (req, res, next)=>{
  const id = going.length +1
  const user = req.body.user
  user.id = id

  going.push(user)
  res.json(user)
})
router.post('/notgoing', (req, res, next) =>{ 
  const id = notgoing.length +1
  const user = req.body.user
  user.id = id

  notgoing.push(user)
  res.json(user)
})

router.get('/going', (req, res, next) =>{
  res.json(going)
})
router.get('/notgoing', (req, res, next) =>{
  res.json(notgoing)
})

module.exports = router
