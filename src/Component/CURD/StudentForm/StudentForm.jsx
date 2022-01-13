import React from 'react';
import { UpdateValue } from '../../../Component/HooksExample/ UpdateValue/ UpdateValue';
import './StudentForm.css';
export function StudentForm(props) {
  let backToTable = () => {
    props.history.push('/student-table');
  };
  return (
    <div className="curd-op">
      <button style={{ float: 'right' }} onClick={backToTable}>
        Back To Table
      </button>
      <h4>Student Details</h4>
      <UpdateValue {...props} />
    </div>
  );
}
