//设备分布图（百度地图功能）
var data = [
    {
        province: '广东省',
        lng: 113.27,
        lat: 23.13,
        number: 100,
        cities: [
            {
                city: '广州市',
                lng: 113.27,
                lat: 23.13,
                number: 10,
                districts: [
                    {
                        district: '荔湾区',
                        lng: 113.23,
                        lat: 23.13,
                        number: 2
                    },
                    {
                        district: '海珠区',
                        lng: 113.25,
                        lat: 23.10,
                        number: 2
                    },
                    {
                        district: '天河区',
                        lng: 113.35,
                        lat: 23.12,
                        number: 2
                    },
                    {
                        district: '白云区',
                        lng: 113.27,
                        lat: 23.17,
                        number: 2
                    },
                    {
                        district: '黄埔区',
                        lng: 113.45,
                        lat: 23.10,
                        number: 2
                    },
                    {
                        district: '番禺区',
                        lng: 113.35,
                        lat: 22.95,
                        number: 2
                    },
                    {
                        district: '花都区',
                        lng: 113.22,
                        lat: 23.40,
                        number: 2
                    },
                    {
                        district: '增城市',
                        lng: 113.83,
                        lat: 23.30,
                        number: 2
                    },
                    {
                        district: '从化市',
                        lng: 113.58,
                        lat: 23.55,
                        number: 2
                    }
                ]
            },
            {
                city: '韶关市',
                lng: 113.60,
                lat: 24.82,
                number: 10
            },
            {
                city: '深圳市',
                lng: 114.05,
                lat: 22.55,
                number: 10,
                districts: [
                    {
                        district: '罗湖区',
                        lng: 114.12,
                        lat: 22.55,
                        number: 5,
                        communities: [
                            {
                                name: '紫金花园',
                                lat: 22.547227,
                                lng: 114.120841,
                                address: '仙桃路1021号',
                                imgPath: 'resources/images/xq/1.jpg',
                                buildings: 8
                            },
                            {
                                name: '梦呓公寓',
                                lat: 22.585807,
                                lng: 114.120841,
                                address: '古河路52号',
                                imgPath: 'resources/images/xq/2.jpg',
                                buildings: 12
                            },
                            {
                                name: '蓝天花园',
                                lat: 22.605894,
                                lng: 114.186454,
                                address: '爱丽路154号',
                                imgPath: 'resources/images/xq/3.jpg',
                                buildings: 5
                            },
                            {
                                name: '灯晃小区',
                                lat: 22.556272,
                                lng: 114.13949,
                                address: '烽火大道123号',
                                imgPath: 'resources/images/xq/4.jpg',
                                buildings: 3
                            },
                            {
                                name: '吐露经典',
                                lat: 22.568053,
                                lng: 114.178549,
                                address: '付婷大道123号',
                                imgPath: 'resources/images/xq/1.jpg',
                                buildings: 16
                            }
                        ]
                    },
                    {
                        district: '福田区',
                        lng: 114.05,
                        lat: 22.53,
                        number: 2
                    },
                    {
                        district: '南山区',
                        lng: 113.92,
                        lat: 22.52,
                        number: 2
                    },
                    {
                        district: '宝安区',
                        lng: 113.90,
                        lat: 22.57,
                        number: 2
                    },
                    {
                        district: '龙岗区',
                        lng: 114.27,
                        lat: 22.73,
                        number: 2
                    },
                    {
                        district: '盐田区',
                        lng: 114.24,
                        lat: 22.56,
                        number: 2
                    }
                ]
            },
            {
                city: '珠海市',
                lng: 113.57,
                lat: 22.27,
                number: 10
            },
            {
                city: '汕头市',
                lng: 116.68,
                lat: 23.35,
                number: 10
            },
            {
                city: '佛山市',
                lng: 113.12,
                lat: 23.02,
                number: 10
            },
            {
                city: '江门市',
                lng: 113.08,
                lat: 22.58,
                number: 10
            },
            {
                city: '湛江市',
                lng: 110.35,
                lat: 21.27,
                number: 10
            },
            {
                city: '茂名市',
                lng: 110.92,
                lat: 21.67,
                number: 10
            },
            {
                city: '肇庆市',
                lng: 112.47,
                lat: 23.05,
                number: 10
            },
            {
                city: '惠州市',
                lng: 114.42,
                lat: 23.12,
                number: 10
            },
            {
                city: '梅州市',
                lng: 116.12,
                lat: 24.28,
                number: 10
            },
            {
                city: '汕尾市',
                lng: 115.37,
                lat: 22.78,
                number: 10
            },
            {
                city: '河源市',
                lng: 114.70,
                lat: 23.73,
                number: 10
            },
            {
                city: '阳江市',
                lng: 111.98,
                lat: 21.87,
                number: 10
            },
            {
                city: '清远市',
                lng: 113.03,
                lat: 23.70,
                number: 10
            },
            {
                city: '东莞市',
                lng: 113.75,
                lat: 23.05,
                number: 10
            },
            {
                city: '中山市',
                lng: 113.38,
                lat: 22.52,
                number: 10
            },
            {
                city: '潮州市',
                lng: 116.62,
                lat: 23.67,
                number: 10
            },
            {
                city: '揭阳市',
                lng: 116.37,
                lat: 23.55,
                number: 10
            },
            {
                city: '云浮市',
                lng: 112.03,
                lat: 22.92,
                number: 10
            }
        ]
    },
    {
        province: '广西壮族自治区',
        lng: 108.37,
        lat: 22.82,
        number: 150
    }
];
var currentProvince = '';
var currentCity = '';
var currentDistrict = '';
var flag = 0;
var equipment_map = null;

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
                        strokeWeight: 5, strokeColor: "#FF0000", fillOpacity: 0.01, fillColor: " #FFFFFF"
                        // strokeWeight: 2,
                        // strokeColor: "#ff0000",
                        // fillColor: "transparent"
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

