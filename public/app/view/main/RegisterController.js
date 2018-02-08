/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('logsystem.view.main.RegisterController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.register',

    onLogin: function (btn) {
        var mainContainer = btn.up("maincontainer");
        mainContainer.removeAll();
        //此处以添加主界面为例
        mainContainer.add({
            xtype: 'loginView'
        });
    },

    onRegister: function (btn) {
        var form = btn.up('form');
        if (!form.isValid()) {
            return;
        }
        if (form.down('#password').getValue() != form.down('#confirmPWD').getValue()) {
            Ext.toast('密码不一致');
            return;
        }
        var view = this.getView();
        view.mask('处理中，请稍后……');
        form.getForm().submit({
            url: '/users/register',
            method: 'post',
            params: {
                password: hex_md5(form.down('#password').getValue()),
                confirmPWD: hex_md5(form.down('#confirmPWD').getValue())
            },
            success: function(form ,action) {
                view.unmask();
                var text = action.result;
                Ext.toast(text.msg);
                var mainContainer = btn.up("maincontainer");
                mainContainer.removeAll();
                //此处以添加主界面为例
                mainContainer.add({
                    xtype: 'loginView'
                });
            },
            failure: function(form ,action) {
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
            if (form.down('#password').getValue() != field.getValue()) {
                Ext.toast('密码不一致');
                return;
            }
            var view = this.getView();
            view.mask('处理中，请稍后……');
            form.getForm().submit({
                url: '/users/register',
                method: 'post',
                params: {
                    password: hex_md5(form.down('#password').getValue()),
                    confirmPWD: hex_md5(field.getValue())
                },
                success: function(form ,action) {
                    view.unmask();
                    var text = action.result;
                    Ext.toast(text.msg);
                    var mainContainer = field.up("maincontainer");
                    mainContainer.removeAll();
                    //此处以添加主界面为例
                    mainContainer.add({
                        xtype: 'loginView'
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

    onReset: function(btn) {
        var form = btn.up('form');
        form.getForm().reset();
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
