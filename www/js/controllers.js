angular.module('budgetApp.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

})

.controller('accountsCtrl', function(AccountService) {
  var  vm = this;
  var accountRef = new Firebase("https://bigpicture.firebaseio.com/accounts");

  accountRef.on("value", function(snapshot) {
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

.controller('savingsGoalsCtrl', function(SavingsGoalService) {
  var vm = this;
  var savingRef = new Firebase("https://bigpicture.firebaseio.com/savingsGoals");

  savingRef.on("value", function(snapshot) {
    vm.savings = snapshot.val();
  });

  vm.setGoal = function(data) {
    SavingsGoalService.setGoal(data);
  }
})

.controller('savingsGoalDetailCtrl', function(SavingsGoalService) {
  var vm = this;
  vm.goalInfo = SavingsGoalService.getGoal();
})

.controller('addSavingsGoalsCtrl', function(SavingsGoalFactory) {
  var vm = this;
  vm.savingsGoalInfo = {
    name : '',
    amount : ''
  }

  vm.savings = SavingsGoalFactory;
  vm.addSavingsGoal = function() {
    if (vm.savingsGoalInfo.name) {
      vm.savings.$add(
        vm.savingsGoalInfo
      );
    }
  };
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
