const notFoundHandler = (_req, _res, next) => {
    const error = new Error('404 Resource not Found');
    error.status = 404;
    next(error);

}
const errotHandler = (error, req, res, next) =>{
    if(error.status){
       return res.status(error.status).json({message: error.message})
    }
    return res.status(500).json({message: "500 Server Error."})

}

module.exports = {notFoundHandler, errotHandler};