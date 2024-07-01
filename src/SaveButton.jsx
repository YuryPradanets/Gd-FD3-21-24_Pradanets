import React, { useState } from "react";

const SaveButton = () => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);

    const dataToSave = {
      key: "exampleKey",
      value: "exampleValue",
    };

    localStorage.setItem("savedData", JSON.stringify(dataToSave));

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

export default SaveButton;