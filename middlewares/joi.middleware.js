
function joiMiddleWare(schema) {
    return async function (req, res, next) {
        try {
            await schema.validateAsync(req)
            next();
        }
        catch (error) {
            console.log(error);
            res.status(422).json(error.message)

        }
    }

}

module.exports = { joiMiddleWare }