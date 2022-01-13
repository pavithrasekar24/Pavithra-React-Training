import React, { useContext } from 'react';
import { StatusContext } from '../../../Component/HooksExample/ContentTask/StatusContext';
// 1.destructring consumer -func
// export function CompletedTask(props) {
//   const { status, setStatus } = useContext(StatusContext);
//   return (
//     <div>
//       <hr />
//       <h3>CompletedTask {status}</h3>
//       <button onClick={() => setStatus('Completed')}>Update</button>
//       <div>{props.user}</div>
//     </div>
//   );
// }

// 2.Status.consumer -fun
export function CompletedTask(props) {
  const details = useContext(StatusContext);
  return (
    <div>
      <hr />
      <StatusContext.Consumer>
        {(details) => {
          return (
            <div>
              <h3>CompletedTask {details.status}</h3>
              <button onClick={() => details.setStatus('Completed')}>
                Update
              </button>
            </div>
          );
        }}
      </StatusContext.Consumer>

      <div>{props.user}</div>

      
    </div>
  );
}
