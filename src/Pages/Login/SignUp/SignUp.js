import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { async } from 'postcss-js';
import Loading from '../../Loading/Loading';

const SignUp = () => {
  
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(()=>{
        if(googleUser || user){
            navigate(from)
        }
     },[from,googleUser,navigate,user])
    
    const [updateProfile, updating,profileError] = useUpdateProfile(auth);
    

    const { register, formState: { errors }, handleSubmit } = useForm();
    if (googleLoading || loading || updating || sending) {
        return <Loading loading={googleLoading ||loading}></Loading>
    }

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        await sendEmailVerification();
        
    }

            return (
            <div className='w-1/4 mt-6 mx-auto card-body shadow-2xl rounded-lg'>
                <h1 className='text-2xl text-center font-bold'>Sign Up</h1>
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
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            placeholder='Enter Password'
                            type='password'
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: `Must be 6 characters`
                                }
                            })} />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    {googleError && <p className='text-red-500'>{googleError?.message}</p>}
                    {error && <p className='text-red-500'>{error?.message}</p>}
                    {profileError && <p className='text-red-500'>{profileError?.message}</p>}
                    {verificationError && <p className='text-red-500'>{verificationError?.message}</p>}
                    <p className='mb-4'><small>Member On Doctors Portal?<Link className='text-secondary font-bold' to='/login'>Login</Link></small></p>
                    <input className='btn w-full max-w-xs text-white' type="submit" value="Sign Up" />
                </form>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
            </div>
            );
            
};

export default SignUp;