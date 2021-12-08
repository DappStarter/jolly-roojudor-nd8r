require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strong dash sad exchange good knee metal giggle'; 
let testAccounts = [
"0xe226d4d42ef2ac7b3e6a980c0b7acacb225fce4f15f7e39e0d0db814c212f098",
"0x8efa0e3bc9a18f682c3d0911192019b481e1865892a8139230219c60a554b66a",
"0x5717ba2a78cb5703ebe56c5eb473ab99ba666fd7cd33f9e298bb1c2c9ab9d79a",
"0xb927dc1710e965628c70571774facd25f10b2f8bc1accd78264be701501cf0b4",
"0x3dc4a4c4294ae6f713d41a63dcb96a38fac850e68d8f90480fbc57c27eafe7a7",
"0xa877c61c5548b3e6e26728f35e3f9da418bdf6deafdbf93254f02cf9fedccd4b",
"0x102e7b1873f388a5a41d5b31f6de6eb57dabd5593867d853536ef4099bfbc6f1",
"0xfd5ffb5cdabe461b800b5596711ba139b563aac4737a8490be850c03996b0fe8",
"0xc5ba928998aac4acdb46e16301d5dbd35715bbd80c61882f61849622689cb9d6",
"0xc99a465c1bc1706c92f46fac2b624bf7ff65ddcbbc260a4176f88b6b8f9c9b62"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


