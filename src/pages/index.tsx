import Link from 'next/link';
import React from 'react';

function Index() {
    return (
        <div>
            <h1>Welcome to MacOS Recorder</h1>
            <p>Discover the ultimate recording solution for your MacOS.</p>

            <Link href="/recorder">Learn More</Link>
        </div>
    );
}

export default Index;
