const express = require('express')
const router = express.Router()
const api = require('../services/jsonPlaceholder')
/* GET home page. */
router.get('/', async (req, res) => {
  const users = await api.get('/users').then(res => res.data)

  const usersReduce = users.reduce((accumulator, user) => {
    accumulator[user.company.name] = accumulator[user.company.name] || []
    accumulator[user.company.name].push(user)
    return accumulator
  }, Object.create(null))
  
  res.send({ ok: true, usersReduce })
})

module.exports = router
