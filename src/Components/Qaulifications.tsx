import { useState } from "react";
import "./Qualifications.css";
import QualCard from "./QualificationsCard";

export const Qaulifications = () => {
  const [setIsOpen] = useState(true);

  return (
    <>
      <h2> Skills and Qualifications</h2>
      <QualCard isOpen={setIsOpen} />
      <button>Add qualification</button>
    </>
  );
};
