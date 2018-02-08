Ext.define('logsystem.view.stock.StockController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.stock',

    init: function (view) {
        var store = Ext.create('Ext.data.Store', {
            fields: ['name'],
            data: []
        });
        view.setStore(store);
        view.down('pagingtoolbar').setStore(view.getStore());
    },

    onAfterRender: function () {
        // this.getView().getStore().loadPage(1);
    },

    onGet: function (btn) {
        var grid = btn.up('grid');
        var number = grid.down('#number').getValue();
        if (!number)
            return;
        Ext.Ajax.request({
            url: 'http://hq.sinajs.cn',
            method: 'get',
            params: {
                list: number
            },
            success: function (response) {
                var text = response.responseText;
                text = text.trim();
                var text1 = text.split('=')[1];
                var text2 = text1.replace('"', '');
                text2 = text2.replace('";', '');
                if (text2.length != 0) {
                    var arr = text2.split(',');
                    var models = btn.up('grid').getStore().getRange();
                    var flag = false;
                    Ext.Array.each(models, function (m) {
                        if (m.get('v1') == arr[0]) {
                            flag = true;
                            return;
                        }
                    });
                    if (!flag) {
                        var records = [];
                        records[0] = {
                            v1: arr[0],
                            v2: arr[1],
                            v3: arr[2],
                            v4: arr[3],
                            v5: arr[4],
                            v6: arr[5],
                            v7: arr[6],
                            v8: arr[7],
                            v9: arr[8],
                            v10: arr[9],
                            v11: arr[10],
                            v12: arr[11],
                            v13: arr[12],
                            v14: arr[13],
                            v15: arr[14],
                            v16: arr[15],
                            v17: arr[16],
                            v18: arr[17],
                            v19: arr[18],
                            v20: arr[19],
                            v21: arr[20],
                            v22: arr[21],
                            v23: arr[22],
                            v24: arr[23],
                            v25: arr[24],
                            v26: arr[25],
                            v27: arr[26],
                            v28: arr[27],
                            v29: arr[28],
                            v30: arr[29],
                            v31: arr[30],
                            v32: arr[31],
                            v33: arr[32]
                        };
                        // console.log(records);
                        btn.up('grid').getStore().add(records);
                    }
                } else {
                    Ext.toast({
                        html: '查询的股票代码无数据',
                        align: 't'
                    });
                }
            }
        })
    },
    onDetail: function (view, rowIndex, colIndex, item, e, record, row) {

    }
});
