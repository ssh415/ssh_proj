/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

function markerhandler(marker, point, name, number, fl, zoom, imgPath, panel) {
    marker.addEventListener("click", function (e) {
        flag = fl;
        if (flag < 4) {
            equipment_map.clearOverlays();        //清除地图覆盖物
            equipment_map.centerAndZoom(point, zoom);
            var bdary = new BMap.Boundary();
            bdary.get(name, function (rs) {       //获取行政区域
                var count = rs.boundaries.length; //行政区域的点有多少个
                if (count === 0) {
                    alert('未能获取当前输入行政区域');
                    return;
                }
                var pointArray = [];
                for (var i = 0; i < count; i++) {
                    var ply = new BMap.Polygon(rs.boundaries[i], {
                        strokeStyle: 'dashed',
                        strokeWeight: 2,
                        strokeColor: "#ff0000",
                        fillColor: "transparent"
                    }); //建立多边形覆盖物
                    equipment_map.addOverlay(ply);  //添加覆盖物
                    pointArray = pointArray.concat(ply.getPath());
                }
                // equipment_map.setViewport(pointArray);    //调整视野
            });
        }

        var panel_show = panel.nextSibling();
        var panel_con = panel_show.down('#conPanel');
        if (fl == 0) {

        } else if (fl == 1) {
            currentProvince = name;
            panel_con.removeAll();
            panel_show.down('#currentFlag').setValue(fl);
            panel_show.down('#titleTb').setText('<span style="color: #96CDCD; font-size: 15px; font-weight: bold">' + currentProvince + '设备分布图</span>');
        } else if (fl == 2) {
            currentCity = name;
            panel_con.removeAll();
            panel_show.down('#currentFlag').setValue(fl);
            panel_show.down('#titleTb').setText('<span style="color: #96CDCD; font-size: 15px; font-weight: bold">' + currentProvince + currentCity + '设备分布图</span>');
        } else if (fl == 3) {
            currentDistrict = name;
            panel_con.removeAll();
            panel_show.down('#currentFlag').setValue(fl);
            panel_show.down('#titleTb').setText('<span style="color: #96CDCD; font-size: 15px; font-weight: bold">' + currentProvince + currentCity + currentDistrict + '设备分布图</span>');
        }
    });
    marker.addEventListener("mouseover", function (e) {
        var p = e.target;
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        var opts = {
            // width: 300,     // 信息窗口宽度
            // height: 100,     // 信息窗口高度
            // title: "海底捞王府井店(" + point.lng + "," + point.lat + ")", // 信息窗口标题
            enableMessage: true,//设置允许信息窗发送短息
            message: "亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
        };
        var content = name + '<br/>共有设备数：<b>' + number + '</b>';
        if (fl == 4) {
            content = '<img src="' + imgPath + '" style="width: 150px; height: 75px;"><br/>' + name + '&emsp;共有栋数：<b>' + number + '</b>';
        }
        var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象
        equipment_map.openInfoWindow(infoWindow, point); //开启信息窗口
    });
}

