const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
var db = require('../db/models');

router.get('/', (req,res) => {                       //GOOD
    db.Blog
        .findAll({})
        .then(blogs => {
            res.status(200).json(blogs);
        });
});

router.get('/featured', (req,res) => {              // NEED BLOG TO WORK

    db.Blog
        .findAll({where: { featured: true }})
        .then(featuredBlogs => {
            res.status(200).json(featuredBlogs);
        });
});

router.get('/:id', (req,res) => {                    //GOOD

   const id = req.params.id;

    db.Blog
        .findById(id)
        .then(blogById => {
            if(blogById){
            res.status(200).json(blogById);
        } else {
            res.status(404).json({message:'Not a valid blog ID.'});
            }
        })
        .catch(err => {
            res.status(500).json({error: err});
        });
});

router.post('/', (req,res) => {        
    let newblog = req.body;
                   //pending
    newblog.authorId = req.query.authorId;
    db.Blog
    .create(newblog)
    .then(newBlog => {
        res.status(201).json(newBlog);
    }); 
});

router.put('/:id', (req,res) => {       
    
    const id = req.params.id;

    db.Blog
    .update(req.body, {where: {id:id}})
    .then(savedBlog => {
        res.status(204).json(savedBlog);
    }); 
});

router.delete('/:id', (req,res) => {       
    
    const id = req.params.id;

    db.Blog
    .destroy({where: {id:id}})
    .then(deletedBlog => {
        res.status(200).json(deletedBlog);
    }); 
});

module.exports = router;