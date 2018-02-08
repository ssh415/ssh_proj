/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('logsystem.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onLogout: function(btn) {
        var view = this.getView();
        view.mask('正在退出，请稍后……');
        Ext.Ajax.request({
            url: '/users/logout',
            method: 'post',
            params: {
                username: 'ssh415'
            },
            success: function (response) {
                var text = Ext.decode(response.responseText);
                if (text.success) {
                    view.unmask();
                    localStorage.removeItem('isLogin');
                    localStorage.removeItem('username');
                    var mainContainer = btn.up("maincontainer");
                    mainContainer.removeAll();
                    //此处以添加主界面为例
                    mainContainer.add({
                        xtype: 'visitView'
                    });
                }
            },
            failure: function (response) {
                view.unmask();
                Ext.toast('服务器异常');
            }
        });
    }
});
