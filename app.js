var myApp = angular.module('myApp', []);
var gem = [
  {
  name: 'Dodecahedron',
  price: 2.95,
  description: 'Some gems have hidden qualities beyond their lustre, beyond their shine...Dodecahedron is one of those gems',
  canPurchase: true,
  images: [
    {
      fullsize: 'images/gem-01.gif'
    },
    {
      fullsize: 'images/gem-02.gif'
    }
  ]
},
{
  name: 'Dodecahedron',
  price: 3.95,
  description: 'Some gems have hidden qualities beyond their lustre, beyond their shine...Dodecahedron is one of those gems',
  canPurchase: true,
  images: [
    {
      fullsize: 'images/gem-03.gif'
    },
    {
      fullsize: 'images/gem-04.gif'
    }
  ]
},
{
  name: 'Dodecahedron',
  price: 4.95,
  description: 'Some gems have hidden qualities beyond their lustre, beyond their shine...Dodecahedron is one of those gems',
  canPurchase: true,
  images: [
    {
      fullsize: 'images/gem-05.gif'
    },
    {
      fullsize: 'images/gem-06.gif'
    }
  ]
},
{
  name: 'Pentagonal',
  price: 5.95,
  description: 'Some gems have hidden qualities beyond their lustre, beyond their shine...Dodecahedron is one of those gems',
  canPurchase: true,
  images: [
    {
      fullsize: 'images/gem-07.gif'
    },
    {
      fullsize: 'images/gem-08.gif'
    }
  ]
},
{
  name: 'Hexagonal',
  price: 2.95,
  description: 'Some gems have hidden qualities beyond their lustre, beyond their shine...Dodecahedron is one of those gems',
  canPurchase: true,
  images: [
    {
      fullsize: 'images/gem-09.gif'
    },
    {
      fullsize: 'images/gem-10.gif'
    }
  ]
},
{
  name: 'Azurite',
  price: 2.95,
  description: 'Some gems have hidden qualities beyond their lustre, beyond their shine...Dodecahedron is one of those gems',
  canPurchase: true
}
];
myApp.controller("myController", function($scope) {
  $scope.model = gem;

  $scope.initialize = function () {
    console.log("Initialized");
  }
  $scope.hide = function(){
    $scope.model.canPurchase = true;
  }
});
