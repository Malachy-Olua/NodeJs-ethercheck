const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/ekSyouDPhEGwfI7hF92LACGaunr5mzgt');

const main = async () => {
    const block = await provider.getBlockNumber()

    console.log(`\nBlock Number: ${block}\n`)

    const blockInfo = await provider.getBlock(block)

    console.log(blockInfo)

    const { transactions } = await provider.getBlockWithTransactions(block)

    console.log(`\nLogging first transaction in block:\n`)
    console.log(transactions[0])
}

main()