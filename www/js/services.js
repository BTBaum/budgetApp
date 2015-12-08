angular.module('budgetApp.services', [])
  .factory("AccountFactory", function($firebaseArray) {
    var accountsRef = new Firebase("https://bigpicture.firebaseio.com/accounts");
    console.log(accountsRef);
    return $firebaseArray(accountsRef);
  })

  .service('AccountService', function() {
    var vm = this;
    var account;
    vm.setAccount = function(data) {
      account = data;
      return account;
    }

    vm.getAccount = function() {
      vm.data = account;
      return vm.data;
    }
  })

  .factory("SavingsGoalFactory", function($firebaseArray) {
    var vm = this;
    var savingsGoalRef = new Firebase("https://bigpicture.firebaseio.com/savingsGoals");
    console.log(savingsGoalRef);
    return $firebaseArray(savingsGoalRef);
  })
