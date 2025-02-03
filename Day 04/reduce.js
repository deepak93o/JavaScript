const nums = [1,2,3,4]

const inValue = 0;

// const re = nums.reduce(function (acc, val) {
//     console.log(`acc: ${acc}, val: ${val}`);
    
//     return acc + val

// }, inValue)

const re = nums.reduce( (acc, val) => acc+val,0)

// console.log(re);

const shoppingCart = [
    {
        itemName: "Momos",
        price: 90
    },
    {
        itemName: "Noodles",
        price: 120
    },
    {
        itemName: "Pizza",
        price: 350
    },
    {
        itemName: "Burger",
        price: 80
    }
]
const priceTotal = shoppingCart.reduce( (acc, item) => acc + item.price,0)

console.log(priceTotal);
