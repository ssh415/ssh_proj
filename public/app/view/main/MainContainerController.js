/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('logsystem.view.main.MainContainerController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.mainContainer',

    onAfterRender: function(con) {
        con.removeAll();
        if (!localStorage.getItem('isLogin')) {
            con.add({
                xtype: 'visitView'
            });
        } else {
            con.add({
                xtype: 'app-main'
            });
        }
    }
});
