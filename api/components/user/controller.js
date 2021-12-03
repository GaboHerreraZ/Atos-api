const fetch = require('node-fetch');
const config =  require('../../../config');
const PATH =  'users';


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
    getUsersById
}