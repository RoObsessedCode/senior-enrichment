const express = require('express');
const router = express.Router();
const models = require('../../db/models');

const Campuses = models.Campus;

router.get('/', (req, res, next) => {
  console.log('we here!')
  Campuses.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

router.param('campusId', function (req, res, next, id) {
  Campuses.findById(id)
  .then(campus => {
    if (!campus) {
      const err = Error('Campus not found');
      err.status = 404;
      throw err;
    }
    req.campus = campus;
    next();
    return null; // silences bluebird warning about promises inside of next
  })
  .catch(next);
});

router.get('/:campusId', (req, res, next) => {
  res.json(req.campus);
});

router.post('/', (req, res, next) => {
  Campuses.create(req.body)
    .then(campus => res.status(201).json(campus))
    .catch(next);

});

router.put('/:campusId', (req, res, next) => {
  req.campus.update(req.body)
    .then(campus => {
      res.status(201).json(campus);
    })
    .catch(next);
});


router.delete('/:campusId', (req, res, next) => {
  req.campus.destroy()
    .then(() => res.status(204).end())
    .catch(next);
});
// ro






module.exports = router;
