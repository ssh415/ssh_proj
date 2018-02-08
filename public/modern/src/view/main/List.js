/**
 * This view is an example list of people.
 */
Ext.define('logsystem.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'logsystem.store.Personnel'
    ],

    title: '用户管理',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: '姓名',  dataIndex: 'name', flex: 1 },
        { text: '邮箱', dataIndex: 'email', flex: 1 },
        { text: '手机', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
