const express = require('express');
const router =  express.Router();
const controller =  require('./controller');
const response = require('../../response');

router.get('/',(req, res)=> {
    controller.getPosts()
              .then((result) => {
                response.success(req, res, result , 200);
              })
              .catch((e)=> {
                response.error(req, res, 'Internal error', 500, e);
              })
});


router.get('/:id',(req, res)=> {
  controller.getPostById(req.params.id)
            .then((result) => {
              response.success(req, res, result , 200);
            })
            .catch((e)=> {
              response.error(req, res, 'Internal error', 500, e);
            })
});

router.post('/',(req, res)=> {
  controller.setPost(req.body.post)
            .then((result) => {
              response.success(req, res, result , 200);
            })
            .catch((e)=> {
              response.error(req, res, 'Internal error', 500, e);
            })
});

router.put('/:id',(req, res)=> {
  const id = req.params.id;
  const post = req.body.post;
  controller.updatePost(post, id)
            .then((result) => {
              response.success(req, res, result , 200);
            })
            .catch((e)=> {
              response.error(req, res, 'Internal error', 500, e);
            })
});

router.get('/user/:id',(req, res)=> {
  const id = req.params.id;
  controller.getPostByUser(id)
            .then((result) => {
              response.success(req, res, result , 200);
            })
            .catch((e)=> {
              response.error(req, res, 'Internal error', 500, e);
            })
});

router.get('/:id/comments',(req, res)=> {
  const id = req.params.id;
  controller.getCommentsByPost(id)
            .then((result) => {
              response.success(req, res, result , 200);
            })
            .catch((e)=> {
              response.error(req, res, 'Internal error', 500, e);
            })
});


module.exports = router;