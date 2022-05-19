import React from 'react';

const DoctorRow = ({ doctor, index,setDeleteDoctor }) => {
    const { name, img, specialty } = doctor;
   
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img alt={name} src={img} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
          <td>  <label onClick={()=>setDeleteDoctor(doctor)} for="delete-modal" class="btn btn-error btn-xs">Delete</label></td>
        </tr>
    );
};

export default DoctorRow;