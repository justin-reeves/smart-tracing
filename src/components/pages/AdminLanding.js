import React from 'react';

const AdminLanding = () => {
    const storage = window.localStorage;
    const isLoggedIn = storage.getItem('SignedIn') === 'true';

    if (isLoggedIn) {
        return (
            <div>
                <h1>Admin Portal</h1>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Sorry, you are not logged in</h1>
            </div>
        );
    }
};

export default AdminLanding;
