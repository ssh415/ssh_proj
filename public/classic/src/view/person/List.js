/**
 * This view is an example list of people.
 */
Ext.define('logsystem.view.person.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'personlist',

    requires: [
        'logsystem.store.Personnel'
    ],

    store: null,

    controller: 'person',

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    text: '新增',
                    icon: 'resources/images/icons/add.png',
                    handler: 'onAddAccount'
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
            text: '账号',
            dataIndex: 'username',
            flex: 1
        },
        {
            text: '姓名',
            dataIndex: 'realName',
            flex: 1
        },
        {
            text: '备注',
            dataIndex: 'remark',
            flex: 1
        },
        {
            text: '群组',
            dataIndex: 'group',
            flex: 1
        },
        {
            text: '创建时间',
            dataIndex: 'createTime',
            flex: 1
        },
        {
            text: '创建人',
            dataIndex: 'creator',
            flex: 1
        },
        {
            text: '修改时间',
            dataIndex: 'updateTime',
            flex: 1
        },
        {
            text: '修改人',
            dataIndex: 'updater',
            flex: 1
        },
        {
            xtype: 'actioncolumn',
            items: [
                {
                    icon: 'resources/images/icons/edit.png',
                    tooltip: '编辑',
                    handler: 'onEditAccount'
                },
                {
                    icon: 'resources/images/icons/delete.png',
                    tooltip: '删除',
                    handler: 'onRemoveAccount'
                }
            ]
        }
    ],

    listeners: {
        afterrender: 'onAfterRender'
    }
});
