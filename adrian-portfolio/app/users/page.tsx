// routing in nextjs is based on convention not configuration
// shortcut rafce - react arrow function export component
// url to visit file: http://localhost:3000/users

import React from 'react'

// typescript magic
interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {
    // No Cache
    // const sample = await fetch(
    //     'https://jsonplaceholder.typicode.com/users',
    //     { cache: 'no-store' }); 

    // caching only through fetch, so will not get caching from axios or other 3rd party
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        { next: { revalidate: 10 } }); // background fetch data every 10 seconds
    const users: User[] = await res.json(); // set typescript interface here

    return (
        <>
            <h1>Users</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default UsersPage
