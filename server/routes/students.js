const express = require('express');
const router = express.Router();
const models = require('../../db/models');
const Students = models.Student;

router.get('/', (req, res, next) => {
  Students.findAll()
    .then(students => res.json(students))
    .catch(next);
});

router.param('studentId', function (req, res, next, id) {
  Students.findById(id)
  .then(student => {
    if (!student) {
      const err = Error('Student not found');
      err.status = 404;
      throw err;
    }
    req.student = student;
    next();
    return null; // silences bluebird warning about promises inside of next
  })
  .catch(next);
});

router.get('/:studentId', (req, res, next) => {
  res.json(req.student);
})

router.post('/', (req, res, next) => {
  Students.create(req.body)
    .then(student => res.status(201).json(student))
    .catch(next);

});

router.put('/:studentId', (req, res, next) => {
  Students.update(req.body,
    {where: {id: req.params.studentId}, returning: true})
    .then(student => {
      console.log(student);
      res.status(201).send(student);

    })
    .catch(next);
});

router.delete('/:studentId', (req, res, next) => {
  req.student.destroy()
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = router;
