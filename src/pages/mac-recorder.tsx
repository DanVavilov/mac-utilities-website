import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace('/recorder'); // Replace '/target-page' with your target path
    }, [router]);

    return <div>Redirecting...</div>;
};

export default RedirectPage;