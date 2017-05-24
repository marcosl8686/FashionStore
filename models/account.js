'use strict'
var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
    var Account = sequelize.define("Account", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140] // validation needed?
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140] // validation needed?
            }
        },
        companyName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140] // validation needed?
            }
        },
        taxID: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isNumeric: true,
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140] // validation needed?
            }
        },
        suite: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140] // validation needed?
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140] // validation needed?
            }
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true,
            }
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140] // validation needed?
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        approvedBuyer: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
                // User.hasMany(models.Character, { foreignKey: 'userId'});
            }
        },
        instanceMethods: {
            validPassword: function (password) {
                return bcrypt.compareSync(password, this.password);
            }
        },
        // Hooks are automatic methods that run during various phases of the User Model lifecycle
        // In this case, before a User is created, we will automatically hash their password
        hooks: {
            beforeCreate: function (user, options, cb) {
                user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
                cb(null, options);
            }
        }

    });
    return Account;
};
