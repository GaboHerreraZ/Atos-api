const fetch = require('node-fetch');
const config =  require('../../../config');
const PATH =  'users';
const HEADERS = { 'Content-type': 'application/json; charset=UTF-8' };


function getUsers() {
    return fetch(`${config.api.endPoint}/${PATH}`)
                .then((response) => response.json());
}

function getUsersById(id) {
    return fetch(`${config.api.endPoint}/${PATH}/${id}`)
                .then((response) => response.json());
}


module.exports =  {
    getUsers,
    getUsersById,
}