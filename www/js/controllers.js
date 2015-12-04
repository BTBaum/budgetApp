angular.module('budgetApp.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

})

.controller('accountsCtrl', function(AccountService) {
  var  vm = this;
  var ref = new Firebase("https://bigpicture.firebaseio.com/accounts");

  ref.on("value", function(snapshot) {
    vm.account = snapshot.val();
  });

  vm.setAccount = function(data) {
    AccountService.setAccount(data);
  };
})

.controller('accountDetailCtrl', function(AccountService) {
  var vm = this;
  vm.accountInfo = AccountService.getAccount();
})

.controller('addAccountCtrl', function(AccountFactory) {
  var vm = this;
  vm.accountInfo = {
    name : '',
    type : '',
    institution : '',
    amount : ''
  }
  vm.accounts = AccountFactory;
  vm.addAccount = function() {
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
