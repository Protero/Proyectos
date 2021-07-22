const router = require('express').Router()

module.exports = db => {
  router.get('/', require('./get-all')(db))
  router.get('/get-allName', require('./get-allName')(db))
  router.get('/get-allQueryName', require('./get-allQueryName')(db))
  router.get('/get-allNickname', require('./get-allNickname')(db))
  router.get('/get-allCanadian', require('./get-allCanadian')(db))
  router.get('/get-allBritishAmerican', require('./get-allBritishAmerican')(db))

  return router
}