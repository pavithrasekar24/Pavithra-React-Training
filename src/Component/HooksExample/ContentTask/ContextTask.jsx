import React, { useState } from 'react';
import { StatusContext } from '../../../Component/HooksExample/ContentTask/StatusContext';
import { StartTask } from '../../../Component/HooksExample/Task/StartTask';
import './ContextTask.css';

export function ContextTask() {
  const [status, setStatus] = useState('');
  const statusOption = ['initialization', 'Started', 'Progress', 'Completed'];
  return (
    <div className="context-content">
      <div className="context-inner">
        <h3>ContextTask</h3>
        <p>
          Parent -child(nested component) contexttask
          -startTask-progresTask-completedTask (w/o props)
          <br />
          useContent -1. context create, 2. send -Provider value (contextvalue)
          3.assign value as usecontext(createdContextName) -4. receive -consumer
          value (completed task)
        </p>
        <p>Selected status is {status}</p>
      </div>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">Select the Status</option>
        {statusOption.map((item, i) => {
          return <option key={i + 1}>{item}</option>;
        })}
      </select>
      <StatusContext.Provider value={{ status, setStatus }}>
        <StartTask user={'imadh'} />
      </StatusContext.Provider>
    </div>
  );
}
