const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const createdb = require("./src/controllers/createDB");
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  createdb();
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
