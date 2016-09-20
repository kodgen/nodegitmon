
var Git = require("nodegit");
var path = require("path");

var repository;
var common = require('./common');

module.exports = {
	checkout : function (){
		setTimeout(function(){
			Git.Repository.open(path.resolve(__dirname, "../.git"))
			//current branch
			.then(function(repo){
				repository = repo;
				return repository.getCurrentBranch();
			})  
			//checkout
			.then(function(ref) {
				console.log('<nodegitmon> From ' + ref.target() + ' branch: ' + ref.shorthand());
				var checkoutOpts = {
					checkoutStrategy: Git.Checkout.STRATEGY.FORCE
				};
				return repository.checkoutBranch(common.nextCheckoutBranch, checkoutOpts);
			})
			//current branch
			.then(function () {
				return repository.getCurrentBranch();
			})
			.then(function(ref) {
				console.log('<nodegitmon> To   ' + ref.target() + ' branch: ' + ref.shorthand());
			});
		//set time to checkout	
		},common.checkoutTime);
	return "checkout success";
	}
};
