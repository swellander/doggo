const router = require('express').Router();
const { Doggo } = require('./db');

router.use(require('express').json())

router.get('/', (req, res, next) => {
  Doggo.findAll()
    .then( doggos => res.json(doggos) )
    .catch(next)
});

router.get('/:id', (req, res, next) => {
  Doggo.findById(req.params.id)
    .then( doggo => res.json(doggo) )
    .catch(next);
})

router.post('/', (req, res, next) => {
  Doggo.create(req.body)
    .then( doggo => res.json(doggo) )
    .catch(next);
})

router.put('/:id', (req, res, next) => {
  Doggo.update(req.body, {
    where: { id: req.params.id } 
  })
  //have to send something back as a response, otherwise promise will not resolve
    .then(() => res.sendStatus(200))
    .catch(next);
})

router.delete('/:id', (req, res, next) => {
  Doggo.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(res.sendStatus(200))
    .catch(next);
})



module.exports = router;
