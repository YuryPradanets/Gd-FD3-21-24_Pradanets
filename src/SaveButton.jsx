import React, { useState } from "react";

// export const SaveButton = () => {
//   const [isSaving, setIsSaving] = useState(false);

//   const handleSave = () => {
//     setIsSaving(true);

//     const dataToSave = {
//       key: "myKey",
//       value: "myValue",
//     };

//     localStorage.setItem("savedData", JSON.stringify(dataToSave));
//   console.log(localStorage);

//     setTimeout(() => {
//       setIsSaving(false);
//     }, 2000);
//   };

//   return (
//     <button onClick={handleSave} disabled={isSaving}>
//       {isSaving ? "Идёт сохранение" : "Сохранить"}
//     </button>
//   );
// };

export const SaveButton = () => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);

    const allDataOnPage = {};

    // Получаем все ячейки таблицы
    const tableCells = document.querySelectorAll("table td th");

    tableCells.forEach((cell) => {
      const cellData = {};

      // Сохраняем содержимое ячейки и её индекс
      cellData.innerHTML = cell.innerHTML;
      cellData.index = cell.cellIndex;

      allDataOnPage[cell.id] = cellData;
    });

    localStorage.setItem("savedData", JSON.stringify(allDataOnPage));

    setTimeout(() => {
      setIsSaving(false);
    }, 2000);
  };

  return (
    <button onClick={handleSave} disabled={isSaving}>
      {isSaving ? "Идёт сохранение" : "Сохранить"}
      
    </button>
    
  );
};