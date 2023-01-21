import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
// import axios from 'axios'
import { Button, Container, Form } from 'react-bootstrap'

const FormPage = () => {
  const history = useHistory()
  const [formValue, setFormValue] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValue({
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      first_name: formValue.firstName,
      last_name: formValue.lastName,
      email: formValue.email
    }

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json()
      })
      .then(responseData => {
        // logic for handle success here
        console.log('Data Berhasil Ditambahkan', responseData)
        history.push('/')
      })
      .catch(e => {
        // logic for handle error here
        console.log('error', e)
      })

    // if add
    // axios.post('https://reqres.in/api/users', data)
    //   .then(res => {
    //     // logic for handle success here
    //     console.log('Data Berhasil Ditambahkan', res)
    //     history.push('/')
    //   })
    //   .catch(e => {
    //     // logic for handle error here
    //     console.log('error', e)
    //   })

    // if edit
    // axios.put('https://reqres.in/api/users/{editedHere}', data)
    //   .then(res => {
    //     // logic for handle success here
    //     console.log('Data Berhasil Ditambahkan', res)
    //     history.push('/')
    //   })
    //   .catch(e => {
    //     // logic for handle error here
    //     console.log('error', e)
    //   })
  }

  return (
    <Container fluid className='p-4'>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            value={formValue.firstName}
            name='firstName'
            placeholder="Masukan first name"
            onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            value={formValue.lastName}
            name='lastName'
            placeholder="Masukan last name"
            onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='text'
            value={formValue.email}
            name='email'
            placeholder="Masukan email"
            onChange={handleChange}></Form.Control>
        </Form.Group>
        <br />
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  )
}

export default FormPage