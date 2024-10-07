import React, { useState } from 'react';

function FormInput() {
  const [userdata, setuserdata] = useState({
    firstname: '',
    lastname: '',
    password: '',
    radio: '',
    hobbies: {
      dancing: false,
      traveling: false,
      singing: false,
    },
    select: '',
    color: '#000000',
    date: '',
    range: '50',
    textarea: '',
  });

  function handlesubmit() {
    console.log(userdata);
  }

  const handleHobbyChange = (e) => {
    const { name, checked } = e.target;
    setuserdata((prevState) => ({
      ...prevState,
      hobbies: {
        ...prevState.hobbies,
        [name]: checked,
      },
    }));
  };

  return (
    <div>
      <div className='container col-md-6'>
        <h2 className='d-flex justify-content-center mt-5 mb-5'>Form Input Handling</h2>
        
        <label htmlFor="firstname" className="form-label">First Name:</label>
        <input
          type="text"
          className="form-control"
          id="firstname"
          value={userdata.firstname}
          onChange={(e) => setuserdata({ ...userdata, firstname: e.target.value })}
        />

        <label htmlFor="lastname" className="form-label">Last Name:</label>
        <input
          type="text"
          className="form-control"
          id="lastname"
          value={userdata.lastname}
          onChange={(e) => setuserdata({ ...userdata, lastname: e.target.value })}
        />

        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={userdata.password}
          onChange={(e) => setuserdata({ ...userdata, password: e.target.value })}
        />

        <div>
          <label className="form-label">Gender:</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio"
              id="female"
              value="female"
              checked={userdata.radio === 'female'}
              onChange={(e) => setuserdata({ ...userdata, radio: e.target.value })}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio"
              id="male"
              value="male"
              checked={userdata.radio === 'male'}
              onChange={(e) => setuserdata({ ...userdata, radio: e.target.value })}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
        </div>

        <label className="mt-4">Hobbies:</label><br />
        <input
          className="form-check-input"
          type="checkbox"
          name="dancing"
          checked={userdata.hobbies.dancing}
          onChange={handleHobbyChange}
        />
        <label className="form-check-label" htmlFor="dancing">Dancing</label><br />

        <input
          className="form-check-input"
          type="checkbox"
          name="traveling"
          checked={userdata.hobbies.traveling}
          onChange={handleHobbyChange}
        />
        <label className="form-check-label" htmlFor="traveling">Traveling</label><br />

        <input
          className="form-check-input"
          type="checkbox"
          name="singing"
          checked={userdata.hobbies.singing}
          onChange={handleHobbyChange}
        />
        <label className="form-check-label" htmlFor="singing">Singing</label><br />

        <label className="mt-4">Degree:</label>
        <select
          className="form-control"
          value={userdata.select}
          onChange={(e) => setuserdata({ ...userdata, select: e.target.value })}
        >
          <option value="">Select a Degree</option>
          <option value="BCA">BCA</option>
          <option value="BCOM">BCOM</option>
          <option value="BSC">BSC</option>
        </select><br />

        <label className="mt-4">Color:</label>
        <input
          type="color"
          name="color"
          className="mx-3"
          value={userdata.color}
          onChange={(e) => setuserdata({ ...userdata, color: e.target.value })}
        /><br />

        <label className="mt-3">Date:</label>
        <input
          type="date"
          name="date"
          value={userdata.date}
          onChange={(e) => setuserdata({ ...userdata, date: e.target.value })}
        /><br />

        <label className="mt-3">Range:</label>
        <input
          type="range"
          name="range"
          min="0"
          max="100"
          value={userdata.range}
          onChange={(e) => setuserdata({ ...userdata, range: e.target.value })}
        />
        {userdata.range}<br />

        <label className="mt-3">Address:</label>
        <textarea
          name="textarea"
          className="form-control"
          value={userdata.textarea}
          onChange={(e) => setuserdata({ ...userdata, textarea: e.target.value })}
        /><br />

        <button className="btn btn-primary mt-3" onClick={handlesubmit}>Submit</button>
      </div>
    </div>
  );
}

export default FormInput;
