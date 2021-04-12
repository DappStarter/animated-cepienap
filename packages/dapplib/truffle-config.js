require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remain hole idea enroll fortune seminar'; 
let testAccounts = [
"0x3e0b336e552eaa65530c1090edc4978ce7e93a68636dd138b2f597d8092fa0ee",
"0x217e4ca5742b48eb536c3e8445acc8ce2e69720132d92a0cfb7306a498d3990a",
"0x9f5a70b7c3bca9a13111506fd4bf75cdc8e8731148a5d0580472807bdf7b8faf",
"0x870d26a122db125423d77d57e138efdf7ffdb4bc21fdb7c58f217460bdca9286",
"0xea9ec0c10638ff2055e33504d4f02349842a7c6fb1eb31fbe99ae0b0feae4b23",
"0x8a0a9e68d8631b1d953da8d7fea97587a9754a0ee5603e8a395dc0b44c9f8ad9",
"0x42da601926d42156efd29321984bfc03b97f3d1a4631bafa0712303ce8ad3d2e",
"0x0117e32341539d0e09d264ad6d51a02f3d7a321569d8da1a1861e817efa95fa2",
"0x93240216521ee8bdab7755bb6dc5648d952d6523ea41902bed9e51c7896928f6",
"0xea8ee178a8105241bf95e1089c6ba3c061e1d5fa413f7fafc5dd89202e5b27fd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
