#!/usr/bin/node

const connection = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}

Object.keys(connection).forEach((key) => {
    if (typeof connection[key] === 'undefined') {
        console.log(`Error: ${key} must be defined`)
        process.exit(1)
    }
})

const knex = require('knex')({
    client: 'mysql',
    connection
})

knex.raw('select 0').then(resp => {
    console.log(`Connection to '${connection.user}@${connection.host}' sucessful`)
}).catch(err => {
    console.log(`Connection to '${connection.user}@${connection.host}' failed`)
    console.log(err)
})

