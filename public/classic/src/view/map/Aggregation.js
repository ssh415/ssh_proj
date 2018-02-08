Ext.define('logsystem.view.map.Aggregation', {
    extend: 'Ext.panel.Panel',
    xtype: 'aggregationpanel',
    controller: 'map',
    scrollable: 'y',
    title: '聚合数据',
    listeners: {
        render: function (panel) {
            setTimeout(function () {
                // 百度地图API功能
                var dom = Ext.getDom(panel.getId());
                var map = new BMap.Map(dom);
                var point = new BMap.Point(116.404, 39.915);
                map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
                map.enableScrollWheelZoom(true);
                map.setMinZoom(5);
                map.centerAndZoom(point, 5);

                // function getBoundary(){
                //     var bdary = new BMap.Boundary();
                //     bdary.get("北京市海淀区", function(rs){       //获取行政区域
                //         map.clearOverlays();        //清除地图覆盖物
                //         var count = rs.boundaries.length; //行政区域的点有多少个
                //         if (count === 0) {
                //             alert('未能获取当前输入行政区域');
                //             return ;
                //         }
                //         var pointArray = [];
                //         for (var i = 0; i < count; i++) {
                //             var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 2, strokeColor: "#ff0000"}); //建立多边形覆盖物
                //             map.addOverlay(ply);  //添加覆盖物
                //             pointArray = pointArray.concat(ply.getPath());
                //         }
                //         map.setViewport(pointArray);    //调整视野
                //         // addlabel();
                //     });
                // }

                var count = 0;

                map.addEventListener("tilesloaded", function () {
                    var size = new BMap.Size(10, 20);
                    map.addControl(new BMap.CityListControl({
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

                    // //创建小狐狸
                    // var pt = new BMap.Point(116.417, 39.909);
                    var myIcon = new BMap.Icon("resources/images/fox.gif", new BMap.Size(300, 157));
                    var myIcon1 = new BMap.Icon("resources/images/house72.png", new BMap.Size(72, 72));
                    var myIcon2 = new BMap.Icon("resources/images/2.jpg", new BMap.Size(50, 100));
                    // var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
                    // map.addOverlay(marker2);              // 将标注添加到地图中
                    //
                    // marker2.addEventListener("click", getAttr);
                    // function getAttr(){
                    //     var p = marker2.getPosition();       //获取marker的位置
                    //     map.setZoom(15);
                    //     // alert("marker的位置是" + p.lng + "," + p.lat);
                    // }

                    var names = ['紫金花园', '梦呓公寓', '蓝天花园', '灯晃小区', '日应公寓', '昌辉花园', '光景小区', '传奇绿洲', '美丽花园', '空庭花园'];
                    var images = ['resources/images/xq/1.jpg', 'resources/images/xq/2.jpg', 'resources/images/xq/3.jpg',
                        'resources/images/xq/4.jpg', 'resources/images/xq/1.jpg', 'resources/images/xq/2.jpg',
                        'resources/images/xq/3.jpg', 'resources/images/xq/4.jpg', 'resources/images/xq/1.jpg',
                        'resources/images/xq/2.jpg'];
                    var addresses = ['巴婷区仙桃路1021号', '精图区古河路52号', '空域区爱丽路154号',
                        '南山区烽火路123号', '桃园区美玲路342号', '蜻蜓区思婷路230号',
                        '台州区摆渡路333号', '盐亭区菁英路450号', '边疆区光伏路34号',
                        '驼铃区暮雪路11号'];
                    var buildings = [8, 12, 15, 6, 10, 14, 3, 1, 7, 15];
                    var rooms = [154, 205, 362, 120, 168, 269, 56, 12, 126, 350];
                    var MAX = 10;
                    var markers = [];
                    var pt = null;
                    var marker = null;
                    var i = 0;
                    for (; i < MAX; i++) {
                        if (count == MAX) {
                            return;
                        } else {
                            pt = new BMap.Point(Math.random() * 40 + 85, Math.random() * 30 + 21);
                            marker = new BMap.Marker(pt, {icon: myIcon1});
                            var concent = '<div><img src="' + images[i] + '" style="width: 150px; height: 75px;">&emsp;<span style="font-size: 18px; font-weight: bold;">' + names[i] + '</span></div>' +
                                '<div>地址：' + addresses[i] + '</div>' +
                                '<div>楼栋：<span style="color: orange">' + buildings[i] + '</span>&emsp;&emsp;&emsp;&emsp;共有住户：<span style="color: orange">' + rooms[i] + '</span></div>';
                            addHandler(concent, marker);
                            markers.push(marker);
                            count++;
                        }
                    }
                    //最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
                    // var markerClusterer = new BMapLib.MarkerClusterer(map, {
                    //     markers: markers,
                    //     // girdSize: '',              //{Number} 聚合计算时网格的像素大小，默认60
                    //     // maxZoom: 10,               //{Number} 最大的聚合级别，大于该级别就不进行相应的聚合
                    //     // minClusterSize: '',        //{Number} 最小的聚合数量，小于该数量的不能成为一个聚合，默认为2
                    //     // isAverangeCenter: true,      //{Boolean} 聚合点的落脚位置是否是所有聚合在内点的平均值，默认为否，落脚在聚合内的第一个点
                    //     // styles: []               //{Array} 自定义聚合后的图标风格，请参考TextIconOverlay类
                    // });
                    var markerClusterer = new BMapLib.MarkerClusterer(map);
                    markerClusterer.addMarkers(markers);
                    // markerClusterer.setStyles([
                    //     {
                    //         size: {
                    //             width: 53,
                    //             height: 53
                    //         },
                    //         url: 'http://api.map.baidu.com/library/TextIconOverlay/1.2/src/images/m0.png'
                    //     },
                    //     {
                    //         size: {
                    //             width: 56,
                    //             height: 56
                    //         },
                    //         url: 'resources/images/m1.png'
                    //     },
                    //     {
                    //         size: {
                    //             width: 66,
                    //             height: 66
                    //         },
                    //         url: 'resources/images/m2.png'
                    //     },
                    //     {
                    //         size: {
                    //             width: 78,
                    //             height: 78
                    //         },
                    //         url: 'resources/images/m3.png'
                    //     },
                    //     {
                    //         size: {
                    //             width: 90,
                    //             height: 90
                    //         },
                    //         url: 'resources/images/m4.png'
                    //     }
                    // ]);
                    // console.log(markerClusterer.getClustersCount());
                    // console.log(markerClusterer.getGridSize());
                    // console.log(markerClusterer.getMaxZoom());
                    // console.log(markerClusterer.getMinClusterSize());
                    // console.log(markerClusterer.getStyles());
                    // console.log(markerClusterer.isAverageCenter());

                    function addHandler(content, marker) {
                        marker.addEventListener("mouseover", function (e) {
                                openInfo(content, e)
                            }
                        );
                    }

                    function openInfo(content, e) {
                        var p = e.target;
                        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
                        var opts = {
                            width: 300,     // 信息窗口宽度
                            // height: 100,     // 信息窗口高度
                            // title: "海底捞王府井店(" + point.lng + "," + point.lat + ")", // 信息窗口标题
                            enableMessage: true,//设置允许信息窗发送短息
                            message: "亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
                        };
                        var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象
                        map.openInfoWindow(infoWindow, point); //开启信息窗口
                    }
                });
            }, 100);
        }
    }
});
