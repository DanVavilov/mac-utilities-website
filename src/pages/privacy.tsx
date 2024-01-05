import React from 'react';
import Head from 'next/head';
import { CSSProperties } from 'react';

const styles = {
    privacyContainer: {
        maxWidth: '800px',
        margin: 'auto',
        padding: '20px',
        lineHeight: '1.6',
        color: '#333',
    } as CSSProperties,
    title: {
        textAlign: 'center',
        color: '#0070f3',
    } as CSSProperties,
    section: {
        marginBottom: '40px',
    } as CSSProperties,
};
const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy - Your App Name</title>
            </Head>
            <div style={styles.privacyContainer}>
                <h1 style={styles.title}>Privacy Policy</h1>
                <p style={styles.section}>
                    Your privacy is important to us. It is Your App's policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our app, Your App Name, and its associated services.
                </p>
                <section style={styles.section}>
                    <h2>Information We Collect</h2>
                    <p>Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services.</p>
                </section>
                <section style={styles.section}>
                    <h2>Log Data</h2>
                    <p>When you access our servers via Your App Name, we may automatically log the standard data provided by your web browser. It may include your device’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.</p>
                </section>
                <section style={styles.section}>
                    <h2>Personal Information</h2>
                    <p>We may ask for personal information which may include one or more of the following: name, email, social media profiles, date of birth, personal bio.</p>
                </section>
                <section style={styles.section}>
                    <h2>Legitimate Reasons for Processing Your Personal Information</h2>
                    <p>We only collect and use your personal information when we have a legitimate reason for doing so. In which instance, we only collect personal information that is reasonably necessary to provide our services to you.</p>
                </section>
                <section style={styles.section}>
                    <h2>Anonymous Usage Data</h2>
                    <p>We collect anonymous data related to product interactions to improve the user experience. This data helps us make more informed decisions about which features are beneficial to our users.</p>
                </section>
                <section style={styles.section}>
                    <h2>Anonymous Diagnostics</h2>
                    <p>Our app collects anonymous diagnostic information, such as crash data and performance metrics. This information is crucial for identifying and resolving issues promptly, ensuring a stable and efficient user experience.</p>
                </section>
            </div>
        </>
    );
};

export default PrivacyPolicy;
