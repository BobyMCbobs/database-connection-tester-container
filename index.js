#!/usr/bin/node

const connection = process.env.PG_CONNECTION_STRING || {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}

if (typeof connection === 'Object') {
    Object.keys(connection).forEach((key) => {
        if (typeof connection[key] === 'undefined') {
            console.log(`Error: ${key} must be defined`)
            process.exit(1)
        }
    })
}

const knex = require('knex')({
    client: typeof process.env.PG_CONNECTION_STRING === 'undefined' ? 'mysql': 'pg',
    connection
})

knex.raw('select 0').then(resp => {
    console.log(`Connected to '${connection.user}@${connection.host}'`)
}).catch(err => {
    console.log(`Connection to '${connection.user}@${connection.host}' has FAILED`)
    console.log(err)
})

