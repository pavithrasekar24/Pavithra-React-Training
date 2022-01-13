import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentTable.css';
export function StudentTable(props) {
  let studentURL = {
    getStudentURL: 'https://61dd4f33f60e8f00176686f2.mockapi.io/api/student',
  };
  const [count, setCount] = useState(0);
  const [tableDetails, setTableDetails] = useState([]);

  useEffect(() => {
    console.log(props);
    getTableDetails();
  }, []);

  let getTableDetails = () => {
    //axios-callback , success .then , failure .catch
    //promise -resolve(success) , reject (failure)
    axios
      .get(studentURL.getStudentURL)
      .then((response) => {
        console.log(response);
        setTableDetails(response.data);
      })
      .catch((err) => {
        console.log('errror-----', err);
      });
  };

  console.log('hiii');
  let handleClick = () => {
    setCount(count + 1);
  };
  let handleDelete = (id) => {
    let url = 'https://61dd4f33f60e8f00176686f2.mockapi.io/api/student';
    console.log(id, url + '/' + id);
    axios
      .delete(`${url}/${id}`)
      .then((response) => {
        alert('delete succesfully');
        getTableDetails();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="student-table">
      <h4>Student Table</h4>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {tableDetails.length > 0
            ? tableDetails.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.city}</td>
                    <td>
                      <button className="edit-btn">Edit</button>
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : ''}
        </tbody>
      </table>

      <button onClick={() => handleClick()}>Click{count}</button>
    </div>
  );
}
