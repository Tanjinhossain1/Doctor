import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-2xl text-center text-purple-400 font-bold '>Welcome To Your Dashboard</h1>
                    <Outlet />

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu text-xl p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Appointment</Link></li>
                        <li><Link to='/dashboard/myreviews'>My Reviews</Link></li>
                        <li><Link to='/dashboard/myhistory'>My History</Link></li>
                        {admin && <div>
                            <li><Link to='/dashboard/alluser'>All User</Link></li>
                            <li><Link to='/dashboard/addDoctor'>Add Doctor</Link></li>
                            <li><Link to='/dashboard/manageDoctors'>Manage Doctor</Link></li>
                            </div>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;