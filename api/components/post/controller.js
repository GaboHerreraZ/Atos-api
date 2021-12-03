const fetch = require('node-fetch');
const config =  require('../../../config');
const PATH_POSTS =  'posts';
const PATH_USERS =  'users';

const HEADERS = { 'Content-type': 'application/json; charset=UTF-8' };


function getPosts() {
    return fetch(`${config.api.endPoint}/${PATH_POSTS}`)
                .then((response) => response.json());
 
}

function getPostById(id) {
    return fetch(`${config.api.endPoint}/${PATH_POSTS}/${id}`)
                .then((response) => response.json())
}

function getPostByUser(idUser) {
   return fetch(`${config.api.endPoint}/${PATH_POSTS}?userId=${idUser}`)
                .then((response) => response.json());
}

function setPost(post) {
   return fetch(`${config.api.endPoint}/${PATH_POSTS}`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: HEADERS}).then((response) => response.json())

}


function updatePost(post, id) {
    return  fetch(`${config.api.endPoint}/${PATH_POSTS}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(post),
                headers: HEADERS
            }).then((response) => response.json())
}

function getAllPostAndUser() {
    const getPost = fetch(`${config.api.endPoint}/${PATH_POSTS}`).then(result=> result.json());
    const getUsers = fetch(`${config.api.endPoint}/${PATH_USERS}`).then(result=> result.json());;

    return Promise.all([getPost, getUsers]).then( ([posts, users]) => {
        let res = [];
        res = posts.map(post => {
            const index = users.findIndex(user => user['id'] == post['userId']);
            const user = index !==1  ? users[index] : { };
            return {
                ...post,
                userName: user.name
            }
        });

        return res;
    })
}



function getCommentsByPost(id) {
    return fetch(`${config.api.endPoint}/${PATH_POSTS}/${id}/comments`)
                .then((response) => response.json());
}

module.exports =  {
    getPosts,   
    getPostById,
    getPostByUser,
    setPost,
    updatePost,
    getCommentsByPost,
    getAllPostAndUser
}


    
