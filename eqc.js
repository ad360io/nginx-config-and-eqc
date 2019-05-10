var ethereum_txn = require('ethereumjs-tx');
var Web3 = require('web3');


var web3 = new Web3(new Web3.providers.HttpProvider(etherum_api_uri));

// ETH address of the EQC token
const token_address = '0xC438B4c0Dfbb1593be6DEE03Bbd1A84BB3aa6213';

// Read ABI into a JSON array
const contract_abi_json = `{"status":"1","message":"OK","result":"[{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"name\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_spender\\",\\"type\\":\\"address\\"},{\\"name\\":\\"_value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"approve\\",\\"outputs\\":[{\\"name\\":\\"success\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"withdrawFromReserve\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"startDate\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"duration\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_new\\",\\"type\\":\\"address\\"}],\\"name\\":\\"setOwner\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"totalSupply\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_multisig\\",\\"type\\":\\"address\\"}],\\"name\\":\\"changeMultisig\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"signer\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_from\\",\\"type\\":\\"address\\"},{\\"name\\":\\"_to\\",\\"type\\":\\"address\\"},{\\"name\\":\\"_value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transferFrom\\",\\"outputs\\":[{\\"name\\":\\"success\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"decimals\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint8\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"burn\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"multisig\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"icoAllocation\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"tokenAddress\\",\\"type\\":\\"address\\"}],\\"name\\":\\"transferERC20Token\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"foundationReserve\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_owner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"balanceOf\\",\\"outputs\\":[{\\"name\\":\\"balance\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"potentialOwner\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"owner\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"symbol\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_to\\",\\"type\\":\\"address\\"},{\\"name\\":\\"_value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transfer\\",\\"outputs\\":[{\\"name\\":\\"success\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"confirmOwnership\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"creationTime\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"investor\\",\\"type\\":\\"address\\"},{\\"name\\":\\"tokenPrice\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"hash\\",\\"type\\":\\"bytes32\\"},{\\"name\\":\\"v\\",\\"type\\":\\"uint8\\"},{\\"name\\":\\"r\\",\\"type\\":\\"bytes32\\"},{\\"name\\":\\"s\\",\\"type\\":\\"bytes32\\"}],\\"name\\":\\"invest\\",\\"outputs\\":[],\\"payable\\":true,\\"stateMutability\\":\\"payable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_owner\\",\\"type\\":\\"address\\"},{\\"name\\":\\"_spender\\",\\"type\\":\\"address\\"}],\\"name\\":\\"allowance\\",\\"outputs\\":[{\\"name\\":\\"remaining\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"preIcoAllocation\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"name\\":\\"_signer\\",\\"type\\":\\"address\\"},{\\"name\\":\\"_multisig\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"name\\":\\"old\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"name\\":\\"current\\",\\"type\\":\\"address\\"}],\\"name\\":\\"NewOwner\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"name\\":\\"old\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"name\\":\\"potential\\",\\"type\\":\\"address\\"}],\\"name\\":\\"NewPotentialOwner\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Transfer\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Approval\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Issuance\\",\\"type\\":\\"event\\"}]"}`;

const contract_abi = JSON.parse(contract_abi_json);


// Store value of ETH private key
var private_key;

// Store URI of your Ethereum geth API endpoint
var etherum_api_uri;

// Store value of chosen gas limit
var gas_limit;

// Store sender's ETH address
var sender_eth_address;

// Store recipient's ETH address
var recipient_eth_address;

// Store amount of EQC to be sent
var eqc_amount;


// If your token is divisible to 8 decimal places, 42 = 0.00000042 of your token
// Convert amount to necessary format based on divisibility
eqc_amount = eqc_amount * 10 ** 8;

// Get nonce for sender's account
var nonce = await web3.eth.getTransactionCount(sender_eth_address);

nonce = '0x' + nonce.toString(16);

var eqc_contract = new web3.eth.Contract(contract_abi, token_address);

var txn_data = eqc_contract.transfer.getData(recipient_eth_address, eqc_amount);

var raw_transaction = {
    'from': sender_eth_address,
    'nonce': nonce,
    'gasPrice': web3.toHex(web3.eth.gasPrice),
    'gasLimit': web3.toHex(gas_limit),
    'to': token_address,
    'value': 0,
    'data': txn_data,
    'chainId': 1
};

// May want to verify EQC balance is sufficient
var balance = await eqc_contract.methods.balanceOf(sender_eth_address).call();


// Initialize, sign, and serialize transaction
var private_key_ = new Buffer(private_key, 'hex');

var txn = new ethereum_txn(raw_transaction);

txn.sign(private_key_);

var serialized_txn = '0x' + txn.serialize().toString('hex');


// Send the transaction
var txn_result = await web3.eth.sendSignedTransaction(serialized_txn);
