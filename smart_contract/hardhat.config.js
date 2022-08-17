// https://eth-goerli.g.alchemy.com/v2/j96cP1KhSmv-p7kWho-5pJJ8sMWEKEXX

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/j96cP1KhSmv-p7kWho-5pJJ8sMWEKEXX',
      accounts: ['bcc2383ca51478d620721d041173c0ceda5a3500b743abc9fa54b811332e3241']
    }
  }
}