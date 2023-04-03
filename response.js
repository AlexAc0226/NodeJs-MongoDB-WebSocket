exports.success = function(req, res, message, code,){
    res.status(code || 200).send({
        result: "Datos retornado",
        msg: message, 
        status: true,
        error: ''
    })
}

exports.error = function(req, res, message, code, error){
    res.status(code || 500).send({
        status: false,
        error: message
    })
}