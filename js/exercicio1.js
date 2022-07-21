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

function addId() {
    products.forEach((product,index) => product.id = index+1)
}

function showProductNames(){
    products.forEach((product) => console.log(product.name))
}

function showProductId(id){
    const product = products.find((product) => product.id == id)
    console.log(product)
}

function showAllBlackProducts() {
    const allBlack = products.filter((product) => product.colors.includes('black'))
    allBlack.forEach((product) => {
        console.log(product.name)
    })
}

function showAllProductWithoutColor() {
    const noColor = products.filter((product) => product.colors.length == 0)
    noColor.forEach((product) => {
        console.log(product.name)
    })
}

addId();
console.log('\n')

showProductNames();
console.log('\n')

showProductId(3);
console.log('\n')

showAllBlackProducts();
console.log('\n')

showAllProductWithoutColor();
console.log('\n')
