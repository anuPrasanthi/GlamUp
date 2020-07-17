
// const mongoose = require('mongoose')



const GlamUp = require('../models/glamUp-model')
// createStock = (req, res, next) => {

//     const body = req.body
//     console.log('--category--'+body.category+'--gender--'+body.gender)
//     const reqFiles = [];
//     console.log('----reqFiles------'+reqFiles.length)
//     const url = req.protocol + '://' + req.get('host')
//     console.log('======='+req.files.length+'===url=='+url)
//     for (var i = 0; i < req.files.length; i++) {
//         console.log('---req.files[i].filename--'+req.files[i].filename+'====filename===='+filename)
//         reqFiles.push(url + '/public/' + req.files[i].filename)

//     }
//     if (!body) {
//         return res.status(400).json({
//             success: false,
//             error: 'You must provide a stock',
//         })
//     }
//     const stock = new GlamUp({
//         _id: new mongoose.Types.ObjectId(),
//         category: body.category,
//         gender: body.gender,
//         item_name: body.item_name,
//         price: body.price,
//         sizes: body.sizes,
//         colors: body.colors,
//         imgCollection: reqFiles
//     })
    
//     console.log(stock.length+'====stock===')
//     if (!stock) {
//         return res.status(400).json({
//             success: false,
//             error: err
//         })
//     }
//     stock.save().then(result => {
//         //console.log('----stock----')
//         return res.status(201).json({
//             success: true,
//             id: result._id,
//             category: result.category,
//             gender: result.gender,
//             item_name: result.item_name,
//             price: result.price,
//             sizes: result.sizes,
//             colors: result.colors,
//             imgCollection: result.imgCollection,
//             message: 'Stock Created!',
//         })
//     }).catch(error => {
//         return res.status(400).json({
//             error,
//             message: 'Stock not created!',
//         })
//     })
// }
getAllWomenStock = async (req, res) => {
    await GlamUp.find({gender:'Female'}, (err, stock) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err,
            })
        }
        if (!stock.length) {
            return res.status(404).json({
                success: false,
                error: `Stock not found`,
            })
        }
        
        return res.status(200).json({
            success: true,
            data: stock,
        })
    }).catch(err => console.log(err))
    //.sort({ createdAt: 'desc' })
}
getAllMenStock = async (req, res) => {
    await GlamUp.find({gender:'Male'}, (err, stock) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err,
            })
        }
        if (!stock.length) {
            return res.status(404).json({
                success: false,
                error: `Stock not found`,
            })
        }
        
        return res.status(200).json({
            success: true,
            data: stock,
        })
    }).catch(err => console.log(err))
    //.sort({ createdAt: 'desc' })
}
getAllKidsStock = async (req, res) => {
    await GlamUp.find({gender:'Kids'}, (err, stock) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err,
            })
        }
        if (!stock.length) {
            return res.status(404).json({
                success: false,
                error: `Stock not found`,
            })
        }
        
        return res.status(200).json({
            success: true,
            data: stock,
        })
    }).catch(err => console.log(err))
    //.sort({ createdAt: 'desc' })
}
getStockById = async (req, res) => {
    await GlamUp.findOne({ _id: req.params.id}, (err, stock) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err,
            })
        }
        if (!stock) {
            return res.status(404).json({
                success: false,
                message: 'Stock not found'
            })
        }
        return res.status(200).json({
            success: true,
            data: stock,
        })
    }).catch(err => console.log(err))
}
module.exports = {
    getAllWomenStock,
    getAllMenStock,
    getAllKidsStock,
    getStockById,
}