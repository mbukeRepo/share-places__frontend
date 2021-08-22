import React from 'react';
import UserList from '../components/UserList'

const users = () => {
    const USERS = [
        {id: 'u1', name:'mbuke', image:"https://randomuser.me/api/portraits/men/45.jpg",places:5},
        {id: 'u2', name:'bonheur', image:"https://randomuser.me/api/portraits/men/45.jpg",places:5}
    ];
    return ( <UserList items={USERS} />);
}

export default users
