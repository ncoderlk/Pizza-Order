//Import NodeJs Readline
const readline = require('readline');
va rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Variables
var userName;
var userAge;
var noPizza;
var Quantity;
var pizzaPrice;
var totalPrice;
var Address;
var Phone;
var enableOrder;
//Menu Array
var menuArray = [
    {
        name: 'Margarita Pizza',
        price: '5$',
        number: 0
    },
    {
        name: 'Pollo Pizza',
        price: '7$',
        number: 1
    },
    {
        name: 'Chicken Pizza',
        price: '8$',
        number: 2
    },
    {
        name: 'Cheese Pizza',
        price: '9$',
        number: 3
    },
    {
        name: 'Vegetarian Pizza',
        price: '6$',
        number: 4
    },
    {
        name: 'Bolognese Pizza',
        price: '7$',
        number: 5
    },
    {
        name: 'Fish Pizza',
        price: '7$',
        number: 6
    },
    {
        name: 'Cheese Pizza with Coke',
        price: '11$',
        number: 7
    }
];
//Print Name Of The Shop
rl.write('\n🍕Welcome to Vito\'s Pizza Palace  Delivery Service🍕\n');
//Ask For The Name
rl.question('\nPlease Enter Your Name:\n\n', function (user_name) {
    if (user_name === null || user_name === undefined || user_name === "") {
        rl.write('\nInvalid Name...Please Try Again\n');
        rl.close();
    }
    else {
        userName = user_name;
        checkAge();
    }
});
//Ask For Exit Or Try
function tryAgain() {
    rl.question('If you want to try again type \'y\' and to exit type \'n\'', function (choice) {
        switch (choice) {
            case "yes":
                displayMenu();
                break;
            case "Yes":
                displayMenu();
                break;
            case "YES":
                displayMenu();
                break;
            case "y":
                displayMenu();
                break;
            case "y":
                displayMenu();
                break;
            case "No":
                rl.write('\nYou have canceled order.Thank you for coming\n');
                rl.close();
                break;
            case "no":
                rl.write('\nYou have canceled order.Thank you for coming\n');
                rl.close();
                break;
            case "NO":
                rl.write('\nYou have canceled order.Thank you for coming\n');
                rl.close();
                break;
            case "n":
                rl.write('\nYou have canceled order.Thank you for coming\n');
                rl.close();
                break;
            case "N":
                rl.write('\nYou have canceled order.Thank you for coming\n');
                rl.close();
                break;
        }
    });
}
//Ask For Age age<18 X age>18 
function checkAge() {
    rl.question('\n\nEnter Your Age :\n\n', function (user_age) {
        userAge = parseInt(user_age);
        if (userAge < 18) {
            rl.write('\nYou Are Too Young And You Can\'t Enter To The Shop\n');
            rl.close();
        }
        else {
            if (userAge > 60) {
                rl.write('\nYou Are Too Old And You Can\'t Enter To The Shop\n');
                rl.close();
            }
            else {
                rl.write("\n\nHello " + userName + ", Welcome To Vito's \uD83C\uDF55 Pizza Shop\n\n");
                enableOrder = true;
                displayMenu();
            }
        }
    });
}
//Display Food Menu 
function displayMenu() {
    console.table(menuArray);
    rl.question('\n\nEnter the Number Of 🍕 Pizza That You Prefer :\n\n', function (No_Pizza) {
        noPizza = parseInt(No_Pizza);
        if (noPizza === "" || noPizza === undefined || noPizza === null) {
            rl.write('\n\nInvalid Command\n\n');
            tryAgain();
        }
        else {
            if (noPizza > 7) {
                rl.write('\n\nInvalid Command..Please Try Again\n\n');
                tryAgain();
            }
            else {
                rl.write("\nYou have selected " + menuArray[noPizza].name + "...\n");
                askQuantity();
                switch (noPizza) {
                    case 0:
                        pizzaPrice = 5;
                        break;
                    case 1:
                        pizzaPrice = 7;
                        break;
                    case 2:
                        pizzaPrice = 8;
                        break;
                    case 3:
                        pizzaPrice = 9;
                        break;
                    case 4:
                        pizzaPrice = 6;
                        break;
                    case 5:
                        pizzaPrice = 7;
                        break;
                    case 6:
                        pizzaPrice = 7;
                        break;
                    case 7:
                        pizzaPrice = 11;
                        break;
                }
            }
        }
    });
}
//Ask For Quantity
function askQuantity() {
    rl.write('\n\n');
    rl.question('\n\nHow many 🍕 pizzas do you want ? \n\n', function (quanti) {
        Quantity = parseInt(quanti);
        if (Quantity === null || Quantity === undefined || Quantity === "") {
            rl.write('\n\nInvalid Quantity... Please Try Again\n\n');
            askQuantity();
        }
        else {
            rl.write("\n\nYour Total Price is Generating...(" + pizzaPrice + "x" + Quantity + ")\n\n");
            totalPrice = parseInt(pizzaPrice) * parseInt(Quantity);
            rl.write("\n\nTotal Price is " + totalPrice + "$\n\n");
            confirmOrder();
        }
    });
}
function confirmOrder() {
    rl.question('\n\nIf you want to confirm order type \'y\' and to exit type \'n\'\n\n', function (choice) {
        switch (choice) {
            case "yes":
                address();
                break;
            case "Yes":
                address();
                break;
            case "YES":
                address();
                break;
            case "y":
                address();
                break;
            case "Y":
                address();
                break;
            case "No":
                rl.write('\nYou have canceled order.Thank you for coming\n');
                rl.close();
                break;
            case "no":
                rl.write('\nYou have canceled order.Thank you for coming\n');
                rl.close();
                break;
            case "NO":
                rl.write('\nYou have canceled order.Thank you for coming\n');
                rl.close();
                break;
            case "n":
                rl.write('\nYou have canceled order.Thank you for coming\n');
                rl.close();
                break;
            case "N":
                rl.write('\nYou have canceled order.Thank you for coming\n');
                rl.close();
                break;
        }
    });
}
function address() {
    rl.question('\n\nEnter Your Address\n\n', function (abbr) {
        Address = abbr;
        if (Address === null || Address === undefined || Address === "") {
            rl.question('If you want to try Again type \'y\' and to exit type \'n\'', function ($) {
                switch ($) {
                    case "yes":
                        address();
                        break;
                    case "Yes":
                        address();
                        break;
                    case "YES":
                        address();
                        break;
                    case "y":
                        address();
                        break;
                    case "Y":
                        address();
                        break;
                    case "No":
                        rl.write('\nYou have canceled order.Thank you for coming\n');
                        rl.close();
                        break;
                    case "no":
                        rl.write('\nYou have canceled order.Thank you for coming\n');
                        rl.close();
                        break;
                    case "NO":
                        rl.write('\nYou have canceled order.Thank you for coming\n');
                        rl.close();
                        break;
                    case "n":
                        rl.write('\nYou have canceled order.Thank you for coming\n');
                        rl.close();
                        break;
                    case "N":
                        rl.write('\nYou have canceled order.Thank you for coming\n');
                        rl.close();
                        break;
                }
            });
        }
        else {
            phone();
        }
    });
}
function phone() {
    rl.question('\n\nEnter Your Phone Number\n\n', function (phne) {
        Phone = parseInt(phne);
        if (Phone === null || Phone === undefined || Phone === NaN) {
            rl.question('If you want to try Again type \'y\' and to exit type \'n\'', function ($$) {
                switch ($$) {
                    case "yes":
                        phone();
                        break;
                    case "Yes":
                        phone();
                        break;
                    case "YES":
                        phone();
                        break;
                    case "y":
                        phone();
                        break;
                    case "Y":
                        phone();
                        break;
                    case "No":
                        rl.write('\nYou have canceled order.Thank you for coming\n');
                        rl.close();
                        break;
                    case "no":
                        rl.write('\nYou have canceled order.Thank you for coming\n');
                        rl.close();
                        break;
                    case "NO":
                        rl.write('\nYou have canceled order.Thank you for coming\n');
                        rl.close();
                        break;
                    case "n":
                        rl.write('\nYou have canceled order.Thank you for coming\n');
                        rl.close();
                        break;
                    case "N":
                        rl.write('\nYou have canceled order.Thank you for coming\n');
                        rl.close();
                        break;
                }
            });
        }
        else {
            disInf();
        }
    });
}
function disInf() {
    rl.write("\n\nYour Address is  " + Address + "\n\n");
    rl.write("\n\nYour Phone Number is  " + Phone + "\n\n");
    rl.question('If this information true type \'y\' and To input again information type \'n\'', function ($$$) {
        switch ($$$) {
            case "yes":
                success();
                break;
            case "Yes":
                success();
                break;
            case "YES":
                success();
                break;
            case "y":
                success();
                break;
            case "Y":
                success();
                break;
            case "No":
                address();
                break;
            case "no":
                address();
                break;
            case "NO":
                address();
                break;
            case "n":
                address();
                break;
            case "N":
                address();
                break;
        }
    });
}
function success() {
    rl.write("\n\nThank You For Trusting us \uD83D\uDE4F\uD83C\uDFFC\uD83D\uDE4F\uD83C\uDFFC\uD83D\uDE4F\uD83C\uDFFC " + userName + "\n");
    rl.write("\n\nYour Order is SuccessFull \u2705\u2705\u2705\n\n");
    rl.close();
}
