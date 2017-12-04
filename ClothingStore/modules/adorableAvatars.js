var adorableAvatars = angular.module("adorableAvatars", []);

adorableAvatars.provider("avatar", function () {
    this.$get = function () {
        return {
            generate: function (input) {
                return "https://api.adorable.io/avatars/60/" + input;
            }
        };
    }
});
