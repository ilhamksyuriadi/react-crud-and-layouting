// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import "./UserContainer.css"

const UserContainer = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://reqres.in/api/users', { method: 'GET' })
            .then(response => {
                return response.json()
            }
            )
            .then(dataResponse => {
                setUsers(dataResponse.data)
            })
            .catch(e => {
                // error logic here
                console.log('error: ',e)
            })

        // if using axios:
        // axios.get('https://reqres.in/api/users')
        //     .then(response => {
        //         console.log('response with axios',response)
        //     })
        //     .catch(e => {
        //         console.log('error:', e)
        //     })
    }, [])

    const handleDelete = (id) => {
        fetch(`https://reqres.in/api/users/${id}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(dataResponse => {
                console.log(dataResponse)
            })

        // if using axios:
        // axios.delete(`https://reqres.in/api/users/${id}`)
        //     .then(response => {
        //         // do logic here
        //     })
        //     .catch(e => {
        //         // also do logic if error here
        //     })
    }

    return (
        <div className='user-container'>
            {users?.map(user => (
                <UserCard
                    key={user.id}
                    id={user.id}
                    avatar={user.avatar}
                    first_name={user.first_name}
                    last_name={user.last_name}
                    email={user.email}
                    onDelete={() => handleDelete(user.id)}
                />
            ))}
        </div>
    )
}

export default UserContainer