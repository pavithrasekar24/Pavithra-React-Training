import React, { useState, useEffect } from 'react';
import axios from 'axios';
export function UpdateValue(props) {
  const [id, setId] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [details, setDetails] = useState({
    name: '',
    age: '',
    city: '',
  });

  useEffect(() => {
    console.log('mount-form', props);
    if (
      props &&
      props.location &&
      props.location.state &&
      props.location.state.details
    ) {
      let { details, id, isEdit } = props.location.state;
      setDetails(details); //getapi details
      setId(id);
      setIsEdit(isEdit);
    }
  }, []);
  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  let handleSubmit = (e) => {
    console.log('details', details);
    e.preventDefault();
    //save-axios.post
    saveDetails();
  };
  let handleUpdate = (e) => {
    e.preventDefault();
    //update-axios.put
    updateDetails();
  };

  let updateDetails = () => {
    let url = 'https://61dd4f33f60e8f00176686f2.mockapi.io/api/student';
    axios
      .put(url + '/' + id, details)
      .then((response) => {
        alert(details.name + ' ' + details.age + '  updated');
        props.history.push('/student-table');
      })
      .catch((error) => {
        alert('not saved');
      });
  };

  let saveDetails = () => {
    let url = 'https://61dd4f33f60e8f00176686f2.mockapi.io/api/student';
    axios
      .post(url, details)
      .then((response) => {
        alert(details.name + ' ' + details.age + '  submitted');
        // props.history.push('/student-table');
        props.history.push({
          pathname: '/student-table',
          state: {
            // data: {
            //   ...details,
            //   isfrom: true,
            // },
          },
        });
      })
      .catch((error) => {
        alert('not saved');
      });
  };
  return (
    <div>
      <form onSubmit={(e) => (isEdit ? handleUpdate(e) : handleSubmit(e))}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={details.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={details.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="Enter City"
          value={details.city}
          onChange={handleChange}
        />
        <button type="submit"> {isEdit ? 'Update' : 'Submit'} </button>
      </form>
    </div>
  );
}
