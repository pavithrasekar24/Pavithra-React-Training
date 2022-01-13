import React from 'react';
import { ProgressTask } from '../../../Component/HooksExample/Task/ProgressTask';
export function StartTask(props) {
  return (
    <div>
      <hr />
      <h3>StartTask</h3>
      <ProgressTask user={props.user} />
    </div>
  );
}
