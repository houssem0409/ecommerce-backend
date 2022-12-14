const express = require('express')
const router = express.Router()

const {
    create,productById , read, remove,
     update , list , listRelated , listCategories,
     listBySearch, photo ,listSearch
}= require('../controllers/product');
const {
    
    requireSignin, 
    isAuth,
    isAdmin
}= require('../controllers/auth');
const { 
    userById
}= require('../controllers/user');

router.get('/product/:productId', read);
router.delete('/product/:productId/:userId', requireSignin,
isAuth,
isAdmin , remove)
router.put('/product/:productId/:userId', requireSignin,
isAuth,
isAdmin , update)
router.post('/product/create/:userId',
 requireSignin,
 isAuth,
 isAdmin,
 create);

 router.post('/products/search' , listSearch)
 router.get('/products/related/:productId', listRelated)
 router.get('/products', list);
 router.get('/products/categories', listCategories )

 router.post('/products/by/search' , listBySearch)

 router.param('userId' , userById)
 router.param('productId' , productById)

 router.get('/product/photo/:productId', photo);


module.exports= router;