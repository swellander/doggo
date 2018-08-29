const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/kennel', {logging: false});

const Doggo = conn.define('doggo', {
  name: Sequelize.STRING,
  imgUrl: Sequelize.STRING
})

const sync = () => conn.sync({force: true});

sync();

module.exports = {
  sync,
  Doggo
};
