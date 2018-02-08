/**
 * 股票实时行情
 */
Ext.define('logsystem.view.stock.List', {
    extend: 'Ext.grid.Panel',

    xtype: 'stocklist',

    store: null,

    controller: 'stock',

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'textfield',
                    itemId: 'number',
                    value: 'sh600151',
                    allowBlank: false,
                    emptyText: '股票编号'
                },
                {
                    text: '获取',
                    icon: 'resources/images/icons/add.png',
                    handler: 'onGet'
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
            dataIndex: 'v1',
            width: 100
        },
        {
            text: '今开',
            dataIndex: 'v2',
            width: 100
        },
        {
            text: '昨收',
            dataIndex: 'v3',
            width: 100
        },
        {
            text: '当前',
            dataIndex: 'v4',
            width: 100
        },
        {
            text: '今日最高',
            dataIndex: 'v5',
            width: 100
        },
        {
            text: '今日最低',
            dataIndex: 'v6',
            width: 100
        },
        {
            text: '竞买价',
            dataIndex: 'v7',
            width: 100
        },
        {
            text: '竞卖价',
            dataIndex: 'v8',
            width: 100
        },
        {
            text: '买一股数/报价',
            dataIndex: 'v11',
            width: 120,
            renderer: function (value, metaData, record) {
                return Math.floor(value / 100) + '/' + record.get('v12');
            }
        },
        {
            text: '买二股数/报价',
            dataIndex: 'v13',
            width: 120,
            renderer: function (value, metaData, record) {
                return Math.floor(value / 100) + '/' + record.get('v14');
            }
        },
        {
            text: '买三股数/报价',
            dataIndex: 'v15',
            width: 120,
            renderer: function (value, metaData, record) {
                return Math.floor(value / 100) + '/' + record.get('v16');
            }
        },
        {
            text: '买四股数/报价',
            dataIndex: 'v17',
            width: 120,
            renderer: function (value, metaData, record) {
                return Math.floor(value / 100) + '/' + record.get('v18');
            }
        },
        {
            text: '买五股数/报价',
            dataIndex: 'v19',
            width: 120,
            renderer: function (value, metaData, record) {
                return Math.floor(value / 100) + '/' + record.get('v20');
            }
        },
        {
            text: '卖一股数/报价',
            dataIndex: 'v21',
            width: 120,
            renderer: function (value, metaData, record) {
                return Math.floor(value / 100) + '/' + record.get('v22');
            }
        },
        {
            text: '卖二股数/报价',
            dataIndex: 'v23',
            width: 120,
            renderer: function (value, metaData, record) {
                return Math.floor(value / 100) + '/' + record.get('v24');
            }
        },
        {
            text: '卖三股数/报价',
            dataIndex: 'v25',
            width: 120,
            renderer: function (value, metaData, record) {
                return Math.floor(value / 100) + '/' + record.get('v26');
            }
        },
        {
            text: '卖四股数/报价',
            dataIndex: 'v27',
            width: 120,
            renderer: function (value, metaData, record) {
                return Math.floor(value / 100) + '/' + record.get('v28');
            }
        },
        {
            text: '卖五股数/报价',
            dataIndex: 'v29',
            width: 120,
            renderer: function (value, metaData, record) {
                return Math.floor(value / 100) + '/' + record.get('v30');
            }
        },
        {
            text: '成交的股票数量',
            dataIndex: 'v9',
            width: 120
        },
        {
            text: '成交金额(元)',
            dataIndex: 'v10',
            width: 120
        },
        {
            text: '日期',
            dataIndex: 'v31',
            width: 100
        },
        {
            text: '时间',
            dataIndex: 'v32',
            width: 100,
            renderer: function (value, metaData, record) {
                return value + ',' + record.get('v33');
            }
        },
        {
            xtype: 'actioncolumn',
            items: [
                {
                    icon: 'resources/images/icons/edit.png',
                    tooltip: '查看',
                    handler: 'onDetail'
                }
            ]
        }
    ],

    listeners: {
        afterrender: 'onAfterRender'
    }
});
