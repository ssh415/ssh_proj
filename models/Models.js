var Sequelize = require('sequelize');
var sequelize = require('../service/sequelize');

var Models = {
    //账号模型
    Account: sequelize.define('account', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        groupId: {
            field: 'group_id',
            type: Sequelize.BIGINT,
            allowNull: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        realName: {
            field: 'realname',
            type: Sequelize.STRING,
            allowNull: false
        },
        remark: {
            type: Sequelize.STRING,
            allowNull: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createTime: {
            field: 'create_at',
            type: Sequelize.STRING,
            allowNull: true
        },
        creator: {
            field: 'create_by',
            type: Sequelize.STRING,
            allowNull: true
        },
        updateTime: {
            field: 'update_at',
            type: Sequelize.STRING,
            allowNull: true
        },
        updater: {
            field: 'update_by',
            type: Sequelize.STRING,
            allowNull: true
        },
        userType: {
            field: 'user_type',
            type: Sequelize.BIGINT,
            allowNull: true
        }
    }, {
        tableName: 'ssh_account',
        timestamps: false,
        freezeTableName: true
    }),
    //群组模型
    Group: sequelize.define('group', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createTime: {
            field: 'create_at',
            type: Sequelize.STRING,
            allowNull: true
        },
        creator: {
            field: 'create_by',
            type: Sequelize.STRING,
            allowNull: true
        },
        updateTime: {
            field: 'update_at',
            type: Sequelize.STRING,
            allowNull: true
        },
        updater: {
            field: 'update_by',
            type: Sequelize.STRING,
            allowNull: true
        }
    }, {
        tableName: 'ssh_group',
        timestamps: false,
        freezeTableName: true
    }),
    //日志模型
    Log: sequelize.define('log', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        modelName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false
        },
        operator: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createAt: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'ssh_log',
        timestamps: false,
        freezeTableName: true
    }),
    //首页数据
    HomeData: sequelize.define('homeData', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false
        },
        datestr: {
            type: Sequelize.STRING,
            allowNull: false
        },
        data1: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        data2: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        data3: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        data4: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        data5: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        data6: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        data7: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        data8: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    }, {
        tableName: 'ssh_home_data',
        timestamps: false,
        freezeTableName: true
    }),
    //多表关联
    associate: function() {
        this.Account.belongsTo(this.Group);
        this.Group.hasMany(this.Account);
    }
};
Models.associate();
module.exports = Models;