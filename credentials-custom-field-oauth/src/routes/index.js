const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { authenticationMiddleware } = require('../middlewares/authentication');
const mondayController = require('../controllers/monday-controller');
const productsController = require('../controllers/products-controller');
const loginsController = require('../controllers/logins-controller');

// TODO: if using in prod, add authentication middlewar - router.post('/', authenticationMiddleware, ...)
router.post('/', mondayController.executeAction);

router.post('/credentials/fetch', loginsController.fetchSavedLogins);

router.get('/credentials/new',loginsController.addNewLogin);

router.get('/health', function (req, res) {
  res.json({
    ok: true,
    message: 'Healthy',
  });
  res.end();
});

module.exports = router;
