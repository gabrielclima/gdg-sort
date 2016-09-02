var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.csv = '';
  $scope.json = '';

  $scope.converteCsv = function(){

    console.log($scope.fileContent + '1');
    $scope.json = Papa.parse($scope.fileContent);
    console.log($scope.json);
  };

});

app.directive('fileReader', function() {
  return {
    scope: {
      fileReader:"="
    },
    link: function(scope, element) {
      $(element).on('change', function(changeEvent) {
        var files = changeEvent.target.files;
        if (files.length) {
          var r = new FileReader();
          r.onload = function(e) {
              var contents = e.target.result;
              scope.$apply(function () {
                scope.fileReader = contents;
              });
          };

          r.readAsText(files[0]);
        }
      });
    }
  };
});
