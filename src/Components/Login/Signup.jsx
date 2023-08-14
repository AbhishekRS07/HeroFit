import React, { useState } from 'react'
import "./reg.css"

const Signup = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState(null);

const handleSubmit = (e) => {
  e.preventDefault();
  if (!email || !password || !name) {
      alert('Please fill in all the fields.');
      return;
    }

  const payload = {
    name,
    email,
    password,
  };

  fetch('http://localhost:8080/signup', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
     
      setName('');
      setEmail('');
      setPassword('');
      setError(null);
    })
    .catch((error) => {
      console.error(error);
      setError('An error occurred during submission.');
    });
};


  return (
    <div>
      <form id='regform' onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="    name"
          value={name}
          name="name"
          required
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="    email"
          value={email}
          name="email"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="    password"
          value={password}
          name="password"
          required
        />
       
        <button id='formbtn' type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup