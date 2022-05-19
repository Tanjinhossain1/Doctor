import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null)
    const navigate = useNavigate()
    const { isLoading, data: doctors, refetch } = useQuery('doctor', () =>
        fetch('https://pure-ravine-08552.herokuapp.com/doctor', {
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
            <h1>manage doctors: {doctors.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>AVATAR</th>
                            <th>NAME</th>
                            <th>SPECIALTY</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow refetch={refetch} index={index} doctor={doctor} setDeleteDoctor={setDeleteDoctor} key={doctor._id}></DoctorRow>)
                        }

                    </tbody>
                </table>
            </div>
            {deleteDoctor && <DeleteConfirmModal setDeleteDoctor={setDeleteDoctor} refetch={refetch} deleteDoctor={deleteDoctor}></DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctors;