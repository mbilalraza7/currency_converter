import inquirer from "inquirer"

const currency: any = {
    "USD": 1,   //Base currency
    "PKR": 280,
    "EUR": 0.92,
    "INR": 74.50
};
let user_answer = await inquirer.prompt(
    [    
        {
            name: "from",
            message: "Enter from currency",
            type: "list",
            choices: ["USD", "PKR", "EUR", "INR"]
        },
        {
            name: "to",
            message: "Enter to currency",
            type: "list",
            choices: ["USD", "PKR", "EUR", "INR"]
        },
        {
            name: "amount",
            message: "Enter your amount",
            type: "number"
        }
    ]
)

let fromAmount = currency[user_answer.from]  //exchange rate
let toAmount = currency[user_answer.to]  //exchange rate
let amount = user_answer.amount
let baseAmount = amount / fromAmount  //USD base currency
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);