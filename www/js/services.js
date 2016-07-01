angular.module('actionplanner.services', [])

.factory('Action', function($rootScope) {
  var factory = {};

  factory.getActions = function() {
    return $rootScope.actions;
  };

  factory.getActionById = function(_id) {
    for (var i = 0; i < $rootScope.actions.length; i++) {
      if ($rootScope.actions[i]._id == _id) {
        return $rootScope.actions[i];
      }
    }
  };

  factory.insertAction = function(name, description, asignee) {
    var action = {
      _id: $rootScope._id,
      name: name,
      description: description,
      asignee: asignee
    };

    $rootScope._id++;
    $rootScope.actions.push(action);
  };

  return factory;
});
