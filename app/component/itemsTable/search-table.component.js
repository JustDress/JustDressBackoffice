function SearchTableController() {

    var ctrl = this;


    // ctrl.$onChanges = function(changesObj) {
    //     console.log(changesObj);
    // };
    // ctrl.$onInit = function() {
    //     // $timeout(function() {
    //     console.log(ctrl.productItems);

    //     angular.forEach(ctrl.productItems, function(i) {
    //             console.log(i);
    //         })
    //         // }, 1000);
    // }



    // // init();
    ctrl.deleteProduct = function(prod) {
        console.log(prod);
        ctrl.onDelete();
    };

    // ctrl.edit = function(prod) {
    //     console.log(prod);
    //     ctrl.onEdit({ item: prod });
    // };

    // ctrl.update = function(prop, value) {
    //     ctrl.onUpdate({ hero: ctrl.hero, prop: prop, value: value });
    // };

}



app.component('searchTable', {
    templateUrl: 'app/component/itemsTable/searchTable.html',
    controller: SearchTableController,
    bindings: {
        search: '<',
        // propertyItem: '=',
        // title: '@',
        // onDelete: '&',
        // onEdit: '&',

        // onUpdate: '&'
    }

});