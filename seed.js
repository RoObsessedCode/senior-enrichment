// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

const Promise = require("bluebird");
const {
  db,
  Campus,
  Student,
} = require('./db/models');

const campusData = [
  {
    name: 'Livingston',
    imageUrl: 'http://jnatoli.com/wp-content/uploads/2014/07/640px-natoli-nj-contractor-rutgers-dining-1.jpg'
  },
  {
    name: 'College Avenue',
    imageUrl: 'https://s3-us-west-2.amazonaws.com/asset.plexuss.com/news/images/rutgers-campus-scene.jpg'
  },
  {
    name: 'Busch',
    imageUrl: 'http://www.newbrunswick.rutgers.edu/sites/flagship/files/styles/ru_slideshow_medium/public/NR13HomecomingVHustn0799_ss.jpg?itok=ZXSEvdqS'
  },
  {
    name: 'Cook/Douglas',
    imageUrl: 'http://static.panoramio.com/photos/large/4156913.jpg'
  }
];

const studentData = [
  {
    name: 'Eren Erdogan',
    campusId: 3,
    email: 'eren@rutgers.edu'
  },
  {
    name: 'CJ Aydin',
    campusId: 4,
    email: 'cj@rutgers.edu'
  },
  {
    name: 'Tim Sawma',
    campusId: 2,
    email: 'tim@rutgers.edu'
  },
  {
    name: 'Chris Tran',
    campusId: 3,
    email: 'chris@rutgers.edu'
  },
  {
    name: 'Ryan Trombetta',
    campusId: 4,
    email: 'ryan@rutgers.edu'
  },
  {
    name: 'Sunny Poleplli',
    campusId: 1,
    email: 'sunny@rutgers.edu'
  }
];

// Students Seeding
const promiseArrStudents = () => {
  return studentData.map(student => {
    return Student.build(student);
  });
};

const createStudents = () => {
  return Promise.map(promiseArrStudents(), function (student) {
    return student.save();
  });
};

// Campus Seeding
const promiseArrCampus = () => {
  return campusData.map(campus => {
    return Campus.build(campus);
  });
};

const createCampuses = () => {
  return Promise.map(promiseArrCampus(), function (campus) {
    return campus.save();
  });
};

const seed = () => {
  return createCampuses()
    .then(() => createStudents());
};

db.sync({ force: true })
  .then(function () {
    console.log('Dropped old data, that beat af data is gone');
    return seed();
  })
  .then(function () {
    console.log('Successfully inserted new dope af data!');
  })
  .catch(function (err) {
    console.error('Shit fam, there was a problem', err, err.stack);
  })
  .finally(function () {
    db.close(); // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
    console.log('connection closed, we out'); // the connection eventually closes, we just manually do so to end the process quickly
    return null; // silences bluebird warning about using non-returned promises inside of handlers.
  });
