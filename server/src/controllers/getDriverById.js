const axios = require('axios');
const { Drivers , Teams } = require('./../db');

const getDriverById = async (req,res) => {

    try {
        
        const { idDriver } = req.params;
        let data;

        try {
            const response = await axios.get(`http://localhost:5000/drivers/${idDriver}`);

            data = response.data;
        } catch (error) {
            console.log(error.message);
        }

        if (data) {
            return res.status(200).json(data);
        }

        const driver = await Drivers.findOne({
            where : {
                id : idDriver
            },
            include : {
                model : Teams,
                through : {
                    attributes : []
                }
            } 
        });

        if (driver) {

            const transformedDriver = {
                id : driver.id,
                name : {
                    forename : driver.name,
                    surname : driver.lastname
                },
                image : {
                    url : driver.image 
                },
                dob : driver.birthday,
                nationality : driver.nationality,
                teams : driver.Teams.map(team => team.name).join(', '),
                description : driver.description
            };

            return res.status(200).json(transformedDriver);
        }

        return res.status(404).json({error:'Driver not found'});


    } catch (error) {
        return res.status(500).json({error:error.message});
    }

}

module.exports = getDriverById;