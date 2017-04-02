function SearchButtonController() {

    var ctrl = this;



    // // init();
    ctrl.toggleSearch = function() {
        ctrl.onToggle();
    }
}


app.component('searchButton', {
    templateUrl: 'app/component/itemsTable/searchButton.html',
    controller: SearchButtonController,
    bindings: {
        iconType: '=',
        // propertyItem: '=',
        // title: '@',
        onToggle: '&',
        // onEdit: '&',

        // onUpdate: '&'
    }

});