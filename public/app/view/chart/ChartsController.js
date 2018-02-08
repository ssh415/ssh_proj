Ext.define('logsystem.view.chart.ChartsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.charts',

    onRenderMapChart1: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/map'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("mapchart01"));
                // 指定图表的配置项和数据
                var option = {
                    title : {
                        text: 'iphone销量',
                        subtext: '纯属虚构',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        x:'left',
                        data:['iphone3','iphone4','iphone5']
                    },
                    dataRange: {
                        min: 0,
                        max: 2500,
                        x: 'left',
                        y: 'bottom',
                        text:['高','低'],           // 文本，默认为数值文本
                        calculable : true
                    },
                    toolbox: {
                        show: false,
                        orient : 'vertical',
                        x: 'right',
                        y: 'center',
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    roamController: {
                        show: true,
                        x: 'right',
                        mapTypeControl: {
                            'china': true
                        }
                    },
                    series : [
                        {
                            name: 'iphone3',
                            type: 'map',
                            mapType: 'china',
                            roam: false,
                            itemStyle:{
                                normal:{label:{show:true}},
                                emphasis:{label:{show:true}}
                            },
                            data:[
                                {name: '北京',value: Math.round(Math.random()*1000)},
                                {name: '天津',value: Math.round(Math.random()*1000)},
                                {name: '上海',value: Math.round(Math.random()*1000)},
                                {name: '重庆',value: Math.round(Math.random()*1000)},
                                {name: '河北',value: Math.round(Math.random()*1000)},
                                {name: '河南',value: Math.round(Math.random()*1000)},
                                {name: '云南',value: Math.round(Math.random()*1000)},
                                {name: '辽宁',value: Math.round(Math.random()*1000)},
                                {name: '黑龙江',value: Math.round(Math.random()*1000)},
                                {name: '湖南',value: Math.round(Math.random()*1000)},
                                {name: '安徽',value: Math.round(Math.random()*1000)},
                                {name: '山东',value: Math.round(Math.random()*1000)},
                                {name: '新疆',value: Math.round(Math.random()*1000)},
                                {name: '江苏',value: Math.round(Math.random()*1000)},
                                {name: '浙江',value: Math.round(Math.random()*1000)},
                                {name: '江西',value: Math.round(Math.random()*1000)},
                                {name: '湖北',value: Math.round(Math.random()*1000)},
                                {name: '广西',value: Math.round(Math.random()*1000)},
                                {name: '甘肃',value: Math.round(Math.random()*1000)},
                                {name: '山西',value: Math.round(Math.random()*1000)},
                                {name: '内蒙古',value: Math.round(Math.random()*1000)},
                                {name: '陕西',value: Math.round(Math.random()*1000)},
                                {name: '吉林',value: Math.round(Math.random()*1000)},
                                {name: '福建',value: Math.round(Math.random()*1000)},
                                {name: '贵州',value: Math.round(Math.random()*1000)},
                                {name: '广东',value: Math.round(Math.random()*1000)},
                                {name: '青海',value: Math.round(Math.random()*1000)},
                                {name: '西藏',value: Math.round(Math.random()*1000)},
                                {name: '四川',value: Math.round(Math.random()*1000)},
                                {name: '宁夏',value: Math.round(Math.random()*1000)},
                                {name: '海南',value: Math.round(Math.random()*1000)},
                                {name: '台湾',value: Math.round(Math.random()*1000)},
                                {name: '香港',value: Math.round(Math.random()*1000)},
                                {name: '澳门',value: Math.round(Math.random()*1000)}
                            ]
                        },
                        {
                            name: 'iphone4',
                            type: 'map',
                            mapType: 'china',
                            itemStyle:{
                                normal:{label:{show:true}},
                                emphasis:{label:{show:true}}
                            },
                            data:[
                                {name: '北京',value: Math.round(Math.random()*1000)},
                                {name: '天津',value: Math.round(Math.random()*1000)},
                                {name: '上海',value: Math.round(Math.random()*1000)},
                                {name: '重庆',value: Math.round(Math.random()*1000)},
                                {name: '河北',value: Math.round(Math.random()*1000)},
                                {name: '安徽',value: Math.round(Math.random()*1000)},
                                {name: '新疆',value: Math.round(Math.random()*1000)},
                                {name: '浙江',value: Math.round(Math.random()*1000)},
                                {name: '江西',value: Math.round(Math.random()*1000)},
                                {name: '山西',value: Math.round(Math.random()*1000)},
                                {name: '内蒙古',value: Math.round(Math.random()*1000)},
                                {name: '吉林',value: Math.round(Math.random()*1000)},
                                {name: '福建',value: Math.round(Math.random()*1000)},
                                {name: '广东',value: Math.round(Math.random()*1000)},
                                {name: '西藏',value: Math.round(Math.random()*1000)},
                                {name: '四川',value: Math.round(Math.random()*1000)},
                                {name: '宁夏',value: Math.round(Math.random()*1000)},
                                {name: '香港',value: Math.round(Math.random()*1000)},
                                {name: '澳门',value: Math.round(Math.random()*1000)}
                            ]
                        },
                        {
                            name: 'iphone5',
                            type: 'map',
                            mapType: 'china',
                            itemStyle:{
                                normal:{label:{show:true}},
                                emphasis:{label:{show:true}}
                            },
                            data:[
                                {name: '北京',value: Math.round(Math.random()*1000)},
                                {name: '天津',value: Math.round(Math.random()*1000)},
                                {name: '上海',value: Math.round(Math.random()*1000)},
                                {name: '广东',value: Math.round(Math.random()*1000)},
                                {name: '台湾',value: Math.round(Math.random()*1000)},
                                {name: '香港',value: Math.round(Math.random()*1000)},
                                {name: '澳门',value: Math.round(Math.random()*1000)}
                            ]
                        }
                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                overTimeChart.setOption(option);
            }
        );
    },
    onRenderMapChart2: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/map'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("mapchart02"));
                // 指定图表的配置项和数据
                var option = {
                    title : {
                        text: 'World Population (2010)',
                        subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
                        sublink : 'http://esa.un.org/wpp/Excel-Data/population.htm',
                        x:'center',
                        y:'top'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter : function (params) {
                            var value = (params.value + '').split('.');
                            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                                + '.' + value[1];
                            return params.seriesName + '<br/>' + params.name + ' : ' + value;
                        }
                    },
                    toolbox: {
                        show : false,
                        orient : 'vertical',
                        x: 'right',
                        y: 'center',
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    dataRange: {
                        min: 0,
                        max: 1000000,
                        text:['High','Low'],
                        realtime: false,
                        calculable : true,
                        color: ['orangered','yellow','lightskyblue']
                    },
                    series : [
                        {
                            name: 'World Population (2010)',
                            type: 'map',
                            mapType: 'world',
                            roam: true,
                            mapLocation: {
                                y : 60
                            },
                            itemStyle:{
                                emphasis:{label:{show:true}}
                            },
                            data:[
                                {name : 'Afghanistan', value : 28397.812},
                                {name : 'Angola', value : 19549.124},
                                {name : 'Albania', value : 3150.143},
                                {name : 'United Arab Emirates', value : 8441.537},
                                {name : 'Argentina', value : 40374.224},
                                {name : 'Armenia', value : 2963.496},
                                {name : 'French Southern and Antarctic Lands', value : 268.065},
                                {name : 'Australia', value : 22404.488},
                                {name : 'Austria', value : 8401.924},
                                {name : 'Azerbaijan', value : 9094.718},
                                {name : 'Burundi', value : 9232.753},
                                {name : 'Belgium', value : 10941.288},
                                {name : 'Benin', value : 9509.798},
                                {name : 'Burkina Faso', value : 15540.284},
                                {name : 'Bangladesh', value : 151125.475},
                                {name : 'Bulgaria', value : 7389.175},
                                {name : 'The Bahamas', value : 66402.316},
                                {name : 'Bosnia and Herzegovina', value : 3845.929},
                                {name : 'Belarus', value : 9491.07},
                                {name : 'Belize', value : 308.595},
                                {name : 'Bermuda', value : 64.951},
                                {name : 'Bolivia', value : 716.939},
                                {name : 'Brazil', value : 195210.154},
                                {name : 'Brunei', value : 27.223},
                                {name : 'Bhutan', value : 716.939},
                                {name : 'Botswana', value : 1969.341},
                                {name : 'Central African Republic', value : 4349.921},
                                {name : 'Canada', value : 34126.24},
                                {name : 'Switzerland', value : 7830.534},
                                {name : 'Chile', value : 17150.76},
                                {name : 'China', value : 1359821.465},
                                {name : 'Ivory Coast', value : 60508.978},
                                {name : 'Cameroon', value : 20624.343},
                                {name : 'Democratic Republic of the Congo', value : 62191.161},
                                {name : 'Republic of the Congo', value : 3573.024},
                                {name : 'Colombia', value : 46444.798},
                                {name : 'Costa Rica', value : 4669.685},
                                {name : 'Cuba', value : 11281.768},
                                {name : 'Northern Cyprus', value : 1.468},
                                {name : 'Cyprus', value : 1103.685},
                                {name : 'Czech Republic', value : 10553.701},
                                {name : 'Germany', value : 83017.404},
                                {name : 'Djibouti', value : 834.036},
                                {name : 'Denmark', value : 5550.959},
                                {name : 'Dominican Republic', value : 10016.797},
                                {name : 'Algeria', value : 37062.82},
                                {name : 'Ecuador', value : 15001.072},
                                {name : 'Egypt', value : 78075.705},
                                {name : 'Eritrea', value : 5741.159},
                                {name : 'Spain', value : 46182.038},
                                {name : 'Estonia', value : 1298.533},
                                {name : 'Ethiopia', value : 87095.281},
                                {name : 'Finland', value : 5367.693},
                                {name : 'Fiji', value : 860.559},
                                {name : 'Falkland Islands', value : 49.581},
                                {name : 'France', value : 63230.866},
                                {name : 'Gabon', value : 1556.222},
                                {name : 'United Kingdom', value : 62066.35},
                                {name : 'Georgia', value : 4388.674},
                                {name : 'Ghana', value : 24262.901},
                                {name : 'Guinea', value : 10876.033},
                                {name : 'Gambia', value : 1680.64},
                                {name : 'Guinea Bissau', value : 10876.033},
                                {name : 'Equatorial Guinea', value : 696.167},
                                {name : 'Greece', value : 11109.999},
                                {name : 'Greenland', value : 56.546},
                                {name : 'Guatemala', value : 14341.576},
                                {name : 'French Guiana', value : 231.169},
                                {name : 'Guyana', value : 786.126},
                                {name : 'Honduras', value : 7621.204},
                                {name : 'Croatia', value : 4338.027},
                                {name : 'Haiti', value : 9896.4},
                                {name : 'Hungary', value : 10014.633},
                                {name : 'Indonesia', value : 240676.485},
                                {name : 'India', value : 1205624.648},
                                {name : 'Ireland', value : 4467.561},
                                {name : 'Iran', value : 240676.485},
                                {name : 'Iraq', value : 30962.38},
                                {name : 'Iceland', value : 318.042},
                                {name : 'Israel', value : 7420.368},
                                {name : 'Italy', value : 60508.978},
                                {name : 'Jamaica', value : 2741.485},
                                {name : 'Jordan', value : 6454.554},
                                {name : 'Japan', value : 127352.833},
                                {name : 'Kazakhstan', value : 15921.127},
                                {name : 'Kenya', value : 40909.194},
                                {name : 'Kyrgyzstan', value : 5334.223},
                                {name : 'Cambodia', value : 14364.931},
                                {name : 'South Korea', value : 51452.352},
                                {name : 'Kosovo', value : 97.743},
                                {name : 'Kuwait', value : 2991.58},
                                {name : 'Laos', value : 6395.713},
                                {name : 'Lebanon', value : 4341.092},
                                {name : 'Liberia', value : 3957.99},
                                {name : 'Libya', value : 6040.612},
                                {name : 'Sri Lanka', value : 20758.779},
                                {name : 'Lesotho', value : 2008.921},
                                {name : 'Lithuania', value : 3068.457},
                                {name : 'Luxembourg', value : 507.885},
                                {name : 'Latvia', value : 2090.519},
                                {name : 'Morocco', value : 31642.36},
                                {name : 'Moldova', value : 103.619},
                                {name : 'Madagascar', value : 21079.532},
                                {name : 'Mexico', value : 117886.404},
                                {name : 'Macedonia', value : 507.885},
                                {name : 'Mali', value : 13985.961},
                                {name : 'Myanmar', value : 51931.231},
                                {name : 'Montenegro', value : 620.078},
                                {name : 'Mongolia', value : 2712.738},
                                {name : 'Mozambique', value : 23967.265},
                                {name : 'Mauritania', value : 3609.42},
                                {name : 'Malawi', value : 15013.694},
                                {name : 'Malaysia', value : 28275.835},
                                {name : 'Namibia', value : 2178.967},
                                {name : 'New Caledonia', value : 246.379},
                                {name : 'Niger', value : 15893.746},
                                {name : 'Nigeria', value : 159707.78},
                                {name : 'Nicaragua', value : 5822.209},
                                {name : 'Netherlands', value : 16615.243},
                                {name : 'Norway', value : 4891.251},
                                {name : 'Nepal', value : 26846.016},
                                {name : 'New Zealand', value : 4368.136},
                                {name : 'Oman', value : 2802.768},
                                {name : 'Pakistan', value : 173149.306},
                                {name : 'Panama', value : 3678.128},
                                {name : 'Peru', value : 29262.83},
                                {name : 'Philippines', value : 93444.322},
                                {name : 'Papua New Guinea', value : 6858.945},
                                {name : 'Poland', value : 38198.754},
                                {name : 'Puerto Rico', value : 3709.671},
                                {name : 'North Korea', value : 1.468},
                                {name : 'Portugal', value : 10589.792},
                                {name : 'Paraguay', value : 6459.721},
                                {name : 'Qatar', value : 1749.713},
                                {name : 'Romania', value : 21861.476},
                                {name : 'Russia', value : 21861.476},
                                {name : 'Rwanda', value : 10836.732},
                                {name : 'Western Sahara', value : 514.648},
                                {name : 'Saudi Arabia', value : 27258.387},
                                {name : 'Sudan', value : 35652.002},
                                {name : 'South Sudan', value : 9940.929},
                                {name : 'Senegal', value : 12950.564},
                                {name : 'Solomon Islands', value : 526.447},
                                {name : 'Sierra Leone', value : 5751.976},
                                {name : 'El Salvador', value : 6218.195},
                                {name : 'Somaliland', value : 9636.173},
                                {name : 'Somalia', value : 9636.173},
                                {name : 'Republic of Serbia', value : 3573.024},
                                {name : 'Suriname', value : 524.96},
                                {name : 'Slovakia', value : 5433.437},
                                {name : 'Slovenia', value : 2054.232},
                                {name : 'Sweden', value : 9382.297},
                                {name : 'Swaziland', value : 1193.148},
                                {name : 'Syria', value : 7830.534},
                                {name : 'Chad', value : 11720.781},
                                {name : 'Togo', value : 6306.014},
                                {name : 'Thailand', value : 66402.316},
                                {name : 'Tajikistan', value : 7627.326},
                                {name : 'Turkmenistan', value : 5041.995},
                                {name : 'East Timor', value : 10016.797},
                                {name : 'Trinidad and Tobago', value : 1328.095},
                                {name : 'Tunisia', value : 10631.83},
                                {name : 'Turkey', value : 72137.546},
                                {name : 'United Republic of Tanzania', value : 44973.33},
                                {name : 'Uganda', value : 33987.213},
                                {name : 'Ukraine', value : 46050.22},
                                {name : 'Uruguay', value : 3371.982},
                                {name : 'United States of America', value : 312247.116},
                                {name : 'Uzbekistan', value : 27769.27},
                                {name : 'Venezuela', value : 236.299},
                                {name : 'Vietnam', value : 89047.397},
                                {name : 'Vanuatu', value : 236.299},
                                {name : 'West Bank', value : 13.565},
                                {name : 'Yemen', value : 22763.008},
                                {name : 'South Africa', value : 51452.352},
                                {name : 'Zambia', value : 13216.985},
                                {name : 'Zimbabwe', value : 13076.978}
                            ]
                        }
                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                overTimeChart.setOption(option);
            }
        );
    },

    onRenderLineChart1: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/line'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("linechart01"));
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
                    calculable : false,
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
    },
    onRenderLineChart2: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/line'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("linechart02"));
                // 指定图表的配置项和数据
                var option = {
                    title : {
                        text: '某楼盘销售情况',
                        subtext: '纯属虚构'
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['意向','预购','成交']
                    },
                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : false,
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'成交',
                            type:'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default'}}},
                            data:[10, 12, 21, 54, 260, 830, 710]
                        },
                        {
                            name:'预购',
                            type:'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default'}}},
                            data:[30, 182, 434, 791, 390, 30, 10]
                        },
                        {
                            name:'意向',
                            type:'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default'}}},
                            data:[1320, 1132, 601, 234, 120, 90, 20]
                        }
                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                overTimeChart.setOption(option);
            }
        );
    },

    onRenderBarChart1: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/bar'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("barchart01"));
                // 指定图表的配置项和数据
                var option = {
                    title : {
                        text: '某地区蒸发量和降水量',
                        subtext: '纯属虚构'
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['蒸发量','降水量']
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
                    calculable : false,
                    xAxis : [
                        {
                            type : 'category',
                            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'蒸发量',
                            type:'bar',
                            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
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
                            name:'降水量',
                            type:'bar',
                            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                            markPoint : {
                                data : [
                                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
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
    },
    onRenderBarChart2: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/bar'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("barchart02"));
                // 指定图表的配置项和数据
                var option = {
                    title : {
                        text: '世界人口总量',
                        subtext: '数据来自网络'
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['2011年', '2012年']
                    },
                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : false,
                    xAxis : [
                        {
                            type : 'value',
                            boundaryGap : [0, 0.01]
                        }
                    ],
                    yAxis : [
                        {
                            type : 'category',
                            data : ['巴西','印尼','美国','印度','中国','世界人口(万)']
                        }
                    ],
                    series : [
                        {
                            name:'2011年',
                            type:'bar',
                            data:[18203, 23489, 29034, 104970, 131744, 630230]
                        },
                        {
                            name:'2012年',
                            type:'bar',
                            data:[19325, 23438, 31000, 121594, 134141, 681807]
                        }
                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                overTimeChart.setOption(option);
            }
        );
    },

    onRenderPieChart1: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/pie',
                'echarts/chart/funnel'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("piechart01"));
                // 指定图表的配置项和数据
                var option = {
                    title : {
                        text: '某站点用户访问来源',
                        subtext: '纯属虚构',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient : 'vertical',
                        x : 'left',
                        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true,
                                type: ['pie', 'funnel'],
                                option: {
                                    funnel: {
                                        x: '25%',
                                        width: '50%',
                                        funnelAlign: 'left',
                                        max: 1548
                                    }
                                }
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : false,
                    series : [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ]
                        }
                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                overTimeChart.setOption(option);
            }
        );
    },
    onRenderPieChart2: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/pie',
                'echarts/chart/funnel'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("piechart02"));
                // 指定图表的配置项和数据
                var labelTop = {
                    normal : {
                        label : {
                            show : true,
                            position : 'center',
                            formatter : '{b}',
                            textStyle: {
                                baseline : 'bottom'
                            }
                        },
                        labelLine : {
                            show : false
                        }
                    }
                };
                var labelFromatter = {
                    normal : {
                        label : {
                            formatter : function (params){
                                return 100 - params.value + '%'
                            },
                            textStyle: {
                                baseline : 'top'
                            }
                        }
                    }
                };
                var labelBottom = {
                    normal : {
                        color: '#ccc',
                        label : {
                            show : true,
                            position : 'center'
                        },
                        labelLine : {
                            show : false
                        }
                    },
                    emphasis: {
                        color: 'rgba(0,0,0,0)'
                    }
                };
                var radius = [40, 55];
                var option = {
                    legend: {
                        x : 'center',
                        y : 'center',
                        data:[
                            'GoogleMaps','Facebook','Youtube','Google+','Weixin',
                            'Twitter', 'Skype', 'Messenger', 'Whatsapp', 'Instagram'
                        ]
                    },
                    title : {
                        text: 'The App World',
                        subtext: 'from global web index',
                        x: 'center'
                    },
                    toolbox: {
                        show : false,
                        feature : {
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true,
                                type: ['pie', 'funnel'],
                                option: {
                                    funnel: {
                                        width: '20%',
                                        height: '30%',
                                        itemStyle : {
                                            normal : {
                                                label : {
                                                    formatter : function (params){
                                                        return 'other\n' + params.value + '%\n'
                                                    },
                                                    textStyle: {
                                                        baseline : 'middle'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    series : [
                        {
                            type : 'pie',
                            center : ['10%', '30%'],
                            radius : radius,
                            x: '0%', // for funnel
                            itemStyle : labelFromatter,
                            data : [
                                {name:'other', value:46, itemStyle : labelBottom},
                                {name:'GoogleMaps', value:54,itemStyle : labelTop}
                            ]
                        },
                        {
                            type : 'pie',
                            center : ['30%', '30%'],
                            radius : radius,
                            x:'20%', // for funnel
                            itemStyle : labelFromatter,
                            data : [
                                {name:'other', value:56, itemStyle : labelBottom},
                                {name:'Facebook', value:44,itemStyle : labelTop}
                            ]
                        },
                        {
                            type : 'pie',
                            center : ['50%', '30%'],
                            radius : radius,
                            x:'40%', // for funnel
                            itemStyle : labelFromatter,
                            data : [
                                {name:'other', value:65, itemStyle : labelBottom},
                                {name:'Youtube', value:35,itemStyle : labelTop}
                            ]
                        },
                        {
                            type : 'pie',
                            center : ['70%', '30%'],
                            radius : radius,
                            x:'60%', // for funnel
                            itemStyle : labelFromatter,
                            data : [
                                {name:'other', value:70, itemStyle : labelBottom},
                                {name:'Google+', value:30,itemStyle : labelTop}
                            ]
                        },
                        {
                            type : 'pie',
                            center : ['90%', '30%'],
                            radius : radius,
                            x:'80%', // for funnel
                            itemStyle : labelFromatter,
                            data : [
                                {name:'other', value:73, itemStyle : labelBottom},
                                {name:'Weixin', value:27,itemStyle : labelTop}
                            ]
                        },
                        {
                            type : 'pie',
                            center : ['10%', '70%'],
                            radius : radius,
                            y: '55%',   // for funnel
                            x: '0%',    // for funnel
                            itemStyle : labelFromatter,
                            data : [
                                {name:'other', value:78, itemStyle : labelBottom},
                                {name:'Twitter', value:22,itemStyle : labelTop}
                            ]
                        },
                        {
                            type : 'pie',
                            center : ['30%', '70%'],
                            radius : radius,
                            y: '55%',   // for funnel
                            x:'20%',    // for funnel
                            itemStyle : labelFromatter,
                            data : [
                                {name:'other', value:78, itemStyle : labelBottom},
                                {name:'Skype', value:22,itemStyle : labelTop}
                            ]
                        },
                        {
                            type : 'pie',
                            center : ['50%', '70%'],
                            radius : radius,
                            y: '55%',   // for funnel
                            x:'40%', // for funnel
                            itemStyle : labelFromatter,
                            data : [
                                {name:'other', value:78, itemStyle : labelBottom},
                                {name:'Messenger', value:22,itemStyle : labelTop}
                            ]
                        },
                        {
                            type : 'pie',
                            center : ['70%', '70%'],
                            radius : radius,
                            y: '55%',   // for funnel
                            x:'60%', // for funnel
                            itemStyle : labelFromatter,
                            data : [
                                {name:'other', value:83, itemStyle : labelBottom},
                                {name:'Whatsapp', value:17,itemStyle : labelTop}
                            ]
                        },
                        {
                            type : 'pie',
                            center : ['90%', '70%'],
                            radius : radius,
                            y: '55%',   // for funnel
                            x:'80%', // for funnel
                            itemStyle : labelFromatter,
                            data : [
                                {name:'other', value:89, itemStyle : labelBottom},
                                {name:'Instagram', value:11,itemStyle : labelTop}
                            ]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                overTimeChart.setOption(option);
            }
        );
    },

    onRenderHotChart1: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/heatmap'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("hotchart01"));
                // 指定图表的配置项和数据
                var heatData = [];
                for (var i = 0; i < 20; ++i) {
                    heatData.push([
                        400 + Math.random() * 300,
                        5 + Math.random() * 10,
                        Math.random()
                    ]);
                }
                for (var i = 0; i < 100; ++i) {
                    heatData.push([
                        100 + Math.random() * 600,
                        150 + Math.random() * 50,
                        Math.random()
                    ]);
                }
                for (var i = 0; i < 200; ++i) {
                    heatData.push([
                        Math.random() * 1000,
                        Math.random() * 800,
                        Math.random() * 0.5
                    ]);
                }
                var option = {
                    title : {
                        text: '热力图自定义样式',
                        textStyle: {
                            color: 'white'
                        }
                    },
                    series : [
                        {
                            type : 'heatmap',
                            data : heatData,
                            hoverable : false,
                            gradientColors: [{
                                offset: 0.4,
                                color: 'green'
                            }, {
                                offset: 0.5,
                                color: 'yellow'
                            }, {
                                offset: 0.8,
                                color: 'orange'
                            }, {
                                offset: 1,
                                color: 'red'
                            }],
                            minAlpha: 0.2,
                            valueScale: 2,
                            opacity: 0.6
                        }
                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                overTimeChart.setOption(option);
            }
        );
    },
    onRenderHotChart2: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/map',
                'echarts/chart/heatmap'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("hotchart02"));
                // 指定图表的配置项和数据
                var heatData = [];
                for (var i = 0; i < 200; ++i) {
                    heatData.push([
                        100 + Math.random() * 20,
                        24 + Math.random() * 16,
                        Math.random()
                    ]);
                }
                for (var j = 0; j < 10; ++j) {
                    var x = 100 + Math.random() * 16;
                    var y = 24 + Math.random() * 12;
                    var cnt = 30 * Math.random();
                    for (var i = 0; i < cnt; ++i) {
                        heatData.push([
                            x + Math.random() * 2,
                            y + Math.random() * 2,
                            Math.random()
                        ]);
                    }
                }

                var option = {
                    backgroundColor: '#1b1b1b',
                    title : {
                        text: '热力图结合地图',
                        x:'center',
                        textStyle: {
                            color: 'white'
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: '{b}'
                    },
                    toolbox: {
                        show : false,
                        orient : 'vertical',
                        x: 'right',
                        y: 'center',
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    series : [
                        {
                            name: '北京',
                            type: 'map',
                            mapType: 'china',
                            roam: true,
                            hoverable: false,
                            data:[],
                            heatmap: {
                                minAlpha: 0.1,
                                data: heatData
                            },
                            itemStyle: {
                                normal: {
                                    borderColor:'rgba(100,149,237,0.6)',
                                    borderWidth:0.5,
                                    areaStyle: {
                                        color: '#1b1b1b'
                                    }
                                }
                            }
                        }
                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                overTimeChart.setOption(option);
            }
        );
    },

    onRenderGaugeChart1: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/gauge'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("gaugechart01"));
                // 指定图表的配置项和数据
                var option = {
                    tooltip : {
                        formatter: "{a} <br/>{b} : {c}%"
                    },
                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    series : [
                        {
                            name:'业务指标',
                            type:'gauge',
                            detail : {formatter:'{value}%'},
                            data:[{value: 50, name: '完成率'}]
                        }
                    ]
                };

                if (typeof timeTicket1 != 'undefined')
                    clearInterval(timeTicket1);
                timeTicket1 = setInterval(function (){
                    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
                    overTimeChart.setOption(option, true);
                },2000);
            }
        );
    },
    onRenderGaugeChart2: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/gauge'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("gaugechart02"));
                // 指定图表的配置项和数据
                var option = {
                    tooltip : {
                        formatter: "{a} <br/>{b} : {c}%"
                    },
                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    series : [
                        {
                            name:'业务指标',
                            type:'gauge',
                            splitNumber: 10,       // 分割段数，默认为5
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']],
                                    width: 8
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                splitNumber: 10,   // 每份split细分多少段
                                length :12,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto'
                                }
                            },
                            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    color: 'auto'
                                }
                            },
                            splitLine: {           // 分隔线
                                show: true,        // 默认显示，属性show控制显示与否
                                length :30,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    color: 'auto'
                                }
                            },
                            pointer : {
                                width : 5
                            },
                            title : {
                                show : true,
                                offsetCenter: [0, '-40%'],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder'
                                }
                            },
                            detail : {
                                formatter:'{value}%',
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    color: 'auto',
                                    fontWeight: 'bolder'
                                }
                            },
                            data:[{value: 50, name: '完成率'}]
                        }
                    ]
                };

                if (typeof timeTicket2 != 'undefined')
                    clearInterval(timeTicket2);
                timeTicket2 = setInterval(function (){
                    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
                    overTimeChart.setOption(option,true);
                },2000)
            }
        );
    },
    onRenderGaugeChart3: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/gauge'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("gaugechart03"));
                // 指定图表的配置项和数据
                var option = {
                    tooltip : {
                        formatter: "{a} <br/>{b} : {c}%"
                    },
                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    series : [
                        {
                            name:'业务指标',
                            type:'gauge',
                            startAngle: 180,
                            endAngle: 0,
                            center : ['50%', '90%'],    // 默认全局居中
                            radius : 320,
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    width: 200
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                splitNumber: 10,   // 每份split细分多少段
                                length :12,        // 属性length控制线长
                            },
                            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                                formatter: function(v){
                                    switch (v+''){
                                        case '10': return '低';
                                        case '50': return '中';
                                        case '90': return '高';
                                        default: return '';
                                    }
                                },
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    color: '#fff',
                                    fontSize: 15,
                                    fontWeight: 'bolder'
                                }
                            },
                            pointer: {
                                width:50,
                                length: '90%',
                                color: 'rgba(255, 255, 255, 0.8)'
                            },
                            title : {
                                show : true,
                                offsetCenter: [0, '-60%'],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    color: '#fff',
                                    fontSize: 30
                                }
                            },
                            detail : {
                                show : true,
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderWidth: 0,
                                borderColor: '#ccc',
                                width: 100,
                                height: 40,
                                offsetCenter: [0, -40],       // x, y，单位px
                                formatter:'{value}%',
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontSize : 50
                                }
                            },
                            data:[{value: 50, name: '完成率'}]
                        }
                    ]
                };

                if (typeof timeTicket3 != 'undefined')
                    clearInterval(timeTicket3);
                timeTicket3 = setInterval(function (){
                    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
                    overTimeChart.setOption(option,true);
                },2000)

            }
        );
    },
    onRenderGaugeChart4: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/gauge'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("gaugechart04"));
                // 指定图表的配置项和数据
                var option = {
                    tooltip : {
                        formatter: "{a} <br/>{b} : {c}%"
                    },
                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    series : [
                        {
                            name:'个性化仪表盘',
                            type:'gauge',
                            center : ['50%', '50%'],    // 默认全局居中
                            radius : [0, '75%'],
                            startAngle: 140,
                            endAngle : -140,
                            min: 0,                     // 最小值
                            max: 100,                   // 最大值
                            precision: 0,               // 小数精度，默认为0，无小数点
                            splitNumber: 10,             // 分割段数，默认为5
                            axisLine: {            // 坐标轴线
                                show: true,        // 默认显示，属性show控制显示与否
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.2, 'lightgreen'],[0.4, 'orange'],[0.8, 'skyblue'],[1, '#ff4500']],
                                    width: 30
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                show: true,        // 属性show控制显示与否，默认不显示
                                splitNumber: 5,    // 每份split细分多少段
                                length :8,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: '#eee',
                                    width: 1,
                                    type: 'solid'
                                }
                            },
                            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                                show: true,
                                formatter: function(v){
                                    switch (v+''){
                                        case '10': return '弱';
                                        case '30': return '低';
                                        case '60': return '中';
                                        case '90': return '高';
                                        default: return '';
                                    }
                                },
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    color: '#333'
                                }
                            },
                            splitLine: {           // 分隔线
                                show: true,        // 默认显示，属性show控制显示与否
                                length :30,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    color: '#eee',
                                    width: 2,
                                    type: 'solid'
                                }
                            },
                            pointer : {
                                length : '80%',
                                width : 8,
                                color : 'auto'
                            },
                            title : {
                                show : true,
                                offsetCenter: ['-65%', -10],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    color: '#333',
                                    fontSize : 15
                                }
                            },
                            detail : {
                                show : true,
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderWidth: 0,
                                borderColor: '#ccc',
                                width: 100,
                                height: 40,
                                offsetCenter: ['-60%', 10],       // x, y，单位px
                                formatter:'{value}%',
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    color: 'auto',
                                    fontSize : 30
                                }
                            },
                            data:[{value: 50, name: '仪表盘'}]
                        }
                    ]
                };

                if (typeof timeTicket4 != 'undefined')
                    clearInterval(timeTicket4);
                timeTicket4 = setInterval(function (){
                    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
                    overTimeChart.setOption(option, true);
                },2000)

            }
        );
    },
    onRenderGaugeChart5: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/gauge'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("gaugechart05"));
                // 指定图表的配置项和数据
                var option = {
                    tooltip : {
                        formatter: "{a} <br/>{c} {b}"
                    },
                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    series : [
                        {
                            name:'速度',
                            type:'gauge',
                            z: 3,
                            min:0,
                            max:220,
                            splitNumber:11,
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    width: 10
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                length :15,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto'
                                }
                            },
                            splitLine: {           // 分隔线
                                length :20,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    color: 'auto'
                                }
                            },
                            title : {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 20,
                                    fontStyle: 'italic'
                                }
                            },
                            detail : {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder'
                                }
                            },
                            data:[{value: 40, name: 'km/h'}]
                        },
                        {
                            name:'转速',
                            type:'gauge',
                            center : ['25%', '55%'],    // 默认全局居中
                            radius : '50%',
                            min:0,
                            max:7,
                            endAngle:45,
                            splitNumber:7,
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    width: 8
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                length :12,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto'
                                }
                            },
                            splitLine: {           // 分隔线
                                length :20,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    color: 'auto'
                                }
                            },
                            pointer: {
                                width:5
                            },
                            title : {
                                offsetCenter: [0, '-30%'],       // x, y，单位px
                            },
                            detail : {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder'
                                }
                            },
                            data:[{value: 1.5, name: 'x1000 r/min'}]
                        },
                        {
                            name:'油表',
                            type:'gauge',
                            center : ['75%', '50%'],    // 默认全局居中
                            radius : '50%',
                            min:0,
                            max:2,
                            startAngle:135,
                            endAngle:45,
                            splitNumber:2,
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.2, '#ff4500'],[0.8, '#48b'],[1, '#228b22']],
                                    width: 8
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                splitNumber:5,
                                length :10,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto'
                                }
                            },
                            axisLabel: {
                                formatter:function(v){
                                    switch (v + '') {
                                        case '0' : return 'E';
                                        case '1' : return 'Gas';
                                        case '2' : return 'F';
                                    }
                                }
                            },
                            splitLine: {           // 分隔线
                                length :15,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    color: 'auto'
                                }
                            },
                            pointer: {
                                width:2
                            },
                            title : {
                                show: false
                            },
                            detail : {
                                show: false
                            },
                            data:[{value: 0.5, name: 'gas'}]
                        },
                        {
                            name:'水表',
                            type:'gauge',
                            center : ['75%', '50%'],    // 默认全局居中
                            radius : '50%',
                            min:0,
                            max:2,
                            startAngle:315,
                            endAngle:225,
                            splitNumber:2,
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.2, '#ff4500'],[0.8, '#48b'],[1, '#228b22']],
                                    width: 8
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                show: false
                            },
                            axisLabel: {
                                formatter:function(v){
                                    switch (v + '') {
                                        case '0' : return 'H';
                                        case '1' : return 'Water';
                                        case '2' : return 'C';
                                    }
                                }
                            },
                            splitLine: {           // 分隔线
                                length :15,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    color: 'auto'
                                }
                            },
                            pointer: {
                                width:2
                            },
                            title : {
                                show: false
                            },
                            detail : {
                                show: false
                            },
                            data:[{value: 0.5, name: 'gas'}]
                        }
                    ]
                };

                if (typeof timeTicket5 != 'undefined')
                    clearInterval(timeTicket5);
                timeTicket5 = setInterval(function (){
                    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
                    option.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
                    option.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
                    option.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
                    overTimeChart.setOption(option,true);
                },2000)

            }
        );
    },
    onRenderGaugeChart6: function(con) {
        require(
            [
                'echarts',
                'echarts/chart/gauge'
            ],
            function (echarts) {
                var overTimeChart = echarts.init(document
                    .getElementById("gaugechart06"));
                // 指定图表的配置项和数据
                var option = {
                    backgroundColor: '#1b1b1b',
                    tooltip : {
                        formatter: "{a} <br/>{c} {b}"
                    },
                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    series : [
                        {
                            name:'速度',
                            type:'gauge',
                            min:0,
                            max:220,
                            splitNumber:11,
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                                    width: 3,
                                    shadowColor : '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisLabel: {            // 坐标轴小标记
                                textStyle: {       // 属性lineStyle控制线条样式
                                    fontWeight: 'bolder',
                                    color: '#fff',
                                    shadowColor : '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                length :15,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto',
                                    shadowColor : '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            splitLine: {           // 分隔线
                                length :25,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    width:3,
                                    color: '#fff',
                                    shadowColor : '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            pointer: {           // 分隔线
                                shadowColor : '#fff', //默认透明
                                shadowBlur: 5
                            },
                            title : {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 20,
                                    fontStyle: 'italic',
                                    color: '#fff',
                                    shadowColor : '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            detail : {
                                backgroundColor: 'rgba(30,144,255,0.8)',
                                borderWidth: 1,
                                borderColor: '#fff',
                                shadowColor : '#fff', //默认透明
                                shadowBlur: 5,
                                offsetCenter: [0, '50%'],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    color: '#fff'
                                }
                            },
                            data:[{value: 40, name: 'km/h'}]
                        },
                        {
                            name:'转速',
                            type:'gauge',
                            center : ['25%', '55%'],    // 默认全局居中
                            radius : '50%',
                            min:0,
                            max:7,
                            endAngle:45,
                            splitNumber:7,
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.29, 'lime'],[0.86, '#1e90ff'],[1, '#ff4500']],
                                    width: 2,
                                    shadowColor : '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisLabel: {            // 坐标轴小标记
                                textStyle: {       // 属性lineStyle控制线条样式
                                    fontWeight: 'bolder',
                                    color: '#fff',
                                    shadowColor : '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                length :12,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto',
                                    shadowColor : '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            splitLine: {           // 分隔线
                                length :20,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    width:3,
                                    color: '#fff',
                                    shadowColor : '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            pointer: {
                                width:5,
                                shadowColor : '#fff', //默认透明
                                shadowBlur: 5
                            },
                            title : {
                                offsetCenter: [0, '-30%'],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontStyle: 'italic',
                                    color: '#fff',
                                    shadowColor : '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            detail : {
                                //backgroundColor: 'rgba(30,144,255,0.8)',
                                // borderWidth: 1,
                                borderColor: '#fff',
                                shadowColor : '#fff', //默认透明
                                shadowBlur: 5,
                                width: 80,
                                height:30,
                                offsetCenter: [25, '20%'],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    color: '#fff'
                                }
                            },
                            data:[{value: 1.5, name: 'x1000 r/min'}]
                        },
                        {
                            name:'油表',
                            type:'gauge',
                            center : ['75%', '50%'],    // 默认全局居中
                            radius : '50%',
                            min:0,
                            max:2,
                            startAngle:135,
                            endAngle:45,
                            splitNumber:2,
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                                    width: 2,
                                    shadowColor : '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                length :12,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto',
                                    shadowColor : '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisLabel: {
                                textStyle: {       // 属性lineStyle控制线条样式
                                    fontWeight: 'bolder',
                                    color: '#fff',
                                    shadowColor : '#fff', //默认透明
                                    shadowBlur: 10
                                },
                                formatter:function(v){
                                    switch (v + '') {
                                        case '0' : return 'E';
                                        case '1' : return 'Gas';
                                        case '2' : return 'F';
                                    }
                                }
                            },
                            splitLine: {           // 分隔线
                                length :15,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    width:3,
                                    color: '#fff',
                                    shadowColor : '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            pointer: {
                                width:2,
                                shadowColor : '#fff', //默认透明
                                shadowBlur: 5
                            },
                            title : {
                                show: false
                            },
                            detail : {
                                show: false
                            },
                            data:[{value: 0.5, name: 'gas'}]
                        },
                        {
                            name:'水表',
                            type:'gauge',
                            center : ['75%', '50%'],    // 默认全局居中
                            radius : '50%',
                            min:0,
                            max:2,
                            startAngle:315,
                            endAngle:225,
                            splitNumber:2,
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                                    width: 2,
                                    shadowColor : '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                show: false
                            },
                            axisLabel: {
                                textStyle: {       // 属性lineStyle控制线条样式
                                    fontWeight: 'bolder',
                                    color: '#fff',
                                    shadowColor : '#fff', //默认透明
                                    shadowBlur: 10
                                },
                                formatter:function(v){
                                    switch (v + '') {
                                        case '0' : return 'H';
                                        case '1' : return 'Water';
                                        case '2' : return 'C';
                                    }
                                }
                            },
                            splitLine: {           // 分隔线
                                length :15,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    width:3,
                                    color: '#fff',
                                    shadowColor : '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            pointer: {
                                width:2,
                                shadowColor : '#fff', //默认透明
                                shadowBlur: 5
                            },
                            title : {
                                show: false
                            },
                            detail : {
                                show: false
                            },
                            data:[{value: 0.5, name: 'gas'}]
                        }
                    ]
                };

                if (typeof timeTicket6 != 'undefined')
                    clearInterval(timeTicket6);
                timeTicket6 = setInterval(function (){
                    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
                    option.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
                    option.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
                    option.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
                    overTimeChart.setOption(option,true);
                },2000)

            }
        );
    },

    onRenderHighMap: function (con) {
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
                        con.setHtml('<div id="highMap" style="width: ' + con.getWidth() + 'px; height: 600px"></div>');
                        con.echart = echarts.init(document.getElementById("highMap"));

                        function randomData() {
                            return Math.round(Math.random()*2500);
                        }

                        var option0 = {
                            tooltip: {
                                trigger: 'item',
                                formatter: '{b}'
                            },
                            visualMap: {
                                seriesIndex: 0,
                                min: 0,
                                max: 2500,
                                left: 'left',
                                top: 'bottom',
                                text: ['高','低'],           // 文本，默认为数值文本
                                calculable: true
                            },
                            grid: {
                                height: 200,
                                width: 8,
                                right: 80,
                                bottom: 10
                            },
                            xAxis: {
                                type: 'category',
                                data: [],
                                splitNumber: 1,
                                show: false
                            },
                            yAxis: {
                                position: 'right',
                                min: 0,
                                max: 20,
                                splitNumber: 20,
                                inverse: true,
                                axisLabel: {
                                    show: true
                                },
                                axisLine: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                },
                                data: []
                            },
                            series: [
                                {
                                    zlevel: 1,
                                    name: '中国',
                                    type: 'map',
                                    mapType: 'china',
                                    selectedMode : 'multiple',
                                    // roam: true,
                                    // left: 0,
                                    // right: '15%',
                                    label: {
                                        normal: {
                                            show: true
                                        },
                                        emphasis: {
                                            show: true
                                        }
                                    },
                                    data:[
                                        {name: '北京',value: randomData() },
                                        {name: '天津',value: randomData() },
                                        {name: '上海',value: randomData() },
                                        {name: '重庆',value: randomData() },
                                        {name: '河北',value: randomData() },
                                        {name: '河南',value: randomData() },
                                        {name: '云南',value: randomData() },
                                        {name: '辽宁',value: randomData() },
                                        {name: '黑龙江',value: randomData() },
                                        {name: '湖南',value: randomData() },
                                        {name: '安徽',value: randomData() },
                                        {name: '山东',value: randomData() },
                                        {name: '新疆',value: randomData() },
                                        {name: '江苏',value: randomData() },
                                        {name: '浙江',value: randomData() },
                                        {name: '江西',value: randomData() },
                                        {name: '湖北',value: randomData() },
                                        {name: '广西',value: randomData() },
                                        {name: '甘肃',value: randomData() },
                                        {name: '山西',value: randomData() },
                                        {name: '内蒙古',value: randomData() },
                                        {name: '陕西',value: randomData() },
                                        {name: '吉林',value: randomData() },
                                        {name: '福建',value: randomData() },
                                        {name: '贵州',value: randomData() },
                                        {name: '广东',value: randomData() },
                                        {name: '青海',value: randomData() },
                                        {name: '西藏',value: randomData() },
                                        {name: '四川',value: randomData() },
                                        {name: '宁夏',value: randomData() },
                                        {name: '海南',value: randomData() },
                                        {name: '台湾',value: randomData() },
                                        {name: '香港',value: randomData() },
                                        {name: '澳门',value: randomData() }
                                    ]
                                },
                                {
                                    zlevel: 2,
                                    name: '地图指示',
                                    type: 'bar',
                                    barWidth: 5,
                                    itemStyle: {
                                        normal: {
                                            color: undefined,
                                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                                            shadowBlur: 10
                                        }
                                    },
                                    data: [20]
                                }
                            ]
                        };


                        /**
                         * 根据值获取线性渐变颜色
                         * @param  {String} start 起始颜色
                         * @param  {String} end   结束颜色
                         * @param  {Number} max   最多分成多少分
                         * @param  {Number} val   渐变取值
                         * @return {String}       颜色
                         */
                        function getGradientColor (start, end, max, val) {
                            var rgb = /#((?:[0-9]|[a-fA-F]){2})((?:[0-9]|[a-fA-F]){2})((?:[0-9]|[a-fA-F]){2})/;
                            var sM = start.match(rgb);
                            var eM = end.match(rgb);
                            var err = '';
                            max = max || 1;
                            val = val || 0;
                            if (sM === null) {
                                err = 'start';
                            }
                            if (eM === null) {
                                err = 'end';
                            }
                            if (err.length > 0) {
                                throw new Error('Invalid ' + err + ' color format, required hex color');
                            }
                            var sR = parseInt(sM[1], 16),
                                sG = parseInt(sM[2], 16),
                                sB = parseInt(sM[3], 16);
                            var eR = parseInt(eM[1], 16),
                                eG = parseInt(eM[2], 16),
                                eB = parseInt(eM[3], 16);
                            var p = val / max;
                            var gR = Math.round(sR + (eR - sR) * p).toString(16),
                                gG = Math.round(sG + (eG - sG) * p).toString(16),
                                gB = Math.round(sB + (eB - sB) * p).toString(16);
                            return '#' + gR + gG + gB;
                        }
                        con.echart.setOption(option0);
                        setTimeout(function() {
                            var TOPN = 25;

                            var option = con.echart.getOption();
                            // 修改top
                            option.grid[0].height = TOPN * 20;
                            option.yAxis[0].max = TOPN;
                            option.yAxis[0].splitNumber = TOPN;
                            option.series[1].data[0] = TOPN;
                            // 排序
                            var data = option.series[0].data.sort(function(a, b) {
                                return b.value - a.value
                            });

                            var maxValue = data[0].value,
                                minValue = data.length > TOPN ? data[TOPN - 1].value : data[data.length - 1].value;

                            var s = option.visualMap[0].controller.inRange.color[0],
                                e = option.visualMap[0].controller.inRange.color.slice(-1)[0];
                            var sColor = getGradientColor(s, e, maxValue, minValue);
                            var eColor = getGradientColor(s, e, maxValue, maxValue);

                            option.series[1].itemStyle.normal.color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1,
                                color: sColor
                            }, {
                                offset: 0,
                                color: eColor
                            }]);

                            // yAxis
                            var newYAxisArr = [];
                            echarts.util.each(data, function(item, i) {
                                if (i >= TOPN) {
                                    return false;
                                }
                                var c = getGradientColor(sColor, eColor, maxValue, item.value);
                                newYAxisArr.push({
                                    value: item.name,
                                    textStyle: {
                                        color: c
                                    }
                                })
                            });
                            option.yAxis[0].data = newYAxisArr;
                            option.yAxis[0].axisLabel.formatter = (function(data) {
                                return function(value, i) {
                                    if (!value) return '';
                                    return value + ' ' + data[i].value;
                                }
                            })(data);
                            con.echart.setOption(option);
                        }, 0);
                    }
                });

            }
        );
    }
});
