const initMondayClient = require('monday-sdk-js');
const { ApiClient } = require('@mondaydotcomorg/api');
const { SecureStorage } = require('@mondaycom/apps-sdk');
const { v4: uuidv4 } = require('uuid');


const secureStorage = new SecureStorage();

async function getLogins(accountId, userId) {
    // TODO: get logins for a single user on single account
    const key = `logins:account:${accountId}:user:${userId}:list`
    secureStorage.get(key); 
    // returns - JSON with accountid, username, user ID, token uuid
}

async function getSingleLogin(accountId, userId, uuid) {
    // TODO: get API key for a single user on a single account
    const key = `logins:account:${accountId}:user:${userId}:uuid:${uuid}`
    secureStorage.get(key);
}

async function addLogin(accountId, userId, username, token) {
    // TODO: store token with account ID, user ID, name, UUID, token itself

    // TODO: generate UUID & update the user list with it
    const uuid = uuidv4();
    let loginsList = secureStorage.get(`logins:account:${accountId}:user:${userId}:list`); 

    // TODO: make search key
    const key = `logins:account:${accountId}:uuid:${uuid}`
    secureStorage.set(key, token);
}

module.exports = {
    getLogins,
    addLogin,
};
