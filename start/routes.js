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
const Route = use('Route');
const Album = use('App/Models/Album');
const Song = use('App/Models/Song');

Route.on('/').render('welcome');


//ALBUMS ROUTES ================================================

//Retorna os Albums
Route.get('albums', async() => {

    const albums = await Album.query().orderBy('id', "desc").fetch();
    return albums;

});


//Retorna o Album pelo ID juntamente com seus respectivos sons
Route.get('albums/:id', async({ params }) => {

    const album = await Album.query().with("songs").where('id', params.id).first();
    return album;

});


//Cria um novo Album
Route.post('albums', async({ request }) => {
    const { name, artist } = request.all();
    const newAlbum = new Album();
    newAlbum.name = name;
    newAlbum.artist = artist;
    await newAlbum.save();

    return newAlbum;
});


//Edita um album pelo ID
Route.put('album/:id', async({ request, params }) => {
    const { name, artist } = request.all();
    const editedAlbum = await Album.find(params.id);
    editedAlbum.name = name;
    editedAlbum.artist = artist;
    await editedAlbum.save();

    return editedAlbum;
})


//Insere uma imagem no Album
Route.put('albums/:id/photo', async({ request, params }) => {

    const album = await Album.find(params.id);
    const image = request.file("album_image", {
        types: ["image"],
        size: "1mb"
    });

    await image.move("public/uploads", {
        name: `album-${album.id}-${new Date().getTime()}.jpg`
    });

    const pathImage = `http://localhost:3333/uploads/${image.fileName}`;
    album.image = pathImage;
    await album.save();

    return album;
});


//Deleta o Album pelo ID juntamente com seus respectivos sons
Route.delete('albums/:id', async({ params }) => {

    const album = await Album.find(params.id);

    if (album.image != null) {
        /*
        Não implementei a lógica de deletar a imagem do Album porque
        a mesma ficou verbosa demais, se tratando de armazenamento local, e como a API
        é só para anaálise creio que não fosse necessário.
        */
        return album.delete();
    }

    return album.delete();

});


//SONGS ROUTES ================================================

//Insere um Song no Album correspondente pelo ID
Route.post('/albums/:id/song/add', async({ request, params }) => {
    const song = new Song();

    song.album_id = params.id;
    song.name = request.input("name");

    song.save();
    return song;
});


//Edita um song pelo ID
Route.put('song/:id', async({ request, params }) => {
    const { name } = request.all();
    const editedSong = await Song.find(params.id);
    editedSong.name = name;
    await editedSong.save();

    return editedSong;
})


//Deleta um Song pelo ID
Route.delete('/songs/:id', async({ params }) => {
    const song = await Song.find(params.id);
    return await song.delete();
});



//Api documentation

Route.get('/api/docs', 'DocApiController.hello')