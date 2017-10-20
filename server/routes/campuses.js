const express = require('express');
const router = express.Router();
const models = require('../../db/models');

const Campuses = models.Campus;
const Students = models.Student;

router.get('/', (req, res, next) => {
  Campuses.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

router.param('campusId', function (req, res, next, id) {
  console.log('campusesessese')
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

router.get('/:campusId/students', (req, res, next) => {
  const campusId = req.params.campusId; //can i do this even if I have router.param putting my id on req
  Students.findAll({ where: { campusId }})
    .then(students => res.json(students))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Campuses.create(req.body)
    .then(campus => res.status(201).json(campus))
    .catch(next);

});

router.put('/:campusId', (req, res, next) => {
  Campuses.update(req.body,
    {where: {id: req.params.campusId}, returning: true})
    .then(campus => {
      console.log(campus);
      res.status(201).send(campus);
    })
    .catch(next);
});

router.delete('/:campusId', (req, res, next) => {
  req.campus.destroy()
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = router;
