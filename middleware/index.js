
module.exports = {
	validateToken: function(req,res,next){
		if (req.body != undefined && req.body != null) {
			var token = req.body.token || null;
			validToken = checkToken(token);
			if (validToken == 'true') {
				next();
			} else {
				res.json({'status':'warning','message':'invalid key'});
			}
		}else{
			res.json({'status':'warning','message':'key not found'});
		}
	}
};

function checkToken(token){
	return false;
}