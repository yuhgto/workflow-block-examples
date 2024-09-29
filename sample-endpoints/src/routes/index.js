const router = require('express').Router();
const { authenticationMiddleware } = require('../middlewares/authentication');
const mondayController = require('../controllers/monday-controller');
const loginsController = require('../controllers/logins-controller');

// TODO: if using in prod, add authentication middlewar - router.post('/', authenticationMiddleware, mondayController.executeAction)
router.post('/', mondayController.executeAction);

// credentials field
router.get('/fields/credentials/new',loginsController.addNewLogin);
router.post('/fields/credentials/fetch', loginsController.fetchSavedLogins);

// object field
router.post('/fields/object', (req, res) => {
  res.send({
      name: {
        title: "User name",
        type: "primitive",
        primitiveType: "string",
        isNullable: false,
        isArray: true
      },
      email: {
        title: "Email",
        type: "primitive",
        primitiveType: "string",
        isNullable: false,
        isArray: false
      },
      transformationType: {
        title: "Logins",
        type: "custom",
        fieldTypeKey: "logins", // use the feature's unique key
        isNullable: false,
        isArray: false
      }
  })
})

// classic remote options dropdown
router.post('/fields/socks', (req, res) => {
  console.log("Socks field hit")
  res.status(200).send([
    {
      title: 'Red Socks',
      value: 'socks_1'
    },
    {
      title: 'Green Socks',
      value: 'socks_2'
    },
    {
      title: 'Other Socks',
      value: 'socks_0'
    },
  ])
})

// action
router.post('/actions/run', (req, res) => {
  console.log("Action was run");
  res.sendStatus(200);
})

router.get('/health', function (req, res) {
  res.json({
    ok: true,
    message: 'Healthy',
  });
  res.end();
});

module.exports = router;
