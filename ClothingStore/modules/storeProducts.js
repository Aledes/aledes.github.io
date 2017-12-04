var storeProducts = angular.module("storeProducts", ["adorableAvatars"]);

storeProducts.directive("storePanels", function () {
    var directiveObject = {
        templateUrl: "templates/store-panels.html",
        controller: function ($scope) {
            $scope.SelectTab = function (tab) {
                $scope.tab = tab;
            }
        }
    };
    return directiveObject;
});

storeProducts.directive("storeReviews", function () {
    var directiveObject = {
        templateUrl: "templates/store-reviews.html",
        controller: function ($scope, avatar) {
            $scope.addReview = function (product) {
                //if there's no existing reviews yet
                if (!product.reviews) {
                    product.reviews = [];
                }
                product.reviews.push($scope.newReview);

                //reset the review
                $scope.newReview = {};

                $scope.reviewForm.$setPristine();
            }

            $scope.StarsInvalid = function () {
                return $scope.reviewForm.stars.$invalid && $scope.reviewForm.stars.$dirty
            }

            $scope.BodyInvalid = function () {
                return $scope.reviewForm.body.$invalid && $scope.reviewForm.body.$dirty
            }

            $scope.AuthorInvalid = function () {
                return $scope.reviewForm.author.$invalid && $scope.reviewForm.author.$dirty
            }

            $scope.FormInvalid = function () {
                return $scope.StarsInvalid() || $scope.BodyInvalid() || $scope.AuthorInvalid();
            }

            $scope.GenerateAvatarUrl = function (review) {
                review.avatarUrl =
                    avatar.generate(review.author);
            }
        }
    };
    return directiveObject;
})
