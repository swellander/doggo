const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/kennel');

const Doggo = conn.define('doggo', {
  name: Sequelize.STRING
})

const sync = () => conn.sync({force: true});
const seed = async () => {
  return Doggo.create({name: 'Fido'})
}

module.exports = {
  sync,
  seed,
  Doggo
};
