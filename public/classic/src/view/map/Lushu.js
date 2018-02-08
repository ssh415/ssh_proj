Ext.define('logsystem.view.map.Lushu', {
    extend: 'Ext.panel.Panel',
    xtype: 'lushupanel',
    controller: 'map',
    scrollable: 'y',
    title: '百度路书',
    layout: 'fit',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: '起点',
                    labelWidth: 40,
                    itemId: 'begin',
                    value: '西丽法庭'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: '终点',
                    labelWidth: 40,
                    itemId: 'end',
                    value: '腾讯大厦'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: '速度',
                    labelWidth: 40,
                    itemId: 'speed',
                    value: 500
                },
                {
                    text: '出发',
                    handler: function (btn) {
                        var begin = btn.up().down('#begin').getValue();
                        var end = btn.up().down('#end').getValue();
                        var speed = btn.up().down('#speed').getValue();
                        var panel = btn.up('panel').down('#mapPanel');
                        if (!panel.panelArrPois) {
                            panel.toLine.search(begin, end);
                        } else {
                            Ext.toast('更新路线先清除');
                        }
                        setTimeout(function () {
                            var lushu = new BMapLib.LuShu(panel.panelMap,panel.panelArrPois,{
                                defaultContent:"老司机带你飞",//"从天安门到百度大厦"
                                autoView:true,//是否开启自动视野调整，如果开启那么路书在运动过程中会根据视野自动调整
                                icon  : new BMap.Icon('http://api.map.baidu.com/library/LuShu/1.2/examples/car.png', new BMap.Size(52,26),{anchor : new BMap.Size(27, 13)}),
                                speed: speed,
                                enableRotation:true,//是否设置marker随着道路的走向进行旋转
                                landmarkPois: [
                                    {lng:116.314782,lat:39.913508,html:'加油站',pauseTime:2},
                                    {lng:116.315391,lat:39.964429,html:'高速公路收费<div><img src="http://map.baidu.com/img/logo-map.gif"/></div>',pauseTime:3},
                                    {lng:116.381476,lat:39.974073,html:'肯德基早餐<div><img src="http://ishouji.baidu.com/resource/images/map/show_pic04.gif"/></div>',pauseTime:2}
                                ]});
                            lushu.start();
                            lushu.showInfoWindow();
                        }, 500);
                    }
                },
                {
                    text: '清除路线',
                    handler: function (btn) {
                        Ext.Ajax.request({
                            url: 'http://tool.keleyi.com/ip/visitoriphost',
                            success: function (response) {
                                console.log(response);
                                var ip = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
                                var text = ip.exec(response.responseText);
                                console.log(text[0]);
                                Ext.Ajax.request({
                                    url: 'http://api.map.baidu.com/location/ip',
                                    params: {
                                        ak: '4slvjrRHDSQ2OXdXua2nbmBL',
                                        coor: 'bd09ll'
                                    },
                                    success: function (response) {
                                        console.log(Ext.decode(response.responseText))
                                    }
                                });
                            }
                        });
                    }
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'panel',
            itemId: 'mapPanel',
            listeners: {
                afterrender: function(panel) {
                    // 百度地图API功能
                    // console.log(panel.getId());
                    setTimeout(function () {
                        var dom = Ext.getDom(panel.getId());
                        var map = new BMap.Map(dom);
                        panel.panelMap = map;
                        map.enableScrollWheelZoom();
                        map.centerAndZoom(new BMap.Point(114.06667,22.54667), 15);
                        var lushu;
                        // 实例化一个驾车导航用来生成路线
                        panel.toLine = new BMap.DrivingRoute('深圳', {
                            onSearchComplete: function(res) {
                                if (panel.toLine.getStatus() == BMAP_STATUS_SUCCESS) {
                                    var arrPois = res.getPlan(0).getRoute(0).getPath();
                                    panel.panelArrPois = arrPois;
                                    map.addOverlay(new BMap.Polyline(arrPois, {strokeColor: '#0000FF'}));
                                    map.setViewport(arrPois);

                                    // lushu = new BMapLib.LuShu(map,arrPois,{
                                    //     defaultContent:"老司机带你飞",//"从天安门到百度大厦"
                                    //     autoView:true,//是否开启自动视野调整，如果开启那么路书在运动过程中会根据视野自动调整
                                    //     icon  : new BMap.Icon('http://api.map.baidu.com/library/LuShu/1.2/examples/car.png', new BMap.Size(52,26),{anchor : new BMap.Size(27, 13)}),
                                    //     speed: 500,
                                    //     enableRotation:true,//是否设置marker随着道路的走向进行旋转
                                    //     landmarkPois: [
                                    //         {lng:116.314782,lat:39.913508,html:'加油站',pauseTime:2},
                                    //         {lng:116.315391,lat:39.964429,html:'高速公路收费<div><img src="http://map.baidu.com/img/logo-map.gif"/></div>',pauseTime:3},
                                    //         {lng:116.381476,lat:39.974073,html:'肯德基早餐<div><img src="http://ishouji.baidu.com/resource/images/map/show_pic04.gif"/></div>',pauseTime:2}
                                    //     ]});
                                    // lushu.start();
                                    // lushu.showInfoWindow();
                                }
                            }
                        });
                        // panel.toLine.search('西丽法庭', '腾讯大厦');
                    }, 100);
                }
            }
        }
    ]
});
