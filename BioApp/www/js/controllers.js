angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
$scope.juegos =[{
    nombre : "Primera Tarea 1: ",
    img : "https://previews.123rf.com/images/sodis/sodis1507/sodis150700339/42289632-espacio-de-trabajo-de-laboratorio-de-biolog%C3%ADa-y-el-concepto-de-equipo-de-la-ciencia-ilustraci%C3%B3n-vectorial.jpg"
  },{
    nombre : "Segunda Tarea 2: ",
    img : "https://www.caracteristicas.co/wp-content/uploads/2018/07/biolog%C3%ADa-e1533049929550.jpg"
  },{
    nombre : "Tercera Tarea 3: ",
    img : "https://i2.wp.com/wecourses.mx/wp-content/uploads/2016/12/Portada_biolog%C3%ADa_biologia-copia-2.png?w=1080"
  }]
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
