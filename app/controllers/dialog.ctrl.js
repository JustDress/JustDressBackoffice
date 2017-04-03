app.controller('DialogController', ['$scope', '$mdDialog', '$dataObj', 'productSvc', '$mdToast',
    function($scope, $mdDialog, $dataObj, productSvc, $mdToast) {
        $scope.model = $dataObj;
        // $scope.editObj = {};
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
        $scope.sendEdit = function(prod) {
            console.log(prod);
            productSvc.editProduct(prod, false, function(res) {
                console.log(res);
                $mdDialog.hide();
                toastr.success('Prodotto ' + prod.nome + '  eliminato correttamente!');
                // $scope.selected.splice($scope.selected.indexOf(prod), 1);
                // $scope.$broadcast("updateProduct");
            });

        }




        $scope.edit = function() {
            // alert();
            // $mdDialog.hide();
            var productSelected = _.where($scope.model.product, { isSelected: true });
            if (productSelected && productSelected.length > 0) {
                $mdDialog.hide();
                $mdDialog.show({
                        controller: 'DialogController',
                        //template: '<md-dialog aria-label="Mango (Fruit)"><md-content class="md-padding"><form name="clientForm"><div layout layout-sm="column"><md-input-container flex><label>Id</label><input ng-model="client.id"></md-input-container> <md-input-container flex><label>Nome</label><input ng-model="client.nome"></md-input-container></div><md-input-container flex><label>Citt�</label><input ng-model="client.citta"></md-input-container><div layout layout-sm="column"><md-input-container flex><label>Indirizzo</label><input ng-model="client.indirizzo"></md-input-container><md-input-container flex><label>Sesso</label><input ng-model="client.sesso"></md-input-container><md-input-container flex><label>Et�</label><input ng-model="client.eta"></md-input-container></div><md-datepicker ng-model="client.data" md-placeholder="Enter date"></md-datepicker></form></md-content><div class="md-actions" layout="row"><span flex></span><md-button ng-click="answer()"> Reset </md-button><md-button ng-click="submit()" class="md-primary"> Aggiungi </md-button></div></md-dialog>',
                        templateUrl: 'app/component/productList/dialogAddProdotto.html',
                        // targetEvent: ev,
                        resolve: {
                            $dataObj: function() {
                                return {
                                    editObj: productSelected[0]
                                }
                            }
                        }
                    })
                    .then(function(answer) {

                        // $scope.alert = 'You said the information was "' + answer + '".';
                    }, function() {
                        // $scope.alert = 'You cancelled the dialog.';
                    });
            }

        }



    }
]);