// Write your solution in this file!
var customerName = "bob";
var upperCaseCustomerName = () => {
  customerName = customerName.toUpperCase();
};

var bestCustomer;
var setBestCustomer = () => {
  bestCustomer = "not bob";
};

var overwriteBestCustomer = () => {
  bestCustomer = "maybe bob";
};
const leastFavoriteCustomer = "not me :)";

var changeLeastFavoriteCustomer = () => {
  leastFavoriteCustomer = "me :(";
};
