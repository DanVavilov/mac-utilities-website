import React, { useState } from 'react';
import axios from 'axios'; // Import axios

const SupportForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // You can add your form submission logic here.
        // For example, you can use axios to send a POST request to your server.

        try {
            const response = await axios.post('/api/support', formData);
            console.log('Form submitted successfully:', response.data);
            // Optionally, reset the form fields here.
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Form submission error:', error);
        }
    };

    return (
        <div>
            <h1>Contact Support</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SupportForm;
