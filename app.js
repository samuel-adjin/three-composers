let app = angular.module("ComposersList", []);
app.controller("ComposerController",function($scope){
    $scope.pieces = [
        {"pic":"images/rembrandt_1.jpg", "composer":"Bach","title":"Goldberg"},
        {"pic":"images/rembrandt_1.jpg", "composer":"Bach","title":"Harpsichord"},
        {"pic":"images/rembrandt_1.jpg", "composer":"Bach","title":"Brandenburg"},
        {"pic":"images/rembrandt_1.jpg", "composer":"Bach","title":"Air on G"},
        {"pic":"images/rembrandt_1.jpg", "composer":"Bach","title":"Cantata"},
        {"pic":"images/rembrandt_2.jpg", "composer":"Beethoven","title":"Symphony"},
        {"pic":"images/rembrandt_2.jpg", "composer":"Beethoven","title":"Fur"},
        {"pic":"images/rembrandt_2.jpg", "composer":"Beethoven","title":"Moonlight"},
        {"pic":"images/rembrandt_2.jpg", "composer":"Beethoven","title":"Violin"},
        {"pic":"images/rembrandt_2.jpg", "composer":"Beethoven","title":"Egmont"},
        {"pic":"images/rembrandt_3.jpg", "composer":"Mozart","title":"Eine"},
        {"pic":"images/rembrandt_3.jpg", "composer":"Mozart","title":"Piano"},
        {"pic":"images/rembrandt_3.jpg", "composer":"Mozart","title":"Don Giovanni"},
        {"pic":"images/rembrandt_3.jpg", "composer":"Mozart","title":"Jupiter"},
        {"pic":"images/rembrandt_3.jpg", "composer":"Mozart","title":"Clarinet"}
    ]
   
});