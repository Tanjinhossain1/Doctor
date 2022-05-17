import { signOut } from 'firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';

const AddDoctor = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
   const imageStoreKey = `dd6aa9e917ed30c4f9f495bf1f8866ee`
    const { isLoading, data: services } = useQuery('repoData', () =>
    fetch('http://localhost:5000/services').then(res =>
      res.json()
    )
  )
  if(isLoading){
      return <Loading loading={isLoading}></Loading>
  }

  const onSubmit = async (data,event) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image',image)
    const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`;
    fetch(url,{
        method: 'POST',
        body: formData
    })
    .then(res=>res.json())
    .then(result=>{
        if(result.success){
           const img= result.data.url;
           const doctor={
               name: data.name,
               email: data.email,
               specialty: data.specialty,
               img:img
           }
        //    send databage
        fetch('http://localhost:5000/addDoctor',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
        })
        .then(res=>{
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                navigate('/home')
            }
            return res.json()
        })
        .then(inserted=>{
            if(inserted.insertedId){
                toast.success('SuccessFully add done')
            }else{
                toast.error('Fail To add doctor')
            }
            console.log(inserted)
            event.target.reset()
        })
        }

    })
    }

    return (
        <div  className='w-2/4 mt-12 mx-auto'>
            <h1 className=' text-3xl '>This is a doctor</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs"
                        placeholder='Enter Name'
                        type='text'
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            },
                            minLength: {
                                value: 2,
                                message: 'Must be 2 characters'
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs"
                        placeholder='Enter Email'
                        type='email'
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid email'
                            }
                        })} />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>

                {/* Password */}
                <div className="form-control  w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty')} class="select input-bordered w-full max-w-xs">
                        {
                            services.map(service=><option key={service._id} value={service.name}>
                                {service.name}
                            </option>)
                        }
                    </select>
                </div>

                {/* image  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs"
                        type='file'
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is required'
                            },
                        })} />
                </div>



                <input className='btn w-full max-w-xs mt-2 text-white' type="submit" value="Add Doctor" />
            </form>
        </div>
    );
};

export default AddDoctor;