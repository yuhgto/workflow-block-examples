const initMondayClient = require('monday-sdk-js');
const { ApiClient } = require('@mondaydotcomorg/api');

const createNotification = async (token, targetType, targetId, text, userId) => {
  try {
    const apiClient = new ApiClient(token);
    const apiResponse = await apiClient.query(
      `mutation ($targetType:NotificationTargetType!, $targetId:ID!, $text:String!, $userId:ID!) {
      create_notification(text:$text, target_id:$targetId, target_type:$targetType, user_id:$userId) {
        text
      }
    }`,
      { targetType, targetId, text, userId }
    );
    return apiResponse;
  } catch (err) {
    console.log(err);
  }
};

const getColumnValue = async (token, itemId, columnId) => {
  try {
    const mondayClient = initMondayClient();
    mondayClient.setToken(token);
    mondayClient.setApiVersion('2024-04');

    const query = `query($itemId: [ID!], $columnId: [String!]) {
        items (ids: $itemId) {
          column_values(ids:$columnId) {
            value
          }
        }
      }`;
    const variables = { columnId, itemId };

    const response = await mondayClient.api(query, { variables });
    return response.data.items[0].column_values[0].value;
  } catch (err) {
    console.error(err);
  }
};

const changeColumnValue = async (token, boardId, itemId, columnId, value) => {
  try {
    const mondayClient = initMondayClient({ token });
    mondayClient.setApiVersion('2024-04');

    const query = `mutation change_column_value($boardId: ID!, $itemId: ID!, $columnId: String!, $value: JSON!) {
        change_column_value(board_id: $boardId, item_id: $itemId, column_id: $columnId, value: $value) {
          id
        }
      }
      `;
    const variables = { boardId, columnId, itemId, value };

    const response = await mondayClient.api(query, { variables });
    return response;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getColumnValue,
  changeColumnValue,
  createNotification,
};
