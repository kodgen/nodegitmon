
const nextCheckoutBranch = "nodemon";
const refreshTime = 10;
//refresh time in second

const checkoutTime = refreshTime * 1000 - 100;
//checkout time in microsecond

exports.nextCheckoutBranch = nextCheckoutBranch ;
exports.refreshTime = refreshTime;
exports.checkoutTime = checkoutTime;
