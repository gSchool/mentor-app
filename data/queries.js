var databaseConfiguration = require("../knexfile");
var knex = require("knex")(databaseConfiguration[process.env.NODE_ENV || "development"]);

function getMentors(){
    return knex("mentor").select();
}

function addMentor(mentor){
    return knex("mentor").insert(mentor);
};

module.exports = {
    getMentors,
    addMentor
}