Ext.define('logsystem.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'logsystem.view.main.MainController',
        'logsystem.view.main.MainModel',
        'logsystem.view.main.Home',
        'logsystem.view.person.List',
        'logsystem.view.group.List',
        'logsystem.view.log.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    // tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    tabPosition: 'left',

    header: {
        style: 'background: #13bdc6',
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                // text: '{name}'
                text: '宏腾管理平台'
            },
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
                    {
                        xtype: 'container',
                        margin: '0 0 0 10',
                        flex: 1,
                        height: '100%',
                        layout: {
                            type: 'hbox',
                            align: 'bottom'
                        },
                        items: [
                            {
                                xtype: 'button',
                                text: '<span style="color: #fff; font-size: 14px; font-weight: bold;">实时路况</span>',
                                border: '1 1 3 1',
                                style: 'background: transparent; border-color: #fff',
                                height: '50%',
                                width: 120,
                                listeners: {
                                    focus: function (btn) {
                                        var con = btn.up();
                                        for (var i = 0; i < con.items.length; i++) {
                                            con.items.getAt(i).setBorder(0);
                                        }
                                        btn.setBorder('1 1 3 1');
                                    },
                                    mouseover: function (btn) {
                                        btn.setBorder('1 1 3 1');
                                    },
                                    mouseout: function (btn) {
                                        btn.setBorder(0);
                                    }
                                }
                            },
                            {
                                xtype: 'button',
                                margin: '0 0 0 20',
                                text: '<span style="color: #fff; font-size: 14px; font-weight: bold;">聚合数据</span>',
                                border: 0,
                                style: 'background: transparent;border-color: #fff',
                                height: '50%',
                                width: 120,
                                listeners: {
                                    focus: function (btn) {
                                        var con = btn.up();
                                        for (var i = 0; i < con.items.length; i++) {
                                            con.items.getAt(i).setBorder(0);
                                        }
                                        btn.setBorder('1 1 3 1');
                                    },
                                    mouseover: function (btn) {
                                        btn.setBorder('1 1 3 1');
                                    },
                                    mouseout: function (btn) {
                                        btn.setBorder(0);
                                    }
                                }
                            },
                            {
                                xtype: 'button',
                                margin: '0 0 0 20',
                                text: '<span style="color: #fff; font-size: 14px; font-weight: bold;">地图分布</span>',
                                border: 0,
                                style: 'background: transparent;border-color: #fff',
                                height: '50%',
                                width: 120,
                                listeners: {
                                    focus: function (btn) {
                                        var con = btn.up();
                                        for (var i = 0; i < con.items.length; i++) {
                                            con.items.getAt(i).setBorder(0);
                                        }
                                        btn.setBorder('1 1 3 1');
                                    },
                                    mouseover: function (btn) {
                                        btn.setBorder('1 1 3 1');
                                    },
                                    mouseout: function (btn) {
                                        btn.setBorder(0);
                                    }
                                }
                            },
                            {
                                xtype: 'button',
                                margin: '0 0 0 20',
                                text: '<span style="color: #fff; font-size: 14px; font-weight: bold;">百度路书</span>',
                                border: 0,
                                style: 'background: transparent;border-color: #fff',
                                height: '50%',
                                width: 120,
                                listeners: {
                                    focus: function (btn) {
                                        var con = btn.up();
                                        for (var i = 0; i < con.items.length; i++) {
                                            con.items.getAt(i).setBorder(0);
                                        }
                                        btn.setBorder('1 1 3 1');
                                    },
                                    mouseover: function (btn) {
                                        btn.setBorder('1 1 3 1');
                                    },
                                    mouseout: function (btn) {
                                        btn.setBorder(0);
                                    }
                                }
                            }
                        ]
                    },
                    // '->',
                    {
                        xtype: 'tbtext',
                        text: '<img src="resources/images/header.jpg" class="headImg" style="width: 40px; height: 40px; border-radius: 20px;">'
                    },
                    {
                        xtype: 'tbtext',
                        itemId: 'usernameTB',
                        margin: '0 10 0 0',
                        text: '<span style="color: #fff; font-size: 18px; font-family: 微软雅黑;">仙儿</span>'
                    },
                    {
                        xtype: 'button',
                        width: 20,
                        height: 20,
                        border: 0,
                        margin: '0 30 0 0',
                        style: 'background: transparent url(resources/images/icons/exit.png) no-repeat;background-size: 20px 20px',
                        handler: 'onLogout'
                    }
                ]
            }
        ]
    },

    tabBar: {
        // flex: 1,
        width: 250,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 0,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
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

    items: [
        {
            title: '首页',
            iconCls: 'fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [
                {
                    xtype: 'homepanel'
                }
            ]
        },
        {
            title: '用户管理',
            iconCls: 'fa-user',
            layout: 'fit',
            items: [
                {
                    xtype: 'personlist'
                }
            ]
        },
        {
            title: '群组管理',
            iconCls: 'fa-users',
            layout: 'fit',
            items: [
                {
                    xtype: 'grouplist'
                }
            ]
        },
        {
            title: '股票行情',
            iconCls: 'fa-users',
            layout: 'fit',
            items: [
                {
                    xtype: 'stocklist'
                }
            ]
        },
        {
            title: '图表统计',
            iconCls: 'fa-line-chart',
            layout: 'fit',
            items: [
                {
                    xtype: 'chartspanel'
                }
            ]
        },
        {
            title: '地图功能',
            iconCls: 'fa-map-marker',
            layout: 'fit',
            items: [
                {
                    xtype: 'mappanel',
                    listeners: {
                        afterrender: function () {
                            alert(123);
                        }
                    }
                }
            ]
        },
        {
            title: '系统设置',
            iconCls: 'fa-cog',
            // layout: 'fit',
            items: [
                // {
                //     xtype: 'loglist'
                // }
                {
                    xtype: 'image',
                    width: 50,
                    height: 50,
                    src: 'resources/images/bk.png',
                    listeners: {
                        el: {
                            mouseover: function () {
                                var win = Ext.create('Ext.window.Window', {
                                    id: 'image100',
                                    width: 500,
                                    height: 500,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'image',
                                            src: 'resources/images/bk.png'
                                        }
                                    ]
                                });
                                win.show();
                            },
                            mouseout: function () {
                                var win = Ext.getCmp('image100');
                                if (win) {
                                    win.close();
                                }
                            }
                        }
                    }
                }
            ]
        }
    ],

    listeners: {
        afterrender: function (panel) {
            panel.down('#usernameTB').setText('<span style="color: #fff; font-size: 18px; font-family: 微软雅黑;">' + localStorage.getItem('username') + '</span>');
        }
    }
});
