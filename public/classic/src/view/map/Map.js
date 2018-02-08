Ext.define('logsystem.view.map.Map', {
    extend: 'Ext.tab.Panel',
    xtype: 'mappanel',
    controller: 'map',
    scrollable: 'y',
    items: [
        {
            xtype: 'trafficpanel'
        },
        {
            xtype: 'lushupanel'
        },
        // {
        //     xtype: 'equipmentMap'
        // },
        // {
        //     xtype: 'aggregationpanel'
        // }
    ]
});
