import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';
import UserRow from './UserRow';

const MyUsers = () => {
    const navigate = useNavigate()
    const { isLoading, data: users, refetch } = useQuery('users', () =>
        fetch('https://pure-ravine-08552.herokuapp.com/allUsers', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                navigate('/home')
            }
            return res.json()
        }

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
                            {users.length>0 && users.map((user) => <UserRow refetch={refetch} key={user._id} user={user}></UserRow>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyUsers;