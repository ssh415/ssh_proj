/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('logsystem.view.main.VisitView', {
    extend: 'Ext.panel.Panel',
    xtype: 'visitView',

    controller: 'visitView',

    ui: 'navigation',

    bodyStyle: 'background: transparent url(resources/images/bk/102.jpg) no-repeat; background-size: cover',

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
                        xtype: 'button',
                        text: '<span style="color: #fff; font-family: 微软雅黑; font-size: 16px;">登录</span>',
                        border: 0,
                        style: 'background: transparent',
                        handler: 'onLogin'
                    },
                    {
                        xtype: 'button',
                        text: '<span style="color: #fff; font-family: 微软雅黑; font-size: 16px;">注册</span>',
                        border: 0,
                        margin: '0 50 0 0',
                        style: 'background: transparent',
                        handler: 'onRegister'
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
    layout: 'fit',
    items: [
        {
            xtype: 'container',
            margin: '50 0 0 0',
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'middle'
            },
            items: [
                {
                    xtype: 'container',
                    width: 50,
                    items: [
                        {
                            xtype: 'button',
                            border: 0,
                            width: 50,
                            height: 50,
                            style: 'background: transparent url(resources/images/icons/left.png) no-repeat',
                            handler: function() {
                                var con = this.up().nextSibling().down('#imageCon');
                                var bar = this.up().nextSibling().down('#indexToolbar');
                                var len = con.items.length;
                                var item = con.getLayout().getActiveItem();
                                var index = con.items.indexOf(item);
                                if (index == 0) {
                                    con.getLayout().setActiveItem(len - 1);
                                    for (var i = 0; i < bar.items.length; i++) {
                                        if (bar.items.getAt(i).getXType() == 'button') {
                                            Ext.getDom(bar.items.getAt(i).getId()).style.background = 'transparent url(resources/images/icons/ring.png) no-repeat';
                                        }
                                    }
                                    Ext.getDom(bar.items.getAt(len).getId()).style.background = 'transparent url(resources/images/icons/ring-on.png) no-repeat';
                                } else {
                                    con.getLayout().prev();
                                    for (var i = 0; i < bar.items.length; i++) {
                                        if (bar.items.getAt(i).getXType() == 'button') {
                                            Ext.getDom(bar.items.getAt(i).getId()).style.background = 'transparent url(resources/images/icons/ring.png) no-repeat';
                                        }
                                    }
                                    Ext.getDom(bar.items.getAt(index).getId()).style.background = 'transparent url(resources/images/icons/ring-on.png) no-repeat';
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'container',
                            itemId: 'imageCon',
                            layout: 'card',
                            items: [
                                {
                                    xtype: 'image',
                                    width: 1000,
                                    height: 600,
                                    src: 'resources/images/bk/103.jpg'
                                },
                                {
                                    xtype: 'image',
                                    width: 1000,
                                    height: 600,
                                    src: 'resources/images/bk/104.jpg'
                                },
                                {
                                    xtype: 'image',
                                    width: 1000,
                                    height: 600,
                                    src: 'resources/images/bk/105.jpg'
                                }
                            ],
                            listeners: {
                                afterrender: function(con) {
                                    var len = con.items.length;
                                    if (typeof interval != 'undefined')
                                        clearInterval(interval);
                                    interval = setInterval(function() {
                                        var item = con.getLayout().getActiveItem();
                                        var index = con.items.indexOf(item);
                                        if (index == len - 1) {
                                            con.getLayout().setActiveItem(0);
                                            for (var i = 0; i < con.nextSibling().items.length; i++) {
                                                if (con.nextSibling().items.getAt(i).getXType() == 'button') {
                                                    Ext.getDom(con.nextSibling().items.getAt(i).getId()).style.background = 'transparent url(resources/images/icons/ring.png) no-repeat';
                                                }
                                            }
                                            Ext.getDom(con.nextSibling().items.getAt(1).getId()).style.background = 'transparent url(resources/images/icons/ring-on.png) no-repeat';
                                        } else {
                                            con.getLayout().next();
                                            for (var i = 0; i < con.nextSibling().items.length; i++) {
                                                if (con.nextSibling().items.getAt(i).getXType() == 'button') {
                                                    Ext.getDom(con.nextSibling().items.getAt(i).getId()).style.background = 'transparent url(resources/images/icons/ring.png) no-repeat';
                                                }
                                            }
                                            Ext.getDom(con.nextSibling().items.getAt(index + 2).getId()).style.background = 'transparent url(resources/images/icons/ring-on.png) no-repeat';
                                        }
                                    }, 4000);
                                }
                            }
                        },
                        {
                            xtype: 'toolbar',
                            itemId: 'indexToolbar',
                            width: 1000,
                            items: [
                                '->',
                                {
                                    xtype: 'button',
                                    border: 0,
                                    width: 16,
                                    height: 16,
                                    style: 'background: transparent url(resources/images/icons/ring-on.png) no-repeat',
                                    handler: function(btn) {
                                        var con = btn.up();
                                        for (var i = 0; i < con.items.length; i++) {
                                            if (con.items.getAt(i).getXType() == 'button') {
                                                Ext.getDom(con.items.getAt(i).getId()).style.background = 'transparent url(resources/images/icons/ring.png) no-repeat';
                                            }
                                        }
                                        Ext.getDom(btn.getId()).style.background = 'transparent url(resources/images/icons/ring-on.png) no-repeat';
                                        btn.up().previousSibling().getLayout().setActiveItem(0);
                                    }
                                },
                                {
                                    xtype: 'button',
                                    border: 0,
                                    width: 16,
                                    height: 16,
                                    style: 'background: transparent url(resources/images/icons/ring.png) no-repeat',
                                    handler: function(btn) {
                                        var con = btn.up();
                                        for (var i = 0; i < con.items.length; i++) {
                                            if (con.items.getAt(i).getXType() == 'button') {
                                                Ext.getDom(con.items.getAt(i).getId()).style.background = 'transparent url(resources/images/icons/ring.png) no-repeat';
                                            }
                                        }
                                        Ext.getDom(btn.getId()).style.background = 'transparent url(resources/images/icons/ring-on.png) no-repeat';
                                        btn.up().previousSibling().getLayout().setActiveItem(1);
                                    }
                                },
                                {
                                    xtype: 'button',
                                    border: 0,
                                    width: 16,
                                    height: 16,
                                    style: 'background: transparent url(resources/images/icons/ring.png) no-repeat',
                                    handler: function(btn) {
                                        var con = btn.up();
                                        for (var i = 0; i < con.items.length; i++) {
                                            if (con.items.getAt(i).getXType() == 'button') {
                                                Ext.getDom(con.items.getAt(i).getId()).style.background = 'transparent url(resources/images/icons/ring.png) no-repeat';
                                            }
                                        }
                                        Ext.getDom(btn.getId()).style.background = 'transparent url(resources/images/icons/ring-on.png) no-repeat';
                                        btn.up().previousSibling().getLayout().setActiveItem(2);
                                    }
                                },
                                '->'
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    width: 50,
                    items: [
                        {
                            xtype: 'button',
                            border: 0,
                            width: 50,
                            height: 50,
                            style: 'background: transparent url(resources/images/icons/right.png) no-repeat',
                            handler: function() {
                                var con = this.up().previousSibling().down('#imageCon');
                                var bar = this.up().previousSibling().down('#indexToolbar');
                                var len = con.items.length;
                                var item = con.getLayout().getActiveItem();
                                var index = con.items.indexOf(item);
                                if (index == len - 1) {
                                    con.getLayout().setActiveItem(0);
                                    for (var i = 0; i < bar.items.length; i++) {
                                        if (bar.items.getAt(i).getXType() == 'button') {
                                            Ext.getDom(bar.items.getAt(i).getId()).style.background = 'transparent url(resources/images/icons/ring.png) no-repeat';
                                        }
                                    }
                                    Ext.getDom(bar.items.getAt(1).getId()).style.background = 'transparent url(resources/images/icons/ring-on.png) no-repeat';
                                } else {
                                    con.getLayout().next();
                                    for (var i = 0; i < bar.items.length; i++) {
                                        if (bar.items.getAt(i).getXType() == 'button') {
                                            Ext.getDom(bar.items.getAt(i).getId()).style.background = 'transparent url(resources/images/icons/ring.png) no-repeat';
                                        }
                                    }
                                    Ext.getDom(bar.items.getAt(index + 2).getId()).style.background = 'transparent url(resources/images/icons/ring-on.png) no-repeat';
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
