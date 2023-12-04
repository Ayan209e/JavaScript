const accountId = 1445533
let accountEmail = "ayan@gmail.com" // Local Scope
var accountPassword = "123456" //Global Scope
accountCity = "Jaipur" // Can also define variable without let,var or const
let accountState; // Undefined Variable

// accountId = 12354 // Not Allowed

accountEmail = "ab@ab.com"
accountPassword = "13543"
accountCity = "Sri Ganganagar"

console.log(accountId);

console.table([accountEmail, accountPassword, accountCity, accountState]); // Print in tabular form for all the variable and its values

/*
Prefer not to use
because of issue in block scope and functional scope.
*/