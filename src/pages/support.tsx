// Filename: SupportPage.js

import React from 'react';

const SupportPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-3xl font-semibold mb-4">Contact Support</h1>

                <form className="space-x-2">
                    <div className="space-y-4">
                        <label htmlFor="name" className="block font-medium text-gray-700">Your Name</label>
                        <input type="text" id="name" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>

                    <div className="space-y-4">
                        <label htmlFor="email" className="block font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>

                    <div className="space-y-4">
                        <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
                        <textarea id="message" className="w-full border border-gray-300 rounded-md px-3 py-2"></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 space-y-4 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300">
                        Submit
                    </button>
                </form>

                <div className="mt-6 text-gray-700">
                    <p>Or Contact Us Directly via email: support@theonestudio.dev</p>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
