'use strict'

//const Factory = require('@adonisjs/lucid/src/Factory')

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }s
// })

Factory.blueprint("App/Models/Album", faker => ({
  name: faker.name(),
  artist: faker.name()
}))

Factory.blueprint("App/Models/Song", faker => ({
  name: faker.name()
}))
