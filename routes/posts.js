const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
router.get('/', async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});
router.post('/', async (req,res)=>{
    const post = new Post({
        title: req.body.title,
        genre: req.body.genre,
        year: req.body.year
    });
    try{
    const savedPost = await post.save()
    res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});
router.get('/:postId', async (req,res)=>{
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
        res.json({message: err});
    }
});
module.exports = router;
/**
 * @api {get} /posts Films List
 * @apiName GetFilmsList
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} title Title of the film.
 * @apiSuccess {String} genre Genre of the film.
 * @apiSuccess {Number} year Release year.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "title": "Titanic",
 *       "lastname": "Epic romance and disaster"
 *       "year": 1997
 *     }
 *
 * @apiError FilmNotFound The id of the film was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "FilmNotFound"
 *     }
 */