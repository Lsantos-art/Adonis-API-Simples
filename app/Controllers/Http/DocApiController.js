'use strict'

class DocController {

    /**
     * @swagger
     * /albums:
     *   get:
     *     summary: Retorna todos os Albums
     *     responses:
     *       200:
     *         description: Retornará um array de Albums
     */


    /**
     * @swagger
     * /albums/{id}:
     *   get:
     *     summary: Retorna um Album pelo id
     *     parameters:
     *       - name: id
     *         description: Id do Album a ser buscado
     *         in: path
     *         required: true
     *         schema:
     *         type: integer
     *         minimum: 1
     *     responses:
     *       200:
     *         description: Retornará um Album e os seus respectivos sons
     */


    /**
     * @swagger
     * /albums:
     *   post:
     *     summary: Insere um novo album no banco
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: name
     *         description: Nome do album
     *         in: formData
     *         required: true
     *         type: string
     *       - name: artist
     *         description: Artista do album
     *         in: formData
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Retorna o album inserido
     */



    /**
     * @swagger
     * /album/{id}:
     *   put:
     *     summary: Insere um album no banco
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: name
     *         description: Nome do album
     *         in: formData
     *         required: true
     *         type: string
     *       - name: artist
     *         description: Artista do album
     *         in: formData
     *         required: true
     *         type: string
     *       - name: id
     *         description: Id do Album a ser editado
     *         in: path
     *         required: true
     *         schema:
     *         type: integer
     *         minimum: 1
     *     responses:
     *       200:
     *         description: Retorna o album inserido
     */



    /**
     * @swagger
     * /albums/{id}:
     *   delete:
     *     summary: Deleta um album pelo Id
     *     parameters:
     *       - name: id
     *         description: Id do Album a ser deletado
     *         in: path
     *         required: true
     *         schema:
     *         type: integer
     *         minimum: 1
     *     responses:
     *       200:
     *         description: Retornará true ou false como resultado da deleção do registro
     */



    //Songs docs

    /**
     * @swagger
     * /albums/{id}/song/add:
     *   post:
     *     summary: Insere um som em um dos albums cadastrados
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: name
     *         description: Nome do som
     *         in: formData
     *         required: true
     *         type: string
     *       - name: id
     *         description: Id do Album que o som pertence
     *         in: path
     *         required: true
     *         schema:
     *         type: integer
     *         minimum: 1
     *     responses:
     *       200:
     *         description: Retorna o album inserido
     */

    /**
     * @swagger
     * /songs/{id}:
     *   delete:
     *     summary: Deleta um som pelo Id
     *     parameters:
     *       - name: id
     *         description: Id do Som a ser deletado
     *         in: path
     *         required: true
     *         schema:
     *         type: integer
     *         minimum: 1
     *     responses:
     *       200:
     *         description: Retornará true ou false como resultado da deleção do registro
     */



    async hello({ request, response }) {
        const name = request.input('name', 'Guess')
        response.send({ message: 'Hello ' + name })
    }

}

module.exports = DocController