angular.module('budgetApp')
  .factory("Accounts", function($firebaseArray) {
    var accountsRef = new Firebase("https://bigpicture.firebaseio.com/accounts");
    return $firebaseArray(accountsRef);
  })
