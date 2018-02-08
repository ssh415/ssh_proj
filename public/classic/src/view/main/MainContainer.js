Ext.define('logsystem.view.main.MainContainer', {
    extend: 'Ext.container.Container',
    xtype: 'maincontainer',

    controller: 'mainContainer',

    // fullscreen:true,

    requires: [
        // 'logsystem.view.main.VisitView'
    ],

    layout:'fit',

    items:[],

    listeners: {
        afterrender: 'onAfterRender'
    }
});