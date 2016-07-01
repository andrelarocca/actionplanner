angular.module('actionplanner.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $ionicModal, $timeout) {

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
    $scope.modal.show();
  };

  $rootScope.actions = [
    {
      _id: 1,
      name: 'action1',
      description: 'Terminar o aplicativo',
      asignee: 'andré'
    },
    {
      _id: 2,
      name: 'action2',
      description: 'Vender o aplicativo',
      asignee: 'guilherme'
    }
  ];
  $rootScope._id = 3;
})

.controller('DashboardCtrl', function($scope, Action) {
  $scope.d = {
    actions: Action.getActions()
  };
})

.controller('ActionCtrl', function($scope, $stateParams, Action) {
  $scope.d = {
    action: Action.getActionById($stateParams.actionId)
  };

  $scope.insertAction = function() {
    Action.insertAction('ganhar dinheiro', 'e ser feliz', 'andre');
  };
})

.controller('SettingsCtrl', function($scope, $stateParams) {
});
