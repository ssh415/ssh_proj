Ext.define('logsystem.view.main.Home', {
    extend: 'Ext.panel.Panel',
    xtype: 'homepanel',
    controller: 'home',
    scrollable: 'y',
    defaults: {
        margin: 10
    },
    items: [
        {
            xtype: 'container',
            width: '98%',
            itemId: 'chartsCon1',
            layout: 'vbox',
            items: [
                {
                    xtype: 'container',
                    width: '100%',
                    // margin: '5 20 0 0',
                    style: 'background: transparent url(resources/images/4.jpg);',// no-repeat fixed top
                    echart: null,
                    listeners: {
                        afterrender: function (con) {
                            require(
                                [
                                    'echarts3/echarts.min'
                                ],
                                function (echarts) {
                                    con.setHtml('<div id="first15chart" style="width: ' + con.getWidth() + 'px; height: 830px"></div>');
                                    con.echart = echarts.init(document.getElementById("first15chart"));

                                    var rocket = 'path://M-244.396,44.399c0,0,0.47-2.931-2.427-6.512c2.819-8.221,3.21-15.709,3.21-15.709s5.795,1.383,5.795,7.325C-237.818,39.679-244.396,44.399-244.396,44.399z M-260.371,40.827c0,0-3.881-12.946-3.881-18.319c0-2.416,0.262-4.566,0.669-6.517h17.684c0.411,1.952,0.675,4.104,0.675,6.519c0,5.291-3.87,18.317-3.87,18.317H-260.371z M-254.745,18.951c-1.99,0-3.603,1.676-3.603,3.744c0,2.068,1.612,3.744,3.603,3.744c1.988,0,3.602-1.676,3.602-3.744S-252.757,18.951-254.745,18.951z M-255.521,2.228v-5.098h1.402v4.969c1.603,1.213,5.941,5.069,7.901,12.5h-17.05C-261.373,7.373-257.245,3.558-255.521,2.228zM-265.07,44.399c0,0-6.577-4.721-6.577-14.896c0-5.942,5.794-7.325,5.794-7.325s0.393,7.488,3.211,15.708C-265.539,41.469-265.07,44.399-265.07,44.399z M-252.36,45.15l-1.176-1.22L-254.789,48l-1.487-4.069l-1.019,2.116l-1.488-3.826h8.067L-252.36,45.15z';
                                    var option = {
                                        grid: {
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            top: 0
                                        },
                                        radar: {
                                            center: ['12.5%', '47.5%'],
                                            radius: '20%',
                                            indicator: [
                                                {max: 10, name: 'N'},
                                                {max: 10},
                                                {max: 10},
                                                {max: 10, name: 'W'},
                                                {max: 10},
                                                {max: 10},
                                                {max: 10, name: 'S'},
                                                {max: 10},
                                                {max: 10},
                                                {max: 10, name: 'E'},
                                                {max: 10},
                                                {max: 10}
                                            ],
                                            name: {
                                                textStyle: {
                                                    color:'#fff'
                                                }
                                            }
                                        },
                                        series: [
                                            //rocket
                                            {
                                                type: 'graph',
                                                data: [
                                                    {
                                                        x: 0,
                                                        y: 100,
                                                        symbol: rocket,
                                                        symbolSize: [180, 300],
                                                        symbolOffset: [50, -0],
                                                        symbolRotate: -45,
                                                        itemStyle: {
                                                            normal: {
                                                                color: '#C4C4C4'
                                                            }
                                                        }
                                                    },
                                                    {
                                                        x: 0,
                                                        y: 0,
                                                        symbolSize: 0
                                                    },
                                                    {
                                                        x: 100,
                                                        y: 100,
                                                        symbolSize: 0
                                                    }
                                                ],
                                                bottom: 0,
                                                top: 0
                                            },
                                            //cloud
                                            {
                                                type: 'graph',
                                                data: [
                                                    {
                                                        x: 0,
                                                        y: 0,
                                                        symbolSize: 0
                                                    },
                                                    {
                                                        x: 100,
                                                        y: 100,
                                                        symbolSize: 0
                                                    }
                                                ],
                                                itemStyle: {
                                                    normal: {
                                                        shadowBlur: 50,
                                                        shadowColor: '#fff'
                                                    }
                                                },
                                                bottom: 0,
                                                top: 0,
                                                right: 0,
                                                left: 0
                                            },
                                            //hidden pie
                                            {
                                                type: 'pie',
                                                radius: '10%',
                                                center: ['12.5%', '10%'],
                                                data: [
                                                    {value: 1, name: '火箭 头部'},
                                                    {value: 1, name: '火箭 右翼'},
                                                    {value: 1, name: '火箭 尾部'},
                                                    {value: 1, name: '火箭 左翼'},
                                                    {value: 1, name: '火箭 颈部'}
                                                ],
                                                itemStyle: {
                                                    normal: {
                                                        opacity: 0
                                                    }
                                                }
                                            },
                                            //line
                                            {
                                                type: 'line',
                                                data: [4],
                                                itemStyle: {
                                                    normal: {
                                                        opacity: 0
                                                    }
                                                }
                                            },
                                            {
                                                type: 'line',
                                                data: []
                                            },
                                            {
                                                type: 'line',
                                                data: []
                                            },
                                            {
                                                type: 'line',
                                                data: []
                                            },
                                            // bar
                                            {
                                                type: 'bar'
                                            },
                                            {
                                                type: 'bar'
                                            },
                                            {
                                                type: 'bar'
                                            },
                                            {
                                                type: 'bar'
                                            },
                                            //logo
                                            {
                                                type: 'pictorialBar',
                                                symbolPosition: 'end',
                                                data: [
                                                    {
                                                        value: 0
                                                    },
                                                    {
                                                        value: 0
                                                    },
                                                    {
                                                        value: 3.9,
                                                        symbol: rocket,
                                                        symbolSize: [85, 110],
                                                        itemStyle: {
                                                            normal: {
                                                                color: '#666'
                                                            }
                                                        },
                                                        symbolRotate: -10
                                                    }
                                                ]
                                            },
                                            {
                                                type: 'radar',
                                                symbolSize: 5,
                                                data: [
                                                    {
                                                        value: [3]
                                                    }
                                                ],
                                                itemStyle: {
                                                    normal: {
                                                        shadowBlur: 10
                                                    }
                                                }
                                            },
                                            {
                                                type: 'gauge',
                                                center: ['10%', '72.5%'],
                                                radius: '20%',
                                                axisLine: {
                                                    lineStyle: {
                                                        width: 5
                                                    }
                                                },
                                                axisTick: {
                                                    length: 5
                                                },
                                                splitLine: {
                                                    length: 10,
                                                    lineStyle: {
                                                        color: 'auto'
                                                    }
                                                },
                                                detail: {
                                                    textStyle: {
                                                        fontSize: 24
                                                    }
                                                },
                                                pointer: {
                                                    width: 5
                                                },
                                                data: [{value: 0}]
                                            },
                                            {
                                                type: 'gauge',
                                                center: ['20%', '74%'],
                                                startAngle: 120,
                                                radius: '12.5%',
                                                max: 10,
                                                axisLine: {
                                                    lineStyle: {
                                                        width: 4
                                                    }
                                                },
                                                axisLabel: {
                                                    show: false
                                                },
                                                axisTick: {
                                                    show: false,
                                                    length: 4
                                                },
                                                splitLine: {
                                                    length: 4
                                                },
                                                pointer: {
                                                    width: 2
                                                },
                                                detail: {
                                                    textStyle: {
                                                        fontSize: 16
                                                    }
                                                },
                                                data: [{value: 0}]
                                            }
                                        ],
                                        xAxis: {
                                            data: new Array(20)
                                        },
                                        yAxis: {
                                            splitLine: {
                                                show: false
                                            }
                                        },
                                        silent: true,
                                        // backgroundColor: 'rgba(52, 195, 231, 0.44)'
                                    };
                                    con.echart.setOption(option);
                                    var m = 1;
                                    var before;
                                    var t = function () {
                                        var position = Math.random() * 50 + 50;
                                        setTimeout(function () {
                                            option.series[0].data[0].symbolOffset[0]++;
                                            option.series[13].data[0].value = (95 + Math.random() * 5).toFixed(1);
                                            option.series[14].data[0].value = (9 + Math.random()).toFixed(1);
                                            con.echart.setOption(option);
                                            setTimeout(function () {
                                                option.series[0].data[0].symbolOffset[0]--;
                                                option.series[0].data[0].symbolOffset[1]--;
                                                option.series[13].data[0].value = (95 + Math.random() * 5).toFixed(1);
                                                option.series[14].data[0].value = (9 + Math.random()).toFixed(1);
                                                con.echart.setOption(option);
                                                setTimeout(function () {
                                                    option.series[0].data[0].symbolOffset[1]++;
                                                    con.echart.setOption(option);
                                                    if (m % 2 == 0) {
                                                        if (((m / 2) | 0) % 2 == 0) {
                                                            option.series[1].data[3].x = 100 - before;
                                                            option.series[1].data[3].y = 100;
                                                            option.series[1].data[3].symbolOffset = [-100, 100];
                                                            option.series[1].data[3].itemStyle.normal.opacity = 0.5;

                                                            //radar
                                                            option.series[12].symbolSize = 3;
                                                            option.series[12].itemStyle.normal.shadowBlur = 5

                                                        } else {
                                                            option.series[1].data[2].x = 0;
                                                            option.series[1].data[2].y = before;
                                                            option.series[1].data[2].symbolOffset = [-100, 100];
                                                            option.series[1].data[2].itemStyle.normal.opacity = 0.5;

                                                            //line
                                                            option.series[4].data = [];
                                                            option.series[5].data = [];
                                                            option.series[6].data = [];
                                                            for (var i = 0; i < 5; i++) {
                                                                option.series[4].data.push(2.75 + Math.random() / 4);
                                                                option.series[5].data.push(2.75 + Math.random() / 4);
                                                                option.series[6].data.push(2.75 + Math.random() / 4)
                                                            }

                                                            //radar
                                                            option.series[12].symbolSize = 5;
                                                            option.series[12].itemStyle.normal.shadowBlur = 10
                                                        }
                                                    } else {
                                                        if (((m / 2) | 0) % 2 == 0) {
                                                            option.series[1].data[2] = {
                                                                x: position,
                                                                y: 0,
                                                                symbolSize: [200, 150],
                                                                symbolRotate: -30,
                                                                itemStyle: {
                                                                    normal: {
                                                                        color: '#fff',
                                                                        opacity: 0
                                                                    }
                                                                }
                                                            }
                                                        } else {
                                                            option.series[1].data[3] = {
                                                                x: 100,
                                                                y: 100 - position,
                                                                symbolSize: [200, 150],
                                                                symbolRotate: -30,
                                                                itemStyle: {
                                                                    normal: {
                                                                        color: '#fff',
                                                                        opacity: 0
                                                                    }
                                                                }
                                                            };
                                                            //bar
                                                            option.series[7].data = [0];
                                                            option.series[8].data = [];
                                                            option.series[9].data = [];
                                                            option.series[10].data = [];
                                                            for (var i = 0; i < 4; i++) {
                                                                option.series[7].data.push(Math.random() * .6);
                                                                option.series[8].data.push(Math.random() * .6);
                                                                option.series[9].data.push(Math.random() * .6);
                                                                option.series[10].data.push(Math.random() * .6)
                                                            }
                                                        }
                                                        before = position;
                                                    }
                                                    m++;
                                                    t();
                                                }, 50)
                                            }, 50)
                                        }, 100)
                                    };
                                    setTimeout(function () {
                                        //shot
                                        option.series[0].data[0].x = 50;
                                        option.series[0].data[0].y = 50;
                                        con.echart.setOption(option);
                                        //shake
                                        t();
                                    }, 1000);
                                }
                            );
                        },
                        resize: function (con, width, height, oldWidth, oldHeight, eOpts) {
                            if (document.getElementById("first15chart"))
                                document.getElementById("first15chart").style.width = width + 'px';
                            if (con.echart) {
                                con.echart.resize();
                            }
                        }
                    }
                }
            ]
        },
        {
            xtype: 'container',
            width: '98%',
            itemId: 'chartsCon0',
            style: 'background: transparent url(resources/images/4.jpg);',// no-repeat fixed top
            layout: 'vbox',
            items: [
                {
                    xtype: 'container',
                    width: '100%',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'container',
                            width: '35%',
                            style: 'border: 1px solid #ccc',
                            layout: 'hbox',
                            itemId: 'con_chart300',
                            items: [
                                {
                                    xtype: 'container',
                                    width: '85%',
                                    height: 415,
                                    listeners: {
                                        afterrender: function (con) {
                                            require(
                                                [
                                                    'echarts3/echarts.min'
                                                ],
                                                function (echarts) {
                                                    Ext.Ajax.request({
                                                        url: 'echarts3/data/china.json',
                                                        success: function (response) {
                                                            var chinaJson = Ext.decode(response.responseText);
                                                            echarts.registerMap('china', chinaJson);

                                                            con.setHtml('<div id="chart300" style="width: ' + con.getWidth() + 'px; height: 415px"></div>');
                                                            con.echart = echarts.init(document.getElementById("chart300"));
                                                            var data = [
                                                                // {name: '海门', value: 9},
                                                                // {name: '鄂尔多斯', value: 12},
                                                                // {name: '招远', value: 12},
                                                                // {name: '舟山', value: 12},
                                                                // {name: '齐齐哈尔', value: 14},
                                                                // {name: '盐城', value: 15},
                                                                // {name: '赤峰', value: 16},
                                                                // {name: '青岛', value: 18},
                                                                // {name: '乳山', value: 18},
                                                                // {name: '金昌', value: 19},
                                                                // {name: '泉州', value: 21},
                                                                // {name: '莱西', value: 21},
                                                                // {name: '日照', value: 21},
                                                                // {name: '胶南', value: 22},
                                                                // {name: '南通', value: 23},
                                                                // {name: '拉萨', value: 24},
                                                                // {name: '云浮', value: 24},
                                                                // {name: '梅州', value: 25},
                                                                // {name: '文登', value: 25},
                                                                // {name: '上海', value: 25},
                                                                // {name: '攀枝花', value: 25},
                                                                // {name: '威海', value: 25},
                                                                // {name: '承德', value: 25},
                                                                // {name: '厦门', value: 26},
                                                                // {name: '汕尾', value: 26},
                                                                // {name: '潮州', value: 26},
                                                                // {name: '丹东', value: 27},
                                                                // {name: '太仓', value: 27},
                                                                // {name: '曲靖', value: 27},
                                                                // {name: '烟台', value: 28},
                                                                // {name: '福州', value: 29},
                                                                // {name: '瓦房店', value: 30},
                                                                // {name: '即墨', value: 30},
                                                                // {name: '抚顺', value: 31},
                                                                // {name: '玉溪', value: 31},
                                                                // {name: '张家口', value: 31},
                                                                // {name: '阳泉', value: 31},
                                                                // {name: '莱州', value: 32},
                                                                // {name: '湖州', value: 32},
                                                                // {name: '汕头', value: 32},
                                                                // {name: '昆山', value: 33},
                                                                // {name: '宁波', value: 33},
                                                                // {name: '湛江', value: 33},
                                                                // {name: '揭阳', value: 34},
                                                                // {name: '荣成', value: 34},
                                                                // {name: '连云港', value: 35},
                                                                // {name: '葫芦岛', value: 35},
                                                                // {name: '常熟', value: 36},
                                                                // {name: '东莞', value: 36},
                                                                // {name: '河源', value: 36},
                                                                // {name: '淮安', value: 36},
                                                                // {name: '泰州', value: 36},
                                                                // {name: '南宁', value: 37},
                                                                // {name: '营口', value: 37},
                                                                // {name: '惠州', value: 37},
                                                                // {name: '江阴', value: 37},
                                                                // {name: '蓬莱', value: 37},
                                                                // {name: '韶关', value: 38},
                                                                // {name: '嘉峪关', value: 38},
                                                                // {name: '广州', value: 38},
                                                                // {name: '延安', value: 38},
                                                                // {name: '太原', value: 39},
                                                                // {name: '清远', value: 39},
                                                                // {name: '中山', value: 39},
                                                                // {name: '昆明', value: 39},
                                                                // {name: '寿光', value: 40},
                                                                // {name: '盘锦', value: 40},
                                                                // {name: '长治', value: 41},
                                                                // {name: '深圳', value: 41},
                                                                // {name: '珠海', value: 42},
                                                                // {name: '宿迁', value: 43},
                                                                // {name: '咸阳', value: 43},
                                                                // {name: '铜川', value: 44},
                                                                // {name: '平度', value: 44},
                                                                // {name: '佛山', value: 44},
                                                                // {name: '海口', value: 44},
                                                                // {name: '江门', value: 45},
                                                                // {name: '章丘', value: 45},
                                                                // {name: '肇庆', value: 46},
                                                                // {name: '大连', value: 47},
                                                                // {name: '临汾', value: 47},
                                                                // {name: '吴江', value: 47},
                                                                // {name: '石嘴山', value: 49},
                                                                // {name: '沈阳', value: 50},
                                                                // {name: '苏州', value: 50},
                                                                // {name: '茂名', value: 50},
                                                                // {name: '嘉兴', value: 51},
                                                                // {name: '长春', value: 51},
                                                                // {name: '胶州', value: 52},
                                                                // {name: '银川', value: 52},
                                                                // {name: '张家港', value: 52},
                                                                // {name: '三门峡', value: 53},
                                                                // {name: '锦州', value: 54},
                                                                // {name: '南昌', value: 54},
                                                                // {name: '柳州', value: 54},
                                                                // {name: '三亚', value: 54},
                                                                // {name: '自贡', value: 56},
                                                                // {name: '吉林', value: 56},
                                                                // {name: '阳江', value: 57},
                                                                // {name: '泸州', value: 57},
                                                                // {name: '西宁', value: 57},
                                                                // {name: '宜宾', value: 58},
                                                                // {name: '呼和浩特', value: 58},
                                                                // {name: '成都', value: 58},
                                                                // {name: '大同', value: 58},
                                                                // {name: '镇江', value: 59},
                                                                // {name: '桂林', value: 59},
                                                                // {name: '张家界', value: 59},
                                                                // {name: '宜兴', value: 59},
                                                                // {name: '北海', value: 60},
                                                                // {name: '西安', value: 61},
                                                                // {name: '金坛', value: 62},
                                                                // {name: '东营', value: 62},
                                                                // {name: '牡丹江', value: 63},
                                                                // {name: '遵义', value: 63},
                                                                // {name: '绍兴', value: 63},
                                                                // {name: '扬州', value: 64},
                                                                // {name: '常州', value: 64},
                                                                // {name: '潍坊', value: 65},
                                                                // {name: '重庆', value: 66},
                                                                // {name: '台州', value: 67},
                                                                // {name: '南京', value: 67},
                                                                // {name: '滨州', value: 70},
                                                                // {name: '贵阳', value: 71},
                                                                // {name: '无锡', value: 71},
                                                                // {name: '本溪', value: 71},
                                                                // {name: '克拉玛依', value: 72},
                                                                // {name: '渭南', value: 72},
                                                                // {name: '马鞍山', value: 72},
                                                                // {name: '宝鸡', value: 72},
                                                                // {name: '焦作', value: 75},
                                                                // {name: '句容', value: 75},
                                                                // {name: '北京', value: 79},
                                                                // {name: '徐州', value: 79},
                                                                // {name: '衡水', value: 80},
                                                                // {name: '包头', value: 80},
                                                                // {name: '绵阳', value: 80},
                                                                // {name: '乌鲁木齐', value: 84},
                                                                // {name: '枣庄', value: 84},
                                                                // {name: '杭州', value: 84},
                                                                // {name: '淄博', value: 85},
                                                                // {name: '鞍山', value: 86},
                                                                // {name: '溧阳', value: 86},
                                                                // {name: '库尔勒', value: 86},
                                                                // {name: '安阳', value: 90},
                                                                // {name: '开封', value: 90},
                                                                // {name: '济南', value: 92},
                                                                // {name: '德阳', value: 93},
                                                                // {name: '温州', value: 95},
                                                                // {name: '九江', value: 96},
                                                                // {name: '邯郸', value: 98},
                                                                // {name: '临安', value: 99},
                                                                {name: '兰州', value: 99},
                                                                {name: '沧州', value: 100},
                                                                {name: '临沂', value: 103},
                                                                {name: '南充', value: 104},
                                                                {name: '天津', value: 105},
                                                                {name: '富阳', value: 106},
                                                                {name: '泰安', value: 112},
                                                                {name: '诸暨', value: 112},
                                                                {name: '郑州', value: 113},
                                                                {name: '哈尔滨', value: 114},
                                                                {name: '聊城', value: 116},
                                                                {name: '芜湖', value: 117},
                                                                {name: '唐山', value: 119},
                                                                {name: '平顶山', value: 119},
                                                                {name: '邢台', value: 119},
                                                                {name: '德州', value: 120},
                                                                {name: '济宁', value: 120},
                                                                {name: '荆州', value: 127},
                                                                {name: '宜昌', value: 130},
                                                                {name: '义乌', value: 132},
                                                                {name: '丽水', value: 133},
                                                                {name: '洛阳', value: 134},
                                                                {name: '秦皇岛', value: 136},
                                                                {name: '株洲', value: 143},
                                                                {name: '石家庄', value: 147},
                                                                {name: '莱芜', value: 148},
                                                                {name: '常德', value: 152},
                                                                {name: '保定', value: 153},
                                                                {name: '湘潭', value: 154},
                                                                {name: '金华', value: 157},
                                                                {name: '岳阳', value: 169},
                                                                {name: '长沙', value: 175},
                                                                {name: '衢州', value: 177},
                                                                {name: '廊坊', value: 193},
                                                                {name: '菏泽', value: 194},
                                                                {name: '合肥', value: 229},
                                                                {name: '武汉', value: 273},
                                                                {name: '大庆', value: 279}
                                                            ];
                                                            var geoCoordMap = {
                                                                // '海门': [121.15, 31.89],
                                                                // '鄂尔多斯': [109.781327, 39.608266],
                                                                // '招远': [120.38, 37.35],
                                                                // '舟山': [122.207216, 29.985295],
                                                                // '齐齐哈尔': [123.97, 47.33],
                                                                // '盐城': [120.13, 33.38],
                                                                // '赤峰': [118.87, 42.28],
                                                                // '青岛': [120.33, 36.07],
                                                                // '乳山': [121.52, 36.89],
                                                                // '金昌': [102.188043, 38.520089],
                                                                // '泉州': [118.58, 24.93],
                                                                // '莱西': [120.53, 36.86],
                                                                // '日照': [119.46, 35.42],
                                                                // '胶南': [119.97, 35.88],
                                                                // '南通': [121.05, 32.08],
                                                                // '拉萨': [91.11, 29.97],
                                                                // '云浮': [112.02, 22.93],
                                                                // '梅州': [116.1, 24.55],
                                                                // '文登': [122.05, 37.2],
                                                                // '上海': [121.48, 31.22],
                                                                // '攀枝花': [101.718637, 26.582347],
                                                                // '威海': [122.1, 37.5],
                                                                // '承德': [117.93, 40.97],
                                                                // '厦门': [118.1, 24.46],
                                                                // '汕尾': [115.375279, 22.786211],
                                                                // '潮州': [116.63, 23.68],
                                                                // '丹东': [124.37, 40.13],
                                                                // '太仓': [121.1, 31.45],
                                                                // '曲靖': [103.79, 25.51],
                                                                // '烟台': [121.39, 37.52],
                                                                // '福州': [119.3, 26.08],
                                                                // '瓦房店': [121.979603, 39.627114],
                                                                // '即墨': [120.45, 36.38],
                                                                // '抚顺': [123.97, 41.97],
                                                                // '玉溪': [102.52, 24.35],
                                                                // '张家口': [114.87, 40.82],
                                                                // '阳泉': [113.57, 37.85],
                                                                // '莱州': [119.942327, 37.177017],
                                                                // '湖州': [120.1, 30.86],
                                                                // '汕头': [116.69, 23.39],
                                                                // '昆山': [120.95, 31.39],
                                                                // '宁波': [121.56, 29.86],
                                                                // '湛江': [110.359377, 21.270708],
                                                                // '揭阳': [116.35, 23.55],
                                                                // '荣成': [122.41, 37.16],
                                                                // '连云港': [119.16, 34.59],
                                                                // '葫芦岛': [120.836932, 40.711052],
                                                                // '常熟': [120.74, 31.64],
                                                                // '东莞': [113.75, 23.04],
                                                                // '河源': [114.68, 23.73],
                                                                // '淮安': [119.15, 33.5],
                                                                // '泰州': [119.9, 32.49],
                                                                // '南宁': [108.33, 22.84],
                                                                // '营口': [122.18, 40.65],
                                                                // '惠州': [114.4, 23.09],
                                                                // '江阴': [120.26, 31.91],
                                                                // '蓬莱': [120.75, 37.8],
                                                                // '韶关': [113.62, 24.84],
                                                                // '嘉峪关': [98.289152, 39.77313],
                                                                // '广州': [113.23, 23.16],
                                                                // '延安': [109.47, 36.6],
                                                                // '太原': [112.53, 37.87],
                                                                // '清远': [113.01, 23.7],
                                                                // '中山': [113.38, 22.52],
                                                                // '昆明': [102.73, 25.04],
                                                                // '寿光': [118.73, 36.86],
                                                                // '盘锦': [122.070714, 41.119997],
                                                                // '长治': [113.08, 36.18],
                                                                // '深圳': [114.07, 22.62],
                                                                // '珠海': [113.52, 22.3],
                                                                // '宿迁': [118.3, 33.96],
                                                                // '咸阳': [108.72, 34.36],
                                                                // '铜川': [109.11, 35.09],
                                                                // '平度': [119.97, 36.77],
                                                                // '佛山': [113.11, 23.05],
                                                                // '海口': [110.35, 20.02],
                                                                // '江门': [113.06, 22.61],
                                                                // '章丘': [117.53, 36.72],
                                                                // '肇庆': [112.44, 23.05],
                                                                // '大连': [121.62, 38.92],
                                                                // '临汾': [111.5, 36.08],
                                                                // '吴江': [120.63, 31.16],
                                                                // '石嘴山': [106.39, 39.04],
                                                                // '沈阳': [123.38, 41.8],
                                                                // '苏州': [120.62, 31.32],
                                                                // '茂名': [110.88, 21.68],
                                                                // '嘉兴': [120.76, 30.77],
                                                                // '长春': [125.35, 43.88],
                                                                // '胶州': [120.03336, 36.264622],
                                                                // '银川': [106.27, 38.47],
                                                                // '张家港': [120.555821, 31.875428],
                                                                // '三门峡': [111.19, 34.76],
                                                                // '锦州': [121.15, 41.13],
                                                                // '南昌': [115.89, 28.68],
                                                                // '柳州': [109.4, 24.33],
                                                                // '三亚': [109.511909, 18.252847],
                                                                // '自贡': [104.778442, 29.33903],
                                                                // '吉林': [126.57, 43.87],
                                                                // '阳江': [111.95, 21.85],
                                                                // '泸州': [105.39, 28.91],
                                                                // '西宁': [101.74, 36.56],
                                                                // '宜宾': [104.56, 29.77],
                                                                // '呼和浩特': [111.65, 40.82],
                                                                // '成都': [104.06, 30.67],
                                                                // '大同': [113.3, 40.12],
                                                                // '镇江': [119.44, 32.2],
                                                                // '桂林': [110.28, 25.29],
                                                                // '张家界': [110.479191, 29.117096],
                                                                // '宜兴': [119.82, 31.36],
                                                                // '北海': [109.12, 21.49],
                                                                // '西安': [108.95, 34.27],
                                                                // '金坛': [119.56, 31.74],
                                                                // '东营': [118.49, 37.46],
                                                                // '牡丹江': [129.58, 44.6],
                                                                // '遵义': [106.9, 27.7],
                                                                // '绍兴': [120.58, 30.01],
                                                                // '扬州': [119.42, 32.39],
                                                                // '常州': [119.95, 31.79],
                                                                // '潍坊': [119.1, 36.62],
                                                                // '重庆': [106.54, 29.59],
                                                                // '台州': [121.420757, 28.656386],
                                                                // '南京': [118.78, 32.04],
                                                                // '滨州': [118.03, 37.36],
                                                                // '贵阳': [106.71, 26.57],
                                                                // '无锡': [120.29, 31.59],
                                                                // '本溪': [123.73, 41.3],
                                                                // '克拉玛依': [84.77, 45.59],
                                                                // '渭南': [109.5, 34.52],
                                                                // '马鞍山': [118.48, 31.56],
                                                                // '宝鸡': [107.15, 34.38],
                                                                // '焦作': [113.21, 35.24],
                                                                // '句容': [119.16, 31.95],
                                                                // '北京': [116.46, 39.92],
                                                                // '徐州': [117.2, 34.26],
                                                                // '衡水': [115.72, 37.72],
                                                                // '包头': [110, 40.58],
                                                                // '绵阳': [104.73, 31.48],
                                                                // '乌鲁木齐': [87.68, 43.77],
                                                                // '枣庄': [117.57, 34.86],
                                                                // '杭州': [120.19, 30.26],
                                                                // '淄博': [118.05, 36.78],
                                                                // '鞍山': [122.85, 41.12],
                                                                // '溧阳': [119.48, 31.43],
                                                                // '库尔勒': [86.06, 41.68],
                                                                // '安阳': [114.35, 36.1],
                                                                // '开封': [114.35, 34.79],
                                                                // '济南': [117, 36.65],
                                                                // '德阳': [104.37, 31.13],
                                                                // '温州': [120.65, 28.01],
                                                                // '九江': [115.97, 29.71],
                                                                // '邯郸': [114.47, 36.6],
                                                                // '临安': [119.72, 30.23],
                                                                '兰州': [103.73, 36.03],
                                                                '沧州': [116.83, 38.33],
                                                                '临沂': [118.35, 35.05],
                                                                '南充': [106.110698, 30.837793],
                                                                '天津': [117.2, 39.13],
                                                                '富阳': [119.95, 30.07],
                                                                '泰安': [117.13, 36.18],
                                                                '诸暨': [120.23, 29.71],
                                                                '郑州': [113.65, 34.76],
                                                                '哈尔滨': [126.63, 45.75],
                                                                '聊城': [115.97, 36.45],
                                                                '芜湖': [118.38, 31.33],
                                                                '唐山': [118.02, 39.63],
                                                                '平顶山': [113.29, 33.75],
                                                                '邢台': [114.48, 37.05],
                                                                '德州': [116.29, 37.45],
                                                                '济宁': [116.59, 35.38],
                                                                '荆州': [112.239741, 30.335165],
                                                                '宜昌': [111.3, 30.7],
                                                                '义乌': [120.06, 29.32],
                                                                '丽水': [119.92, 28.45],
                                                                '洛阳': [112.44, 34.7],
                                                                '秦皇岛': [119.57, 39.95],
                                                                '株洲': [113.16, 27.83],
                                                                '石家庄': [114.48, 38.03],
                                                                '莱芜': [117.67, 36.19],
                                                                '常德': [111.69, 29.05],
                                                                '保定': [115.48, 38.85],
                                                                '湘潭': [112.91, 27.87],
                                                                '金华': [119.64, 29.12],
                                                                '岳阳': [113.09, 29.37],
                                                                '长沙': [113, 28.21],
                                                                '衢州': [118.88, 28.97],
                                                                '廊坊': [116.7, 39.53],
                                                                '菏泽': [115.480656, 35.23375],
                                                                '合肥': [117.27, 31.86],
                                                                '武汉': [114.31, 30.52],
                                                                '大庆': [125.03, 46.58]
                                                            };

                                                            var convertData = function (data) {
                                                                var res = [];
                                                                for (var i = 0; i < data.length; i++) {
                                                                    var geoCoord = geoCoordMap[data[i].name];
                                                                    if (geoCoord) {
                                                                        res.push({
                                                                            name: data[i].name,
                                                                            value: geoCoord.concat(data[i].value)
                                                                        });
                                                                    }
                                                                }
                                                                return res;
                                                            };

                                                            var option = {
                                                                backgroundColor: 'transparent',
                                                                title: {
                                                                    text: '全国设备分布图',
                                                                    subtext: '数据来源：多度运营平台',
                                                                    sublink: 'https://www.doordu.com/index.php/zh/',
                                                                    left: 'center',
                                                                    textStyle: {
                                                                        color: '#fff'
                                                                    }
                                                                },
                                                                tooltip: {
                                                                    trigger: 'item'
                                                                },
                                                                legend: {
                                                                    show: false,
                                                                    orient: 'vertical',
                                                                    y: 'bottom',
                                                                    x: 'right',
                                                                    data: ['设备数'],
                                                                    textStyle: {
                                                                        color: '#fff'
                                                                    }
                                                                },
                                                                geo: {
                                                                    map: 'china',
                                                                    label: {
                                                                        emphasis: {
                                                                            show: false
                                                                        }
                                                                    },
                                                                    roam: false,
                                                                    itemStyle: {
                                                                        normal: {
                                                                            areaColor: '#323c48',
                                                                            borderColor: '#111'
                                                                        },
                                                                        emphasis: {
                                                                            areaColor: '#2a333d'
                                                                        }
                                                                    }
                                                                },
                                                                series: [
                                                                    {
                                                                        name: '设备数',
                                                                        type: 'scatter',
                                                                        coordinateSystem: 'geo',
                                                                        data: convertData(data),
                                                                        symbolSize: function (val) {
                                                                            return val[2] / 10;
                                                                        },
                                                                        label: {
                                                                            normal: {
                                                                                formatter: '{b}',
                                                                                position: 'right',
                                                                                show: false
                                                                            },
                                                                            emphasis: {
                                                                                show: true
                                                                            }
                                                                        },
                                                                        itemStyle: {
                                                                            normal: {
                                                                                color: '#ddb926'
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        name: 'Top 5',
                                                                        type: 'effectScatter',
                                                                        coordinateSystem: 'geo',
                                                                        data: convertData(data.sort(function (a, b) {
                                                                            return b.value - a.value;
                                                                        }).slice(0, 6)),
                                                                        symbolSize: function (val) {
                                                                            return val[2] / 10;
                                                                        },
                                                                        showEffectOn: 'render',
                                                                        rippleEffect: {
                                                                            brushType: 'stroke'
                                                                        },
                                                                        hoverAnimation: true,
                                                                        label: {
                                                                            normal: {
                                                                                formatter: '{b}',
                                                                                position: 'right',
                                                                                show: true
                                                                            }
                                                                        },
                                                                        itemStyle: {
                                                                            normal: {
                                                                                color: '#f4e925',
                                                                                shadowBlur: 10,
                                                                                shadowColor: '#333'
                                                                            }
                                                                        },
                                                                        zlevel: 1
                                                                    }
                                                                ]
                                                            };
                                                            con.echart.setOption(option);
                                                        }
                                                    });
                                                }
                                            );
                                        },
                                        resize: function (con, width, height, oldWidth, oldHeight, eOpts) {
                                            if (document.getElementById("chart300"))
                                                document.getElementById("chart300").style.width = width + 'px';
                                            if (con.echart) {
                                                con.echart.resize();
                                            }
                                        }
                                    }
                                },
                                {
                                    xtype: 'container',
                                    width: '15%',
                                    height: 415,
                                    layout: {
                                        type: 'vbox',
                                        align: 'center',
                                        pack: 'middle'
                                    },
                                    defaults: {
                                        margin: '5 5 5 5'
                                    },
                                    items: [
                                        {
                                            xtype: 'label',
                                            html: '<span style="color: yellow">沧州: 100</span>'
                                        },
                                        {
                                            xtype: 'label',
                                            html: '<span style="color: yellow">临沂: 103</span>'
                                        },
                                        {
                                            xtype: 'label',
                                            html: '<span style="color: yellow">南充: 104</span>'
                                        },
                                        {
                                            xtype: 'label',
                                            html: '<span style="color: yellow">天津: 105</span>'
                                        },
                                        {
                                            xtype: 'label',
                                            html: '<span style="color: yellow">富阳: 106</span>'
                                        },
                                        {
                                            xtype: 'label',
                                            html: '<span style="color: yellow">泰安: 112</span>'
                                        },
                                        {
                                            xtype: 'label',
                                            html: '<span style="color: yellow">诸暨: 112</span>'
                                        },
                                        {
                                            xtype: 'label',
                                            html: '<span style="color: yellow">郑州: 113</span>'
                                        },
                                        {
                                            xtype: 'label',
                                            html: '<span style="color: yellow">义乌: 132</span>'
                                        },
                                        {
                                            xtype: 'label',
                                            html: '<span style="color: yellow">丽水: 133</span>'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            width: '15%',
                            style: 'border: 1px solid #ccc',
                            items: [
                                {
                                    xtype: 'panel',
                                    width: '100%',
                                    bodyStyle: 'background: transparent;',
                                    style: 'border-bottom: 1px solid #ccc',
                                    height: 140,
                                    layout: {
                                        type: 'vbox',
                                        align: 'center',
                                        pack: 'middle'
                                    },
                                    dockedItems: [
                                        {
                                            xtype: 'toolbar',
                                            dock: 'top',
                                            border: 1,
                                            style: 'background: transparent;border-bottom: 1px solid #ccc',
                                            items: [
                                                {
                                                    xtype: 'tbtext',
                                                    text: '<span style="color: #fff;font-size: 18px; font-weight: bold;">实时人员流动量</span>'
                                                }
                                            ]
                                        }
                                    ],
                                    items: [
                                        {
                                            xtype: 'tbtext',
                                            text: '<span style="font-size: 40px; font-weight: bold; background:-webkit-linear-gradient(left,#f00,#ff0 25%,#0f0 40%,#0ff 55%,#00f 70%,#f00); -webkit-background-clip:text; color:transparent;">51,562,456</span>',
                                            listeners: {
                                                afterrender: function (tb) {
                                                    setInterval(function () {
                                                        var num = (Math.random() * 50000000).toFixed(0);
                                                        tb.setText('<span style="font-size: 40px; font-weight: bold; background:-webkit-linear-gradient(left,#f00,#ff0 25%,#0f0 40%,#0ff 55%,#00f 70%,#f00); -webkit-background-clip:text; color:transparent;">' + formatNum(num) + '</span>')
                                                    }, 3000);
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    width: '100%',
                                    bodyStyle: 'background: transparent;',
                                    style: 'border-bottom: 1px solid #ccc',
                                    height: 140,
                                    layout: {
                                        type: 'vbox',
                                        align: 'center',
                                        pack: 'middle'
                                    },
                                    dockedItems: [
                                        {
                                            xtype: 'toolbar',
                                            dock: 'top',
                                            border: 1,
                                            style: 'background: transparent;border-bottom: 1px solid #ccc',
                                            items: [
                                                {
                                                    xtype: 'tbtext',
                                                    text: '<span style="color: #fff;font-size: 18px; font-weight: bold;">实时异常报警</span>'
                                                }
                                            ]
                                        }
                                    ],
                                    items: [
                                        {
                                            xtype: 'tbtext',
                                            text: '<span style="font-size: 40px; font-weight: bold; background:-webkit-linear-gradient(left,#f00,#ff0 25%,#0f0 40%,#0ff 55%,#00f 70%,#f00); -webkit-background-clip:text; color:transparent;">2,456</span>',
                                            listeners: {
                                                afterrender: function (tb) {
                                                    setInterval(function () {
                                                        var num = (Math.random() * 3000).toFixed(0);
                                                        tb.setText('<span style="font-size: 40px; font-weight: bold; background:-webkit-linear-gradient(left,#f00,#ff0 25%,#0f0 40%,#0ff 55%,#00f 70%,#f00); -webkit-background-clip:text; color:transparent;">' + formatNum(num) + '</span>')
                                                    }, 3000);
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    width: '100%',
                                    bodyStyle: 'background: transparent;',
                                    style: 'border-bottom: 1px solid #ccc',
                                    height: 135,
                                    layout: {
                                        type: 'vbox',
                                        align: 'center',
                                        pack: 'middle'
                                    },
                                    dockedItems: [
                                        {
                                            xtype: 'toolbar',
                                            dock: 'top',
                                            border: 1,
                                            style: 'background: transparent;border-bottom: 1px solid #ccc',
                                            items: [
                                                {
                                                    xtype: 'tbtext',
                                                    text: '<span style="color: #fff;font-size: 18px; font-weight: bold;">实时开门数</span>'
                                                }
                                            ]
                                        }
                                    ],
                                    items: [
                                        {
                                            xtype: 'tbtext',
                                            text: '<span style="font-size: 40px; font-weight: bold; background:-webkit-linear-gradient(left,#f00,#ff0 25%,#0f0 40%,#0ff 55%,#00f 70%,#f00); -webkit-background-clip:text; color:transparent;">151,562,456</span>',
                                            listeners: {
                                                afterrender: function (tb) {
                                                    setInterval(function () {
                                                        var num = (Math.random() * 300000000).toFixed(0);
                                                        tb.setText('<span style="font-size: 40px; font-weight: bold; background:-webkit-linear-gradient(left,#f00,#ff0 25%,#0f0 40%,#0ff 55%,#00f 70%,#f00); -webkit-background-clip:text; color:transparent;">' + formatNum(num) + '</span>')
                                                    }, 3000);
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            width: '50%',
                            style: 'border: 1px solid #ccc',
                            items: [
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    style: 'border: 1px solid #ccc',
                                    height: 140,
                                    layout: {
                                        type: 'hbox',
                                        align: 'center',
                                        pack: 'middle'
                                    },
                                    defaults: {
                                        margin: '10 25 10 25'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'image',
                                                    width: 60,
                                                    height: 60,
                                                    src: 'resources/images/icons/11.png',
                                                    style: 'border-radius: 5px'
                                                },
                                                {
                                                    xtype: 'label',
                                                    margin: '10 0 0 0',
                                                    html: '<span style="font-weight: bold; font-size: 18px; color: #fff">45,632</span>'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'image',
                                                    width: 60,
                                                    height: 60,
                                                    src: 'resources/images/icons/12.png',
                                                    style: 'border-radius: 5px'
                                                },
                                                {
                                                    xtype: 'label',
                                                    margin: '10 0 0 0',
                                                    html: '<span style="font-weight: bold; font-size: 18px; color: #fff">45,632</span>'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'image',
                                                    width: 60,
                                                    height: 60,
                                                    src: 'resources/images/icons/13.png',
                                                    style: 'border-radius: 5px'
                                                },
                                                {
                                                    xtype: 'label',
                                                    margin: '10 0 0 0',
                                                    html: '<span style="font-weight: bold; font-size: 18px; color: #fff">45,632</span>'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'image',
                                                    width: 60,
                                                    height: 60,
                                                    src: 'resources/images/icons/14.png',
                                                    style: 'border-radius: 5px'
                                                },
                                                {
                                                    xtype: 'label',
                                                    margin: '10 0 0 0',
                                                    html: '<span style="font-weight: bold; font-size: 18px; color: #fff">45,632</span>'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'image',
                                                    width: 60,
                                                    height: 60,
                                                    src: 'resources/images/icons/15.png',
                                                    style: 'border-radius: 5px'
                                                },
                                                {
                                                    xtype: 'label',
                                                    margin: '10 0 0 0',
                                                    html: '<span style="font-weight: bold; font-size: 18px; color: #fff">45,632</span>'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'image',
                                                    width: 60,
                                                    height: 60,
                                                    src: 'resources/images/icons/16.png',
                                                    style: 'border-radius: 5px'
                                                },
                                                {
                                                    xtype: 'label',
                                                    margin: '10 0 0 0',
                                                    html: '<span style="font-weight: bold; font-size: 18px; color: #fff">145,632</span>'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'button',
                                            text: '开启动态',
                                            width: 80,
                                            height: 80,
                                            handler: function () {
                                                if (this.getText() == '开启动态')
                                                    this.setText('停止动态');
                                                else
                                                    this.setText('开启动态');
                                                var con = this.up('#chartsCon0');
                                                var chartCon1 = con.down('#con_chart300');
                                                var chartCon2 = con.down('#con_chart301');
                                                var chartCon3 = con.down('#con_chart303');
                                                var chartCon4 = con.down('#con_chart305');
                                                var chartCon5 = con.down('#con_chart306');

                                                chartCon1.canInterval = !chartCon1.canInterval;
                                                chartCon2.canInterval = !chartCon2.canInterval;
                                                chartCon3.canInterval = !chartCon3.canInterval;
                                                chartCon4.canInterval = !chartCon4.canInterval;
                                                chartCon5.canInterval = !chartCon5.canInterval;
                                            }
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    style: 'border: 1px solid #ccc',
                                    height: 275,
                                    itemId: 'con_chart301',
                                    listeners: {
                                        afterrender: function (con) {
                                            require(
                                                [
                                                    'echarts3/echarts.min'
                                                ],
                                                function (echarts) {
                                                    con.setHtml('<div id="chart301" style="width: ' + con.getWidth() + 'px; height: 250px"></div>');
                                                    con.echart = echarts.init(document.getElementById("chart301"));

                                                    var colors = [
                                                        // {
                                                        //     type: 'linear',
                                                        //     x: 0, x2: 1, y: 0, y2: 0,
                                                        //     colorStops: [
                                                        //         {
                                                        //             offset: 0,
                                                        //             color: 'rgb(0, 160, 220)'
                                                        //         },
                                                        //         {
                                                        //             offset: 0.5,
                                                        //             color: 'rgb(0, 160, 220)'
                                                        //         },
                                                        //         {
                                                        //             offset: 0.5,
                                                        //             color: 'rgb(0, 179, 255)'
                                                        //         },
                                                        //         {
                                                        //             offset: 1,
                                                        //             color: 'rgb(0, 179, 255)'
                                                        //         }
                                                        //     ]
                                                        // },
                                                        {
                                                            type: 'linear',
                                                            x: 0, x2: 1, y: 0, y2: 0,
                                                            colorStops: [
                                                                {
                                                                    offset: 0,
                                                                    color: 'rgb(12, 210, 180)'
                                                                },
                                                                {
                                                                    offset: 0.5,
                                                                    color: 'rgb(12, 210, 180)'
                                                                },
                                                                {
                                                                    offset: 0.5,
                                                                    color: 'rgb(12, 233, 195)'
                                                                },
                                                                {
                                                                    offset: 1,
                                                                    color: 'rgb(12, 233, 195)'
                                                                }
                                                            ]
                                                        }
                                                    ];

                                                    var data = [220, 182, 191, 234, 290, 330, 310, 200, 192, 101, 134, 190, 300, 380, 120, 142, 171, 254, 200, 340, 370, 320, 282, 291, 134, 190, 230, 110];
                                                    var dates = ['4-22', '4-23', '4-24', '4-25', '4-26', '4-27', '4-28',
                                                        '4-29', '4-30', '5-01', '5-02', '5-03', '5-04', '5-05',
                                                        '5-06', '5-07', '5-08', '5-09', '5-10', '5-11', '5-12',
                                                        '5-13', '5-14', '5-15', '5-16', '5-17', '5-18', '5-19'];

                                                    var option = {
                                                        color: colors,
                                                        title: {
                                                            text: '开门动态统计',
                                                            textStyle: {
                                                                color: '#fff'
                                                            }
                                                        },
                                                        tooltip: {
                                                            trigger: 'axis'
                                                        },
                                                        textStyle: {
                                                            color: '#fff'
                                                        },
                                                        grid: {
                                                            show: true,
                                                            left: 50,
                                                            top: 40,
                                                            right: 30,
                                                            bottom: 20,
                                                            borderWidth: 0,
                                                            borderColor: 'rgba(170,172,178,0.33)',
                                                            backgroundColor: 'rgba(17, 34, 69, 0.24)'
                                                        },
                                                        xAxis: {
                                                            data: ['4-22', '4-23', '4-24', '4-25', '4-26', '4-27', '4-28']
                                                            // data: []
                                                        },
                                                        yAxis: {
                                                            type: 'value',
                                                            splitLine: {
                                                                show: false
                                                            },
                                                            // splitArea:{
                                                            //     show:true
                                                            // }
                                                        },
                                                        series: [
                                                            {
                                                                type: 'bar',
                                                                name: '开门',
                                                                label: {
                                                                    normal: {
                                                                        show: true,
                                                                        position: 'top'
                                                                    }
                                                                },
                                                                barMinWidth: 50,
                                                                barMaxWidth: 60,
                                                                data: [220, 182, 191, 234, 290, 330, 310]
                                                                // data: []
                                                            },
                                                            // {
                                                            //     type: 'bar',
                                                            //     data: [200, 200, 101, 300, 330, 190, 100]
                                                            // }
                                                        ]
                                                    };

                                                    con.echart.setOption(option);

                                                    var times = 0;
                                                    setInterval(function () {
                                                        if (con.canInterval) {
                                                            if (times > 3)
                                                                times = 0;
                                                            var op = con.echart.getOption();
                                                            op.series[0].data = Ext.Array.slice(data, times * 7, times * 7 + 7);
                                                            op.xAxis[0].data = Ext.Array.slice(dates, times * 7, times * 7 + 7);
                                                            con.echart.setOption(op);
                                                            times++;
                                                        }
                                                    }, 3000);
                                                }
                                            );
                                        },
                                        resize: function (con, width, height, oldWidth, oldHeight, eOpts) {
                                            if (document.getElementById("chart301"))
                                                document.getElementById("chart301").style.width = width + 'px';
                                            if (con.echart) {
                                                con.echart.resize();
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    width: '100%',
                    style: 'border: 1px solid #ccc',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'container',
                            width: '50%',
                            style: 'border: 1px solid #ccc',
                            layout: 'vbox',
                            items: [
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    style: 'border: 1px solid #ccc',
                                    height: 200,
                                    itemId: 'con_chart303',
                                    listeners: {
                                        afterrender: function (con) {
                                            require(
                                                [
                                                    'echarts3/echarts.min'
                                                ],
                                                function (echarts) {
                                                    con.setHtml('<div id="chart303" style="width: ' + con.getWidth() + 'px; height: 200px"></div>');
                                                    con.echart = echarts.init(document.getElementById("chart303"));

                                                    var times = ['13:00', '13:10', '13:20', '13:30', '13:40', '13:50', '14:00', '14:10', '14:20', '14:30', '14:40', '14:50'];
                                                    var data1 = [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122];
                                                    var data2 = [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150];
                                                    var data3 = [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122];

                                                    var option = {
                                                        // backgroundColor: '#394056',
                                                        // backgroundColor: 'transparent',
                                                        title: {
                                                            show: false,
                                                            text: '开门数',
                                                            textStyle: {
                                                                fontWeight: 'normal',
                                                                fontSize: 16,
                                                                color: '#F1F1F3'
                                                            },
                                                            left: '6%'
                                                        },
                                                        tooltip: {
                                                            trigger: 'axis',
                                                            axisPointer: {
                                                                lineStyle: {
                                                                    color: '#57617B'
                                                                }
                                                            },
                                                            formatter: '开门数/次：<br/>{a0}: {c0}<br/>{a1}: {c1}<br/>{a2}: {c2}'
                                                        },
                                                        textStyle: {
                                                            color: '#fff'
                                                        },
                                                        legend: {
                                                            icon: 'rect',
                                                            itemWidth: 14,
                                                            itemHeight: 5,
                                                            itemGap: 13,
                                                            data: ['刷卡', 'APP', '拨号'],
                                                            right: '4%',
                                                            textStyle: {
                                                                fontSize: 12,
                                                                color: '#F1F1F3'
                                                            }
                                                        },
                                                        grid: {
                                                            top: '15%',
                                                            left: '3%',
                                                            right: '4%',
                                                            bottom: '3%',
                                                            containLabel: true
                                                        },
                                                        xAxis: [{
                                                            type: 'category',
                                                            boundaryGap: false,
                                                            axisLine: {
                                                                lineStyle: {
                                                                    color: '#57617B'
                                                                }
                                                            },
                                                            data: times
                                                        }],
                                                        yAxis: [{
                                                            type: 'value',
                                                            // name: '单位（次）',
                                                            axisTick: {
                                                                show: false
                                                            },
                                                            axisLine: {
                                                                lineStyle: {
                                                                    color: '#57617B'
                                                                }
                                                            },
                                                            axisLabel: {
                                                                margin: 10,
                                                                textStyle: {
                                                                    fontSize: 14
                                                                }
                                                            },
                                                            splitLine: {
                                                                show: false,
                                                                lineStyle: {
                                                                    color: '#57617B'
                                                                }
                                                            }
                                                        }],
                                                        series: [{
                                                            name: '刷卡',
                                                            type: 'line',
                                                            smooth: true,
                                                            symbol: 'circle',
                                                            symbolSize: 5,
                                                            showSymbol: false,
                                                            lineStyle: {
                                                                normal: {
                                                                    width: 1
                                                                }
                                                            },
                                                            areaStyle: {
                                                                normal: {
                                                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                                        offset: 0,
                                                                        color: 'rgba(137, 189, 27, 0.3)'
                                                                    }, {
                                                                        offset: 0.8,
                                                                        color: 'rgba(137, 189, 27, 0)'
                                                                    }], false),
                                                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                                                    shadowBlur: 10
                                                                }
                                                            },
                                                            itemStyle: {
                                                                normal: {
                                                                    color: 'rgb(137,189,27)',
                                                                    borderColor: 'rgba(137,189,2,0.27)',
                                                                    borderWidth: 12

                                                                }
                                                            },
                                                            data: data1
                                                        }, {
                                                            name: 'APP',
                                                            type: 'line',
                                                            smooth: true,
                                                            symbol: 'circle',
                                                            symbolSize: 5,
                                                            showSymbol: false,
                                                            lineStyle: {
                                                                normal: {
                                                                    width: 1
                                                                }
                                                            },
                                                            areaStyle: {
                                                                normal: {
                                                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                                        offset: 0,
                                                                        color: 'rgba(0, 136, 212, 0.3)'
                                                                    }, {
                                                                        offset: 0.8,
                                                                        color: 'rgba(0, 136, 212, 0)'
                                                                    }], false),
                                                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                                                    shadowBlur: 10
                                                                }
                                                            },
                                                            itemStyle: {
                                                                normal: {
                                                                    color: 'rgb(0,136,212)',
                                                                    borderColor: 'rgba(0,136,212,0.2)',
                                                                    borderWidth: 12

                                                                }
                                                            },
                                                            data: data2
                                                        }, {
                                                            name: '拨号',
                                                            type: 'line',
                                                            smooth: true,
                                                            symbol: 'circle',
                                                            symbolSize: 5,
                                                            showSymbol: false,
                                                            lineStyle: {
                                                                normal: {
                                                                    width: 1
                                                                }
                                                            },
                                                            areaStyle: {
                                                                normal: {
                                                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                                        offset: 0,
                                                                        color: 'rgba(219, 50, 51, 0.3)'
                                                                    }, {
                                                                        offset: 0.8,
                                                                        color: 'rgba(219, 50, 51, 0)'
                                                                    }], false),
                                                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                                                    shadowBlur: 10
                                                                }
                                                            },
                                                            itemStyle: {
                                                                normal: {

                                                                    color: 'rgb(219,50,51)',
                                                                    borderColor: 'rgba(219,50,51,0.2)',
                                                                    borderWidth: 12
                                                                }
                                                            },
                                                            data: data3
                                                        }]
                                                    };

                                                    con.echart.setOption(option);

                                                    setInterval(function () {
                                                        if (con.canInterval) {
                                                            times.shift();
                                                            var len = times.length;
                                                            var tts = times[len - 1].split(':');
                                                            var h = new Number(tts[0]);
                                                            var m = new Number(tts[1]);
                                                            var hs = '';
                                                            var ms = '';
                                                            if (m == 50) {
                                                                ms = '00';
                                                                if (h == 23)
                                                                    hs = '00';
                                                                else {
                                                                    if (h < 9)
                                                                        hs = '0' + (h + 1);
                                                                    else
                                                                        hs = (h + 1) + '';
                                                                }
                                                            } else {
                                                                ms = (m + 10) + '';
                                                                hs = tts[0];
                                                            }
                                                            var t = hs + ':' + ms;
                                                            times.push(t);
                                                            data1.shift();
                                                            var num1 = (Math.random() * 300).toFixed(0);
                                                            data1.push(num1);
                                                            data2.shift();
                                                            var num2 = (Math.random() * 300).toFixed(0);
                                                            data2.push(num2);
                                                            data3.shift();
                                                            var num3 = (Math.random() * 300).toFixed(0);
                                                            data3.push(num3);
                                                            option.xAxis[0].data = times;
                                                            option.series[0].data = data1;
                                                            option.series[1].data = data2;
                                                            option.series[2].data = data3;
                                                            con.echart.setOption(option);
                                                        }
                                                    }, 1000);
                                                }
                                            );
                                        },
                                        resize: function (con, width, height, oldWidth, oldHeight, eOpts) {
                                            if (document.getElementById("chart303"))
                                                document.getElementById("chart303").style.width = width + 'px';
                                            if (con.echart) {
                                                con.echart.resize();
                                            }
                                        }
                                    }
                                },
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    height: 280,
                                    style: 'border: 1px solid #ccc',
                                    itemId: 'con_chart305',
                                    listeners: {
                                        afterrender: function (con) {
                                            require(
                                                [
                                                    'echarts3/echarts.min'
                                                ],
                                                function (echarts) {
                                                    con.setHtml('<div id="chart305" style="width: ' + con.getWidth() + 'px; height: 280px"></div>');
                                                    con.echart = echarts.init(document.getElementById("chart305"));
                                                    var uploadedDataURL = "resources/images/bsh.jpg";

                                                    var maxData = 2000;

                                                    var option = {
                                                        tooltip: {
                                                        },
                                                        xAxis: {
                                                            max: maxData,
                                                            splitLine: {show: false},
                                                            offset: 10,
                                                            axisLine: {
                                                                lineStyle: {
                                                                    color: '#fff'
                                                                }
                                                            },
                                                            axisLabel: {
                                                                margin: 10
                                                            }
                                                        },
                                                        yAxis: {
                                                            data: ['2014', '2015', '2016', '2017'],
                                                            inverse: true,
                                                            axisTick: {show: false},
                                                            axisLine: {show: false},
                                                            axisLabel: {
                                                                margin: 10,
                                                                textStyle: {
                                                                    color: '#fff',
                                                                    fontSize: 16
                                                                }
                                                            }
                                                        },
                                                        grid: {
                                                            top: 'center',
                                                            height: 200,
                                                            left: 70,
                                                            right: 100
                                                        },
                                                        series: [{
                                                            // current data
                                                            type: 'pictorialBar',
                                                            symbol: 'image://' + uploadedDataURL,
                                                            symbolRepeat: 'fixed',
                                                            symbolMargin: '5%',
                                                            symbolClip: true,
                                                            symbolSize: 30,
                                                            symbolBoundingData: maxData,
                                                            data: [891, 1220, 660, 1670],
                                                            markLine: {
                                                                symbol: 'none',
                                                                label: {
                                                                    normal: {
                                                                        formatter: '极值: {c}',
                                                                        position: 'start'
                                                                    }
                                                                },
                                                                lineStyle: {
                                                                    normal: {
                                                                        color: '#fff',
                                                                        type: 'dotted',
                                                                        opacity: 0.2,
                                                                        width: 2
                                                                    }
                                                                },
                                                                data: [{
                                                                    type: 'max'
                                                                }]
                                                            },
                                                            z: 10
                                                        }, {
                                                            // full data
                                                            type: 'pictorialBar',
                                                            itemStyle: {
                                                                normal: {
                                                                    opacity: 0.2
                                                                }
                                                            },
                                                            label: {
                                                                normal: {
                                                                    show: true,
                                                                    formatter: function (params) {
                                                                        return (params.value / maxData * 100).toFixed(1) + ' %';
                                                                    },
                                                                    position: 'outside',
                                                                    offset: [10, 0],
                                                                    textStyle: {
                                                                        color: '#fff',
                                                                        fontSize: 18
                                                                    }
                                                                }
                                                            },
                                                            animationDuration: 0,
                                                            symbolRepeat: 'fixed',
                                                            symbolMargin: '5%',
                                                            symbol: 'image://' + uploadedDataURL,
                                                            symbolSize: 30,
                                                            symbolBoundingData: maxData,
                                                            data: [891, 1220, 660, 1670],
                                                            z: 5
                                                        }]
                                                    };

                                                    con.echart.setOption(option);
                                                    // Make dynamic data.
                                                    function random() {
                                                        return +(Math.random() * (maxData - 10)).toFixed(1);
                                                    }
                                                    setInterval(function () {
                                                        if (con.canInterval) {
                                                            var dynamicData = [random(), random(), random(), random()];
                                                            con.echart.setOption({
                                                                series: [{
                                                                    data: dynamicData.slice()
                                                                }, {
                                                                    data: dynamicData.slice()
                                                                }]
                                                            });
                                                        }
                                                    }, 3000);

                                                    // con.echart.setOption(option);

                                                }
                                            );
                                        },
                                        resize: function (con, width, height, oldWidth, oldHeight, eOpts) {
                                            if (document.getElementById("chart305"))
                                                document.getElementById("chart305").style.width = width + 'px';
                                            if (con.echart) {
                                                con.echart.resize();
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            width: '50%',
                            height: 480,
                            style: 'border: 1px solid #ccc',
                            itemId: 'con_chart306',
                            listeners: {
                                afterrender: function (con) {
                                    require(
                                        [
                                            'echarts3/echarts.min'
                                        ],
                                        function (echarts) {
                                            con.setHtml('<div id="chart306" style="width: ' + con.getWidth() + 'px; height: 480px"></div>');
                                            con.echart = echarts.init(document.getElementById("chart306"));

                                            var dateList = [
                                                ['2017-1-1', '初四'],
                                                ['2017-1-2', '初五'],
                                                ['2017-1-3', '初六'],
                                                ['2017-1-4', '初七'],
                                                ['2017-1-5', '初八', '小寒'],
                                                ['2017-1-6', '初九'],
                                                ['2017-1-7', '初十'],
                                                ['2017-1-8', '十一'],
                                                ['2017-1-9', '十二'],
                                                ['2017-1-10', '十三'],
                                                ['2017-1-11', '十四'],
                                                ['2017-1-12', '十五'],
                                                ['2017-1-13', '十六'],
                                                ['2017-1-14', '十七'],
                                                ['2017-1-15', '十八'],
                                                ['2017-1-16', '十九'],
                                                ['2017-1-17', '二十'],
                                                ['2017-1-18', '廿一'],
                                                ['2017-1-19', '廿二'],
                                                ['2017-1-20', '廿三', '大寒'],
                                                ['2017-1-21', '廿四'],
                                                ['2017-1-22', '廿五'],
                                                ['2017-1-23', '廿六'],
                                                ['2017-1-24', '廿七'],
                                                ['2017-1-25', '廿八'],
                                                ['2017-1-26', '廿九'],
                                                ['2017-1-27', '三十'],
                                                ['2017-1-28', '正月'],
                                                ['2017-1-29', '初二'],
                                                ['2017-1-30', '初三'],
                                                ['2017-1-31', '初四'],
                                                ['2017-2-1', '初五'],
                                                ['2017-2-2', '初六'],
                                                ['2017-2-3', '初七', '立春'],
                                                ['2017-2-4', '初八'],
                                                ['2017-2-5', '初九'],
                                                ['2017-2-6', '初十'],
                                                ['2017-2-7', '十一'],
                                                ['2017-2-8', '十二'],
                                                ['2017-2-9', '十三'],
                                                ['2017-2-10', '十四'],
                                                ['2017-2-11', '十五'],
                                                ['2017-2-12', '十六'],
                                                ['2017-2-13', '十七'],
                                                ['2017-2-14', '十八'],
                                                ['2017-2-15', '十九'],
                                                ['2017-2-16', '二十'],
                                                ['2017-2-17', '廿一'],
                                                ['2017-2-18', '廿二', '雨水'],
                                                ['2017-2-19', '廿三'],
                                                ['2017-2-20', '廿四'],
                                                ['2017-2-21', '廿五'],
                                                ['2017-2-22', '廿六'],
                                                ['2017-2-23', '廿七'],
                                                ['2017-2-24', '廿八'],
                                                ['2017-2-25', '廿九'],
                                                ['2017-2-26', '二月'],
                                                ['2017-2-27', '初二'],
                                                ['2017-2-28', '初三'],
                                                ['2017-3-1', '初四'],
                                                ['2017-3-2', '初五'],
                                                ['2017-3-3', '初六'],
                                                ['2017-3-4', '初七'],
                                                ['2017-3-5', '初八', '驚蟄'],
                                                ['2017-3-6', '初九'],
                                                ['2017-3-7', '初十'],
                                                ['2017-3-8', '十一'],
                                                ['2017-3-9', '十二'],
                                                ['2017-3-10', '十三'],
                                                ['2017-3-11', '十四'],
                                                ['2017-3-12', '十五'],
                                                ['2017-3-13', '十六'],
                                                ['2017-3-14', '十七'],
                                                ['2017-3-15', '十八'],
                                                ['2017-3-16', '十九'],
                                                ['2017-3-17', '二十'],
                                                ['2017-3-18', '廿一'],
                                                ['2017-3-19', '廿二'],
                                                ['2017-3-20', '廿三', '春分'],
                                                ['2017-3-21', '廿四'],
                                                ['2017-3-22', '廿五'],
                                                ['2017-3-23', '廿六'],
                                                ['2017-3-24', '廿七'],
                                                ['2017-3-25', '廿八'],
                                                ['2017-3-26', '廿九'],
                                                ['2017-3-27', '三十'],
                                                ['2017-3-28', '三月'],
                                                ['2017-3-29', '初二'],
                                                ['2017-3-30', '初三'],
                                                ['2017-3-31', '初四'],
                                                ['2017-4-1', '初五'],
                                                ['2017-4-2', '初六'],
                                                ['2017-4-3', '初七'],
                                                ['2017-4-4', '初八', '清明'],
                                                ['2017-4-5', '初九'],
                                                ['2017-4-6', '初十'],
                                                ['2017-4-7', '十一'],
                                                ['2017-4-8', '十二'],
                                                ['2017-4-9', '十三'],
                                                ['2017-4-10', '十四'],
                                                ['2017-4-11', '十五'],
                                                ['2017-4-12', '十六'],
                                                ['2017-4-13', '十七'],
                                                ['2017-4-14', '十八'],
                                                ['2017-4-15', '十九'],
                                                ['2017-4-16', '二十'],
                                                ['2017-4-17', '廿一'],
                                                ['2017-4-18', '廿二'],
                                                ['2017-4-19', '廿三'],
                                                ['2017-4-20', '廿四', '穀雨'],
                                                ['2017-4-21', '廿五'],
                                                ['2017-4-22', '廿六'],
                                                ['2017-4-23', '廿七'],
                                                ['2017-4-24', '廿八'],
                                                ['2017-4-25', '廿九'],
                                                ['2017-4-26', '四月'],
                                                ['2017-4-27', '初二'],
                                                ['2017-4-28', '初三'],
                                                ['2017-4-29', '初四'],
                                                ['2017-4-30', '初五'],
                                                ['2017-5-1', '初六'],
                                                ['2017-5-2', '初七'],
                                                ['2017-5-3', '初八'],
                                                ['2017-5-4', '初九'],
                                                ['2017-5-5', '初十', '立夏'],
                                                ['2017-5-6', '十一'],
                                                ['2017-5-7', '十二'],
                                                ['2017-5-8', '十三'],
                                                ['2017-5-9', '十四'],
                                                ['2017-5-10', '十五'],
                                                ['2017-5-11', '十六'],
                                                ['2017-5-12', '十七'],
                                                ['2017-5-13', '十八'],
                                                ['2017-5-14', '十九'],
                                                ['2017-5-15', '二十'],
                                                ['2017-5-16', '廿一'],
                                                ['2017-5-17', '廿二'],
                                                ['2017-5-18', '廿三'],
                                                ['2017-5-19', '廿四'],
                                                ['2017-5-20', '廿五'],
                                                ['2017-5-21', '廿六', '小滿'],
                                                ['2017-5-22', '廿七'],
                                                ['2017-5-23', '廿八'],
                                                ['2017-5-24', '廿九'],
                                                ['2017-5-25', '三十'],
                                                ['2017-5-26', '五月'],
                                                ['2017-5-27', '初二'],
                                                ['2017-5-28', '初三'],
                                                ['2017-5-29', '初四'],
                                                ['2017-5-30', '初五'],
                                                ['2017-5-31', '初六'],
                                                ['2017-6-1', '初七'],
                                                ['2017-6-2', '初八'],
                                                ['2017-6-3', '初九'],
                                                ['2017-6-4', '初十'],
                                                ['2017-6-5', '十一', '芒種'],
                                                ['2017-6-6', '十二'],
                                                ['2017-6-7', '十三'],
                                                ['2017-6-8', '十四'],
                                                ['2017-6-9', '十五'],
                                                ['2017-6-10', '十六'],
                                                ['2017-6-11', '十七'],
                                                ['2017-6-12', '十八'],
                                                ['2017-6-13', '十九'],
                                                ['2017-6-14', '二十'],
                                                ['2017-6-15', '廿一'],
                                                ['2017-6-16', '廿二'],
                                                ['2017-6-17', '廿三'],
                                                ['2017-6-18', '廿四'],
                                                ['2017-6-19', '廿五'],
                                                ['2017-6-20', '廿六'],
                                                ['2017-6-21', '廿七', '夏至'],
                                                ['2017-6-22', '廿八'],
                                                ['2017-6-23', '廿九'],
                                                ['2017-6-24', '六月'],
                                                ['2017-6-25', '初二'],
                                                ['2017-6-26', '初三'],
                                                ['2017-6-27', '初四'],
                                                ['2017-6-28', '初五'],
                                                ['2017-6-29', '初六'],
                                                ['2017-6-30', '初七'],
                                                ['2017-7-1', '初八'],
                                                ['2017-7-2', '初九'],
                                                ['2017-7-3', '初十'],
                                                ['2017-7-4', '十一'],
                                                ['2017-7-5', '十二'],
                                                ['2017-7-6', '十三'],
                                                ['2017-7-7', '十四', '小暑'],
                                                ['2017-7-8', '十五'],
                                                ['2017-7-9', '十六'],
                                                ['2017-7-10', '十七'],
                                                ['2017-7-11', '十八'],
                                                ['2017-7-12', '十九'],
                                                ['2017-7-13', '二十'],
                                                ['2017-7-14', '廿一'],
                                                ['2017-7-15', '廿二'],
                                                ['2017-7-16', '廿三'],
                                                ['2017-7-17', '廿四'],
                                                ['2017-7-18', '廿五'],
                                                ['2017-7-19', '廿六'],
                                                ['2017-7-20', '廿七'],
                                                ['2017-7-21', '廿八'],
                                                ['2017-7-22', '廿九', '大暑'],
                                                ['2017-7-23', '閏六'],
                                                ['2017-7-24', '初二'],
                                                ['2017-7-25', '初三'],
                                                ['2017-7-26', '初四'],
                                                ['2017-7-27', '初五'],
                                                ['2017-7-28', '初六'],
                                                ['2017-7-29', '初七'],
                                                ['2017-7-30', '初八'],
                                                ['2017-7-31', '初九'],
                                                ['2017-8-1', '初十'],
                                                ['2017-8-2', '十一'],
                                                ['2017-8-3', '十二'],
                                                ['2017-8-4', '十三'],
                                                ['2017-8-5', '十四'],
                                                ['2017-8-6', '十五'],
                                                ['2017-8-7', '十六', '立秋'],
                                                ['2017-8-8', '十七'],
                                                ['2017-8-9', '十八'],
                                                ['2017-8-10', '十九'],
                                                ['2017-8-11', '二十'],
                                                ['2017-8-12', '廿一'],
                                                ['2017-8-13', '廿二'],
                                                ['2017-8-14', '廿三'],
                                                ['2017-8-15', '廿四'],
                                                ['2017-8-16', '廿五'],
                                                ['2017-8-17', '廿六'],
                                                ['2017-8-18', '廿七'],
                                                ['2017-8-19', '廿八'],
                                                ['2017-8-20', '廿九'],
                                                ['2017-8-21', '三十'],
                                                ['2017-8-22', '七月'],
                                                ['2017-8-23', '初二', '處暑'],
                                                ['2017-8-24', '初三'],
                                                ['2017-8-25', '初四'],
                                                ['2017-8-26', '初五'],
                                                ['2017-8-27', '初六'],
                                                ['2017-8-28', '初七'],
                                                ['2017-8-29', '初八'],
                                                ['2017-8-30', '初九'],
                                                ['2017-8-31', '初十'],
                                                ['2017-9-1', '十一'],
                                                ['2017-9-2', '十二'],
                                                ['2017-9-3', '十三'],
                                                ['2017-9-4', '十四'],
                                                ['2017-9-5', '十五'],
                                                ['2017-9-6', '十六'],
                                                ['2017-9-7', '十七', '白露'],
                                                ['2017-9-8', '十八'],
                                                ['2017-9-9', '十九'],
                                                ['2017-9-10', '二十'],
                                                ['2017-9-11', '廿一'],
                                                ['2017-9-12', '廿二'],
                                                ['2017-9-13', '廿三'],
                                                ['2017-9-14', '廿四'],
                                                ['2017-9-15', '廿五'],
                                                ['2017-9-16', '廿六'],
                                                ['2017-9-17', '廿七'],
                                                ['2017-9-18', '廿八'],
                                                ['2017-9-19', '廿九'],
                                                ['2017-9-20', '八月'],
                                                ['2017-9-21', '初二'],
                                                ['2017-9-22', '初三'],
                                                ['2017-9-23', '初四', '秋分'],
                                                ['2017-9-24', '初五'],
                                                ['2017-9-25', '初六'],
                                                ['2017-9-26', '初七'],
                                                ['2017-9-27', '初八'],
                                                ['2017-9-28', '初九'],
                                                ['2017-9-29', '初十'],
                                                ['2017-9-30', '十一'],
                                                ['2017-10-1', '十二'],
                                                ['2017-10-2', '十三'],
                                                ['2017-10-3', '十四'],
                                                ['2017-10-4', '十五'],
                                                ['2017-10-5', '十六'],
                                                ['2017-10-6', '十七'],
                                                ['2017-10-7', '十八'],
                                                ['2017-10-8', '十九', '寒露'],
                                                ['2017-10-9', '二十'],
                                                ['2017-10-10', '廿一'],
                                                ['2017-10-11', '廿二'],
                                                ['2017-10-12', '廿三'],
                                                ['2017-10-13', '廿四'],
                                                ['2017-10-14', '廿五'],
                                                ['2017-10-15', '廿六'],
                                                ['2017-10-16', '廿七'],
                                                ['2017-10-17', '廿八'],
                                                ['2017-10-18', '廿九'],
                                                ['2017-10-19', '三十'],
                                                ['2017-10-20', '九月'],
                                                ['2017-10-21', '初二'],
                                                ['2017-10-22', '初三'],
                                                ['2017-10-23', '初四', '霜降'],
                                                ['2017-10-24', '初五'],
                                                ['2017-10-25', '初六'],
                                                ['2017-10-26', '初七'],
                                                ['2017-10-27', '初八'],
                                                ['2017-10-28', '初九'],
                                                ['2017-10-29', '初十'],
                                                ['2017-10-30', '十一'],
                                                ['2017-10-31', '十二'],
                                                ['2017-11-1', '十三'],
                                                ['2017-11-2', '十四'],
                                                ['2017-11-3', '十五'],
                                                ['2017-11-4', '十六'],
                                                ['2017-11-5', '十七'],
                                                ['2017-11-6', '十八'],
                                                ['2017-11-7', '十九', '立冬'],
                                                ['2017-11-8', '二十'],
                                                ['2017-11-9', '廿一'],
                                                ['2017-11-10', '廿二'],
                                                ['2017-11-11', '廿三'],
                                                ['2017-11-12', '廿四'],
                                                ['2017-11-13', '廿五'],
                                                ['2017-11-14', '廿六'],
                                                ['2017-11-15', '廿七'],
                                                ['2017-11-16', '廿八'],
                                                ['2017-11-17', '廿九'],
                                                ['2017-11-18', '十月'],
                                                ['2017-11-19', '初二'],
                                                ['2017-11-20', '初三'],
                                                ['2017-11-21', '初四'],
                                                ['2017-11-22', '初五', '小雪'],
                                                ['2017-11-23', '初六'],
                                                ['2017-11-24', '初七'],
                                                ['2017-11-25', '初八'],
                                                ['2017-11-26', '初九'],
                                                ['2017-11-27', '初十'],
                                                ['2017-11-28', '十一'],
                                                ['2017-11-29', '十二'],
                                                ['2017-11-30', '十三'],
                                                ['2017-12-1', '十四'],
                                                ['2017-12-2', '十五'],
                                                ['2017-12-3', '十六'],
                                                ['2017-12-4', '十七'],
                                                ['2017-12-5', '十八'],
                                                ['2017-12-6', '十九'],
                                                ['2017-12-7', '二十', '大雪'],
                                                ['2017-12-8', '廿一'],
                                                ['2017-12-9', '廿二'],
                                                ['2017-12-10', '廿三'],
                                                ['2017-12-11', '廿四'],
                                                ['2017-12-12', '廿五'],
                                                ['2017-12-13', '廿六'],
                                                ['2017-12-14', '廿七'],
                                                ['2017-12-15', '廿八'],
                                                ['2017-12-16', '廿九'],
                                                ['2017-12-17', '三十'],
                                                ['2017-12-18', '十一月'],
                                                ['2017-12-19', '初二'],
                                                ['2017-12-20', '初三'],
                                                ['2017-12-21', '初四'],
                                                ['2017-12-22', '初五', '冬至'],
                                                ['2017-12-23', '初六'],
                                                ['2017-12-24', '初七'],
                                                ['2017-12-25', '初八'],
                                                ['2017-12-26', '初九'],
                                                ['2017-12-27', '初十'],
                                                ['2017-12-28', '十一'],
                                                ['2017-12-29', '十二'],
                                                ['2017-12-30', '十三'],
                                                ['2017-12-31', '十四']
                                            ];
                                            var ranges = ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06',
                                                '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12'];
                                            var currentRangeIndex = 4;
                                            var heatmapData = [];
                                            var lunarData = [];
                                            for (var i = 0; i < dateList.length; i++) {
                                                heatmapData.push([
                                                    dateList[i][0],
                                                    (Math.random() * 600).toFixed(0)
                                                ]);
                                                lunarData.push([
                                                    dateList[i][0],
                                                    1,
                                                    dateList[i][1],
                                                    dateList[i][2]
                                                ]);
                                            }

                                            var option = {
                                                title: {
                                                    left: 'center',
                                                    text: '2017年人员流动统计',
                                                    textStyle: {
                                                        color: '#fff'
                                                    }
                                                },
                                                tooltip: {
                                                    formatter: function (params) {
                                                        return '人员流动: ' + params.value[1];
                                                    }
                                                },
                                                visualMap: {
                                                    show: false,
                                                    min: 0,
                                                    max: 300,
                                                    calculable: true,
                                                    seriesIndex: [2],
                                                    orient: 'horizontal',
                                                    left: 'center',
                                                    bottom: 20,
                                                    inRange: {
                                                        color: ['#e0ffff', '#006edd'],
                                                        opacity: 0.3
                                                    },
                                                    controller: {
                                                        inRange: {
                                                            opacity: 0.5
                                                        }
                                                    }
                                                },

                                                calendar: [
                                                    {
                                                        left: 'center',
                                                        top: '85',
                                                        cellSize: [100, 65],
                                                        yearLabel: {show: false},
                                                        orient: 'vertical',
                                                        dayLabel: {
                                                            firstDay: 1,
                                                            nameMap: 'cn',
                                                            textStyle: {
                                                                color: '#fff'
                                                            }
                                                        },
                                                        monthLabel: {
                                                            show: true,
                                                            nameMap: 'cn',
                                                            textStyle: {
                                                                color: '#fff'
                                                            }
                                                        },
                                                        range: '2017-05'
                                                    }
                                                ],

                                                series: [
                                                    {
                                                        type: 'scatter',
                                                        coordinateSystem: 'calendar',
                                                        symbolSize: 1,
                                                        label: {
                                                            normal: {
                                                                show: true,
                                                                formatter: function (params) {
                                                                    var d = echarts.number.parseDate(params.value[0]);
                                                                    return d.getDate() + '\n\n' + (params.value[2] + (params.value[3] ? ('(' + params.value[3] + ')') : '')) + '\n\n';
                                                                },
                                                                textStyle: {
                                                                    color: '#000'
                                                                }
                                                            }
                                                        },
                                                        data: lunarData
                                                    },
                                                    {
                                                        type: 'scatter',
                                                        coordinateSystem: 'calendar',
                                                        symbolSize: 1,
                                                        label: {
                                                            normal: {
                                                                show: true,
                                                                formatter: function (params) {
                                                                    return '\n\n\n' + (params.data[1] || '');
                                                                },
                                                                textStyle: {
                                                                    fontSize: 14,
                                                                    fontWeight: 700,
                                                                    color: '#a00'
                                                                }
                                                            }
                                                        },
                                                        data: heatmapData
                                                    },
                                                    {
                                                        name: '人员流动',
                                                        type: 'heatmap',
                                                        coordinateSystem: 'calendar',
                                                        data: heatmapData
                                                    }
                                                ]
                                            };

                                            con.echart.setOption(option);

                                            setInterval(function () {
                                                if (con.canInterval) {
                                                    if (currentRangeIndex == ranges.length)
                                                        currentRangeIndex = 0;
                                                    option.calendar[0].range = ranges[currentRangeIndex];
                                                    con.echart.setOption(option);
                                                    currentRangeIndex++;
                                                }
                                            }, 3000);
                                        }
                                    );
                                },
                                resize: function (con, width, height, oldWidth, oldHeight, eOpts) {
                                    if (document.getElementById("chart306"))
                                        document.getElementById("chart306").style.width = width + 'px';
                                    if (con.echart) {
                                        con.echart.resize();
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            width: '98%',
            style: 'background: transparent url(resources/images/5.jpg);',// no-repeat fixed top
            layout: 'vbox',
            items: [
                {
                    xtype: 'container',
                    width: '100%',
                    height: 80,
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'container',
                            width: '30%',
                            height: '100%',
                            layout: {
                                type: 'hbox',
                                align: 'center',
                                pack: 'middle'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    style: 'font-family: 微软雅黑; font-size: 14px; color: #cccccc',
                                    text: '（总户数）'
                                },
                                {
                                    xtype: 'label',
                                    style: 'font-family: 微软雅黑; font-size: 36px; font-weight: bold; color: #CD853F',
                                    text: '000,000,000',
                                    listeners: {
                                        afterrender: function (label) {
                                            var i = 0;
                                            var interval = setInterval(function () {
                                                if (i < 20) {
                                                    i++;
                                                    var random = Ext.Number.toFixed(Math.random() * 1000000000, 0) + '';
                                                    label.setText(formatNum(random));
                                                } else {
                                                    clearInterval(interval);
                                                    label.setText('452,145,521');
                                                }
                                            }, 50);
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            width: '40%',
                            height: '100%',
                            layout: {
                                type: 'vbox',
                                align: 'center',
                                pack: 'middle'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    html: '<span style="font-family: 微软雅黑; font-size: 18px; font-weight: bold; color: #2ac3d3">宏腾管理平台数据一览</span>'
                                },
                                {
                                    xtype: 'label',
                                    html: '<hr style="width: 180px; border: 1px solid #172936"/>'
                                },
                                {
                                    xtype: 'label',
                                    html: '<span style="font-family: 微软雅黑; font-size: 13px; color: #2ac3d3">数据：2017年4月10日</span>'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            width: '30%',
                            height: '100%',
                            layout: {
                                type: 'hbox',
                                align: 'center',
                                pack: 'middle'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    style: 'font-family: 微软雅黑; font-size: 36px; font-weight: bold; color: #CD853F',
                                    text: '0,000,000,000',
                                    listeners: {
                                        afterrender: function (label) {
                                            var i = 0;
                                            var interval = setInterval(function () {
                                                if (i < 20) {
                                                    i++;
                                                    var random = Ext.Number.toFixed(Math.random() * 10000000000, 0) + '';
                                                    label.setText(formatNum(random));
                                                } else {
                                                    clearInterval(interval);
                                                    label.setText('1,122,145,236');
                                                }
                                            }, 50);
                                        }
                                    }
                                },
                                {
                                    xtype: 'label',
                                    style: 'font-family: 微软雅黑; font-size: 14px; color: #cccccc',
                                    text: '（APP用户量）'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    width: '100%',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'container',
                            width: '30%',
                            layout: 'vbox',
                            items: [
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    margin: '0 0 10 2',
                                    height: 220,
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            title: '<span style="color: #fff">本周新增登记住户</span>',
                                            style: 'border: 3px solid #172936;border-radius: 10px;background: transparent',
                                            width: '50%',
                                            margin: '0 10 0 0',
                                            height: '100%',
                                            listeners: {
                                                afterrender: function (con) {
                                                    require(
                                                        [
                                                            'echarts3/echarts.min'
                                                        ],
                                                        function (echarts) {
                                                            con.setHtml('<div id="chart201" style="width: ' + con.getWidth() + 'px; height: 220px"></div>');
                                                            con.echart = echarts.init(document.getElementById("chart201"));
                                                            var data = {
                                                                name: '新增用户',
                                                                value: 31861,
                                                                prevalue: 30805,
                                                                hismax: 77598
                                                            };
                                                            var increase = data.value > data.prevalue;
                                                            var option = {
                                                                series: [
                                                                    {
                                                                        type: 'pie',
                                                                        silent: true,
                                                                        center: ['40%', '30%'],
                                                                        radius: ['40%', '50%'],
                                                                        label: {
                                                                            normal: {
                                                                                position: 'center',
                                                                                formatter: function (params) {
                                                                                    if (params.name == "other")
                                                                                        return "";
                                                                                    return params.value + '\n' + params.name;
                                                                                },
                                                                                textStyle: {
                                                                                    fontStyle: 'normal',
                                                                                    fontWeight: 'normal',
                                                                                    fontSize: 16,
                                                                                    color: '#fff'
                                                                                }
                                                                            }
                                                                        },
                                                                        data: [
                                                                            {
                                                                                name: 'other',
                                                                                value: data.hismax - data.value,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        color: '#172936'
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                name: data.name,
                                                                                value: data.value,
                                                                                prevalue: data.prevalue,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        // color: '#2ac3d3'
                                                                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                                                            {
                                                                                                offset: 0,
                                                                                                color: '#33d6b0'
                                                                                            },
                                                                                            {
                                                                                                offset: 0.3,
                                                                                                color: '#70fc7d'
                                                                                            },
                                                                                            {
                                                                                                offset: 0.5,
                                                                                                color: '#f8ff03'
                                                                                            },
                                                                                            {
                                                                                                offset: 0.7,
                                                                                                color: '#f5bc00'
                                                                                            },
                                                                                            {
                                                                                                offset: 1,
                                                                                                color: '#ffcb8c'
                                                                                            }
                                                                                        ])
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        markPoint: {
                                                                            data: [
                                                                                {
                                                                                    symbol: 'triangle',
                                                                                    symbolSize: 15,
                                                                                    symbolRotate: increase ? 0 : 180,
                                                                                    itemStyle: {
                                                                                        normal: {
                                                                                            color: increase ? '#FF4500' : '#4EEE94'
                                                                                        }
                                                                                    },
                                                                                    name: data.name,
                                                                                    value: '同比 ' + ((data.value - data.prevalue) * 100 / data.prevalue).toFixed(2) + '%',
                                                                                    x: con.echart.getWidth() / 2 - 40,
                                                                                    y: con.echart.getHeight() / 2 + 30,
                                                                                    label: {
                                                                                        normal: {
                                                                                            show: true,
                                                                                            position: 'right',
                                                                                            formatter: function (params) {
                                                                                                return params.value;
                                                                                            },
                                                                                            textStyle: {
                                                                                                fontWeight: 'bold',
                                                                                                color: increase ? '#FF4500' : '#4EEE94'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            };
                                                            con.echart.setOption(option);
                                                        }
                                                    );
                                                },
                                                resize: function (con, width, height, oldWidth, oldHeight, eOpts) {
                                                    if (document.getElementById("chart201"))
                                                        document.getElementById("chart201").style.width = width + 'px';
                                                    if (con.echart) {
                                                        con.echart.resize();
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            xtype: 'fieldset',
                                            title: '<span style="color: #fff">本周活跃用户</span>',
                                            style: 'border: 3px solid #172936;border-radius: 10px;background: transparent',
                                            width: '50%',
                                            margin: '0 0 0 0',
                                            height: '100%',
                                            listeners: {
                                                afterrender: function (con) {
                                                    require(
                                                        [
                                                            'echarts3/echarts.min'
                                                        ],
                                                        function (echarts) {
                                                            con.setHtml('<div id="chart202" style="width: ' + con.getWidth() + 'px; height: 220px"></div>');
                                                            con.echart = echarts.init(document.getElementById("chart202"));
                                                            var data = {
                                                                name: '活跃用户',
                                                                value: 114553,
                                                                prevalue: 120105,
                                                                hismax: 145898
                                                            };
                                                            var increase = data.value > data.prevalue;
                                                            var option = {
                                                                series: [
                                                                    {
                                                                        type: 'pie',
                                                                        silent: true,
                                                                        center: ['40%', '30%'],
                                                                        radius: ['40%', '50%'],
                                                                        label: {
                                                                            normal: {
                                                                                position: 'center',
                                                                                formatter: function (params) {
                                                                                    if (params.name == "other")
                                                                                        return "";
                                                                                    return params.value + '\n' + params.name;
                                                                                },
                                                                                textStyle: {
                                                                                    fontStyle: 'normal',
                                                                                    fontWeight: 'normal',
                                                                                    fontSize: 16,
                                                                                    color: '#fff'
                                                                                }
                                                                            }
                                                                        },
                                                                        data: [
                                                                            {
                                                                                name: 'other',
                                                                                value: data.hismax - data.value,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        color: '#172936'
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                name: data.name,
                                                                                value: data.value,
                                                                                prevalue: data.prevalue,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        // color: '#ffcb8c'
                                                                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                                                            {
                                                                                                offset: 0,
                                                                                                color: '#33d6b0'
                                                                                            },
                                                                                            {
                                                                                                offset: 0.3,
                                                                                                color: '#70fc7d'
                                                                                            },
                                                                                            {
                                                                                                offset: 0.5,
                                                                                                color: '#f8ff03'
                                                                                            },
                                                                                            {
                                                                                                offset: 0.7,
                                                                                                color: '#f5bc00'
                                                                                            },
                                                                                            {
                                                                                                offset: 1,
                                                                                                color: '#ffcb8c'
                                                                                            }
                                                                                        ])
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        markPoint: {
                                                                            data: [
                                                                                {
                                                                                    symbol: 'triangle',
                                                                                    symbolSize: 15,
                                                                                    symbolRotate: increase ? 0 : 180,
                                                                                    itemStyle: {
                                                                                        normal: {
                                                                                            color: increase ? '#FF4500' : '#4EEE94'
                                                                                        }
                                                                                    },
                                                                                    name: data.name,
                                                                                    value: '同比 ' + ((data.value - data.prevalue) * 100 / data.prevalue).toFixed(2) + '%',
                                                                                    x: con.echart.getWidth() / 2 - 40,
                                                                                    y: con.echart.getHeight() / 2 + 30,
                                                                                    label: {
                                                                                        normal: {
                                                                                            show: true,
                                                                                            position: 'right',
                                                                                            formatter: function (params) {
                                                                                                return params.value;
                                                                                            },
                                                                                            textStyle: {
                                                                                                fontWeight: 'bold',
                                                                                                color: increase ? '#FF4500' : '#4EEE94'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            };
                                                            con.echart.setOption(option);
                                                        }
                                                    );
                                                },
                                                resize: function (con, width, height, oldWidth, oldHeight, eOpts) {
                                                    if (document.getElementById("chart202"))
                                                        document.getElementById("chart202").style.width = width + 'px';
                                                    if (con.echart) {
                                                        con.echart.resize();
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    title: '<span style="color: #fff">展位1</span>',
                                    style: 'border: 3px solid #172936;border-radius: 10px;background: transparent',
                                    width: '100%',
                                    height: 250,
                                    margin: '0 0 10 2',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'container',
                                            width: '25%',
                                            height: '100%',
                                            listeners: {
                                                afterrender: function (con0) {
                                                    var data = [
                                                        {
                                                            name: '代理商数量',
                                                            value: 342305,
                                                            prevalue: 382305,
                                                            hismax: 455898
                                                        },
                                                        {
                                                            name: '小区数量',
                                                            value: 1332042,
                                                            prevalue: 1552305,
                                                            hismax: 1896900
                                                        },
                                                        {
                                                            name: 'APP用户量',
                                                            value: 305652,
                                                            prevalue: 323305,
                                                            hismax: 446783
                                                        },
                                                        {
                                                            name: '主机上线量',
                                                            value: 114553,
                                                            prevalue: 120105,
                                                            hismax: 145898
                                                        }
                                                    ];
                                                    var increase0 = data[0].value > data[0].prevalue;
                                                    var increase1 = data[1].value > data[1].prevalue;
                                                    var increase2 = data[2].value > data[2].prevalue;
                                                    var increase3 = data[3].value > data[3].prevalue;
                                                    var increase = [increase0, increase1, increase2, increase3];
                                                    var colors = ['#32dadd', '#c8b2f4', '#63c2ff', '#ffcb8c'];
                                                    require(
                                                        [
                                                            'echarts3/echarts.min'
                                                        ],
                                                        function (echarts) {
                                                            con0.setHtml('<div id="chart2031" style="width: ' + con0.getWidth() + 'px; height: 250px"></div>');
                                                            con0.echart = echarts.init(document.getElementById("chart2031"));
                                                            var option = {
                                                                series: [
                                                                    {
                                                                        type: 'pie',
                                                                        silent: true,
                                                                        center: ['50%', '30%'],
                                                                        radius: ['70%', '80%'],
                                                                        label: {
                                                                            normal: {
                                                                                position: 'center',
                                                                                formatter: function (params) {
                                                                                    if (params.name == "other")
                                                                                        return "";
                                                                                    return params.value + '\n' + params.name;
                                                                                },
                                                                                textStyle: {
                                                                                    fontStyle: 'normal',
                                                                                    fontWeight: 'normal',
                                                                                    fontSize: 12,
                                                                                    color: '#fff'
                                                                                }
                                                                            }
                                                                        },
                                                                        data: [
                                                                            {
                                                                                name: 'other',
                                                                                value: data[0].hismax - data[0].value,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        color: '#172936'
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                name: data[0].name,
                                                                                value: data[0].value,
                                                                                prevalue: data[0].prevalue,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        // color: colors[0]
                                                                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                                                            {
                                                                                                offset: 0,
                                                                                                color: '#fff'
                                                                                            },
                                                                                            {
                                                                                                offset: 1,
                                                                                                color: colors[0]
                                                                                            }
                                                                                        ])
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        markPoint: {
                                                                            data: [
                                                                                {
                                                                                    symbol: 'triangle',
                                                                                    symbolSize: 15,
                                                                                    symbolRotate: increase[0] ? 0 : 180,
                                                                                    itemStyle: {
                                                                                        normal: {
                                                                                            color: increase[0] ? '#FF4500'  : '#4EEE94'
                                                                                        }
                                                                                    },
                                                                                    name: data[0].name,
                                                                                    value: '同比上周\n' + ((data[0].value - data[0].prevalue) * 100 / data[0].prevalue).toFixed(2) + '%',
                                                                                    x: 30,
                                                                                    y: con0.echart.getHeight() / 2 + 25,
                                                                                    label: {
                                                                                        normal: {
                                                                                            show: true,
                                                                                            position: 'right',
                                                                                            formatter: function (params) {
                                                                                                return params.value;
                                                                                            },
                                                                                            textStyle: {
                                                                                                fontWeight: 'bold',
                                                                                                color: increase[0] ? '#FF4500'  : '#4EEE94'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            };
                                                            con0.echart.setOption(option);
                                                        }
                                                    );
                                                },
                                                resize: function (con0, width, height, oldWidth, oldHeight, eOpts) {
                                                    if (document.getElementById("chart2031"))
                                                        document.getElementById("chart2031").style.width = width + 'px';
                                                    if (con0.echart) {
                                                        con0.echart.resize();
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            xtype: 'container',
                                            width: '25%',
                                            height: '100%',
                                            listeners: {
                                                afterrender: function (con0) {
                                                    var data = [
                                                        {
                                                            name: '代理商数量',
                                                            value: 342305,
                                                            prevalue: 382305,
                                                            hismax: 455898
                                                        },
                                                        {
                                                            name: '小区数量',
                                                            value: 1332042,
                                                            prevalue: 1552305,
                                                            hismax: 1896900
                                                        },
                                                        {
                                                            name: 'APP用户量',
                                                            value: 305652,
                                                            prevalue: 323305,
                                                            hismax: 446783
                                                        },
                                                        {
                                                            name: '主机上线量',
                                                            value: 114553,
                                                            prevalue: 120105,
                                                            hismax: 145898
                                                        }
                                                    ];
                                                    var increase0 = data[0].value > data[0].prevalue;
                                                    var increase1 = data[1].value > data[1].prevalue;
                                                    var increase2 = data[2].value > data[2].prevalue;
                                                    var increase3 = data[3].value > data[3].prevalue;
                                                    var increase = [increase0, increase1, increase2, increase3];
                                                    var colors = ['#32dadd', '#c8b2f4', '#63c2ff', '#ffcb8c'];
                                                    require(
                                                        [
                                                            'echarts3/echarts.min'
                                                        ],
                                                        function (echarts) {
                                                            con0.setHtml('<div id="chart2032" style="width: ' + con0.getWidth() + 'px; height: 250px"></div>');
                                                            con0.echart = echarts.init(document.getElementById("chart2032"));
                                                            var option = {
                                                                series: [
                                                                    {
                                                                        type: 'pie',
                                                                        silent: true,
                                                                        center: ['50%', '30%'],
                                                                        radius: ['70%', '80%'],
                                                                        label: {
                                                                            normal: {
                                                                                position: 'center',
                                                                                formatter: function (params) {
                                                                                    if (params.name == "other")
                                                                                        return "";
                                                                                    return params.value + '\n' + params.name;
                                                                                },
                                                                                textStyle: {
                                                                                    fontStyle: 'normal',
                                                                                    fontWeight: 'normal',
                                                                                    fontSize: 12,
                                                                                    color: '#fff'
                                                                                }
                                                                            }
                                                                        },
                                                                        data: [
                                                                            {
                                                                                name: 'other',
                                                                                value: data[1].hismax - data[1].value,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        color: '#172936'
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                name: data[1].name,
                                                                                value: data[1].value,
                                                                                prevalue: data[1].prevalue,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        // color: colors[1]
                                                                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                                                            {
                                                                                                offset: 0,
                                                                                                color: '#fff'
                                                                                            },
                                                                                            {
                                                                                                offset: 1,
                                                                                                color: colors[1]
                                                                                            }
                                                                                        ])
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        markPoint: {
                                                                            data: [
                                                                                {
                                                                                    symbol: 'triangle',
                                                                                    symbolSize: 15,
                                                                                    symbolRotate: increase[1] ? 0 : 180,
                                                                                    itemStyle: {
                                                                                        normal: {
                                                                                            color: increase[1] ? '#FF4500'  : '#4EEE94'
                                                                                        }
                                                                                    },
                                                                                    name: data[1].name,
                                                                                    value: '同比上周\n' + ((data[1].value - data[1].prevalue) * 100 / data[1].prevalue).toFixed(2) + '%',
                                                                                    x: 30,
                                                                                    y: con0.echart.getHeight() / 2 + 25,
                                                                                    label: {
                                                                                        normal: {
                                                                                            show: true,
                                                                                            position: 'right',
                                                                                            formatter: function (params) {
                                                                                                return params.value;
                                                                                            },
                                                                                            textStyle: {
                                                                                                fontWeight: 'bold',
                                                                                                color: increase[1] ? '#FF4500'  : '#4EEE94'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            };
                                                            con0.echart.setOption(option);
                                                        }
                                                    );
                                                },
                                                resize: function (con0, width, height, oldWidth, oldHeight, eOpts) {
                                                    if (document.getElementById("chart2032"))
                                                        document.getElementById("chart2032").style.width = width + 'px';
                                                    if (con0.echart) {
                                                        con0.echart.resize();
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            xtype: 'container',
                                            width: '25%',
                                            height: '100%',
                                            listeners: {
                                                afterrender: function (con0) {
                                                    var data = [
                                                        {
                                                            name: '代理商数量',
                                                            value: 342305,
                                                            prevalue: 382305,
                                                            hismax: 455898
                                                        },
                                                        {
                                                            name: '小区数量',
                                                            value: 1332042,
                                                            prevalue: 1552305,
                                                            hismax: 1896900
                                                        },
                                                        {
                                                            name: 'APP用户量',
                                                            value: 305652,
                                                            prevalue: 323305,
                                                            hismax: 446783
                                                        },
                                                        {
                                                            name: '主机上线量',
                                                            value: 114553,
                                                            prevalue: 120105,
                                                            hismax: 145898
                                                        }
                                                    ];
                                                    var increase0 = data[0].value > data[0].prevalue;
                                                    var increase1 = data[1].value > data[1].prevalue;
                                                    var increase2 = data[2].value > data[2].prevalue;
                                                    var increase3 = data[3].value > data[3].prevalue;
                                                    var increase = [increase0, increase1, increase2, increase3];
                                                    var colors = ['#32dadd', '#c8b2f4', '#63c2ff', '#ffcb8c'];
                                                    require(
                                                        [
                                                            'echarts3/echarts.min'
                                                        ],
                                                        function (echarts) {
                                                            con0.setHtml('<div id="chart2033" style="width: ' + con0.getWidth() + 'px; height: 250px"></div>');
                                                            con0.echart = echarts.init(document.getElementById("chart2033"));
                                                            var option = {
                                                                series: [
                                                                    {
                                                                        type: 'pie',
                                                                        silent: true,
                                                                        center: ['50%', '30%'],
                                                                        radius: ['70%', '80%'],
                                                                        label: {
                                                                            normal: {
                                                                                position: 'center',
                                                                                formatter: function (params) {
                                                                                    if (params.name == "other")
                                                                                        return "";
                                                                                    return params.value + '\n' + params.name;
                                                                                },
                                                                                textStyle: {
                                                                                    fontStyle: 'normal',
                                                                                    fontWeight: 'normal',
                                                                                    fontSize: 12,
                                                                                    color: '#fff'
                                                                                }
                                                                            }
                                                                        },
                                                                        data: [
                                                                            {
                                                                                name: 'other',
                                                                                value: data[2].hismax - data[2].value,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        color: '#172936'
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                name: data[2].name,
                                                                                value: data[2].value,
                                                                                prevalue: data[2].prevalue,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        // color: colors[2]
                                                                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                                                            {
                                                                                                offset: 0,
                                                                                                color: '#fff'
                                                                                            },
                                                                                            {
                                                                                                offset: 1,
                                                                                                color: colors[2]
                                                                                            }
                                                                                        ])
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        markPoint: {
                                                                            data: [
                                                                                {
                                                                                    symbol: 'triangle',
                                                                                    symbolSize: 15,
                                                                                    symbolRotate: increase[2] ? 0 : 180,
                                                                                    itemStyle: {
                                                                                        normal: {
                                                                                            color: increase[2] ? '#FF4500'  : '#4EEE94'
                                                                                        }
                                                                                    },
                                                                                    name: data[2].name,
                                                                                    value: '同比上周\n' + ((data[2].value - data[2].prevalue) * 100 / data[2].prevalue).toFixed(2) + '%',
                                                                                    x: 30,
                                                                                    y: con0.echart.getHeight() / 2 + 25,
                                                                                    label: {
                                                                                        normal: {
                                                                                            show: true,
                                                                                            position: 'right',
                                                                                            formatter: function (params) {
                                                                                                return params.value;
                                                                                            },
                                                                                            textStyle: {
                                                                                                fontWeight: 'bold',
                                                                                                color: increase[2] ? '#FF4500'  : '#4EEE94'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            };
                                                            con0.echart.setOption(option);
                                                        }
                                                    );
                                                },
                                                resize: function (con0, width, height, oldWidth, oldHeight, eOpts) {
                                                    if (document.getElementById("chart2033"))
                                                        document.getElementById("chart2033").style.width = width + 'px';
                                                    if (con0.echart) {
                                                        con0.echart.resize();
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            xtype: 'container',
                                            width: '25%',
                                            height: '100%',
                                            listeners: {
                                                afterrender: function (con0) {
                                                    var data = [
                                                        {
                                                            name: '代理商数量',
                                                            value: 342305,
                                                            prevalue: 382305,
                                                            hismax: 455898
                                                        },
                                                        {
                                                            name: '小区数量',
                                                            value: 1332042,
                                                            prevalue: 1552305,
                                                            hismax: 1896900
                                                        },
                                                        {
                                                            name: 'APP用户量',
                                                            value: 305652,
                                                            prevalue: 323305,
                                                            hismax: 446783
                                                        },
                                                        {
                                                            name: '主机上线量',
                                                            value: 114553,
                                                            prevalue: 120105,
                                                            hismax: 145898
                                                        }
                                                    ];
                                                    var increase0 = data[0].value > data[0].prevalue;
                                                    var increase1 = data[1].value > data[1].prevalue;
                                                    var increase2 = data[2].value > data[2].prevalue;
                                                    var increase3 = data[3].value > data[3].prevalue;
                                                    var increase = [increase0, increase1, increase2, increase3];
                                                    var colors = ['#32dadd', '#c8b2f4', '#63c2ff', '#ffcb8c'];
                                                    require(
                                                        [
                                                            'echarts3/echarts.min'
                                                        ],
                                                        function (echarts) {
                                                            con0.setHtml('<div id="chart2034" style="width: ' + con0.getWidth() + 'px; height: 250px"></div>');
                                                            con0.echart = echarts.init(document.getElementById("chart2034"));
                                                            var option = {
                                                                series: [
                                                                    {
                                                                        type: 'pie',
                                                                        silent: true,
                                                                        center: ['50%', '30%'],
                                                                        radius: ['70%', '80%'],
                                                                        label: {
                                                                            normal: {
                                                                                position: 'center',
                                                                                formatter: function (params) {
                                                                                    if (params.name == "other")
                                                                                        return "";
                                                                                    return params.value + '\n' + params.name;
                                                                                },
                                                                                textStyle: {
                                                                                    fontStyle: 'normal',
                                                                                    fontWeight: 'normal',
                                                                                    fontSize: 12,
                                                                                    color: '#fff'
                                                                                }
                                                                            }
                                                                        },
                                                                        data: [
                                                                            {
                                                                                name: 'other',
                                                                                value: data[3].hismax - data[3].value,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        color: '#172936'
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                name: data[3].name,
                                                                                value: data[3].value,
                                                                                prevalue: data[3].prevalue,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        // color: colors[3]
                                                                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                                                            {
                                                                                                offset: 0,
                                                                                                color: '#fff'
                                                                                            },
                                                                                            {
                                                                                                offset: 1,
                                                                                                color: colors[3]
                                                                                            }
                                                                                        ])
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        markPoint: {
                                                                            data: [
                                                                                {
                                                                                    symbol: 'triangle',
                                                                                    symbolSize: 15,
                                                                                    symbolRotate: increase[3] ? 0 : 180,
                                                                                    itemStyle: {
                                                                                        normal: {
                                                                                            color: increase[3] ? '#FF4500'  : '#4EEE94'
                                                                                        }
                                                                                    },
                                                                                    name: data[3].name,
                                                                                    value: '同比上周\n' + ((data[3].value - data[3].prevalue) * 100 / data[3].prevalue).toFixed(2) + '%',
                                                                                    x: 30,
                                                                                    y: con0.echart.getHeight() / 2 + 25,
                                                                                    label: {
                                                                                        normal: {
                                                                                            show: true,
                                                                                            position: 'right',
                                                                                            formatter: function (params) {
                                                                                                return params.value;
                                                                                            },
                                                                                            textStyle: {
                                                                                                fontWeight: 'bold',
                                                                                                color: increase[3] ? '#FF4500'  : '#4EEE94'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            };
                                                            con0.echart.setOption(option);
                                                        }
                                                    );
                                                },
                                                resize: function (con0, width, height, oldWidth, oldHeight, eOpts) {
                                                    if (document.getElementById("chart2034"))
                                                        document.getElementById("chart2034").style.width = width + 'px';
                                                    if (con0.echart) {
                                                        con0.echart.resize();
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    title: '<span style="color: #fff">展位2</span>',
                                    style: 'border: 3px solid #172936;border-radius: 10px;background: transparent',
                                    width: '100%',
                                    margin: '0 0 10 2',
                                    height: 250,
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'container',
                                            width: '25%',
                                            height: '100%',
                                            listeners: {
                                                afterrender: function (con0) {
                                                    var data = [
                                                        {
                                                            name: '刷卡开门数',
                                                            value: 342305,
                                                            prevalue: 382305,
                                                            hismax: 455898
                                                        },
                                                        {
                                                            name: 'APP开门数',
                                                            value: 1332042,
                                                            prevalue: 1552305,
                                                            hismax: 1896900
                                                        },
                                                        {
                                                            name: '拨号开门数',
                                                            value: 305652,
                                                            prevalue: 323305,
                                                            hismax: 446783
                                                        },
                                                        {
                                                            name: '密码开门数',
                                                            value: 114553,
                                                            prevalue: 120105,
                                                            hismax: 145898
                                                        }
                                                    ];
                                                    var increase0 = data[0].value > data[0].prevalue;
                                                    var increase1 = data[1].value > data[1].prevalue;
                                                    var increase2 = data[2].value > data[2].prevalue;
                                                    var increase3 = data[3].value > data[3].prevalue;
                                                    var increase = [increase0, increase1, increase2, increase3];
                                                    var colors = ['#32dadd', '#c8b2f4', '#63c2ff', '#ffcb8c'];
                                                    require(
                                                        [
                                                            'echarts3/echarts.min'
                                                        ],
                                                        function (echarts) {
                                                            con0.setHtml('<div id="chart2041" style="width: ' + con0.getWidth() + 'px; height: 250px"></div>');
                                                            con0.echart = echarts.init(document.getElementById("chart2041"));
                                                            var option = {
                                                                series: [
                                                                    {
                                                                        type: 'pie',
                                                                        silent: true,
                                                                        center: ['50%', '30%'],
                                                                        radius: ['70%', '80%'],
                                                                        label: {
                                                                            normal: {
                                                                                position: 'center',
                                                                                formatter: function (params) {
                                                                                    if (params.name == "other")
                                                                                        return "";
                                                                                    return params.value + '\n' + params.name;
                                                                                },
                                                                                textStyle: {
                                                                                    fontStyle: 'normal',
                                                                                    fontWeight: 'normal',
                                                                                    fontSize: 12,
                                                                                    color: '#fff'
                                                                                }
                                                                            }
                                                                        },
                                                                        data: [
                                                                            {
                                                                                name: 'other',
                                                                                value: data[0].hismax - data[0].value,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        color: '#172936'
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                name: data[0].name,
                                                                                value: data[0].value,
                                                                                prevalue: data[0].prevalue,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        // color: colors[0]
                                                                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                                                            {
                                                                                                offset: 0,
                                                                                                color: '#fff'
                                                                                            },
                                                                                            {
                                                                                                offset: 1,
                                                                                                color: colors[0]
                                                                                            }
                                                                                        ])
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        markPoint: {
                                                                            data: [
                                                                                {
                                                                                    symbol: 'triangle',
                                                                                    symbolSize: 15,
                                                                                    symbolRotate: increase[0] ? 0 : 180,
                                                                                    itemStyle: {
                                                                                        normal: {
                                                                                            color: increase[0] ? '#FF4500'  : '#4EEE94'
                                                                                        }
                                                                                    },
                                                                                    name: data[0].name,
                                                                                    value: '同比上周\n' + ((data[0].value - data[0].prevalue) * 100 / data[0].prevalue).toFixed(2) + '%',
                                                                                    x: 30,
                                                                                    y: con0.echart.getHeight() / 2 + 25,
                                                                                    label: {
                                                                                        normal: {
                                                                                            show: true,
                                                                                            position: 'right',
                                                                                            formatter: function (params) {
                                                                                                return params.value;
                                                                                            },
                                                                                            textStyle: {
                                                                                                fontWeight: 'bold',
                                                                                                color: increase[0] ? '#FF4500'  : '#4EEE94'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            };
                                                            con0.echart.setOption(option);
                                                        }
                                                    );
                                                },
                                                resize: function (con0, width, height, oldWidth, oldHeight, eOpts) {
                                                    if (document.getElementById("chart2041"))
                                                        document.getElementById("chart2041").style.width = width + 'px';
                                                    if (con0.echart) {
                                                        con0.echart.resize();
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            xtype: 'container',
                                            width: '25%',
                                            height: '100%',
                                            listeners: {
                                                afterrender: function (con0) {
                                                    var data = [
                                                        {
                                                            name: '刷卡开门数',
                                                            value: 342305,
                                                            prevalue: 382305,
                                                            hismax: 455898
                                                        },
                                                        {
                                                            name: 'APP开门数',
                                                            value: 1332042,
                                                            prevalue: 1552305,
                                                            hismax: 1896900
                                                        },
                                                        {
                                                            name: '拨号开门数',
                                                            value: 305652,
                                                            prevalue: 323305,
                                                            hismax: 446783
                                                        },
                                                        {
                                                            name: '密码开门数',
                                                            value: 114553,
                                                            prevalue: 120105,
                                                            hismax: 145898
                                                        }
                                                    ];
                                                    var increase0 = data[0].value > data[0].prevalue;
                                                    var increase1 = data[1].value > data[1].prevalue;
                                                    var increase2 = data[2].value > data[2].prevalue;
                                                    var increase3 = data[3].value > data[3].prevalue;
                                                    var increase = [increase0, increase1, increase2, increase3];
                                                    var colors = ['#32dadd', '#c8b2f4', '#63c2ff', '#ffcb8c'];
                                                    require(
                                                        [
                                                            'echarts3/echarts.min'
                                                        ],
                                                        function (echarts) {
                                                            con0.setHtml('<div id="chart2042" style="width: ' + con0.getWidth() + 'px; height: 250px"></div>');
                                                            con0.echart = echarts.init(document.getElementById("chart2042"));
                                                            var option = {
                                                                series: [
                                                                    {
                                                                        type: 'pie',
                                                                        silent: true,
                                                                        center: ['50%', '30%'],
                                                                        radius: ['70%', '80%'],
                                                                        label: {
                                                                            normal: {
                                                                                position: 'center',
                                                                                formatter: function (params) {
                                                                                    if (params.name == "other")
                                                                                        return "";
                                                                                    return params.value + '\n' + params.name;
                                                                                },
                                                                                textStyle: {
                                                                                    fontStyle: 'normal',
                                                                                    fontWeight: 'normal',
                                                                                    fontSize: 12,
                                                                                    color: '#fff'
                                                                                }
                                                                            }
                                                                        },
                                                                        data: [
                                                                            {
                                                                                name: 'other',
                                                                                value: data[1].hismax - data[1].value,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        color: '#172936'
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                name: data[1].name,
                                                                                value: data[1].value,
                                                                                prevalue: data[1].prevalue,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        // color: colors[1]
                                                                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                                                            {
                                                                                                offset: 0,
                                                                                                color: '#fff'
                                                                                            },
                                                                                            {
                                                                                                offset: 1,
                                                                                                color: colors[1]
                                                                                            }
                                                                                        ])
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        markPoint: {
                                                                            data: [
                                                                                {
                                                                                    symbol: 'triangle',
                                                                                    symbolSize: 15,
                                                                                    symbolRotate: increase[1] ? 0 : 180,
                                                                                    itemStyle: {
                                                                                        normal: {
                                                                                            color: increase[1] ? '#FF4500'  : '#4EEE94'
                                                                                        }
                                                                                    },
                                                                                    name: data[1].name,
                                                                                    value: '同比上周\n' + ((data[1].value - data[1].prevalue) * 100 / data[1].prevalue).toFixed(2) + '%',
                                                                                    x: 30,
                                                                                    y: con0.echart.getHeight() / 2 + 25,
                                                                                    label: {
                                                                                        normal: {
                                                                                            show: true,
                                                                                            position: 'right',
                                                                                            formatter: function (params) {
                                                                                                return params.value;
                                                                                            },
                                                                                            textStyle: {
                                                                                                fontWeight: 'bold',
                                                                                                color: increase[1] ? '#FF4500'  : '#4EEE94'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            };
                                                            con0.echart.setOption(option);
                                                        }
                                                    );
                                                },
                                                resize: function (con0, width, height, oldWidth, oldHeight, eOpts) {
                                                    if (document.getElementById("chart2042"))
                                                        document.getElementById("chart2042").style.width = width + 'px';
                                                    if (con0.echart) {
                                                        con0.echart.resize();
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            xtype: 'container',
                                            width: '25%',
                                            height: '100%',
                                            listeners: {
                                                afterrender: function (con0) {
                                                    var data = [
                                                        {
                                                            name: '刷卡开门数',
                                                            value: 342305,
                                                            prevalue: 382305,
                                                            hismax: 455898
                                                        },
                                                        {
                                                            name: 'APP开门数',
                                                            value: 1332042,
                                                            prevalue: 1552305,
                                                            hismax: 1896900
                                                        },
                                                        {
                                                            name: '拨号开门数',
                                                            value: 305652,
                                                            prevalue: 323305,
                                                            hismax: 446783
                                                        },
                                                        {
                                                            name: '密码开门数',
                                                            value: 114553,
                                                            prevalue: 120105,
                                                            hismax: 145898
                                                        }
                                                    ];
                                                    var increase0 = data[0].value > data[0].prevalue;
                                                    var increase1 = data[1].value > data[1].prevalue;
                                                    var increase2 = data[2].value > data[2].prevalue;
                                                    var increase3 = data[3].value > data[3].prevalue;
                                                    var increase = [increase0, increase1, increase2, increase3];
                                                    var colors = ['#32dadd', '#c8b2f4', '#63c2ff', '#ffcb8c'];
                                                    require(
                                                        [
                                                            'echarts3/echarts.min'
                                                        ],
                                                        function (echarts) {
                                                            con0.setHtml('<div id="chart2043" style="width: ' + con0.getWidth() + 'px; height: 250px"></div>');
                                                            con0.echart = echarts.init(document.getElementById("chart2043"));
                                                            var option = {
                                                                series: [
                                                                    {
                                                                        type: 'pie',
                                                                        silent: true,
                                                                        center: ['50%', '30%'],
                                                                        radius: ['70%', '80%'],
                                                                        label: {
                                                                            normal: {
                                                                                position: 'center',
                                                                                formatter: function (params) {
                                                                                    if (params.name == "other")
                                                                                        return "";
                                                                                    return params.value + '\n' + params.name;
                                                                                },
                                                                                textStyle: {
                                                                                    fontStyle: 'normal',
                                                                                    fontWeight: 'normal',
                                                                                    fontSize: 12,
                                                                                    color: '#fff'
                                                                                }
                                                                            }
                                                                        },
                                                                        data: [
                                                                            {
                                                                                name: 'other',
                                                                                value: data[2].hismax - data[2].value,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        color: '#172936'
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                name: data[2].name,
                                                                                value: data[2].value,
                                                                                prevalue: data[2].prevalue,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        // color: colors[2]
                                                                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                                                            {
                                                                                                offset: 0,
                                                                                                color: '#fff'
                                                                                            },
                                                                                            {
                                                                                                offset: 1,
                                                                                                color: colors[2]
                                                                                            }
                                                                                        ])
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        markPoint: {
                                                                            data: [
                                                                                {
                                                                                    symbol: 'triangle',
                                                                                    symbolSize: 15,
                                                                                    symbolRotate: increase[2] ? 0 : 180,
                                                                                    itemStyle: {
                                                                                        normal: {
                                                                                            color: increase[2] ? '#FF4500' : '#4EEE94'
                                                                                        }
                                                                                    },
                                                                                    name: data[2].name,
                                                                                    value: '同比上周\n' + ((data[2].value - data[2].prevalue) * 100 / data[2].prevalue).toFixed(2) + '%',
                                                                                    x: 30,
                                                                                    y: con0.echart.getHeight() / 2 + 25,
                                                                                    label: {
                                                                                        normal: {
                                                                                            show: true,
                                                                                            position: 'right',
                                                                                            formatter: function (params) {
                                                                                                return params.value;
                                                                                            },
                                                                                            textStyle: {
                                                                                                fontWeight: 'bold',
                                                                                                color: increase[2] ? '#FF4500' : '#4EEE94'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            };
                                                            con0.echart.setOption(option);
                                                        }
                                                    );
                                                },
                                                resize: function (con0, width, height, oldWidth, oldHeight, eOpts) {
                                                    if (document.getElementById("chart2043"))
                                                        document.getElementById("chart2043").style.width = width + 'px';
                                                    if (con0.echart) {
                                                        con0.echart.resize();
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            xtype: 'container',
                                            width: '25%',
                                            height: '100%',
                                            listeners: {
                                                afterrender: function (con0) {
                                                    var data = [
                                                        {
                                                            name: '刷卡开门数',
                                                            value: 342305,
                                                            prevalue: 382305,
                                                            hismax: 455898
                                                        },
                                                        {
                                                            name: 'APP开门数',
                                                            value: 1332042,
                                                            prevalue: 1552305,
                                                            hismax: 1896900
                                                        },
                                                        {
                                                            name: '拨号开门数',
                                                            value: 305652,
                                                            prevalue: 323305,
                                                            hismax: 446783
                                                        },
                                                        {
                                                            name: '密码开门数',
                                                            value: 114553,
                                                            prevalue: 120105,
                                                            hismax: 145898
                                                        }
                                                    ];
                                                    var increase0 = data[0].value > data[0].prevalue;
                                                    var increase1 = data[1].value > data[1].prevalue;
                                                    var increase2 = data[2].value > data[2].prevalue;
                                                    var increase3 = data[3].value > data[3].prevalue;
                                                    var increase = [increase0, increase1, increase2, increase3];
                                                    var colors = ['#32dadd', '#c8b2f4', '#63c2ff', '#ffcb8c'];
                                                    require(
                                                        [
                                                            'echarts3/echarts.min'
                                                        ],
                                                        function (echarts) {
                                                            con0.setHtml('<div id="chart2044" style="width: ' + con0.getWidth() + 'px; height: 250px"></div>');
                                                            con0.echart = echarts.init(document.getElementById("chart2044"));
                                                            var option = {
                                                                series: [
                                                                    {
                                                                        type: 'pie',
                                                                        silent: true,
                                                                        center: ['50%', '30%'],
                                                                        radius: ['70%', '80%'],
                                                                        label: {
                                                                            normal: {
                                                                                position: 'center',
                                                                                formatter: function (params) {
                                                                                    if (params.name == "other")
                                                                                        return "";
                                                                                    return params.value + '\n' + params.name;
                                                                                },
                                                                                textStyle: {
                                                                                    fontStyle: 'normal',
                                                                                    fontWeight: 'normal',
                                                                                    fontSize: 12,
                                                                                    color: '#fff'
                                                                                }
                                                                            }
                                                                        },
                                                                        data: [
                                                                            {
                                                                                name: 'other',
                                                                                value: data[3].hismax - data[3].value,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        color: '#172936'
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                name: data[3].name,
                                                                                value: data[3].value,
                                                                                prevalue: data[3].prevalue,
                                                                                itemStyle: {
                                                                                    normal: {
                                                                                        // color: colors[3]
                                                                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                                                            {
                                                                                                offset: 0,
                                                                                                color: '#fff'
                                                                                            },
                                                                                            {
                                                                                                offset: 1,
                                                                                                color: colors[3]
                                                                                            }
                                                                                        ])
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        markPoint: {
                                                                            data: [
                                                                                {
                                                                                    symbol: 'triangle',
                                                                                    symbolSize: 15,
                                                                                    symbolRotate: increase[3] ? 0 : 180,
                                                                                    itemStyle: {
                                                                                        normal: {
                                                                                            color: increase[3] ? '#FF4500' : '#4EEE94'
                                                                                        }
                                                                                    },
                                                                                    name: data[3].name,
                                                                                    value: '同比上周\n' + ((data[3].value - data[3].prevalue) * 100 / data[3].prevalue).toFixed(2) + '%',
                                                                                    x: 30,
                                                                                    y: con0.echart.getHeight() / 2 + 25,
                                                                                    label: {
                                                                                        normal: {
                                                                                            show: true,
                                                                                            position: 'right',
                                                                                            formatter: function (params) {
                                                                                                return params.value;
                                                                                            },
                                                                                            textStyle: {
                                                                                                fontWeight: 'bold',
                                                                                                color: increase[3] ? '#FF4500' : '#4EEE94'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            };
                                                            con0.echart.setOption(option);
                                                        }
                                                    );
                                                },
                                                resize: function (con0, width, height, oldWidth, oldHeight, eOpts) {
                                                    if (document.getElementById("chart2044"))
                                                        document.getElementById("chart2044").style.width = width + 'px';
                                                    if (con0.echart) {
                                                        con0.echart.resize();
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            width: '40%',
                            layout: 'vbox',
                            items: [
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    height: 470,
                                    listeners: {
                                        afterrender: function (con0) {
                                            require(
                                                [
                                                    'echarts3/echarts.min'
                                                ],
                                                function (echarts) {
                                                    con0.setHtml('<div id="chart207" style="width: ' + con0.getWidth() + 'px; height: 720px"></div>');
                                                    con0.echart = echarts.init(document.getElementById("chart207"));

                                                    Ext.Ajax.request({
                                                        url: 'echarts3/data/china.json',
                                                        success: function (response) {
                                                            var chinaJson = Ext.decode(response.responseText);
                                                            echarts.registerMap('china', chinaJson);

                                                            var data = [
                                                                {name: "深圳", value: 5590},
                                                                {name: "广州", value: 7756},
                                                                {name: "东莞", value: 1449},
                                                                {name: "珠海", value: 431},
                                                                {name: "中山", value: 2581},
                                                                {name: "北京", value: 1801},
                                                                {name: "厦门", value: 147},
                                                                {name: "南宁", value: 236},
                                                                {name: "郑州", value: 1667}

                                                                // {name: "上海", value: 29780},
                                                                // {name: "珠海", value: 2186},
                                                                // {name: "三亚", value: 1135},
                                                                // {name: "惠州", value: 1973},
                                                                // {name: "海口", value: 2568},
                                                                // {name: "合肥", value: 4039},
                                                                // {name: "南京", value: 6959},
                                                                // {name: "杭州", value: 5632},
                                                                // {name: "苏州", value: 6707},
                                                                // {name: "无锡", value: 3393},
                                                                // {name: "昆山", value: 1894},
                                                                // {name: "广州", value: 15769},
                                                                // {name: "深圳", value: 8259},
                                                                // {name: "佛山", value: 5741},
                                                                // {name: "东莞", value: 3030},
                                                                // {name: "福州", value: 4542},
                                                                // {name: "厦门", value: 3329},
                                                                // {name: "南宁", value: 3157},
                                                                // {name: "郑州", value: 6690},
                                                                // {name: "武汉", value: 8678},
                                                                // {name: "长沙", value: 5303},
                                                                // {name: "南昌", value: 3025},
                                                                // {name: "北京", value: 20259},
                                                                // {name: "长春", value: 3016},
                                                                // {name: "大连", value: 3202},
                                                                // {name: "沈阳", value: 4540},
                                                                // {name: "哈尔滨", value: 3141},
                                                                // {name: "天津", value: 8626},
                                                                // {name: "济南", value: 4361},
                                                                // {name: "青岛", value: 6667},
                                                                // {name: "太原", value: 4080},
                                                                // {name: "石家庄", value: 6137},
                                                                // {name: "西安", value: 6991},
                                                                // {name: "成都", value: 13873},
                                                                // {name: "重庆", value: 13283},
                                                                // {name: "昆明", value: 4633}
                                                            ];

                                                            var geoCoordMap = {
                                                                "上海": [121.48, 31.22],
                                                                "珠海": [113.52, 22.3],
                                                                "三亚": [109.31, 18.14],
                                                                "惠州": [114.4, 23.09],
                                                                "海口": [110.35, 20.02],
                                                                "合肥": [117.27, 31.86],
                                                                "南京": [118.78, 32.04],
                                                                "杭州": [120.19, 30.26],
                                                                "苏州": [120.62, 31.32],
                                                                "无锡": [120.29, 31.59],
                                                                "昆山": [120.95, 31.39],
                                                                "广州": [113.23, 23.16],
                                                                "深圳": [114.07, 22.62],
                                                                "佛山": [113.11, 23.05],
                                                                "中山": [113.38, 22.52],
                                                                "东莞": [113.75, 23.04],
                                                                "福州": [119.3, 26.08],
                                                                "厦门": [118.1, 24.46],
                                                                "南宁": [108.33, 22.84],
                                                                "郑州": [113.65, 34.76],
                                                                "武汉": [114.31, 30.52],
                                                                "长沙": [113, 28.21],
                                                                "南昌": [115.89, 28.68],
                                                                "北京": [116.46, 39.92],
                                                                "长春": [125.35, 43.88],
                                                                "大连": [121.62, 38.92],
                                                                "沈阳": [123.38, 41.8],
                                                                "哈尔滨": [126.63, 45.75],
                                                                "天津": [117.2, 39.13],
                                                                "济南": [117, 36.65],
                                                                "青岛": [120.33, 36.07],
                                                                "太原": [112.53, 37.87],
                                                                "石家庄": [114.48, 38.03],
                                                                "西安": [108.95, 34.27],
                                                                "成都": [104.06, 30.67],
                                                                "重庆": [106.54, 29.59],
                                                                "昆明": [102.73, 25.04]
                                                            };

                                                            var convertData = function (data) {
                                                                var res = [];
                                                                for (var i = 0; i < data.length; i++) {
                                                                    var geoCoord = geoCoordMap[data[i].name];
                                                                    if (geoCoord) {
                                                                        res.push({
                                                                            name: data[i].name,
                                                                            value: geoCoord.concat(data[i].value)
                                                                        });
                                                                    }
                                                                }
                                                                return res;
                                                            };

                                                            var convertedData = [
                                                                convertData(data),
                                                                convertData(data.sort(function (a, b) {
                                                                    return b.value - a.value;
                                                                }).slice(0, 6))
                                                            ];
                                                            data.sort(function (a, b) {
                                                                return a.value - b.value;
                                                            });

                                                            var selectedItems = [];
                                                            var categoryData = [];
                                                            var barData = [];
                                                            //   var maxBar = 30;
                                                            var sum = 0;
                                                            var count = data.length;
                                                            for (var i = 0; i < data.length; i++) {
                                                                categoryData.push(data[i].name);
                                                                barData.push(data[i].value);
                                                                sum += data[i].value;
                                                            }
                                                            var option = {
                                                                // backgroundColor: '#404a59',
                                                                backgroundColor: 'transparent',
                                                                animation: true,
                                                                animationDuration: 1000,
                                                                animationEasing: 'cubicInOut',
                                                                animationDurationUpdate: 1000,
                                                                animationEasingUpdate: 'cubicInOut',
                                                                title: [
                                                                    // {
                                                                    //     text: '全国36城“无人区”数',
                                                                    //     link: 'http://pages.anjuke.com/expert/newexpert.html',
                                                                    //     subtext: 'data from Anjuke',
                                                                    //     sublink: 'http://pages.anjuke.com/expert/newexpert.html',
                                                                    //     left: 'center',
                                                                    //     textStyle: {
                                                                    //         color: '#fff'
                                                                    //     }
                                                                    // },
                                                                    {
                                                                        id: 'statistic',
                                                                        // text: count ? '平均: ' + parseInt((sum / count).toFixed(4)) : '',
                                                                        text: '本周新增登记住户',
                                                                        right: 50,
                                                                        top: 10,
                                                                        width: 100,
                                                                        textStyle: {
                                                                            color: '#fff',
                                                                            fontSize: 16
                                                                        }
                                                                    }
                                                                ],
                                                                toolbox: {
                                                                    show: false,
                                                                    iconStyle: {
                                                                        normal: {
                                                                            borderColor: '#fff'
                                                                        },
                                                                        emphasis: {
                                                                            borderColor: '#b1e4ff'
                                                                        }
                                                                    },
                                                                    feature: {
                                                                        dataZoom: {},
                                                                        brush: {
                                                                            type: ['rect', 'polygon', 'clear']
                                                                        },
                                                                        saveAsImage: {
                                                                            show: true
                                                                        }
                                                                    }
                                                                },
                                                                brush: {
                                                                    outOfBrush: {
                                                                        color: '#abc'
                                                                    },
                                                                    brushStyle: {
                                                                        borderWidth: 2,
                                                                        color: 'rgba(0,0,0,0.2)',
                                                                        borderColor: 'rgba(0,0,0,0.5)'
                                                                    },
                                                                    seriesIndex: [0, 1],
                                                                    throttleType: 'debounce',
                                                                    throttleDelay: 300,
                                                                    geoIndex: 0
                                                                },
                                                                geo: {
                                                                    map: 'china',
                                                                    left: '10',
                                                                    right: '25%',
                                                                    center: [117.98561551896913, 31.205000490896193],
                                                                    zoom: 1.5,
                                                                    label: {
                                                                        emphasis: {
                                                                            show: false
                                                                        }
                                                                    },
                                                                    roam: true,
                                                                    itemStyle: {
                                                                        normal: {
                                                                            areaColor: '#323c48',
                                                                            borderColor: '#111'
                                                                        },
                                                                        emphasis: {
                                                                            areaColor: '#2a333d'
                                                                        }
                                                                    }
                                                                },
                                                                tooltip: {
                                                                    trigger: 'item'
                                                                },
                                                                grid: {
                                                                    right: 10,
                                                                    top: 50,
                                                                    bottom: 160,
                                                                    width: '25%'
                                                                },
                                                                xAxis: {
                                                                    show: false,
                                                                    type: 'value',
                                                                    scale: true,
                                                                    position: 'top',
                                                                    boundaryGap: false,
                                                                    splitLine: {
                                                                        show: false
                                                                    },
                                                                    axisLine: {
                                                                        show: false
                                                                    },
                                                                    axisTick: {
                                                                        show: false
                                                                    },
                                                                    axisLabel: {
                                                                        margin: 2,
                                                                        textStyle: {
                                                                            color: '#aaa'
                                                                        }
                                                                    }
                                                                },
                                                                yAxis: {
                                                                    type: 'category',
                                                                    //  name: 'TOP 20',
                                                                    nameGap: 16,
                                                                    axisLine: {
                                                                        show: true,
                                                                        lineStyle: {
                                                                            color: '#ddd'
                                                                        }
                                                                    },
                                                                    axisTick: {
                                                                        show: false,
                                                                        lineStyle: {
                                                                            color: '#ddd'
                                                                        }
                                                                    },
                                                                    axisLabel: {
                                                                        interval: 0,
                                                                        textStyle: {
                                                                            color: '#ddd'
                                                                        }
                                                                    },
                                                                    data: categoryData
                                                                },
                                                                series: [
                                                                    {
                                                                        // name: 'pm2.5',
                                                                        type: 'scatter',
                                                                        coordinateSystem: 'geo',
                                                                        data: convertedData[0],
                                                                        symbolSize: function (val) {
                                                                            return Math.max(val[2] / 150, 8);
                                                                        },
                                                                        label: {
                                                                            normal: {
                                                                                formatter: '{b}',
                                                                                position: 'right',
                                                                                show: false
                                                                            },
                                                                            emphasis: {
                                                                                show: true
                                                                            }
                                                                        },
                                                                        itemStyle: {
                                                                            normal: {
                                                                                color: '#FF8C00',
                                                                                position: 'right',
                                                                                show: true
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        //  name: 'Top 5',
                                                                        type: 'effectScatter',
                                                                        coordinateSystem: 'geo',
                                                                        data: convertedData[0],
                                                                        symbolSize: function (val) {
                                                                            return Math.max(val[2] / 250, 8);
                                                                        },
                                                                        showEffectOn: 'render',
                                                                        rippleEffect: {
                                                                            brushType: 'stroke'
                                                                        },
                                                                        hoverAnimation: true,
                                                                        label: {
                                                                            normal: {
                                                                                formatter: '{b}',
                                                                                position: 'right',
                                                                                show: true
                                                                            }
                                                                        },
                                                                        itemStyle: {
                                                                            normal: {
                                                                                color: '#f4e925',
                                                                                shadowBlur: 50,
                                                                                shadowColor: '#EE0000'
                                                                            }
                                                                        },
                                                                        zlevel: 1
                                                                    },
                                                                    {
                                                                        id: 'bar',
                                                                        zlevel: 2,
                                                                        type: 'bar',
                                                                        symbol: 'none',
                                                                        itemStyle: {
                                                                            normal: {
                                                                                // color: '#ddb926'
                                                                                color: new echarts.graphic.LinearGradient(0, 0, 0.5, 1, [{
                                                                                    offset: 0,
                                                                                    color: 'rgba(35,123,105,1)'
                                                                                }, {
                                                                                    offset: 1,
                                                                                    color: 'rgba(103,237,210,1)'
                                                                                }]),
                                                                                barBorderRadius: [0, 5, 5, 0]
                                                                                // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                                                                //     {
                                                                                //         offset: 0,
                                                                                //         color: '#ddb926'
                                                                                //     },
                                                                                //     {
                                                                                //         offset: 1,
                                                                                //         color: 'orange'
                                                                                //     }
                                                                                // ])
                                                                            }
                                                                        },
                                                                        data: data
                                                                    }
                                                                ]
                                                            };
                                                            con0.echart.setOption(option);
                                                            function renderBrushed(params) {
                                                                var mainSeries = params.batch[0].selected[0];

                                                                var selectedItems = [];
                                                                var categoryData = [];
                                                                var barData = [];
                                                                var maxBar = 30;
                                                                var sum = 0;
                                                                var count = 0;

                                                                for (var i = 0; i < mainSeries.dataIndex.length; i++) {
                                                                    var rawIndex = mainSeries.dataIndex[i];
                                                                    var dataItem = convertedData[0][rawIndex];
                                                                    var pmValue = dataItem.value[2];

                                                                    sum += pmValue;
                                                                    count++;

                                                                    selectedItems.push(dataItem);
                                                                }

                                                                selectedItems.sort(function (a, b) {
                                                                    //   return b.value[2] - a.value[2];
                                                                    return a.value - b.value;
                                                                });

                                                                for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
                                                                    categoryData.push(selectedItems[i].name);
                                                                    barData.push(selectedItems[i].value[2]);
                                                                }

                                                                con0.echart.setOption({
                                                                    yAxis: {
                                                                        data: categoryData
                                                                    },
                                                                    xAxis: {
                                                                        axisLabel: {
                                                                            show: !!count
                                                                        }
                                                                    },
                                                                    title: {
                                                                        id: 'statistic',
                                                                        text: count ? '平均: ' + (sum / count).toFixed(4) : ''
                                                                    },
                                                                    series: {
                                                                        id: 'bar',
                                                                        //        sort:'descending',
                                                                        data: barData
                                                                    }
                                                                });
                                                            }
                                                        }
                                                    });
                                                }
                                            );
                                        },
                                        resize: function (con0, width, height, oldWidth, oldHeight, eOpts) {
                                            if (document.getElementById("chart207"))
                                                document.getElementById("chart207").style.width = width + 'px';
                                            if (con0.echart) {
                                                con0.echart.resize();
                                            }
                                        }
                                    }
                                },
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    height: 250,
                                    listeners: {
                                        afterrender: function (con0) {
                                            require(
                                                [
                                                    'echarts3/echarts.min'
                                                ],
                                                function (echarts) {
                                                    con0.setHtml('<div id="chart208" style="width: ' + con0.getWidth() + 'px; height: 250px"></div>');
                                                    con0.echart = echarts.init(document.getElementById("chart208"));
                                                    var option = {
                                                        // tooltip:{
                                                        //     show:true,
                                                        //     trigger:'axis',
                                                        //     formatter:function(params){
                                                        //         var relVal =params[0].name;
                                                        //         relVal +=params[0].value;
                                                        //         return relVal;
                                                        //     },
                                                        //
                                                        //     showDelay:0,
                                                        //     hideDelay:50,
                                                        //     transitionDuration:0,
                                                        //     backgroundColor:'rgba(50,50,50,1)',
                                                        //     borderColor:'#aaa',
                                                        //     showContent: true,
                                                        //     borderRadius:8,
                                                        //     padding:10
                                                        // },
                                                        tooltip: {
                                                            trigger: 'item'
                                                        },
                                                        grid: {
                                                            left: 10,
                                                            right: 10,
                                                            top: 100,
                                                            bottom: 0
                                                        },
                                                        dataZoom: [
                                                            {
                                                                type: 'slider',
                                                                show: false,
                                                                height: 20,
                                                                backgroundColor: 'rgba(38,227,189,0.3)',
                                                                // fillerColor: 'rgba(167,183,204,0.4)',
                                                                borderColor: '#0a2b24'
                                                            }
                                                        ],
                                                        axisPointer: {
                                                            type: 'line',
                                                            axis: 'auto'
                                                        },
                                                        legend: {
                                                            top: 100,
                                                            right: '50%',
                                                            data: [{
                                                                name: '本周APP用户量',
                                                                textStyle: {
                                                                    color: '#fff'
                                                                }
                                                            }]
                                                        },
                                                        xAxis: {
                                                            show: false,
                                                            data: ['深圳', '中山', '东莞', '北京', '广州', '郑州', '珠海', '南宁', '厦门']
                                                        },
                                                        yAxis: {
                                                            show: false
                                                        },
                                                        series: [{
                                                            name: '本周APP用户量',
                                                            type: 'bar',
                                                            barMaxWidth: 60,
                                                            data: [1077, 339, 311, 241, 216, 168, 66, 51, 8],
                                                            itemStyle: {
                                                                normal: {
                                                                    color: new echarts.graphic.LinearGradient(0, 0, 0.5, 1, [{
                                                                        offset: 0,
                                                                        color: 'rgba(35,123,105,1)'
                                                                    }, {
                                                                        offset: 1,
                                                                        color: 'rgba(103,237,210,1)'
                                                                    }]),
                                                                    // borderColor:'#23a5e2',
                                                                    // borderWidth:2,
                                                                    barBorderRadius: [5, 5, 0, 0],
                                                                    // shadowBlur:10,
                                                                    shadowColor: 'rgba(168,225,226,0.5)',
                                                                    // shadowOffsetX:10,
                                                                    // shadowOffsetY:10,
                                                                    // opacity:.6

                                                                },
                                                                emphasis: {
                                                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                                        offset: 0,
                                                                        color: 'rgba(13,164,171,1)'
                                                                    }, {
                                                                        offset: 1,
                                                                        color: 'rgba(64,180,157,1)'
                                                                    }]),
                                                                    borderColor: '#0ea4a6',
                                                                    borderWidth: 2,
                                                                    barBorderRadius: [9, 9, 0, 0],
                                                                    shadowBlur: 30,
                                                                    shadowColor: 'rgba(32,188 ,157,0.8)',
                                                                    // shadowOffsetX:10,
                                                                    // shadowOffsetY:10,
                                                                    // opacity:.7,
                                                                    label: {
                                                                        show: true,
                                                                        textStyle: {
                                                                            color: 'rgba(150,197,188,1)'
                                                                        }

                                                                    }
                                                                }
                                                            },
                                                            markPoint: {
                                                                symbol: 'circle',
                                                                symbolSize: 50,
                                                                symbolOffset: [0, 0],
                                                                silent: true

                                                            }

                                                        }],
                                                        label: {
                                                            normal: {
                                                                show: true,
                                                                position: 'top'

                                                            }
                                                            //       emphasis:{
                                                            //         show:false,
                                                            //         position:[10,10],
                                                            //         formatter:'{b}:{c}',
                                                            //         textStyle:{
                                                            //           color:'#fff',
                                                            //           fontWeight:'bolder',
                                                            //           fontSize:14
                                                            //         }
                                                            //       }
                                                        }

                                                    };
                                                    con0.echart.setOption(option);
                                                }
                                            );
                                        },
                                        resize: function (con0, width, height, oldWidth, oldHeight, eOpts) {
                                            if (document.getElementById("chart208"))
                                                document.getElementById("chart208").style.width = width + 'px';
                                            if (con0.echart) {
                                                con0.echart.resize();
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            width: '30%',
                            height: '100%',
                            layout: 'vbox',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: '<span style="color: #fff">开门方式</span>',
                                    style: 'border: 3px solid #172936;border-radius: 10px;background: transparent',
                                    width: '100%',
                                    margin: '0 22 10 0',
                                    height: 360,
                                    listeners: {
                                        afterrender: function (con0) {
                                            require(
                                                [
                                                    'echarts3/echarts.min'
                                                ],
                                                function (echarts) {
                                                    con0.setHtml('<div id="chart205" style="width: ' + con0.getWidth() + 'px; height: 360px"></div>');
                                                    con0.echart = echarts.init(document.getElementById("chart205"));
                                                    var option = {
                                                        color: ['#00ffff', '#00ffa2'],
                                                        tooltip: {
                                                            trigger: 'axis',
                                                            textStyle: {
                                                                fontSize: 15,
                                                                color: "#fff"
                                                            }
                                                        },
                                                        legend: {
                                                            orient: 'horizontal',
                                                            right: "10%",
                                                            itemGap: 20,
                                                            //itemWidth:16,
                                                            //itemHeight:12,
                                                            data: ['上周', '本周'],
                                                            textStyle: {
                                                                color: '#fff'
                                                            }
                                                        },
                                                        toolbox: {
                                                            show: false,
                                                            orient: 'vertical',
                                                            right: 'right',
                                                            top: '20%',
                                                            itemGap: 20,
                                                            feature: {
                                                                magicType: {
                                                                    show: true,
                                                                    type: ['line', 'bar']
                                                                },
                                                                restore: {
                                                                    show: true
                                                                },
                                                                saveAsImage: {
                                                                    show: true
                                                                }
                                                            },
                                                            iconStyle: {
                                                                normal: {
                                                                    color: '#0390e9'
                                                                }
                                                            }
                                                        },
                                                        grid: {
                                                            show: false,
                                                            left: 65,
                                                            top: 34,
                                                            right: 50,
                                                            bottom: 42,
                                                            borderWidth: 1,
                                                            borderColor: 'rgba(170,172,178,0.33)',
                                                            backgroundColor: 'rgba(17, 34, 69, 0.24)'
                                                        },
                                                        calculable: true,
                                                        xAxis: [
                                                            {
                                                                type: 'category',
                                                                boundaryGap: false,
                                                                //在（type: 'category'）中设置data有效
                                                                data: ['刷卡开门数', 'APP开门数', '拨号开门数', '密码开门数'],

                                                                splitLine: { //坐标轴在 grid 区域中的分隔线；
                                                                    show: true,
                                                                    lineStyle: { //分割线颜色，可设单个，也可以设置数组。
                                                                        color: 'rgba(170,172,178,0.33)'
                                                                    }
                                                                },
                                                                axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                                                                    show: true,
                                                                    lineStyle: {
                                                                        color: 'rgba(170,172,178,0.53)'
                                                                    }
                                                                },
                                                                axisLabel: {
                                                                    textStyle: {
                                                                        color: 'rgba(255,255,255,0.83)',
                                                                        fontSize: 15
                                                                    }
                                                                }
                                                            }
                                                        ],
                                                        yAxis: [
                                                            {
                                                                type: 'value',
                                                                min: 0,
                                                                // max: 4000,
                                                                splitLine: {
                                                                    show: true,
                                                                    lineStyle: {
                                                                        color: 'rgba(170,172,178,0.33)'
                                                                    }
                                                                },
                                                                axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                                                                    show: true,
                                                                    lineStyle: {
                                                                        color: 'rgba(170,172,178,0.53)'
                                                                    }
                                                                },
                                                                axisLabel: {
                                                                    textStyle: {
                                                                        color: 'rgba(255,255,255,0.83)',
                                                                        fontSize: 12
                                                                    }
                                                                },
                                                                splitArea: {
                                                                    show: true,
                                                                    areaStyle: {
                                                                        color: ['#112245', 'rgba(34,50,82,0.4)']
                                                                    }
                                                                }
                                                            }
                                                        ],
                                                        series: [
                                                            {
                                                                name: '上周',
                                                                type: 'line',
                                                                smooth: true,
                                                                lineStyle: {
                                                                    normal: {
                                                                        width: 1
                                                                    }
                                                                },
                                                                areaStyle: {
                                                                    normal: {
                                                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                                            {
                                                                                offset: 0,
                                                                                color: 'rgba(240, 231, 80, 0.9)'
                                                                            },
                                                                            {
                                                                                offset: 0.8,
                                                                                color: 'rgba(240, 231, 80, 0.4)'
                                                                            }
                                                                        ], false),
                                                                        shadowColor: 'rgba(0, 0, 0, 0.9)',
                                                                        shadowBlur: 10
                                                                    }
                                                                },
                                                                itemStyle: {
                                                                    normal: {
                                                                        color: 'rgb(240,231,80)'

                                                                    }
                                                                },
                                                                data: [4875745, 306264, 87576, 10485]
                                                            },
                                                            {
                                                                name: '本周',
                                                                type: 'line',
                                                                smooth: true,
                                                                lineStyle: {
                                                                    normal: {
                                                                        width: 1
                                                                    }
                                                                },
                                                                itemStyle: {
                                                                    normal: {
                                                                        color: 'rgb(0,255,162)'
                                                                    }
                                                                },
                                                                areaStyle: {
                                                                    normal: {
                                                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                                            offset: 0,
                                                                            color: 'rgba(0,255,162, 0.8)'
                                                                        }, {
                                                                            offset: 0.8,
                                                                            color: 'rgba(0,255,162, 0.4)'
                                                                        }], false),
                                                                        shadowColor: 'rgba(0, 0, 0, 0.9)',
                                                                        shadowBlur: 10
                                                                    }
                                                                },
                                                                data: [3016922, 313105, 53718, 10028]
                                                            }
                                                        ]
                                                    };
                                                    con0.echart.setOption(option);
                                                }
                                            );
                                        },
                                        resize: function (con0, width, height, oldWidth, oldHeight, eOpts) {
                                            if (document.getElementById("chart205"))
                                                document.getElementById("chart205").style.width = width + 'px';
                                            if (con0.echart) {
                                                con0.echart.resize();
                                            }
                                        }
                                    }
                                },
                                {
                                    xtype: 'fieldset',
                                    title: '<span style="color: #fff">展位4</span>',
                                    style: 'border: 3px solid #172936;border-radius: 10px;background: transparent',
                                    width: '100%',
                                    margin: '0 22 10 0',
                                    height: 360,
                                    listeners: {
                                        afterrender: function (con0) {
                                            require(
                                                [
                                                    'echarts3/echarts.min'
                                                ],
                                                function (echarts) {
                                                    con0.setHtml('<div id="chart206" style="width: ' + con0.getWidth() + 'px; height: 360px"></div>');
                                                    con0.echart = echarts.init(document.getElementById("chart206"));
                                                    var option = {
                                                        color: ['#00ffff', '#00ffa2', '#f0e750'],
                                                        tooltip: {
                                                            trigger: 'axis',
                                                            textStyle: {
                                                                fontSize: 15,
                                                                color: "#fff"
                                                            }
                                                        },
                                                        legend: {
                                                            orient: 'horizontal',
                                                            right: "10%",
                                                            itemGap: 20,
                                                            //itemWidth:16,
                                                            //itemHeight:12,
                                                            data: ['上周', '本周'],
                                                            textStyle: {
                                                                color: '#fff'
                                                            }
                                                        },
                                                        toolbox: {
                                                            show: false,
                                                            orient: 'vertical',
                                                            right: 'right',
                                                            top: '20%',
                                                            itemGap: 20,
                                                            feature: {
                                                                magicType: {
                                                                    show: true,
                                                                    type: ['line', 'bar']
                                                                },
                                                                restore: {
                                                                    show: true
                                                                },
                                                                saveAsImage: {
                                                                    show: true
                                                                }
                                                            },
                                                            iconStyle: {
                                                                normal: {
                                                                    color: '#0390e9'
                                                                }
                                                            }
                                                        },
                                                        grid: {
                                                            show: true,
                                                            left: 65,
                                                            top: 34,
                                                            right: 44,
                                                            bottom: 42,
                                                            borderWidth: 1,
                                                            borderColor: 'rgba(170,172,178,0.33)',
                                                            backgroundColor: 'rgba(17, 34, 69, 0.24)'
                                                        },
                                                        calculable: true,
                                                        xAxis: [
                                                            {
                                                                type: 'category',
                                                                boundaryGap: false,
                                                                //在（type: 'category'）中设置data有效
                                                                data: ['代理商数量', '小区数量', 'APP用户量', '主机上限量', '总户数',
                                                                    '登记住户'
                                                                ],

                                                                splitLine: { //坐标轴在 grid 区域中的分隔线；
                                                                    show: true,
                                                                    lineStyle: { //分割线颜色，可设单个，也可以设置数组。
                                                                        color: 'rgba(170,172,178,0.33)'
                                                                    }
                                                                },
                                                                axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                                                                    show: true,
                                                                    lineStyle: {
                                                                        color: 'rgba(170,172,178,0.53)'
                                                                    }
                                                                },
                                                                axisLabel: {
                                                                    textStyle: {
                                                                        color: 'rgba(255,255,255,0.83)',
                                                                        fontSize: 15
                                                                    }
                                                                }
                                                            }
                                                        ],
                                                        yAxis: [
                                                            {
                                                                type: 'value',
                                                                min: 0,
                                                                // max: 4000,
                                                                splitLine: {
                                                                    show: true,
                                                                    lineStyle: {
                                                                        color: 'rgba(170,172,178,0.33)'
                                                                    }
                                                                },
                                                                axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                                                                    show: true,
                                                                    lineStyle: {
                                                                        color: 'rgba(170,172,178,0.53)'
                                                                    }
                                                                },
                                                                axisLabel: {
                                                                    textStyle: {
                                                                        color: 'rgba(255,255,255,0.83)',
                                                                        fontSize: 12
                                                                    }
                                                                },
                                                                splitArea: {
                                                                    show: true,
                                                                    areaStyle: {
                                                                        color: ['#112245', 'rgba(34,50,82,0.4)']
                                                                    }
                                                                }
                                                            }
                                                        ],
                                                        series: [
                                                            {
                                                                name: '上周',
                                                                type: 'line',
                                                                smooth: true,
                                                                lineStyle: {
                                                                    normal: {
                                                                        width: 1
                                                                    }
                                                                },
                                                                areaStyle: {
                                                                    normal: {
                                                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                                            {
                                                                                offset: 0,
                                                                                color: 'rgba(240, 231, 80, 0.9)'
                                                                            },
                                                                            {
                                                                                offset: 0.8,
                                                                                color: 'rgba(240, 231, 80, 0.4)'
                                                                            }
                                                                        ], false),
                                                                        shadowColor: 'rgba(0, 0, 0, 0.9)',
                                                                        shadowBlur: 10
                                                                    }
                                                                },
                                                                itemStyle: {
                                                                    normal: {
                                                                        color: 'rgb(240,231,80)'

                                                                    }
                                                                },
                                                                data: [5, 4, 2834, 7, 1673, 19683]
                                                            },
                                                            {
                                                                name: '本周',
                                                                type: 'line',
                                                                smooth: true,
                                                                lineStyle: {
                                                                    normal: {
                                                                        width: 1
                                                                    }
                                                                },
                                                                itemStyle: {
                                                                    normal: {
                                                                        color: 'rgb(0,255,162)'
                                                                    }
                                                                },
                                                                areaStyle: {
                                                                    normal: {
                                                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                                            offset: 0,
                                                                            color: 'rgba(0,255,162, 0.8)'
                                                                        }, {
                                                                            offset: 0.8,
                                                                            color: 'rgba(0,255,162, 0.4)'
                                                                        }], false),
                                                                        shadowColor: 'rgba(0, 0, 0, 0.9)',
                                                                        shadowBlur: 10
                                                                    }
                                                                },
                                                                data: [4, 8, 2630, 16, 5673, 23097]
                                                            }
                                                        ]
                                                    };
                                                    con0.echart.setOption(option);
                                                }
                                            );
                                        },
                                        resize: function (con0, width, height, oldWidth, oldHeight, eOpts) {
                                            if (document.getElementById("chart206"))
                                                document.getElementById("chart206").style.width = width + 'px';
                                            if (con0.echart) {
                                                con0.echart.resize();
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'panel',
            header: {
                title: '<span style="color: #000; font-weight: bold; font-family: 微软雅黑">基础数据</span>',
                style: 'background: #f6f6f6'
            },
            layout: {
                type: 'table',
                columns: 4
            },
            defaults: {
                margin: 10,
                width: 390,
                height: 100,
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'center',
                    pack: 'middle'
                },
                style: {
                    border: '1px solid #ceb0f5',
                    'border-radius': '20px',
                    'text-align': 'center'
                }
            },
            items: [
                {
                    items: [
                        {
                            xtype: 'label',
                            html: '<span style="font-family: 微软雅黑; font-weight: bold; font-size: 16px;">销售总数</span>'
                        },
                        {
                            xtype: 'label',
                            itemId: 'valueLabel',
                            margin: '10 0 0 0',
                            style: 'color: orange; font-size: 16px; font-weight: bold',
                            text: '0'
                            // html: '<span style="color: orange; font-size: 16px; font-weight: bold">10000</span>'
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            html: '<span style="font-family: 微软雅黑; font-weight: bold; font-size: 16px;">销售总额</span>'
                        },
                        {
                            xtype: 'label',
                            itemId: 'valueLabel',
                            margin: '10 0 0 0',
                            style: 'color: orange; font-size: 16px; font-weight: bold',
                            text: '￥ 0'
                            // html: '<span style="color: orange; font-size: 16px; font-weight: bold">￥53000</span>'
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            html: '<span style="font-family: 微软雅黑; font-weight: bold; font-size: 16px;">数据A1</span>'
                        },
                        {
                            xtype: 'label',
                            itemId: 'valueLabel',
                            margin: '10 0 0 0',
                            style: 'color: orange; font-size: 16px; font-weight: bold',
                            text: '0'
                            // html: '<span style="color: orange; font-size: 16px; font-weight: bold">36900</span>'
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            html: '<span style="font-family: 微软雅黑; font-weight: bold; font-size: 16px;">数据A2</span>'
                        },
                        {
                            xtype: 'label',
                            itemId: 'valueLabel',
                            margin: '10 0 0 0',
                            style: 'color: orange; font-size: 16px; font-weight: bold',
                            text: '0'
                            // html: '<span style="color: orange; font-size: 16px; font-weight: bold">26000</span>'
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            html: '<span style="font-family: 微软雅黑; font-weight: bold; font-size: 16px;">数据B1</span>'
                        },
                        {
                            xtype: 'label',
                            itemId: 'valueLabel',
                            margin: '10 0 0 0',
                            style: 'color: orange; font-size: 16px; font-weight: bold',
                            text: '0'
                            // html: '<span style="color: orange; font-size: 16px; font-weight: bold">12000</span>'
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            html: '<span style="font-family: 微软雅黑; font-weight: bold; font-size: 16px;">数据B2</span>'
                        },
                        {
                            xtype: 'label',
                            itemId: 'valueLabel',
                            margin: '10 0 0 0',
                            style: 'color: orange; font-size: 16px; font-weight: bold',
                            text: '0'
                            // html: '<span style="color: orange; font-size: 16px; font-weight: bold">3000</span>'
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            html: '<span style="font-family: 微软雅黑; font-weight: bold; font-size: 16px;">数据B3</span>'
                        },
                        {
                            xtype: 'label',
                            itemId: 'valueLabel',
                            margin: '10 0 0 0',
                            style: 'color: orange; font-size: 16px; font-weight: bold',
                            text: '0'
                            // html: '<span style="color: orange; font-size: 16px; font-weight: bold">60000</span>'
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'label',
                            html: '<span style="font-family: 微软雅黑; font-weight: bold; font-size: 16px;">数据B4</span>'
                        },
                        {
                            xtype: 'label',
                            itemId: 'valueLabel',
                            margin: '10 0 0 0',
                            style: 'color: orange; font-size: 16px; font-weight: bold',
                            text: '0'
                            // html: '<span style="color: orange; font-size: 16px; font-weight: bold">5000</span>'
                        }
                    ]
                }
            ],
            listeners: {
                afterrender: 'onRenderData'
            }
        },
        {
            xtype: 'panel',
            layout: 'hbox',
            header: {
                title: '<span style="color: #000; font-weight: bold; font-family: 微软雅黑">一周统计</span>',
                style: 'background: #f6f6f6'
            },
            items: [
                {
                    xtype: 'container',
                    width: '50%',
                    // style: 'border: 1px solid #ccc',
                    margin: '5 20 0 0',
                    html:'<div id="first01chart" style="width: 850px;height:480px"></div>',
                    // html: '<img src="resources/images/chart1.png">',
                    listeners: {
                        afterrender: 'onRenderChart1'
                    }
                },
                {
                    xtype: 'container',
                    margin: '5 0 0 0',
                    // style: 'border: 1px solid #ccc',
                    width: '50%',
                    html:'<div id="first02chart" style="width: 850px;height:480px"></div>',
                    // html: '<img src="resources/images/chart2.png">',
                    listeners: {
                        afterrender: 'onRenderChart2'
                    }
                }
            ]
        }
    ]
});
