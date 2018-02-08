Ext.define('logsystem.view.person.LogController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.log',

    init: function(view) {
        view.setStore({
            type: 'log'
        });
        view.down('pagingtoolbar').setStore(view.getStore());
    },

    onAfterRender: function() {
        this.getView().getStore().loadPage(1);
    },

    onComboChange: function(combo, newValue) {
        this.getView().getStore().getProxy().extraParams = {
            modelName: newValue
        };
        this.getView().getStore().loadPage(1);
    },

    onSearch: function(btn) {
        var modelName = btn.previousSibling().getValue();
        this.getView().getStore().getProxy().extraParams = {
            modelName: modelName
        };
        this.getView().getStore().loadPage(1);
    }
});
