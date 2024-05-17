const router = require('express').Router();
const { authenticationMiddleware } = require('../middlewares/authentication');
const mondayController = require('../controllers/monday-controller');

// TODO: if using in prod, add authentication middlewar - router.post('/', authenticationMiddleware, mondayController.executeAction)
router.post('/', mondayController.executeAction);

router.get('/health', function (req, res) {
  res.json({
    ok: true,
    message: 'Healthy',
  });
  res.end();
});

module.exports = router;
