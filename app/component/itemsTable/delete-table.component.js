function DeleteTableController() {

    var ctrl = this;

    // // init();
    ctrl.deleteProduct = function() {
        // console.log(prod);
        ctrl.onDelete();
    };
    ctrl.showEdit = function() {
        ctrl.onEdit();
    }
}



app.component('deleteTable', {
    templateUrl: 'app/component/itemsTable/deleteTable.html',
    controller: DeleteTableController,
    bindings: {
        selected: '=',
        // showEdit: '=',
        // title: '@',
        onDelete: '&',
        onEdit: '&'

        // onUpdate: '&'
    }

});