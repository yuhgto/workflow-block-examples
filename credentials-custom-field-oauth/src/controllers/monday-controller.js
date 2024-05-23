const mondayService = require('../services/monday-service');
const jwt = require('jsonwebtoken');

async function executeAction(req, res) {
  let { authorization } = req.headers;
  const { payload } = req.body;
  
  try {
    const { shortLivedToken } = jwt.decode(authorization);
    const { inputFields } = payload;
    const { notificationText, boardId, itemId, user } = inputFields;
    const userId = user[0].id;

    console.log({shortLivedToken, notificationText, boardId, itemId, userId });

    // TODO: send notification
    const targetType = 'Project';
    const targetId = itemId || boardId;
    const apiResponse = await mondayService.createNotification(shortLivedToken, targetType, targetId, notificationText, userId)

    return res.status(200).send({});
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'internal server error' });
  }
}

module.exports = {
  executeAction,
};
