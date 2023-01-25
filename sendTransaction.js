const { ethers } = require("ethers");


const provider = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/mZgV5yRko3eALjRqHvkk9Y7EcPheGCMP")
//console.log(provider)
const account1 = '0x514D86d065b0478cE65e1944223328a549b3fbDD' // Your account address 1
const account2 = '0x5da00923e31dDdC93DE580e12474Edb1474C66eA' // Your account address 2

const privateKey1 = 'fc88f9f9714ab5a9d91085c0bbb8609f7501b3ec07936f38ccc3042d23c516cb' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)

const main = async () => {
    const senderBalanceBefore = await provider.getBalance(account1)
    const recieverBalanceBefore = await provider.getBalance(account2)

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.025")
    })

    await tx.wait()
    console.log(tx)

    const senderBalanceAfter = await provider.getBalance(account1)
    const recieverBalanceAfter = await provider.getBalance(account2)

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
}

main()