function FiltersTableController() {

    var ctrl = this;

    // // init();
    ctrl.filterList = function() {
        // console.log(prod);
        ctrl.onFilter();
    };
}



app.component('filtersTable', {
    templateUrl: 'app/component/itemsTable/filtersTable.html',
    controller: FiltersTableController,
    bindings: {
        openFilter: '=',
        filter: '=',
        categorie: '=',
        onFilter: '&',

        // onUpdate: '&'
    }

});