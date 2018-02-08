Ext.define('logsystem.view.chart.Charts', {
    extend: 'Ext.panel.Panel',
    xtype: 'chartspanel',
    controller: 'charts',
    scrollable: 'y',
    defaults: {
        margin: 10
    },
    items: [
        {
            xtype: 'panel',
            layout: 'hbox',
            header: {
                title: '<span style="color: #000; font-weight: bold; font-family: 微软雅黑">地图</span>',
                style: 'background: #f6f6f6'
            },
            items: [
                {
                    xtype: 'container',
                    style: 'border: 1px solid #ccc',
                    width: '50%',
                    margin: '5 20 0 0',
                    html:'<div id="mapchart01" style="width: 800px;height:480px"></div>',
                    listeners: {
                        afterrender: 'onRenderMapChart1'
                    }
                },
                {
                    xtype: 'container',
                    margin: '5 25 0 0',
                    style: 'border: 1px solid #ccc',
                    width: '50%',
                    html:'<div id="mapchart02" style="width: 800px;height:480px"></div>',
                    listeners: {
                        afterrender: 'onRenderMapChart2'
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            layout: 'vbox',
            header: {
                title: '<span style="color: #000; font-weight: bold; font-family: 微软雅黑">仪表盘</span>',
                style: 'background: #f6f6f6'
            },
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    defaults: {
                        margin: 5
                    },
                    style: 'border: 1px solid #ccc',
                    items: [
                        {
                            xtype: 'container',
                            width: '20%',
                            html:'<div id="gaugechart01" style="width: 300px;height:370px"></div>',
                            listeners: {
                                afterrender: 'onRenderGaugeChart1'
                            }
                        },
                        {
                            xtype: 'container',
                            width: '20%',
                            html:'<div id="gaugechart02" style="width: 300px;height:370px"></div>',
                            listeners: {
                                afterrender: 'onRenderGaugeChart2'
                            }
                        },
                        {
                            xtype: 'container',
                            width: '40%',
                            html:'<div id="gaugechart03" style="width: 680px;height:370px"></div>',
                            listeners: {
                                afterrender: 'onRenderGaugeChart3'
                            }
                        },
                        {
                            xtype: 'container',
                            width: '20%',
                            html:'<div id="gaugechart04" style="width: 300px;height:370px"></div>',
                            listeners: {
                                afterrender: 'onRenderGaugeChart4'
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    defaults: {
                        margin: 5
                    },
                    style: 'border: 1px solid #ccc',
                    items: [
                        {
                            xtype: 'container',
                            width: '50%',
                            html:'<div id="gaugechart05" style="width: 800px;height:400px"></div>',
                            listeners: {
                                afterrender: 'onRenderGaugeChart5'
                            }
                        },
                        {
                            xtype: 'container',
                            width: '50%',
                            html:'<div id="gaugechart06" style="width: 800px;height:400px"></div>',
                            listeners: {
                                afterrender: 'onRenderGaugeChart6'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'panel',
            layout: 'hbox',
            header: {
                title: '<span style="color: #000; font-weight: bold; font-family: 微软雅黑">折线图</span>',
                style: 'background: #f6f6f6'
            },
            items: [
                {
                    xtype: 'container',
                    width: '50%',
                    margin: '5 20 0 0',
                    html:'<div id="linechart01" style="width: 850px;height:480px"></div>',
                    listeners: {
                        afterrender: 'onRenderLineChart1'
                    }
                },
                {
                    xtype: 'container',
                    margin: '5 0 0 0',
                    width: '50%',
                    html:'<div id="linechart02" style="width: 850px;height:480px"></div>',
                    listeners: {
                        afterrender: 'onRenderLineChart2'
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            layout: 'hbox',
            header: {
                title: '<span style="color: #000; font-weight: bold; font-family: 微软雅黑">柱状图</span>',
                style: 'background: #f6f6f6'
            },
            items: [
                {
                    xtype: 'container',
                    width: '50%',
                    margin: '5 20 0 0',
                    html:'<div id="barchart01" style="width: 850px;height:480px"></div>',
                    listeners: {
                        afterrender: 'onRenderBarChart1'
                    }
                },
                {
                    xtype: 'container',
                    margin: '5 0 0 0',
                    width: '50%',
                    html:'<div id="barchart02" style="width: 850px;height:480px"></div>',
                    listeners: {
                        afterrender: 'onRenderBarChart2'
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            layout: 'hbox',
            header: {
                title: '<span style="color: #000; font-weight: bold; font-family: 微软雅黑">饼状图</span>',
                style: 'background: #f6f6f6'
            },
            items: [
                {
                    xtype: 'container',
                    width: '45%',
                    margin: '5 20 0 0',
                    html:'<div id="piechart01" style="width: 850px;height:480px"></div>',
                    listeners: {
                        afterrender: 'onRenderPieChart1'
                    }
                },
                {
                    xtype: 'container',
                    margin: '5 0 0 0',
                    width: '55%',
                    html:'<div id="piechart02" style="width: 850px;height:480px"></div>',
                    listeners: {
                        afterrender: 'onRenderPieChart2'
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            layout: 'hbox',
            header: {
                title: '<span style="color: #000; font-weight: bold; font-family: 微软雅黑">热力图</span>',
                style: 'background: #f6f6f6'
            },
            items: [
                {
                    xtype: 'container',
                    width: '50%',
                    margin: '5 20 0 0',
                    html:'<div id="hotchart01" style="width: 800px;height:480px;background: transparent url(resources/images/background.jpg) no-repeat;background-size: 850px 480px;"></div>',
                    listeners: {
                        afterrender: 'onRenderHotChart1'
                    }
                },
                {
                    xtype: 'container',
                    margin: '5 0 0 0',
                    width: '50%',
                    html:'<div id="hotchart02" style="width: 800px;height:480px"></div>',
                    listeners: {
                        afterrender: 'onRenderHotChart2'
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            layout: 'hbox',
            header: {
                title: '<span style="color: #000; font-weight: bold; font-family: 微软雅黑">阶层地图</span>',
                style: 'background: #f6f6f6'
            },
            items: [
                {
                    xtype: 'container',
                    width: '80%',
                    margin: '5 20 0 0',
                    listeners: {
                        afterrender: 'onRenderHighMap'
                    }
                }
            ]
        }
    ]
});
