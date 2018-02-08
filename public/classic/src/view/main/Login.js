Ext.define('logsystem.view.main.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'loginView',

    controller: 'login',

    ui: 'navigation',

    header: {
        style: 'background: #13bdc6',
        layout: {
            align: 'stretchmax'
        },
        title: {
            text: '宏腾管理平台',
            flex: 0
        },
        iconCls: 'fa-diamond',
        items: [
            {
                xtype: 'toolbar',
                flex: 1,
                height: 96,
                dock: 'top',
                style: 'background: #13bdc6; border: 0',
                items: [
                    '->',
                    {
                        xtype: 'label',
                        margin: '0 20 0 0',
                        html: '<span style="color: #fff; font-size: 20px; font-weight: bold">客服热线: 400-000-000</span>'
                    },
                    {
                        xtype: 'button',
                        text: '<span style="color: #fff; font-family: 微软雅黑; font-size: 16px;">返回首页</span>',
                        border: 0,
                        margin: '0 50 0 0',
                        style: 'background: transparent',
                        handler: 'onBack'
                    }
                ]
            }
        ]
    },

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            height: 30,
            style: 'background: #404040',
            items: [
                '->',
                {
                    xtype: 'tbtext',
                    text: '<span style="color: #ccc">宏腾集团  地址：广东省深圳市南山区宏腾大道001号宏腾大厦</span>'
                },
                '->'
            ]
        }
    ],

    bodyStyle: 'background: transparent url(resources/images/bk/106.jpg) no-repeat; background-size: cover',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'middle'
    },
    defaults: {
        margin: 10,
        width: 400,
        height: 40,
        labelWidth: 85,
        fieldStyle: 'height: 40px',
        labelStyle: 'font-size: 16px; color: #fff; font-family: 微软雅黑'
    },
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '账&emsp;号',
            emptyText: '输入账号',
            allowBlank: false,
            name: 'username',
            listeners: {
                afterrender: function(field) {
                    field.focus();
                }
            }
        },
        {
            xtype: 'textfield',
            inputType: 'password',
            fieldLabel: '密&emsp;码',
            emptyText: '输入密码',
            allowBlank: false,
            submitValue: false,
            itemId: 'password',
            listeners: {
                specialkey: 'onSpecialKey'
            }
        },
        {
            xtype: 'toolbar',
            style: 'background: transparent',
            height: 50,
            items: [
                '->',
                {
                    xtype: 'button',
                    text: '<span style="color: #fff; font-family: 微软雅黑;">登&emsp;录</span>',
                    border: 0,
                    width: 100,
                    height: 35,
                    style: 'background: #13bdc6',
                    handler: 'onLogin'
                },
                {
                    xtype: 'button',
                    text: '<span style="color: #fff; font-family: 微软雅黑;">注&emsp;册</span>',
                    border: 0,
                    width: 100,
                    height: 35,
                    style: 'background: #13bdc6',
                    handler: 'onRegister'
                }
            ]
        }
    ]
});