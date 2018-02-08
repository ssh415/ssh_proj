Ext.define('logsystem.view.map.Traffic', {
    extend: 'Ext.panel.Panel',
    xtype: 'trafficpanel',
    controller: 'map',
    scrollable: 'y',
    title: '实时路况',
    items: [],
    listeners: {
        afterrender: function(panel) {
            // 百度地图API功能
            setTimeout(function () {
                var dom = Ext.getDom(panel.getId());
                var map = new BMap.Map(dom);
                // var point = new BMap.Point(114.06667,22.54667);
                var point = new BMap.Point(114.02597366,22.54605355);
                //北京 116.404, 39.915
                //深圳 114.06667,22.54667
                map.centerAndZoom(point, 14);
                map.enableScrollWheelZoom(true);
                var marker = new BMap.Marker(point); // 创建标注
                map.addOverlay(marker); // 将标注添加到地图中
                marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

                var ctrl = new BMapLib.TrafficControl({
                    showPanel: false
                });
                map.addControl(ctrl);
                ctrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);
                ctrl.showTraffic();
            }, 100);

            // //创建小狐狸
            // var pt = new BMap.Point(116.417, 39.909);
            // var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new BMap.Size(300,157));
            // var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
            // map.addOverlay(marker2);              // 将标注添加到地图中
        }
    }
});
