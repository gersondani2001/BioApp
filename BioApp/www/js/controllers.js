angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
$scope.juegos =[{
    nombre : "Importancia del Agua: ",
    img : "https://encolombia.com/wp-content/uploads/2019/03/importancia-agua-medio-ambiente.jpg"
  },{
    nombre : "ADN prototipo y ¿Qué es?: ",
    img : "https://cdn-images-1.medium.com/max/2600/1*qk-sfcFm3IR0I68jbg4x0w.jpeg"
  },{
    nombre : "Tabla Nutricional: ",
    img : "https://www.pequerecetas.com/wp-content/uploads/2018/09/piramide-alimentaria.jpg"
  }]


})

.controller('ChatsCtrl', function($scope, Chats) {
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
})

.controller('AccountCtrl', function($scope) {
})


.controller('infoCtrl',function($scope){
  //controlador 
});