Ext.define('logsystem.view.map.EquipmentMap', {
    extend: 'Ext.panel.Panel',
    xtype: 'equipmentMap',
    layout: 'hbox',
    title: '地图分布',
    items: [
        {
            xtype: 'panel',
            // width: 1400,
            flex: 1,
            height: '100%',
            // html: '<div id="allmap" style="overflow: hidden; margin:0; font-family:"微软雅黑";"></div>',
            panelMap: null,
            listeners: {
                render: function (panel) {
                    var myIcon1 = new BMap.Icon("resources/images/house64.png", new BMap.Size(64, 64));
                    var myIcon2 = new BMap.Icon("resources/images/building64.png", new BMap.Size(64, 64));
                    // 百度地图API功能
                    setTimeout(function () {
                        var dom = Ext.getDom(panel.getId());
                        equipment_map = new BMap.Map(dom);
                        var point = new BMap.Point(116.404, 39.915);
                        equipment_map.centerAndZoom(point, 5);
                        equipment_map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
                        equipment_map.enableScrollWheelZoom(true);
                        equipment_map.setMinZoom(5);

                        equipment_map.addEventListener("tilesloaded", function () {
                            var size = new BMap.Size(10, 20);
                            equipment_map.addControl(new BMap.CityListControl({
                                anchor: BMAP_ANCHOR_TOP_LEFT,
                                offset: size,
                                // 切换城市之间事件
                                // onChangeBefore: function(){
                                //    alert('before');
                                // },
                                // 切换城市之后事件
                                // onChangeAfter:function(){
                                //   alert('after');
                                // }
                            }));

                            // var bdary = new BMap.Boundary();
                            // bdary.get('中华人民共和国', function (rs) {       //获取行政区域
                            //     var count = rs.boundaries.length; //行政区域的点有多少个
                            //     if (count === 0) {
                            //         alert('未能获取当前输入行政区域');
                            //         return;
                            //     }
                            //     var pointArray = [];
                            //     for (var i = 0; i < count; i++) {
                            //         var ply = new BMap.Polygon(rs.boundaries[i], {
                            //             strokeStyle: 'dashed',
                            //             strokeWeight: 2,
                            //             strokeColor: "#ff0000",
                            //             fillColor: "transparent"
                            //         }); //建立多边形覆盖物
                            //         equipment_map.addOverlay(ply);  //添加覆盖物
                            //         pointArray = pointArray.concat(ply.getPath());
                            //     }
                            //     // equipment_map.setViewport(pointArray);    //调整视野
                            // });

                            var pp = null;
                            var pmarker = null;

                            if (flag == 0) {//省份
                                Ext.Array.each(data, function (it) {
                                    pp = new BMap.Point(it.lng, it.lat);
                                    pmarker = new BMap.Marker(pp, {icon: myIcon1});
                                    markerhandler(pmarker, pp, it.province, it.number, 1, 9, null, panel);
                                    equipment_map.addOverlay(pmarker);
                                });
                            } else if (flag == 1) {//城市
                                for (var i = 0; i < data.length; i++) {
                                    if (currentProvince == data[i].province) {
                                        for (var j = 0; j < data[i].cities.length; j++) {
                                            pp = new BMap.Point(data[i].cities[j].lng, data[i].cities[j].lat);
                                            pmarker = new BMap.Marker(pp, {icon: myIcon1});
                                            markerhandler(pmarker, pp, data[i].cities[j].city, data[i].cities[j].number, 2, 11, null, panel);
                                            equipment_map.addOverlay(pmarker);
                                        }
                                    }
                                }
                            } else if (flag == 2) {//县区
                                for (var i = 0; i < data.length; i++) {
                                    if (currentProvince == data[i].province) {
                                        for (var j = 0; j < data[i].cities.length; j++) {
                                            if (currentCity == data[i].cities[j].city) {
                                                for (var k = 0; k < data[i].cities[j].districts.length; k++) {
                                                    pp = new BMap.Point(data[i].cities[j].districts[k].lng, data[i].cities[j].districts[k].lat);
                                                    pmarker = new BMap.Marker(pp, {icon: myIcon1});
                                                    markerhandler(pmarker, pp, data[i].cities[j].districts[k].district, data[i].cities[j].districts[k].number, 3, 13, null, panel);
                                                    equipment_map.addOverlay(pmarker);
                                                }
                                            }
                                        }
                                    }
                                }
                            } else if (flag == 3) {//小区
                                for (var i = 0; i < data.length; i++) {
                                    if (currentProvince == data[i].province) {
                                        for (var j = 0; j < data[i].cities.length; j++) {
                                            if (currentCity == data[i].cities[j].city) {
                                                for (var k = 0; k < data[i].cities[j].districts.length; k++) {
                                                    if (currentDistrict == data[i].cities[j].districts[k].district) {
                                                        for (var n = 0; n < data[i].cities[j].districts[k].communities.length; n++) {
                                                            pp = new BMap.Point(data[i].cities[j].districts[k].communities[n].lng, data[i].cities[j].districts[k].communities[n].lat);
                                                            pmarker = new BMap.Marker(pp, {icon: myIcon2});
                                                            markerhandler(pmarker, pp, data[i].cities[j].districts[k].communities[n].name, data[i].cities[j].districts[k].communities[n].buildings, 4, 15, data[i].cities[j].districts[k].communities[n].imgPath, panel);
                                                            equipment_map.addOverlay(pmarker);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        });
                    }, 100);
                }
            }
        },
        {
            xtype: 'panel',
            height: '100%',
            // hidden: true,
            // flex: 1,
            width: 260,
            layout: 'fit',
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'hiddenfield',
                            itemId: 'currentFlag',
                            listeners: {
                                afterrender: function (field) {
                                    field.setValue(0);
                                },
                                change: function (field, newValue) {
                                    var panel = field.up('panel').down('#conPanel');
                                    if (newValue == 0) {
                                        Ext.Array.each(data, function (item) {
                                            panel.add({
                                                xtype: 'container',
                                                style: 'border: 1px solid #ccc; border-radius: 2px; background: #96CDCD; cursor: pointer',
                                                html: '<div><div style="float: left; margin-left: 10px; margin-top: 5px;"><img src="resources/images/house72.png" style="width: 72px; height: 72px;"></div><div style="float: left; margin-left: 20px; margin-top: 5px"><p style="font-size: 15px; font-weight: bold; color: #fff">' + item.province + '</p><p style="font-size: 18px; font-weight: bold; color: #fff">' + item.number + ' 部</p></div></div>',
                                                listeners: {
                                                    el: {
                                                        click: function () {
                                                            flag = 1;
                                                            currentProvince = item.province;
                                                            field.setValue(1);
                                                            field.up('panel').down('#titleTb').setText('<span style="color: #96CDCD; font-size: 15px; font-weight: bold">' + currentProvince + '设备分布图</span>');
                                                            equipment_map.centerAndZoom(new BMap.Point(item.lng, item.lat), 9);
                                                            equipment_map.clearOverlays();        //清除地图覆盖物
                                                            setTimeout(function () {
                                                                var bdary = new BMap.Boundary();
                                                                bdary.get(item.province, function (rs) {       //获取行政区域
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
                                                            }, 100);
                                                        }
                                                    }
                                                }
                                            });
                                        });
                                    } else if (newValue == 1) {
                                        panel.removeAll();
                                        Ext.Array.each(data, function (item) {
                                            if (currentProvince == item.province) {
                                                Ext.Array.each(item.cities, function (it) {
                                                    panel.add({
                                                        xtype: 'container',
                                                        style: 'border: 1px solid #ccc; border-radius: 2px; background: #96CDCD; cursor: pointer',
                                                        html: '<div><div style="float: left; margin-left: 10px; margin-top: 5px;"><img src="resources/images/house72.png" style="width: 72px; height: 72px;"></div><div style="float: left; margin-left: 20px; margin-top: 5px"><p style="font-size: 15px; font-weight: bold; color: #fff">' + it.city + '</p><p style="font-size: 18px; font-weight: bold; color: #fff">' + it.number + ' 部</p></div></div>',
                                                        listeners: {
                                                            el: {
                                                                click: function () {
                                                                    flag = 2;
                                                                    currentCity = it.city;
                                                                    field.setValue(2);
                                                                    field.up('panel').down('#titleTb').setText('<span style="color: #96CDCD; font-size: 15px; font-weight: bold">' + currentProvince + currentCity + '设备分布图</span>');
                                                                    equipment_map.centerAndZoom(new BMap.Point(it.lng, it.lat), 11);
                                                                    equipment_map.clearOverlays();        //清除地图覆盖物
                                                                    setTimeout(function () {
                                                                        var bdary = new BMap.Boundary();
                                                                        bdary.get(it.city, function (rs) {       //获取行政区域
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
                                                                    }, 100);
                                                                }
                                                            }
                                                        }
                                                    });
                                                });
                                            }
                                        });
                                    } else if (newValue == 2) {
                                        panel.removeAll();
                                        Ext.Array.each(data, function (item) {
                                            if (currentProvince == item.province) {
                                                Ext.Array.each(item.cities, function (it) {
                                                    if (currentCity == it.city) {
                                                        Ext.Array.each(it.districts, function (i) {
                                                            panel.add({
                                                                xtype: 'container',
                                                                style: 'border: 1px solid #ccc; border-radius: 2px; background: #96CDCD; cursor: pointer',
                                                                html: '<div><div style="float: left; margin-left: 10px; margin-top: 5px;"><img src="resources/images/house72.png" style="width: 72px; height: 72px;"></div><div style="float: left; margin-left: 20px; margin-top: 5px"><p style="font-size: 15px; font-weight: bold; color: #fff">' + i.district + '</p><p style="font-size: 18px; font-weight: bold; color: #fff">' + i.number + ' 部</p></div></div>',
                                                                listeners: {
                                                                    el: {
                                                                        click: function () {
                                                                            flag = 3;
                                                                            currentDistrict = i.district;
                                                                            field.setValue(3);
                                                                            field.up('panel').down('#titleTb').setText('<span style="color: #96CDCD; font-size: 15px; font-weight: bold">' + currentProvince + currentCity + currentDistrict + '设备分布图</span>');
                                                                            equipment_map.centerAndZoom(new BMap.Point(i.lng, i.lat), 13);
                                                                            equipment_map.clearOverlays();        //清除地图覆盖物
                                                                            setTimeout(function () {
                                                                                var bdary = new BMap.Boundary();
                                                                                bdary.get(i.district, function (rs) {       //获取行政区域
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
                                                                            }, 100);
                                                                        }
                                                                    }
                                                                }
                                                            });
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    } else if (newValue == 3) {
                                        panel.removeAll();
                                        Ext.Array.each(data, function (item) {
                                            if (currentProvince == item.province) {
                                                Ext.Array.each(item.cities, function (it) {
                                                    if (currentCity == it.city) {
                                                        Ext.Array.each(it.districts, function (i) {
                                                            if (currentDistrict == i.district) {
                                                                Ext.Array.each(i.communities, function (community) {
                                                                    var name0 = community.name;
                                                                    var buildings = community.buildings;
                                                                    var imgPath = community.imgPath;
                                                                    panel.add({
                                                                        xtype: 'container',
                                                                        style: 'border: 1px solid #ccc; border-radius: 2px; background: #96CDCD; cursor: pointer',
                                                                        html: '<div><div style="float: left; margin-left: 10px; margin-top: 5px;"><img src="' + imgPath + '" style="width: 120px; height: 72px;"></div><div style="float: left; margin-left: 20px; margin-top: 5px"><p style="font-size: 15px; font-weight: bold; color: #fff">' + name0 + '</p><p style="font-size: 18px; font-weight: bold; color: #fff">' + buildings + ' 栋</p></div></div>',
                                                                        listeners: {
                                                                            el: {
                                                                                click: function () {
                                                                                    var win = Ext.create('Ext.window.Window', {
                                                                                        title: name0,
                                                                                        autoShow: true,
                                                                                        width: 1200,
                                                                                        height: 750,
                                                                                        layout: 'fit',
                                                                                        items: [
                                                                                            {
                                                                                                xtype: 'panel',
                                                                                                scrollable: 'y',
                                                                                                layout: {
                                                                                                    type: 'table',
                                                                                                    columns: 4
                                                                                                },
                                                                                                defaults: {
                                                                                                    margin: 10
                                                                                                },
                                                                                                items: [],
                                                                                                listeners: {
                                                                                                    afterrender: function (panel) {
                                                                                                        var rooms = [
                                                                                                            {
                                                                                                                name: '1栋',
                                                                                                                floors: 5
                                                                                                            },
                                                                                                            {
                                                                                                                name: '2栋',
                                                                                                                floors: 7
                                                                                                            },
                                                                                                            {
                                                                                                                name: '3栋',
                                                                                                                floors: 3
                                                                                                            },
                                                                                                            {
                                                                                                                name: '4栋',
                                                                                                                floors: 6
                                                                                                            },
                                                                                                            {
                                                                                                                name: '5栋',
                                                                                                                floors: 5
                                                                                                            },
                                                                                                            {
                                                                                                                name: '6栋',
                                                                                                                floors: 8
                                                                                                            },
                                                                                                            {
                                                                                                                name: '7栋',
                                                                                                                floors: 4
                                                                                                            },
                                                                                                            {
                                                                                                                name: '8栋',
                                                                                                                floors: 5
                                                                                                            },
                                                                                                            {
                                                                                                                name: '9栋',
                                                                                                                floors: 6
                                                                                                            },
                                                                                                            {
                                                                                                                name: '10栋',
                                                                                                                floors: 5
                                                                                                            },
                                                                                                            {
                                                                                                                name: '11栋',
                                                                                                                floors: 10
                                                                                                            },
                                                                                                            {
                                                                                                                name: '12栋',
                                                                                                                floors: 15
                                                                                                            },
                                                                                                            {
                                                                                                                name: '13栋',
                                                                                                                floors: 9
                                                                                                            },
                                                                                                            {
                                                                                                                name: '14栋',
                                                                                                                floors: 16
                                                                                                            },
                                                                                                            {
                                                                                                                name: '15栋',
                                                                                                                floors: 9
                                                                                                            }
                                                                                                        ];
                                                                                                        Ext.Array.each(rooms, function (item) {
                                                                                                            panel.add({
                                                                                                                xtype: 'container',
                                                                                                                layout: {
                                                                                                                    type: 'vbox',
                                                                                                                    align: 'center'
                                                                                                                },
                                                                                                                items: [
                                                                                                                    {
                                                                                                                        xtype: 'image',
                                                                                                                        width: 270,
                                                                                                                        height: 135,
                                                                                                                        src: 'resources/images/xq/1.jpg',
                                                                                                                        style: 'cursor: pointer',
                                                                                                                        listeners: {
                                                                                                                            el: {
                                                                                                                                click: function () {
                                                                                                                                    panel.hide();
                                                                                                                                    panel.nextSibling().show();
                                                                                                                                    win.setTitle(win.getTitle() + '->' + item.name);
                                                                                                                                    panel.nextSibling().removeAll();
                                                                                                                                    for (var i = 0; i < item.floors; i++) {
                                                                                                                                        for (var j = 0; j < 4; j++) {
                                                                                                                                            panel.nextSibling().add({
                                                                                                                                                xtype: 'container',
                                                                                                                                                layout: {
                                                                                                                                                    type: 'vbox',
                                                                                                                                                    align: 'center'
                                                                                                                                                },
                                                                                                                                                items: [
                                                                                                                                                    {
                                                                                                                                                        xtype: 'image',
                                                                                                                                                        width: 270,
                                                                                                                                                        height: 135,
                                                                                                                                                        src: 'resources/images/xq/room.jpg'
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        xtype: 'label',
                                                                                                                                                        html: (i + 1) + '0' + (j + 1) + '室 租客人数：' + 2
                                                                                                                                                    }
                                                                                                                                                ]
                                                                                                                                            });
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    },
                                                                                                                    {
                                                                                                                        xtype: 'label',
                                                                                                                        html: item.name
                                                                                                                    }
                                                                                                                ]
                                                                                                            });
                                                                                                        });
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                xtype: 'panel',
                                                                                                scrollable: 'y',
                                                                                                hidden: true,
                                                                                                layout: {
                                                                                                    type: 'table',
                                                                                                    columns: 4
                                                                                                },
                                                                                                defaults: {
                                                                                                    margin: 10
                                                                                                },
                                                                                                items: [],
                                                                                                dockedItems: [
                                                                                                    {
                                                                                                        xtype: 'toolbar',
                                                                                                        dock: 'top',
                                                                                                        items: [
                                                                                                            {
                                                                                                                text: '返回',
                                                                                                                handler: function (btn) {
                                                                                                                    btn.up('panel').hide();
                                                                                                                    btn.up('panel').previousSibling().show();
                                                                                                                    win.setTitle(name0);
                                                                                                                }
                                                                                                            }
                                                                                                        ]
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        ]
                                                                                    });
                                                                                }
                                                                            }
                                                                        }
                                                                    });
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                    // console.log('zoom: ' + equipment_map.getZoom());
                                }
                            }
                        },
                        {
                            xtype: 'tbtext',
                            itemId: 'titleTb',
                            text: '<span style="color: #96CDCD; font-size: 15px; font-weight: bold">全国设备分布图</span>'
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            text: '上一级',
                            handler: function(btn) {
                                var currentFlag = btn.up('panel').down('#currentFlag').getValue();
                                if (currentFlag > 0) {
                                    btn.up('panel').down('#conPanel').removeAll();
                                    btn.up('panel').down('#currentFlag').setValue(currentFlag - 1);

                                    var name = '';
                                    switch (currentFlag - 1) {
                                        case 0:
                                            name = '全国';
                                            break;
                                        case 1:
                                            name = currentProvince;
                                            break;
                                        case 2:
                                            name = currentProvince + currentCity;
                                            break;
                                        case 3:
                                            name = currentProvince + currentCity + currentDistrict;
                                            break;
                                    }
                                    btn.up('panel').down('#titleTb').setText('<span style="color: #96CDCD; font-size: 15px; font-weight: bold">' + name + '设备分布图</span>');
                                }
                            }
                        },
                        '->',
                        {
                            xtype: 'textfield',
                            emptyText: '模糊查询',
                            listeners: {
                                blur: function () {

                                },
                                specialkey: function (f, e) {
                                    if (e.getKey() == e.ENTER) {

                                    }
                                }
                            }
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'panel',
                    itemId: 'conPanel',
                    scrollable: 'y',
                    defaults: {
                        margin: 10,
                        width: 240,
                        height: 80
                    },
                    items: []
                }
            ]
        }
    ]
});