const router = require('express').Router();

router.get('/health', (_req, res)=>{ 
  res.status(200).json({message: "Success"})
})
router.use('/api/v1/books', require('../routes/books'))
module.exports = router;