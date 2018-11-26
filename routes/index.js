
const router = require('express').Router();
const middleware = require('../middleware/index');
const homeController = require('../controllers/index');


router.get('/',homeController.index);

router.get('/home',middleware.validateToken,function(req,res){
	let response = 'This is a success page for our API with Auth token';
	console.log(response);
	res.json(response);
});

router.get('/ping',function(req,res){
	let response = 'This is a success page for our API';
	console.log(response);
	res.json(response);
});

module.exports = router;