const express = require('express');
const router = express.Router();
var db = require('../db/models');


router.get('/', (req,res) => {                       //GOOD
    db.Author
        .findAll({})
        .then(authors => {
            res.status(200).json(authors);
        });
});

router.get('/:id', (req,res) => {                    //GOOD

   const id = req.params.id;

    db.Author
        .findById(id)
        .then(authorById => {
            if(authorById){
            res.status(200).json(authorById);
        } else {
            res.status(404).json({message:'Not a valid author.'});
            }
        })
        .catch(err => {
            res.status(500).json({error: err});
        });
});

router.get('/:id/blogs', (req,res) => {              // NEED BLOG TO WORK

    const id = req.params.id;

    db.Blog
        .findAll({where: {authorId: id}})
        .then(authors => {
            res.status(200).json(authors);
        });
});

router.post('/', (req,res) => {                       //GOOD
    db.Author
    .create(req.body)
    .then(newAuthor => {
        res.status(201).json(newAuthor);
    }); 
});

router.put('/:id', (req,res) => {       
    
    const id = req.params.id;

    db.Author
    .update(req.body, {where: {id:id}})
    .then(savedAuthor => {
        res.status(204).json(savedAuthor);
    }); 
});

router.delete('/:id', (req,res) => {       
    
    const id = req.params.id;

    db.Author
    .destroy({where: {id:id}})
    .then(deletedAuthor => {
        res.status(200).json(deletedAuthor);
    }); 
});


module.exports = router;