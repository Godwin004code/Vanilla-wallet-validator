// const Data = [
//     {
//         id:1,
//         head: 'Swift purchase',
//         text: `Users can buy any amount of coins, tokens and platform fees. The purchased coin or token will immediately be available in your wallet, which users can use to trade or participate in DeFi.`
//     },
//     {
//         id: 2,
//         head: 'Node provider',
//         text: `Node providers will be running nodes either on their own hardware or using the Blockchain platform, to earn rewards and platform fees.`
//     },
//     {
//         id: 3,
//         head: 'Governance',
//         text: `Governors will ensure the long term sustainability of the platform.`
//     }
// ]
const h2 = document.getElementById('head')

const paragraph = document.querySelector('.text')


// let current = 0



// function roleSlide() {
//     current++
//     if(current > Data.length - 1) {
//         current = 0
//     }
//     let item = Data[current]
//     h2.innerHTML = `${item.head}`
//     paragraph.textContent = item.text
    
// }

// setInterval(roleSlide, 2000)



// Show and Hide Wallets

const showWalletBtn = document.getElementById('show-wallets')
const hideWalletBtn = document.getElementById('show-less')
const container = document.querySelector('.container')
const btnWalletContainer = document.querySelector('.btn-wallet')

showWalletBtn.addEventListener('click', function() {
    console.log(13);
    container.classList.add('show-wallet')
    
})

hideWalletBtn.addEventListener('click', function() {
    container.classList.remove('show-wallet')
})