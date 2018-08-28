const { expect } = require('chai');
const db = require('../db');
const Doggo = db.Doggo;

describe('data layer', () => {
  expect(db).to.be.ok;

  beforeEach(() => {
    return db.sync()   
      .then(() => db.seed())
  });

  it ('dogs have a name', () => {
    Doggo.findAll()
      .then( doggos => expect(doggos[0].name).to.be.ok )
  });
})
