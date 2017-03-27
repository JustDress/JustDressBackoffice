app.controller('controllerHome', ['$scope', '$templateCache',
    function($scope, $templateCache) {

        init();

        function init() {
            console.log('ci sono!');
            // console.log($templateCache.get('home.html'));
        }

    }
]);