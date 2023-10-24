const axios = require('axios');
const { Teams } = require('./../db');

const createdb = async () => {

    try {

        const response = await axios.get('http://localhost:5000/drivers');

        const { data } = response;

        if (data.error) {
            console.error('Error de consulta a la API');
        }

        let teams = [];

        for (let driver of data) {

            if (driver.teams) {

                let arr_tms = driver.teams.split(',');

                for (let i = 0; i < arr_tms.length; i++) {
                    arr_tms[i] = arr_tms[i].trim();
                }

                teams = [...teams, ...arr_tms];

            }
        }


        let uniqueTeams = new Set(teams);

        let uniqueTeamsArray = Array.from(uniqueTeams);

        for (let idx in uniqueTeamsArray) {
            const [teamsInstance, created] = await Teams.findOrCreate({
                where: { 
                    name : uniqueTeamsArray[idx],
                },
            });
        }

        console.log('createDB terminado');

    } catch (err) {
        console.error('Error en createDB : ' + err.message);
    }



}

module.exports = createdb;