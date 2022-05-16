import { useEffect, useState } from "react";


const useAdmin = user => {
    const [admin, setAdmin] = useState({});
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://pure-ravine-08552.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-Type': 'application/json'
                },

            }).then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    setAdminLoading(false)
                })
        }
    }, [user?.email]);
    return [admin, adminLoading]
};

export default useAdmin;