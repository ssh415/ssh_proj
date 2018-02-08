Ext.define('logsystem.view.person.PersonController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.person',

    init: function(view) {
        view.setStore({
            type: 'personnel'
        });
        view.down('pagingtoolbar').setStore(view.getStore());
    },

    onAfterRender: function() {
        this.getView().getStore().loadPage(1);
    },

    onAddAccount: function(btn) {
        var win = Ext.create('Ext.window.Window', {
            title: '新增账号',
            autoShow: true,
            width: 600,
            height: 400,
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
                                            url: '/users/add',
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
                            fieldLabel: '账号',
                            allowBlank: false,
                            afterLabelTextTpl: '<span style="color: red">*</span>',
                            name: 'username'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '姓名',
                            allowBlank: false,
                            afterLabelTextTpl: '<span style="color: red">*</span>',
                            name: 'realname'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '密码',
                            allowBlank: false,
                            afterLabelTextTpl: '<span style="color: red">*</span>',
                            name: 'password',
                            inputType: 'password'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '备注',
                            name: 'remark'
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '群组',
                            name: 'group_id',
                            store: {
                                fields: ['id', 'name', 'cname'],
                                proxy: {
                                    type: 'ajax',
                                    url: '/groups',
                                    reader: {
                                        type: 'json',
                                        rootProperty: 'items'
                                    }
                                }
                            },
                            valueField: 'id',
                            displayField: 'cname'
                        }
                    ]
                }
            ]
        });
    },
    onEditAccount: function(view, rowIndex, colIndex, item, e, record, row) {
        var win = Ext.create('Ext.window.Window', {
            title: '编辑账号',
            autoShow: true,
            width: 600,
            height: 400,
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
                                            url: '/users/edit',
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
                            fieldLabel: '账号',
                            name: 'username',
                            readOnly: true,
                            value: record.data.username
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '姓名',
                            name: 'realname',
                            value: record.data.realName
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '备注',
                            name: 'remark',
                            value: record.data.remark
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '群组',
                            name: 'group_id',
                            store: {
                                fields: ['id', 'name', 'cname'],
                                proxy: {
                                    type: 'ajax',
                                    url: '/groups',
                                    reader: {
                                        type: 'json',
                                        rootProperty: 'items'
                                    }
                                },
                                autoLoad: true
                            },
                            valueField: 'id',
                            displayField: 'cname',
                            value: record.data.group_id
                        }
                    ]
                }
            ]
        });
    },
    onRemoveAccount: function(view, rowIndex, colIndex, item, e, record, row) {
        Ext.Msg.confirm('提示', '确定要删除吗，亲？', function(btn) {
            if (btn == 'yes') {
                Ext.Ajax.request({
                    url: '/users/delete',
                    method: 'post',
                    params: {
                        id: record.data.id,
                        username: record.data.username,
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
