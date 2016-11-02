var databaseConfiguration = require("../knexfile");
var knex = require("knex")(databaseConfiguration[process.env.NODE_ENV || "development"]);

function getMentors(){
    return knex("mentor").select();
}

module.exports = {
    getMentors
}
