// eslint-disable-next-line no-undef
var MediVault = artifacts.require('./MediVault.sol');
module.exports = function(deployer) {
  deployer.deploy(MediVault);
};