import React from 'react';
import { UpdateValue } from '../../../Component/HooksExample/ UpdateValue/ UpdateValue';
import './StudentForm.css';
export function StudentForm(props) {
  return (
    <div className="curd-op">
      <h4>Student Details</h4>
      <UpdateValue {...props} />
    </div>
  );
}
