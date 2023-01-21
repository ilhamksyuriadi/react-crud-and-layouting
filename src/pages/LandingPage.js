import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const LandingPage = () => {
    return (
        <div>
            <h1> LandingPage Admin </h1>
            <Link to="/list">
                <Button>Ke Page List </Button>
            </Link>
            <Link to="/add">
                <Button variant='danger'>Ke Page Form </Button>
            </Link>
        </div >
    )
}

export default LandingPage