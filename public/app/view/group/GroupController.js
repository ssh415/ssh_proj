Ext.define('logsystem.view.group.GroupController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.group',

    init: function(view) {
        view.setStore({
            type: 'group'
        });
        view.down('pagingtoolbar').setStore(view.getStore());
    },

    onAfterRender: function() {
        this.getView().getStore().loadPage(1);
    },

    onAddGroup: function(btn) {
        var win = Ext.create('Ext.window.Window', {
            title: '新增群组',
            autoShow: true,
            width: 600,
            height: 200,
            layout: 'fit',
            items: [
                {
                    xtype: 'form',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'middle'
                    },
                    defaults: {
                        margin: 10,
                        labelWidth: 60
                    },
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                '->',
                                {
                                    text: '保存',
                                    handler: function() {
                                        var form = this.up('form');
                                        if (!form.getForm().isValid())
                                            return;
                                        form.getForm().submit({
                                            url: '/groups/add',
                                            method: 'post',
                                            params: {
                                                operator: localStorage.getItem('username')
                                            },
                                            success: function(form, action) {
                                                var text = action.result;
                                                Ext.toast(text.msg);
                                                win.close();
                                                btn.up('grid').getStore().reload();
                                            },
                                            failure: function(form, action) {
                                                Ext.Msg.alert('提示', action.result.msg);
                                            }
                                        });
                                    }
                                },
                                {
                                    text: '取消',
                                    handler: function() {
                                        win.close();
                                    }
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: '名称',
                            name: 'name'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '描述',
                            name: 'cname'
                        }
                    ]
                }
            ]
        });
    },
    onEditGroup: function(view, rowIndex, colIndex, item, e, record, row) {
        var win = Ext.create('Ext.window.Window', {
            title: '编辑群组',
            autoShow: true,
            width: 600,
            height: 200,
            layout: 'fit',
            items: [
                {
                    xtype: 'form',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'middle'
                    },
                    defaults: {
                        margin: 10,
                        labelWidth: 60
                    },
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                '->',
                                {
                                    text: '保存',
                                    handler: function() {
                                        var form = this.up('form');
                                        if (!form.getForm().isValid())
                                            return;
                                        form.getForm().submit({
                                            url: '/groups/edit',
                                            method: 'post',
                                            params: {
                                                operator: localStorage.getItem('username')
                                            },
                                            success: function(form, action) {
                                                var text = action.result;
                                                Ext.toast(text.msg);
                                                win.close();
                                                view.getStore().reload();
                                            },
                                            failure: function(form, action) {
                                                Ext.Msg.alert('提示', action.result.msg);
                                            }
                                        });
                                    }
                                },
                                {
                                    text: '取消',
                                    handler: function() {
                                        win.close();
                                    }
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'hidden',
                            name: 'id',
                            value: record.data.id
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '名称',
                            name: 'name',
                            readOnly: true,
                            value: record.data.name
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '描述',
                            name: 'cname',
                            value: record.data.cname
                        }
                    ]
                }
            ]
        });
    },
    onClearGroup: function(view, rowIndex, colIndex, item, e, record, row) {
        Ext.Msg.confirm('提示', '此操作将会移除该群所有的用户，确定操作吗，亲？', function(btn) {
            if (btn == 'yes') {
                Ext.Ajax.request({
                    url: '/groups/clear',
                    method: 'post',
                    params: {
                        id: record.data.id,
                        name: record.data.name,
                        operator: localStorage.getItem('username')
                    },
                    success: function(response) {
                        var text = Ext.decode(response.responseText);
                        if (text.success) {
                            Ext.toast(text.msg);
                            view.getStore().reload();
                        } else {
                            Ext.Msg.alert('提示', text.msg);
                        }
                    },
                    failure: function(response) {
                        var text = Ext.decode(response.responseText);
                        Ext.Msg.alert('提示', text.msg);
                    }
                });
            }
        });
    },
    onRemoveGroup: function(view, rowIndex, colIndex, item, e, record, row) {
        Ext.Msg.confirm('提示', '确定要删除吗，亲？', function(btn) {
            if (btn == 'yes') {
                Ext.Ajax.request({
                    url: '/groups/delete',
                    method: 'post',
                    params: {
                        id: record.data.id,
                        name: record.data.name,
                        operator: localStorage.getItem('username')
                    },
                    success: function(response) {
                        var text = Ext.decode(response.responseText);
                        if (text.success) {
                            Ext.toast(text.msg);
                            view.getStore().reload();
                        } else {
                            Ext.Msg.alert('提示', text.msg);
                        }
                    },
                    failure: function(response) {
                        var text = Ext.decode(response.responseText);
                        Ext.Msg.alert('提示', text.msg);
                    }
                });
            }
        });
    }
});
