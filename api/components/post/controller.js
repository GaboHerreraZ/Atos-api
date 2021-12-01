const fetch = require('node-fetch');
const config =  require('../../../config');
const PATH =  'posts';
const HEADERS = { 'Content-type': 'application/json; charset=UTF-8' };


function getPosts() {
    return fetch(`${config.api.endPoint}/${PATH}`)
                .then((response) => response.json());
 
}

function getPostById(id) {
    return fetch(`${config.api.endPoint}/${PATH}/${id}`)
                .then((response) => response.json())
}

function getPostByUser(idUser) {
   return fetch(`${config.api.endPoint}/${PATH}?userId=${idUser}`)
                .then((response) => response.json());
}

function setPost(post) {
   return fetch(`${config.api.endPoint}/${PATH}`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: HEADERS}).then((response) => response.json())

}


function updatePost(post, id) {
    return  fetch(`${config.api.endPoint}/${PATH}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(post),
                headers: HEADERS
            }).then((response) => response.json())
}



function getCommentsByPost(id) {
    return fetch(`${config.api.endPoint}/${PATH}/${id}/comments`)
                .then((response) => response.json());
}

module.exports =  {
    getPosts,   
    getPostById,
    getPostByUser,
    setPost,
    updatePost,
    getCommentsByPost
}


    
