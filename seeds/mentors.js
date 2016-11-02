exports.seed = function(knex, Promise) {
    return knex("mentor").del()
    .then(function () {
        return Promise.all([
            knex("mentor").insert({
                name: "Kyle Coberly",
                email: "kyle.coberly@gmail.com",
                bio: "The boy who liiiiived",
                specialties: "Ember, JS"
            }),
            knex("mentor").insert({
                name: "Elyse Coberly",
                email: "elyse.coberly@gmail.com",
                bio: "The girl who went to Red Robin",
                specialties: "Data Science, spreadsheets"
            })
        ]);
    });
};
