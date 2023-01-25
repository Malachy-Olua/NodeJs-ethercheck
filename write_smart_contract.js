const { ethers } = require("ethers");
const ERC20_ABI = require("./abi_write.json");
const abi = ERC20_ABI.abi

const provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/mZgV5yRko3eALjRqHvkk9Y7EcPheGCMP')

const account1 = '0x514D86d065b0478cE65e1944223328a549b3fbDD' // Your account address 1
const account2 = '0x5da00923e31dDdC93DE580e12474Edb1474C66eA' // Your account address 2

const privateKey1 = 'fc88f9f9714ab5a9d91085c0bbb8609f7501b3ec07936f38ccc3042d23c516cb' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)



const address = '0xEC690c33595215F25d436EE0310916523256BA17'
const contract = new ethers.Contract(address, abi, provider)

const main = async () => {

    const parsedAmount = ethers.utils.parseEther('0.002')
    const data = await contract.getAllTransactions()

    console.log(`\nReading from ${address}\n`)
    console.log(`transactions: ${data}\n`)

    const contractWithWallet = contract.connect(wallet)

    const tx = await contractWithWallet.addToBlockchain(account2,parsedAmount,"testing1","testing2")
    await tx.wait()

    console.log(tx)

    const data2 = await contract.getAllTransactions()
    //const balanceOfReciever = await contract.balanceOf(account2)

    //console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`transactions2: ${data2}\n`)
}

main()