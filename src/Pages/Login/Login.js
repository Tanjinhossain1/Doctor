import React from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useForm } from "react-hook-form";



const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // console.log(user)
    const { register, formState: { errors }, handleSubmit } = useForm();
    return (
        <div className='w-1/4 mx-auto card-body shadow-2xl rounded-lg'>
            <h1 className='text-2xl text-center font-bold'>Login</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Type Email" name='email' className="input input-bordered input-primary w-full max-w-xs mb-2" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Type Password" name='password' className="input input-bordered input-primary w-full max-w-xs" />
                <button>Forgot Password?</button>
                <input className="input input-bordered input-primary w-full max-w-xs" type="submit" value="Login" />
                <p className='text-center mt-2'> <small >New To Doctors-Portal?<Link className='text-secondary' to='/signup'>Create New Account</Link></small></p>
            </form>
            <div className="divider">OR</div>
            <button onClick={()=>signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
        </div>
    );
};

export default Login;