app.controller('DialogController', ['$scope', '$mdDialog', '$dataObj',
    function($scope, $mdDialog, $dataObj) {
        $scope.model = $dataObj;
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
        $scope.submit = function() {
            alert();
            $mdDialog.hide();
            console.log($scope.product);
        }
        $scope.phones = [{
                type: 'Home',
                number: '(555) 251-1234',
                options: {
                    icon: 'communication:phone'
                }
            },
            {
                type: 'Cell',
                number: '(555) 786-9841',
                options: {
                    icon: 'communication:phone',
                    avatarIcon: true
                }
            },
            {
                type: 'Office',
                number: '(555) 314-1592',
                options: {
                    face: ""
                }
            },
            {
                type: 'Offset',
                number: '(555) 192-2010',
                options: {
                    offset: true,
                    actionIcon: 'communication:phone'
                }
            }
        ];
        $scope.doPrimaryAction = function(prod) {
            // console.log(prod);
            angular.forEach($scope.model.product, function(p) {
                if (p._id == prod._id) {
                    p.isSelected = !p.isSelected;
                } else {
                    p.isSelected = false;
                }
            });
        }
        $scope.edit = function() {
            alert();
            // $mdDialog.hide();
            console.log($scope.product);
        }
    }
]);