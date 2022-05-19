import { signOut } from 'firebase/auth';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const DeleteConfirmModal = ({ deleteDoctor, refetch, setDeleteDoctor }) => {
    const { name, email } = deleteDoctor;
    const handleDelete = () => {
        fetch(`https://pure-ravine-08552.herokuapp.com/deleteDoctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    Navigate('/home')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Doctor ${name} is Delete`);
                    setDeleteDoctor(null)
                    refetch()
                }
            })
    }
    return (

        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure To Delete: {name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn  btn-error text-white">DELETE</button>
                        <label for="delete-modal" class="btn ">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;