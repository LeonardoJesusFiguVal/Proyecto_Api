//Middleware que se encarga de la gestion de errores

function errorLogs(err, req, res, next){
    console.log("errorLog");
    console.error(err);
    next();
}

function handleError(err, req, res, next){
    console.log("handleError");
    res.status(501).json({
        message: err.message,
        stack: err.stack
    })
}

module.exports= {
    errorLogs,
    handleError
}