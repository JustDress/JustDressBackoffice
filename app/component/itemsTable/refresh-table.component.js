function RefreshTableController() {

    var ctrl = this;

    // // init();
    ctrl.loadStuff = function() {
        // console.log(prod);
        ctrl.loadStuff();
    };
}



app.component('refreshTable', {
    templateUrl: 'app/component/itemsTable/refreshTable.html',
    controller: RefreshTableController,
    bindings: {
        loadStuff: '&'
    }

});