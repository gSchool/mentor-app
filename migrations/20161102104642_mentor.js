exports.up = function(knex, Promise) {
    return knex.schema.createTable("mentor", function(mentor){
        mentor.increments("id");
        mentor.string("name");
        mentor.string("email");
        mentor.string("bio");
        mentor.string("specialties");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("mentor");
};
