import React from 'react';

export default function StudentsList(props) {

  const students = props.students;
  console.log("students from props: ", students);
  return (
    <ul>
      {
        students.map(student => {
          return (
            <li key={student.id}>
              <h4>{ student.name }</h4>
            </li>
          )
        })
      }
    </ul>
  );
}

