
module.exports = {
	index: function(req,res){
		res.json({'status':'success','message':'we got to the controllers'});
	}
};

function checkToken(token){
	return false;
}