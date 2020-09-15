'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Albums = use('App/Models/Album')

Route.on('/').render('welcome')

Route.get('albums', async() => {

  const albums = await Albums.query().orderBy('id', "desc").fetch()

  return albums;

});