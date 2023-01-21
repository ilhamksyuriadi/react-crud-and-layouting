import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import UserContainer from '../sections/UserContainer'
import './UserPage.css'

const UserPage = () => {

    return (
        <div className='user-page'>
            <Link to="/add">
                <Button>Tambah</Button>
            </Link>
            <UserContainer />
        </div>
    )
}

export default UserPage