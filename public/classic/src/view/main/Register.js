Ext.define('logsystem.view.main.Register', {
    extend: 'Ext.form.Panel',
    xtype: 'registerView',

    controller: 'register',

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

    bodyStyle: 'background: transparent url(resources/images/bk/108.jpg) no-repeat; background-size: cover',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'middle'
    },
    defaults: {
        margin: 20,
        width: 400,
        height: 40,
        labelWidth: 85,
        fieldStyle: 'height: 40px',
        labelStyle: 'font-size: 16px; color: #404040; font-family: 微软雅黑'
    },
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '账&emsp;&emsp;号',
            emptyText: '账号',
            allowBlank: false,
            name: 'username'
        },
        {
            xtype: 'textfield',
            fieldLabel: '姓&emsp;&emsp;名',
            emptyText: '姓名',
            allowBlank: false,
            name: 'realname'
        },
        {
            xtype: 'textfield',
            inputType: 'password',
            fieldLabel: '输入密码',
            emptyText: '密码',
            allowBlank: false,
            submitValue: false,
            itemId: 'password'
        },
        {
            xtype: 'textfield',
            inputType: 'password',
            fieldLabel: '确认密码',
            emptyText: '确认密码',
            allowBlank: false,
            submitValue: false,
            itemId: 'confirmPWD',
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
                    text: '<span style="color: #fff; font-family: 微软雅黑;">提&emsp;交</span>',
                    border: 0,
                    width: 90,
                    height: 35,
                    style: 'background: #13bdc6',
                    handler: 'onRegister'
                },
                {
                    xtype: 'button',
                    text: '<span style="color: #fff; font-family: 微软雅黑;">重&emsp;置</span>',
                    border: 0,
                    width: 90,
                    height: 35,
                    style: 'background: #13bdc6',
                    handler: 'onReset'
                },
                {
                    xtype: 'button',
                    text: '<span style="color: #fff; font-family: 微软雅黑;">登&emsp;录</span>',
                    border: 0,
                    width: 90,
                    height: 35,
                    style: 'background: #13bdc6',
                    handler: 'onLogin'
                }
            ]
        }
    ]
});