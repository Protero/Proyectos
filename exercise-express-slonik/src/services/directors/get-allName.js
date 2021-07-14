const { getAllName } = require('../../queries/directors')

module.exports = db => async (req, res, next) => {
  const result = await getAllName(db)

  if (result === false) {
    return next({ info: new Error('something went wrong') })
  }

  res.status(200).json({
    success: true,
    data: result,
  })
}