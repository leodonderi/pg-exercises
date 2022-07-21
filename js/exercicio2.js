let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]

// 1.
products.push({
    name: 'Plastic Duck',
    price: 0.5,
    quantity: 100,
    colors: ['yellow', 'black']
})
console.log(products.map((product) => product.name), '\n')

// 2.
products = products.filter((product) => product.quantity)
console.log(products.map((product) => product.name), '\n')


// 3.
const sumOfPrices = products.reduce((previous, current) => {
    return previous + current.quantity
}, 0)
console.log(sumOfPrices, '\n');

// 4.
function showProductsWithPricesHigher(basePrice) {
    console.log(products.filter((product) => product.price > basePrice), '\n------------');
}
showProductsWithPricesHigher(1000);

// 5.
console.log(products.filter((product) => product.name.includes('o')))