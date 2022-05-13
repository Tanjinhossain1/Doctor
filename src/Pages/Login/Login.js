import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (googleUser || user) {
            navigate(from)
        }
    }, [from, googleUser, navigate, user])

    const { register, formState: { errors }, handleSubmit } = useForm();
    if (googleLoading || loading) {
        return <Loading loading={googleLoading || loading || sending}></Loading>
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
        setEmail(data.email)
    }


    console.log(email)

    return (
        <div className='w-1/4 mt-16 mx-auto card-body shadow-2xl rounded-lg'>
            <h1 className='text-2xl text-center font-bold'>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                                message: 'Must be 6 characters'
                            }
                        })} />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        <p className='cursor-pointer'
                onClick={async () => {
                    await sendPasswordResetEmail(email);
                    toast('Reset Password send your email');
                }}
            >
              Forgot Password?
            </p>
                    </label>
                </div>

                {googleError && <p className='text-red-500'>{googleError?.message}</p>}
                {error && <p className='text-red-500'>{error?.message}</p>}
                <p className='mb-4'><small>New to Doctors Portal?<Link className='text-secondary font-bold' to='/signup'>Create new account</Link></small></p>
                <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
            </form>
            {/* <button onClick={async () => await sendPasswordResetEmail(email)}>Forgot Password?</button> */}
            <div className="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
            {/* <p
                onClick={async () => {
                    await sendPasswordResetEmail(email);
                    alert('Sent email');
                }}
            >
              Forgot Password?
            </p> */}
        </div>
    );
};

export default Login;