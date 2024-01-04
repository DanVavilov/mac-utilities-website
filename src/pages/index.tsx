import Link from 'next/link';

function Index() {
    return (
        <div>
            <h1>Welcome to MacOS Recorder</h1>
            <p>Discover the ultimate recording solution for your MacOS.</p>
            <Link href="/src/pages/recorder">
                <a>Learn More</a>
            </Link>
        </div>
    );
}

export default Index;
