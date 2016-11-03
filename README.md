# Mentor app

An app for signing up mentors!

## Setup

1. Fork, clone
1. Setup a Postgres database
1. Enter Postgres credentials into a file named `.env`
1. `npm install`
1. `npm install -g knex`
1. `knex migrate:latest`
1. `knex seed:run`
1. `npm start`

## Stories

1. As a user, I can read a list of mentors
1. As an administrator, I can update the list of mentors dynamically
1. As an adminstrator, I can persist changes to the mentor list after a crash
1. As a user, I can add mentors


## Instructions

The repo you're looking at is a completed example of what this app should look like at the end of completing all of the stories. 

The way this project is designed, students begin working on the stories in an Agile fashion, starting with the first story, which requires only that, as a user, we can see a list of all users by any means neccessary.  This means that admins can simply hard code users in and the users and then visible in the system. 

The second stage is the same app, but showing all of the users hard coded by the admin. 

The third stage pulls the users from a seeded database. 

The fourth stage allows users to be entered into a form and then entered into a database. 
