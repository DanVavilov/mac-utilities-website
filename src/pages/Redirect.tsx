import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Redirect() {
    let navigate = useNavigate();

    useEffect(() => {
        // Redirect to the Recorder page
        navigate('/recorder');
    }, [navigate]);

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    );
}

export default Redirect;
