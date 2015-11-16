angular.module('budgetApp.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })

    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })

    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })

    .state('accounts', {
      url: '/accounts',
      templateUrl: 'templates/accounts.html',
      controller: 'accountsCtrl',
      controllerAs: 'vm'
    })

    .state('addAccount', {
      url: '/addAccount',
      templateUrl: 'templates/addAccount.html',
      controller: 'addAccountCtrl',
      controllerAs: 'vm'
    })

    .state('savingsGoals', {
      url: '/savingsGoals',
      templateUrl: 'templates/savingsGoals.html',
      controller: 'savingsGoalsCtrl'
    })

    .state('addSavingsGoals', {
      url: '/addSavingsGoals',
      templateUrl: 'templates/addSavingsGoals.html',
      controller: 'addSavingsGoalsCtrl'
    })

    .state('bills', {
      url: '/bills',
      templateUrl: 'templates/bills.html',
      controller: 'billsCtrl'
    })

    .state('addBills', {
      url: '/addBills',
      templateUrl: 'templates/addBills.html',
      controller: 'addBillsCtrl'
    })

    .state('transactions', {
      url: '/transactions',
      templateUrl: 'templates/transactions.html',
      controller: 'transactionsCtrl'
    })

    .state('addTransaction', {
      url: '/addTransaction',
      templateUrl: 'templates/addTransaction.html',
      controller: 'addTransactionCtrl'
    })

    .state('budget', {
      url: '/budget',
      templateUrl: 'templates/budget.html',
      controller: 'budgetCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
