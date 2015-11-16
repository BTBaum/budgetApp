angular.module('budgetApp.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

})

.controller('accountsCtrl', function($scope) {

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
