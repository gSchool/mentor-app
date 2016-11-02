var mentors = [{
    name: "Kyle Coberly",
    email: "kyle.coberly@galvanize.com",
    bio: "The boy who lived",
    specialties: "JavaScript, Ember, Agile"
},{
    name: "Elyse Coberly",
    email: "elyse.coberly@galvanize.com",
    bio: "The girl who ran a 4 minute mile",
    specialties: "Ruby, Spreadsheets, Data Science"
}]

function getMentors(){
    return mentors;
}

module.exports = {
    getMentors
}
