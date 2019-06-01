import React, { Fragment, useState } from 'react'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.data
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('passwords do not match')
    } else {
      console.log(formData)
    }
  }

  return (
    <Fragment>
      <h1>register</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          name='name'
          value={name}
          required
          onChange={(e) => onChange(e)}
        />
        <input
          type="email"
          placeholder="Email"
          name='email'
          value={email}
          required
          onChange={(e) => onChange(e)}
        />
        <input
          type="password"
          placeholder="password"
          name='password'
          value={password}
          required
          onChange={(e) => onChange(e)}
        />
        <input
          type="password"
          placeholder="confirm password"
          name='password2'
          value={password2}
          required
          onChange={(e) => onChange(e)}
        />
        <button type="submit">Register</button>
      </form>
    </Fragment>
  )
}

export default Register;

