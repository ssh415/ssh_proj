Ext.define('logsystem.view.group.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'grouplist',

    requires: [
        'logsystem.store.Group'
    ],

    // title: '群组管理',

    store: null,

    controller: 'group',

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    text: '新增',
                    icon: 'resources/images/icons/add.png',
                    handler: 'onAddGroup'
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
            text: '名称',
            dataIndex: 'name',
            flex: 1
        },
        {
            text: '描述',
            dataIndex: 'cname',
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
            width: 120,
            items: [
                {
                    icon: 'resources/images/icons/edit.png',
                    tooltip: '编辑',
                    handler: 'onEditGroup'
                },
                {
                    icon: 'resources/images/icons/remove.png',
                    tooltip: '一键移除',
                    handler: 'onClearGroup'
                },
                {
                    icon: 'resources/images/icons/delete.png',
                    tooltip: '删除',
                    handler: 'onRemoveGroup'
                }
            ]
        }
    ],

    listeners: {
        afterrender: 'onAfterRender'
    }
});
