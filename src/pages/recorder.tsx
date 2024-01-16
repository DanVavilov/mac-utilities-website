import React from 'react';
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

const Recorder = () => {

    // const router = useRouter();
    //
    // useEffect(() => {
    //     router.replace('/recorder');
    // }, [router]);

    return (
        <div>
            <h1>MacOS Recorder</h1>
            <p>The ultimate solution for recording on your Mac.</p>
            <h2>Features</h2>
            <ul>
                <li>Easy-to-use interface</li>
                <li>High-quality recording</li>
                <li>Screen and audio capture</li>
                {/* Add more features based on the README */}
            </ul>
            <a href="https://github.com/TheOneStudioLLC/mac-recorder">Download Now</a>
        </div>
    );
}

export default Recorder;