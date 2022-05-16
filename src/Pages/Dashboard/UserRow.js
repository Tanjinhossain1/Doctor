import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`https://pure-ravine-08552.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Fail To Make Admin')
                }
                return res.json()
            })
            .then(data => {
                refetch()
                toast.success('SuccessFully Make Admin')
            })
    }
    return (

        <tr>
            <td>{user.email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button> : 'Already Admin'}</td>
            <td><button className='btn btn-xs'>Remove User</button></td>
        </tr>
    );
};

export default UserRow;