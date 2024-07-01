import React, { useState } from 'react';
import "./AttendabceTable.css";
import SaveButton from "./SaveButton";

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
    let date = new Date();
    console.log('Сегодня:', date);
    const newDate = prompt("Введите новую дату (гггг-мм-дд):");
    if (newDate) {
      setDates([...dates, newDate]);
    }
  };

  return (
    <div>
      <button onClick={addStudent}>Добавить студента</button>
      <button onClick={addDate}>Добавить дату</button>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Номер п/п</th>
            <th className="students">Студент</th>
            {dates.map((date, index) => (
              <th key={index}>{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student, studentIndex) => (
            <tr key={studentIndex}>
              <td>{studentIndex + 1}</td>
              <td>{student}</td>
              {dates.map((date, dateIndex) => (
                <td key={dateIndex}>-</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <SaveButton/>
    </div>
  );
};

export default AttendanceTable;