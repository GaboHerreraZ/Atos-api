const express = require('express');
const router =  express.Router();
const controller =  require('./controller');
const response = require('../../response');


router.get('/',(req, res)=> {
    controller.getUsers()
              .then((result) => {
                response.success(req, res, result , 200);
              })
              .catch((e)=> {
                response.error(req, res, 'Internal error', 500, e);
              })
});


router.get('/:id',(req, res)=> {
    const id = req.params.id;
    controller.getUsersById(id)
              .then((result) => {
                response.success(req, res, result , 200);
              })
              .catch((e)=> {
                response.error(req, res, 'Internal error', 500, e);
              })
});


module.exports = router;


