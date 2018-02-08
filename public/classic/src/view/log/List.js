/**
 * This view is an example list of people.
 */
Ext.define('logsystem.view.log.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'loglist',

    requires: [
        'logsystem.store.Log'
    ],

    store: null,

    controller: 'log',

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'combo',
                    fieldLabel: '模块日志',
                    labelWidth: 70,
                    editable: false,
                    value: 'All',
                    store: [['All', '全部'], ['Login', '登录'], ['Logout', '退出'], ['User', '账号'], ['Group', '群组']],
                    listeners: {
                        change: 'onComboChange'
                    }
                },
                {
                    xtype: 'button',
                    hidden: true,
                    text: '查询',
                    handler: 'onSearch'
                }
            ]
        },
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            displayInfo: true,
            store: null
        }
    ],

    columns: [
        {
            xtype: 'rownumberer',
            align: 'center',
            text: '序号',
            width: 50
        },
        {
            text: '模块名称',
            dataIndex: 'modelName',
            flex: 1
        },
        {
            text: '内容',
            dataIndex: 'content',
            flex: 3
        },
        {
            text: '操作人',
            dataIndex: 'operator',
            flex: 1
        },
        {
            text: '时间',
            dataIndex: 'createAt',
            flex: 1
        }
    ],

    listeners: {
        afterrender: 'onAfterRender'
    }
});
