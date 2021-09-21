//Temporary User's Data
const Users = require("../constants/Users.json");

export const CheckUserNamePassword = (Username, Password) => {
    if(typeof Users[Username] !== "undefined") {
        return Users[Username];
    } else {
        return false;
    }
};

console.log(CheckUserNamePassword("Praveen"));
console.log(CheckUserNamePassword("Pranav"));