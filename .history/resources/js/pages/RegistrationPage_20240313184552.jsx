import React, {useState} from "react"
import Layout from "../layout/Layout"
import PrimaryButton from "../components/PrimaryButton"
import FormValidation from '../utils/FormValidation';

export default function RegistrationPage() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleFullNameChange = (event) => {
        const value = event.target.value;
        setFullName(value);
        setFullNameError(
            FormValidation.validateFullName(value)
            ? ''
            : 'Please enter a valid full name'
        );
    };

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        setEmailError(
            FormValidation.validateEmail(value)
            ? ''
            : 'Please enter a valid email address'
        );
    };

    return (
        <Layout>
            <form className="mx-auto">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                    <input type="email" id="email" value={fullName} onChange={handleFullNameChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    {fullNameError && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{fullNameError}</p>}
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                    <input type="text" id="name" value={email} onChange={handleEmailChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    {emailError && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{emailError}</p>}
                </div>
                <div className="flex items-center mb-4">
                    <input checked id="checkbox-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" text="test"/>
            </div>
                <PrimaryButton>Register</PrimaryButton>
            </form>
        </Layout>
    )
}
