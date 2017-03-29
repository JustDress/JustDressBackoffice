// app.controller('nutritionController', ['$http', '$mdEditDialog', '$q', '$timeout', '$scope', function($http, $mdEditDialog, $q, $timeout, $scope) {

//     // $scope.options = {
//     //     rowSelection: true,
//     //     multiSelect: true,
//     //     autoSelect: true,
//     //     decapitate: false,
//     //     largeEditDialog: false,
//     //     boundaryLinks: false,
//     //     limitSelect: true,
//     //     pageSelect: true
//     // };

//     // $scope.selected = [];
//     // $scope.limitOptions = [5, 10, 15, {
//     //     label: 'All',
//     //     value: function() {
//     //         return $scope.desserts ? $scope.desserts.count : 0;
//     //     }
//     // }];

//     // $scope.query = {
//     //     order: 'name',
//     //     limit: 5,
//     //     page: 1
//     // };

//     // for testing ngRepeat
//     $scope.columns = [{
//             name: 'Dessert',
//             orderBy: 'name',
//             unit: '100g serving'
//         }, {
//             descendFirst: true,
//             name: 'Type',
//             orderBy: 'type'
//         }, {
//             name: 'Calories',
//             numeric: true,
//             orderBy: 'calories.value'
//         }, {
//             name: 'Fat',
//             numeric: true,
//             orderBy: 'fat.value',
//             unit: 'g'
//         },
//         /* {
//            name: 'Carbs',
//            numeric: true,
//            orderBy: 'carbs.value',
//            unit: 'g'
//          }, */
//         {
//             name: 'Protein',
//             numeric: true,
//             orderBy: 'protein.value',
//             trim: true,
//             unit: 'g'
//         },
//         /* {
//            name: 'Sodium',
//            numeric: true,
//            orderBy: 'sodium.value',
//            unit: 'mg'
//          }, {
//            name: 'Calcium',
//            numeric: true,
//            orderBy: 'calcium.value',
//            unit: '%'
//          }, */
//         {
//             name: 'Iron',
//             numeric: true,
//             orderBy: 'iron.value',
//             unit: '%'
//         }, {
//             name: 'Comments',
//             orderBy: 'comment'
//         }
//     ];

//     $http.get('desserts.json').then(function(desserts) {
//         $scope.desserts = desserts.data;

//         // $scope.selected.push($scope.desserts.data[1]);

//         // $scope.selected.push({
//         //   name: 'Ice cream sandwich',
//         //   type: 'Ice cream',
//         //   calories: { value: 237.0 },
//         //   fat: { value: 9.0 },
//         //   carbs: { value: 37.0 },
//         //   protein: { value: 4.3 },
//         //   sodium: { value: 129.0 },
//         //   calcium: { value: 8.0 },
//         //   iron: { value: 1.0 }
//         // });

//         // $scope.selected.push({
//         //   name: 'Eclair',
//         //   type: 'Pastry',
//         //   calories: { value:  262.0 },
//         //   fat: { value: 16.0 },
//         //   carbs: { value: 24.0 },
//         //   protein: { value:  6.0 },
//         //   sodium: { value: 337.0 },
//         //   calcium: { value:  6.0 },
//         //   iron: { value: 7.0 }
//         // });

//         // $scope.promise = $timeout(function () {
//         //   $scope.desserts = desserts.data;
//         // }, 1000);
//     });

//     $scope.editComment = function(event, dessert) {
//         event.stopPropagation();

//         var dialog = {
//             // messages: {
//             //   test: 'I don\'t like tests!'
//             // },
//             modelValue: dessert.comment,
//             placeholder: 'Add a comment',
//             save: function(input) {
//                 dessert.comment = input.$modelValue;
//             },
//             targetEvent: event,
//             title: 'Add a comment',
//             validators: {
//                 'md-maxlength': 30
//             }
//         };

//         var promise = $scope.options.largeEditDialog ? $mdEditDialog.large(dialog) : $mdEditDialog.small(dialog);

//         promise.then(function(ctrl) {
//             var input = ctrl.getInput();

//             input.$viewChangeListeners.push(function() {
//                 input.$setValidity('test', input.$modelValue !== 'test');
//             });
//         });
//     };

//     $scope.toggleLimitOptions = function() {
//         $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
//     };

//     $scope.getTypes = function() {
//         return ['Candy', 'Ice cream', 'Other', 'Pastry'];
//     };

//     $scope.onPaginate = function(page, limit) {
//         console.log('Scope Page: ' + $scope.query.page + ' Scope Limit: ' + $scope.query.limit);
//         console.log('Page: ' + page + ' Limit: ' + limit);

//         $scope.promise = $timeout(function() {

//         }, 2000);
//     };

//     $scope.deselect = function(item) {
//         console.log(item.name, 'was deselected');
//     };

//     $scope.log = function(item) {
//         console.log(item.name, 'was selected');
//     };

//     $scope.loadStuff = function() {
//         $scope.promise = $timeout(function() {

//         }, 2000);
//     };

//     $scope.onReorder = function(order) {

//         console.log('Scope Order: ' + $scope.query.order);
//         console.log('Order: ' + order);

//         $scope.promise = $timeout(function() {

//         }, 2000);
//     };

// }]);
app.controller('nutritionController', ['$scope', '$q', '$http', 'productSvc', '$timeout',
    function($scope, $q, $http, productSvc, $timeout) {
        'use strict';

        $scope.selected = [];
        $scope.openFilter = false;
        $scope.openSearch = false;
        $scope.query = {
            order: 'name',
            limit: 5,
            page: 1
        };

        function success(desserts) {
            console.log(desserts);
            // $scope.desserts = desserts;
            $scope.productList = desserts;
            console.log(desserts);
        }

        $scope.init = function() {
            console.log('entra');
            $scope.getDesserts();

        }
        $scope.loadStuff = function() {
            load();
        };

        $scope.toggleFilter = function() {
            $scope.openFilter = !$scope.openFilter;
        }
        $scope.toggleSearch = function() {
            $scope.openSearch = !$scope.openSearch;
        }

        function load() {
            $scope.promise = $timeout(function() {

            }, 2000);
        }

        $scope.getQuery = function() {
            load();
            var stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
            _.sortBy(stooges, 'name');
            console.log($scope.query);
            // $scope.$apply();
        }

        $scope.getDesserts = function() {
            console.log('entra');
            getPromise().then(function(res) {
                console.log(res);
                // success(res.data.data);
                success(res);

            });
        };

        function getPromise() {
            $scope.promise = $q.defer();
            // debugger;
            // $http.get('desserts.json').then(function(res) {
            //     // console.log(res);
            //     $scope.promise.resolve(res);
            // });
            $http.get('/api/product').success(function(data) {

                $scope.promise.resolve(data);
            });

            return $scope.promise.promise;
        }

        $scope.init();
    }
]);