angular.module('budgetApp.services', [])
  .factory("Auth", function($firebaseAuth) {
    var vm = this;
    var ref = new Firebase("https://bigpicture.firebaseio.com");
    return $firebaseAuth(ref);
  })

  .factory("AccountFactory", function($firebaseArray) {
    var accountsRef = new Firebase("https://bigpicture.firebaseio.com/accounts");
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
    return $firebaseArray(savingsGoalRef);
  })

  .service("SavingsGoalService", function($firebaseArray) {
    var vm = this;
    var goal;
    vm.setGoal = function(data) {
      goal = data;
      return goal;
    }

    vm.getGoal = function() {
      vm.data = goal;
      return vm.data;
    }
  })
