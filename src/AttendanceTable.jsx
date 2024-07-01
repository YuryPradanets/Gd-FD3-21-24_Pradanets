import React, { useState } from 'react';

const AttendanceTable = () => {
  const [students, setStudents] = useState(["Alice", "Bob", "Charlie"]);
  const [dates, setDates] = useState(["2023-12-02", "2023-12-09"]);

  const addStudent = () => {
    const newStudent = prompt("Введите имя нового студента:");
    if (newStudent) {
      setStudents([...students, newStudent]);
    }
  };

  const addDate = () => {
    const newDate = prompt("Введите новую дату (гггг-мм-дд):");
    if (newDate) {
      setDates([...dates, newDate]);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Студенты</th>
            {dates.map((date, index) => (
              <th key={index}>{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student, studentIndex) => (
            <tr key={studentIndex}>
              <td>{student}</td>
              {dates.map((date, dateIndex) => (
                <td key={dateIndex}>-</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addStudent}>Добавить студента</button>
      <button onClick={addDate}>Добавить дату</button>
    </div>
  );
};

export default AttendanceTable;