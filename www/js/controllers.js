angular.module('budgetApp.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

})

.controller('accountsCtrl', function($scope) {
  var  vm = this;
  // Get a database reference to our posts
  var ref = new Firebase("https://bigpicture.firebaseio.com/accounts");

// Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function(snapshot) {
    console.log(snapshot.val());
    vm.account = snapshot.val();
  });
})

.controller('addAccountCtrl', function(Accounts) {
  var vm = this;
  vm.accountInfo = {
    name : '',
    type : '',
    institution : '',
    amount : ''
  }
  vm.accounts = Accounts;
  vm.addAccount = function() {
    console.log("inside addAccouts");

    if (vm.accountInfo.name) {
      vm.accounts.$add(
        vm.accountInfo
      );
    }
  };
})

.controller('savingsGoalsCtrl', function($scope) {

})

.controller('addSavingsGoalsCtrl', function($scope) {

})

.controller('billsCtrl', function($scope) {

})

.controller('addBillsCtrl', function($scope) {

})

.controller('transactionsCtrl', function($scope) {

})

.controller('addTransactionCtrl', function($scope) {

})

.controller('budgetCtrl', function($scope) {

})
