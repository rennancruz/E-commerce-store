const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Oops! Looks like you're trying to use the wrong route. Please review the correct ones as follows: category ; products ; tags</h1>")
});

module.exports = router;