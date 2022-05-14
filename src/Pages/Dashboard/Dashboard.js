import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-2xl text-purple-400 font-bold '>Welcome To Your Dashboard</h1>
                    <Outlet />
               
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Appointment</Link></li>
                        <li><Link to='/dashboard/myreviews'>My Reviews</Link></li>  
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;