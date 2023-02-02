const { ethers } = require("ethers");
const ERC20_ABI = require("./abi_read.json");


const provider = new ethers.providers.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/ekSyouDPhEGwfI7hF92LACGaunr5mzgt');
const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const block = await provider.getBlockNumber()
    console.log(block)
    const transferEvents = await contract.queryFilter('Transfer', block - 4, block)
    console.log(transferEvents)
    //const transferEvents1 = await contract.filters.Transfer("0xced92fa7f0797cbc851b48140ae218a0b0d41ce0")
    //const transferEvents2 = await contract.queryFilter(transferEvents1, block - 1000, block)
    //console.log(transferEvents2)
    
}

main()
