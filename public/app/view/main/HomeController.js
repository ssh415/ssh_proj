Ext.define('logsystem.view.main.HomeController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.home',

    onRenderData: function(panel) {
        Ext.Ajax.request({
            url: '/home/getData',
            method: 'get',
            params: {
                for_date: '2016-11-29'
            },
            success: function(response) {
                var text = Ext.decode(response.responseText);
                if (text.success && text.data) {
                    panel.items.getAt(0).down('#valueLabel').setText(text.data.data1);
                    panel.items.getAt(1).down('#valueLabel').setText(text.data.data2);
                    panel.items.getAt(2).down('#valueLabel').setText(text.data.data3);
                    panel.items.getAt(3).down('#valueLabel').setText(text.data.data4);
                    panel.items.getAt(4).down('#valueLabel').setText(text.data.data5);
                    panel.items.getAt(5).down('#valueLabel').setText(text.data.data6);
                    panel.items.getAt(6).down('#valueLabel').setText(text.data.data7);
                    panel.items.getAt(7).down('#valueLabel').setText(text.data.data8);
                }
            },
            failure: function(response) {
                var text = Ext.decode(response.responseText);
                Ext.Msg.alert('提示', text.msg);
            }
        });
    },
    onRenderChart1: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/bar'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("first01chart"));
                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '产品销量对比'
                    },
                    tooltip: {},
                    legend: {
                        data:['销量']
                    },
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
                        splitLine:{
                            show:false
                        }
                    },
                    yAxis: {
                        // splitLine:{
                        //     show:false
                        // }
                    },
                    series: [{
                        name: '销量',
                        barMaxWidth: 50,
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#13bdc6',
                                barBorderColor: '#13bdc6',
                                barBorderWidth: 3,
                                barBorderRadius: 0,
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{c}'
                                }
                            }
                        },
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                overTimeChart.setOption(option);
            }
        );
    },
    onRenderChart2: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/line'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("first02chart"));
                // 指定图表的配置项和数据
                var option = {
                    title : {
                        text: '未来一周气温变化',
                        subtext: '纯属虚构'
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['最高气温','最低气温']
                    },
                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {show: true, type: ['line', 'bar']},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['周一','周二','周三','周四','周五','周六','周日'],
                            splitLine:{
                                show:false
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLabel : {
                                formatter: '{value} °C'
                            }
                        }
                    ],
                    series : [
                        {
                            name:'最高气温',
                            type:'line',
                            data:[11, 11, 15, 13, 12, 13, 10],
                            markPoint : {
                                data : [
                                    {type : 'max', name: '最大值'},
                                    {type : 'min', name: '最小值'}
                                ]
                            },
                            markLine : {
                                data : [
                                    {type : 'average', name: '平均值'}
                                ]
                            }
                        },
                        {
                            name:'最低气温',
                            type:'line',
                            data:[1, -2, 2, 5, 3, 2, 0],
                            markPoint : {
                                data : [
                                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                                ]
                            },
                            markLine : {
                                data : [
                                    {type : 'average', name : '平均值'}
                                ]
                            }
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                overTimeChart.setOption(option);
            }
        );
    }
});
