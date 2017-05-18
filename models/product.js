module.exports = function(sequelize, DataTypes){
	var Product = sequelize.define("Products", {
		itemNum: {
			type: DataTypes.STRING,
			validate: {
				isNumeric: true
			}
		},
		itemName: {
			type: DataTypes.STRING,
			validate: {
				len: [1, 140]
			}
		},
		color: {
			type: DataTypes.STRING,
			validate: {
				len: [1, 140]
			}
		},
		img: {
			type: DataTypes.STRING,
		},
		category: {
			type: DataTypes.STRING,
			validate: {
				len: [1, 140]
			}
		},
		price: {
			type: DataTypes.FLOAT,
			validate: {
				isFloat: true
			}
		},
		selected: {
      	type: DataTypes.BOOLEAN,
      	defaultValue: false
    	}
	});
	return Product;
};