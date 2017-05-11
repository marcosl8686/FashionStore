module.exports = function(sequelize, DataTypes) {
  var Acct = sequelize.define("Accounts", {
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
      allowNull: true,
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
    approvedBuyer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },

  });
  return Acct;
};
