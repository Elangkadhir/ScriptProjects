let json1 = "dave"
let json2 = 4
let json3 = true
let json4 = [4, 5, 6, 7]
let json5 = [
    {
        "stocks": "Gold",
        "price": 3500
    },
    {
        "stocks": "Silver",
        "price": 2500
    },
    {
        "stocks": "Titanium",
        "price": 1500
    },
]

console.log(json5);
let parsed = JSON.parse(json5)
console.log(parsed[1].price)
console.log(JSON.stringify(parsed))