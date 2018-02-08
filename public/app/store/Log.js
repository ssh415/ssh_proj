Ext.define('logsystem.store.Log', {
    extend: 'Ext.data.Store',

    alias: 'store.log',

    fields: [
        'id', 'modelName', 'content', 'operator', 'createAt'
    ],
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: '/logs',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
