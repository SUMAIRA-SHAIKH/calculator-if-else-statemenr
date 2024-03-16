import inquirer from "inquirer";
console.log("\n\t\t\t***~SIMPLE CALCULATOR~***")
console.log("\t\t\t=========================\n")
const answer = await inquirer.prompt([
  { message: "\tPlease enter 1st number:", type: "number", name: "firstNumber" },
  { message: "\tplease enter 2nd number:", type: "number", name: "secondNumber" },
  {
    message: "\tPlease select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction","Multipilication","Division","Remainder"],
  },
]);

//conditional statement
if(answer.operator==="Addition")
{
    console.log( "\tYour result of Addition is: ",answer.firstNumber + answer.secondNumber)
}else if(answer.operator==="Subtraction")
{
console.log( "\tYour result of Subtraction is: ",answer.firstNumber - answer.secondNumber);
}
else if( answer.operator=== "Multipilication")
{
    console.log("\tYour result of Multiplication is: ", answer.firstNumber * answer.secondNumber);  
}
else if(answer.operator=== "Division")
{
    console.log("\tYour result of Division is: ", answer.firstNumber / answer.secondNumber);  
}
else if(answer.operator=== "Remainder")
{
    console.log( "\tRemainder of two number's is: ",answer.firstNumber % answer.secondNumber);  
}


console.log("\t-----------------------------------\n")
const output = await inquirer.prompt([
  { message: "\tDo u wish to continue calculation YES or NO = (Y/N)?", type: "boolean", name: "wantagain" },
  {
    message: "\tPlease select YES or NO perform operation",
    type: "list",
    name: "operator",
    choices: ["YES", "NO"],
  }])

  //conditional statement
  
if(output.operator==="YES")
{
{
    //console.log( "\tAGAIN ADITION: ",answer.firstNumber + answer.secondNumber)

    const answer = await inquirer.prompt([
      { message: "\n\tPlease enter 1st number:", type: "number", name: "firstNumber" },
      { message: "\tplease enter 2nd number:", type: "number", name: "secondNumber" },
      {
        message: "\tPlease select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction","Multipilication","Division","Remainder"],
      },
    ]);
    
    //conditional statement
    if(answer.operator==="Addition")
    {
        console.log( "\n\tYour result of Addition is: ",answer.firstNumber + answer.secondNumber)
    }else if(answer.operator==="Subtraction")
    {
    console.log( "\tYour result of Subtraction is: ",answer.firstNumber - answer.secondNumber);
    }
    else if( answer.operator=== "Multipilication")
    {
        console.log("\tYour result of Multiplication is: ", answer.firstNumber * answer.secondNumber);  
    }
    else if(answer.operator=== "Division")
    {
        console.log("\tYour result of Division is: ", answer.firstNumber / answer.secondNumber);  
    }
    else if(answer.operator=== "Remainder")
    {
        console.log( "\tRemainder of two number's is: ",answer.firstNumber % answer.secondNumber);  
    }

    
console.log("\t-----------------------------------\n")
const output = await inquirer.prompt([
  { message: "\tDo u wish to continue calculation YES or NO = (Y/N)?", type: "boolean", name: "wantagain" },
  {
    message: "\tPlease select YES or NO perform operation",
    type: "list",
    name: "operator",
    choices: ["YES", "NO"],
  }])
     }
    }
else(output.operator==="NO")
  {
  console.log( "\n\tThank you for using calculator see you next time!");
  }




