Ext.define('logsystem.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'id', 'username', 'realname', 'remark', 'group_id', 'group'
    ],
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: '/users',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
