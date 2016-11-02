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
