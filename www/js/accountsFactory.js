angular.module('budgetApp')
  .factory("Accounts", function($firebaseArray) {
    var accountsRef = new Firebase("https://bigpicture.firebaseio.com/accounts");
    console.log(accountsRef);
    return $firebaseArray(accountsRef);
  })
