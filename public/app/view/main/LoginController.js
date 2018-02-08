/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('logsystem.view.main.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.login',

    onLogin: function (btn) {
        var form = btn.up('form');
        if (!form.isValid()) {
            return;
        }
        var view = this.getView();
        view.mask('登录中，请稍后……');
        form.getForm().submit({
            url: '/users/login',
            method: 'post',
            params: {
                password: hex_md5(form.down('#password').getValue())
            },
            success: function (form, action) {
                // var text = action.result;
                // Ext.toast(text.msg);
                view.unmask();
                localStorage.setItem('isLogin', true);
                localStorage.setItem('username', form.getValues().username);
                var mainContainer = btn.up("maincontainer");
                mainContainer.removeAll();
                //此处以添加主界面为例
                mainContainer.add({
                    xtype: 'app-main'
                });
            },
            failure: function (form, action) {
                view.unmask();
                var text = action.result;
                Ext.toast(text.msg);
            }
        });
    },

    onSpecialKey: function (field, e) {
        if (e.getKey() == e.ENTER) {
            var form = field.up('form');
            if (!form.isValid()) {
                return;
            }
            var view = this.getView();
            view.mask('登录中，请稍后……');
            form.getForm().submit({
                url: '/users/login',
                method: 'post',
                params: {
                    password: hex_md5(field.getValue())
                },
                success: function(form ,action) {
                    // var text = action.result;
                    // Ext.toast(text.msg);
                    view.unmask();
                    localStorage.setItem('isLogin', true);
                    localStorage.setItem('username', form.getValues().username);
                    var mainContainer = field.up("maincontainer");
                    mainContainer.removeAll();
                    //此处以添加主界面为例
                    mainContainer.add({
                        xtype: 'app-main',
                        listeners: {
                            afterrender: function(panel) {
                                panel.down('#usernameTB').setText('<span style="color: #fff; font-size: 18px; font-family: 微软雅黑;">' + localStorage.getItem('username') + '</span>');
                            }
                        }
                    });
                },
                failure: function(form ,action) {
                    view.unmask();
                    var text = action.result;
                    Ext.toast(text.msg);
                }
            });
        }
    },

    onRegister: function (btn) {
        var mainContainer = btn.up("maincontainer");
        mainContainer.removeAll();
        //此处以添加主界面为例
        mainContainer.add({
            xtype: 'registerView'
        });
    },

    onBack: function(btn) {
        var mainContainer = btn.up("maincontainer");
        mainContainer.removeAll();
        //此处以添加主界面为例
        mainContainer.add({
            xtype: 'visitView'
        });
    }
})
;
