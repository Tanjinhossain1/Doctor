import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    console.dir(user)
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (googleLoading || loading) {
        return <div className='text-center mt-32'> <SyncLoader loading={googleLoading || loading} css={override} size={150} /></div>
    }
    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password)
    }
            return (
            <div className='w-1/4 mt-12 mx-auto card-body shadow-2xl rounded-lg'>
                <h1 className='text-2xl text-center font-bold'>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input class="input input-bordered w-full max-w-xs"
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
                        <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    {/* Password */}
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input class="input input-bordered w-full max-w-xs"
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
                        <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    {googleError && <p className='text-red-500'>{googleError?.message}</p>}
                    {error && <p className='text-red-500'>{error?.message}</p>}
                    <p className='mb-4'><small>Member On Doctors Portal?<Link className='text-secondary font-bold' to='/login'>Login</Link></small></p>
                    <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                </form>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
            </div>
            );
            
};

export default SignUp;