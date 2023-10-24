const { Teams } = require('./../db'); 

const getTeams = async (req,res) => {

    try {

        const teams = await Teams.findAll();
        
        return res.status(200).json(teams);
        
    } catch (err) {
        return res.status(500).json({error:err.message});
    }

}

module.exports = getTeams;