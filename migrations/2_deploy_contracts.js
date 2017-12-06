const MultiSigWallet = artifacts.require("MultiSigWallet");
const abiEncoder = require('ethereumjs-abi');
const BigNumber = web3.BigNumber;


module.exports = function(deployer, chain, accounts) {
  return deployMultisig(deployer, accounts);
};


async function deployMultisig(deployer, accounts) {
  const owner1 = "0x6D2E986f977219C30849c109Bc6B816574CCB507";
  const owner2 = "0x667dEb5A98f77052cf561658575cF1530Ee42C7a";
  const numRequiredSignatures = 2;

  const values = [[owner1, owner2], numRequiredSignatures];
  const encodedParams = abiEncoder.rawEncode(['address[]', 'uint256'], values);
  console.log('MULTISIG PARAMS : \n', encodedParams.toString('hex'));
  return deployer.deploy(MultiSigWallet, [owner1, owner2], 1);
}
