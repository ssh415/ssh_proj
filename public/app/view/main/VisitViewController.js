/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('logsystem.view.main.VisitViewController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.visitView',

    onLogin: function (btn) {
        // this.redirectTo('#login');
        if (typeof interval != 'undefined')
            clearInterval(interval);
        var mainContainer = btn.up("maincontainer");
        mainContainer.removeAll();
        //此处以添加主界面为例
        mainContainer.add({
            xtype: 'loginView'
        });
    },

    onRegister: function (btn) {
        // this.redirectTo('#register');
        if (typeof interval != 'undefined')
            clearInterval(interval);
        var mainContainer = btn.up("maincontainer");
        mainContainer.removeAll();
        //此处以添加主界面为例
        mainContainer.add({
            xtype: 'registerView'
        });
    }
})
;
