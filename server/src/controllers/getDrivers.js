const axios = require('axios');
const { Drivers ,  Teams } = require('./../db');

const getDriversApi = async () => {
    const response = await axios.get("http://localhost:5000/drivers");

    const { data } = response;

    return data;
}

const getDriversDB = async () => {
    const data = await Drivers.findAll({
        include: [
            {
                model: Teams,
                through: {
                    attributes: [],
                },
            },
        ],
    });

    const transformedData = data.map(driver => ({
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
    }));

    return transformedData;
}

const getDrivers = async (req, res) => {

    try {

        const driversAPI = await getDriversApi();
        const driversDB = await getDriversDB();
        const drivers = [...driversAPI, ...driversDB];

        return res.status(200).json(drivers);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = getDrivers;