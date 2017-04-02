function FiltersButtonController() {

    var ctrl = this;


    // init();
    ctrl.toggleFilter = function() {
        ctrl.openFilters();
    };

}

app.component('filtersButton', {
    templateUrl: 'app/component/itemsTable/filtersButton.html',
    controller: FiltersButtonController,
    bindings: {
        openFilters: '&'
    }

});