exports.success = function(req, res, message, status) {
    res.status(status || 200).send({
        code: status,
        message: message
    });
}


exports.error =  function(req, res, message, status, details) {
    console.error(details);
    res.status(status || 500).send({
        code: status,
        message: message
    })
}
