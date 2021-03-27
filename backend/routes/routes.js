const express = require('express')
const router = require('express').Router()
const Wine = require('../models/wine')

router.get('/', (req,res) => {
    Wine.find((err,data) => {
        if(err){
            return next(err)
        }
        else {
            res.json(data)
        }
    })
})

router.post('/create-wine', (req, res, next) => {
    Wine.create(req.body, (err, data) => {
        if(err){
            return next(err)
        }
        else{
            res.json(data)
        }
    })
})

router.get('/edit-wine/:id', (req, res) => {
    Wine.findById(req.params.id, (err, data) => {
        if (err){
            return next(err)
        }
        else{
            res.json(data)
        }
    })
})

router.post('/update-wine/:id', (req, res) => {
    Wine.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, data) => {
        if (err){
            return next(err)
        }
        else{
            res.json(data)
            console.log("Update Complete")
        }
    })
})

router.delete('/delete-wine/:id', (req,res, next) => {
    Wine.findByIdAndDelete(req.params.id, (err, data) => {
        if (err){
            return next(err)
        }
        else{
            res.status(200).json({
                message: data
            })
        }
    })
})


module.exports = router;