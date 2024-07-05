import React, { useState } from 'react';
import "./AttendanceTable.css";
import {SaveButton} from "./SaveButton";

export const AttendanceTable = () => {
  const [students, setStudents] = useState(["Alice", "Bob", "Charlie"]);
  const [dates, setDates] = useState(["2023-12-02", "2023-12-09"]);
  const [cellStates, setCellStates] = useState(Array(students.length).fill(false).map(() => Array(dates.length).fill(false)));

  const toggleCell = (studentIndex, dateIndex) => {
    setCellStates((prevState) => {
      const newCellStates = prevState.map((row, rowIndex) => {
        if (rowIndex === studentIndex) {
          return row.map((cell, cellIndex) => {
            if (cellIndex === dateIndex) {
              return !cell;
            }
            return cell;
          });
        }
        return row;
      });
      return newCellStates;
    });
  };

  const addStudent = () => {
    const newStudent = prompt("Введите имя нового студента:");
    if (newStudent) {
      setStudents([...students, newStudent]);
      setCellStates(prevState => [...prevState, Array(dates.length).fill(false)]);
    }
  };

  const addDate = () => {
    const newDate = prompt("Введите новую дату (гггг-мм-дд):");
    if (newDate) {
      setDates([...dates, newDate]);
      setCellStates(prevState => prevState.map(row => [...row, false]));
    }
  };

  return (
    <div>
      <button onClick={addStudent}>Добавить студента</button>
      <button onClick={addDate}>Добавить дату</button>
      
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
                <td
                  key={dateIndex}
                  onClick={() => toggleCell(studentIndex, dateIndex)}
                  className={cellStates[studentIndex][dateIndex] ? "green-cross" : ""}
                >
                  {cellStates[studentIndex][dateIndex] ? "✓" : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <SaveButton/>
  
    </div>
  );
};



// import React, { useState } from 'react';
// import "./AttendanceTable.css";
// import {SaveButton} from "./SaveButton";

// export const AttendanceTable = () => {
//   const [students, setStudents] = useState(["Alice", "Bob", "Charlie"]);
//   const [dates, setDates] = useState(["2023-12-02", "2023-12-09"]);

//   const addStudent = () => {
//     const newStudent = prompt("Введите имя нового студента:");
//     if (newStudent) {
//       setStudents([...students, newStudent]);
//     }
//   };

//   const addDate = () => {
//     let date = new Date();
//     console.log('Сегодня:', date);
//     const newDate = prompt("Введите новую дату (гггг-мм-дд):");
//     if (newDate) {
//       setDates([...dates, newDate]);
//     }
//   };

//   return (
//     <div>
//       <button onClick={addStudent}>Добавить студента</button>
//       <button onClick={addDate}>Добавить дату</button>
      
//       <table>
//         <thead>
//           <tr>
//             <th>Номер п/п</th>
//             <th className="students">Студент</th>
//             {dates.map((date, index) => (
//               <th key={index}>{date}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student, studentIndex) => (
//             <tr key={studentIndex}>
//               <td>{studentIndex + 1}</td>
//               <td>{student}</td>
//               {dates.map((date, dateIndex) => (
//                 <td key={dateIndex}>-</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <SaveButton/>
//     </div>
//   );
// };

// // Сохранение данных в localStorage
// const attendanceData = {
//   attendance: [
//     { studentName: "Иванов Иван", date: "2022-08-15", attended: true },
//     { studentName: "Петров Петр", date: "2022-08-15", attended: false },
//     { studentName: "Сидоров Сидор", date: "2022-08-15", attended: true }
//   ]
// };

// localStorage.setItem('attendanceData', JSON.stringify(attendanceData));

// // Извлечение данных из localStorage
// const storedAttendanceData = JSON.parse(localStorage.getItem('attendanceData'));
// console.log(storedAttendanceData);


// Добавление объекта в json файл 
// const fs = require("fs");

// const filePath = "data.json";

// // Проверяем существование файла
// if (fs.existsSync(filePath)) {
//   try {
//     // Читаем содержимое файла JSON
//     const jsonContent = fs.readFileSync(filePath, "utf-8");
//     let data = JSON.parse(jsonContent);

//     // Создаем новый объект для добавления
//     const newObject = { id: 3, name: "Alice", age: 25 };

//     // Добавляем новый объект в массив
//     data.push(newObject);

//     // Сохраняем обновленные данные в файл JSON
//     fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

//     console.log("Объект успешно добавлен в массив в файле JSON.");
//   } catch (error) {
//     console.error("Ошибка при чтении или парсинге файла JSON:", error);
//   }
// } else {
//   console.error("Файл JSON не найден.");
// }