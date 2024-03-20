// Map

let price = [10,20,34,45]

let priceINR = price.map(x=>x*83)
console.log("price", priceINR)

let price2 = [10,20,34,45,50 , 60, 54]

let INR = price2.map(convert)

function convert(val){
    return val*83
}

console.log(INR)

const data = [
    {
        name:"john",
        age:"43"
    },
    {
        name:"KDR",
        age:"199"
    },
    {
        name:"ELA",
        age:"1070503"
    }
]


const age = data.map(x=> x.age)

console.log(age)

//Filter

let nums = [1,2,3,4,5,6,7,8,9,0,12,3,45353,65]
let lth = nums.filter(x => x>10)

console.log(lth)

// Reduce

let nums2 = [35,65, 12, 54, 67]

let numsttl = nums2.reduce((total,el) => total+el)
console.log("total", numsttl);

const alphabetArray = [
    ['a', 'b', 'a'],
    ['c', 'd', 'c'],
    ['e', 'f', 'f'],
  ];

  let cnt = alphabetArray.flat().reduce(
    (accumulator, currVal) => {
        if(accumulator[currVal]){
            accumulator[currVal]++
        }
        else{
            accumulator[currVal] = 1

        }
        return accumulator
  }, {})

  console.log(cnt)

  let exer1 = [4,6,2,3,1,1,3,5,7,8,4,3]

