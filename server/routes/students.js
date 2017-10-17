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
  req.student.update(req.body)
    .then(student => {
      res.status(201).json(student);
    })
    .catch(next);
});

router.delete('/:studentId', (req, res, next) => {
  req.student.destroy()
    .then(() => res.status(204).end())
    .catch(next);
});
// router.put('/:playlistId', function (req, res, next) {
//   req.playlist.update(req.body)
//   .then(playlist => res.status(200).json(playlist))
//   .catch(next);
// });

module.exports = router;


