Ext.define('logsystem.store.Group', {
    extend: 'Ext.data.Store',

    alias: 'store.group',

    fields: [
        'id', 'name', 'cname'
    ],
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: '/groups',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
