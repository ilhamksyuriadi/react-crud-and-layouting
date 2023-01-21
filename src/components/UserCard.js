import React from 'react'
import { Card, Button } from 'react-bootstrap'

const UserCard = ({ id, avatar, first_name, last_name, email, onDelete }) => {
    return (
        <Card className='mb-1' style={{ width: '18rem' }}>
            <Card.Img variant='top' src={avatar} />
            <Card.Body>
                <Card.Title>{first_name} {last_name}</Card.Title>
                <Card.Text>{email}</Card.Text>
                <Button className='me-2' variant='danger' onClick={onDelete}>Hapus</Button>
            </Card.Body>
        </Card>
    )
}

export default UserCard