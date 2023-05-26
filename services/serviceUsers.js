
const getUsers= async (req, res)=> {
    try {
        const {limit, offset}= req.query;
        if (limit && offset) {
            res.json({
                limit,
                offset
            });
        }
        else {
            res.send("No has pasado los parámetros adecuados");
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports= {getUsers};