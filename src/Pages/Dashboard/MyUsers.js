import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';
import UserRow from './UserRow';

const MyUsers = () => {
    const { isLoading, error, data: users, refetch } = useQuery('users', () =>
        fetch('https://pure-ravine-08552.herokuapp.com/allUsers', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading loading={isLoading}></Loading>
    }

    return (
        <div>
            <h1>my user: {users.length}</h1>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th>Users</th>
                                <th>Admin</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => <UserRow refetch={refetch} key={user._id} user={user}></UserRow>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyUsers;