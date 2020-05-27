const express = require('express')
const GlamUpCtrl = require('../controller/glamUp-ctrl')
const multer = require('multer')
const uuidv4 = require('uuidv4')
const router = express.Router()
const mongoose = require('mongoose')
let imageStorage = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, imageStorage);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split('').join('-');
        cb(null, uuidv4 + '-' + fileName)
    }
});
var upload = multer({
    storage: storage,
    limits: { fieldSize: 25 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
})
let GlamUp = require('../models/glamUp-model')
router.post('/stock', upload.array('imgCollection', 4), (req, res, next) => {
    const files = req.files
    if (!files) {
        const error = new Error('Please choose files')
        error.httpStatusCode = 400
        error.httpStatusCode = 400
        return next(error)
    }

    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < files.length; i++) {
        reqFiles.push(url + '/public/' + files[i].filename)

    }
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a stock',
        })
    }
    const stock = new GlamUp({
        _id: new mongoose.Types.ObjectId(),
        category: body.category,
        gender: body.gender,
        item_name: body.item_name,
        price: body.price,
        // sizes: body.sizes,
        colors: body.colors,
        imgCollection: reqFiles
    })

    if (!stock) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
    stock.save().then((result) => {
        // return res.status(201).json({
        //     success: true,
        //     id: result._id,
        //     category: result.category,
        //     gender: result.gender,
        //     item_name: result.item_name,
        //     price: result.price,
        //     // sizes: result.sizes,
        //     colors: result.colors,
        //     imgCollection: result.imgCollection,
        //     message: 'Stock Created!',
        // })
        //return res.redirect('/');
        return res.redirect('/allWomenStock').status(201).json({
            message: 'Stock Created!',
        });
    }).catch(error => {
        return res.status(400).json({
            error,
            message: 'Stock not created!',
        })
    })

})
router.get('/allWomenStock', GlamUpCtrl.getAllWomenStock)

module.exports = router