// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// const seedProducts = require('../seeds/product-seeds');

// Products belongsTo Category so category_id will be added on Product 
Product.belongsTo(Category, {

  foreignKey: 'category_id',  
});

// Categories have many Products
Category.hasMany(Product, {

  foreignKey: 'category_id',
});

// Products belongsToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: {
    model: ProductTag, 
    unique: false  
  },
    foreignKey: '',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: ''
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
