import React, {useState} from "react"
import Layout from "../layout/Layout"
import PrimaryButton from "../components/PrimaryButton"
import FormValidation from '../utils/FormValidation';

export default function RegistrationPage() {
    const roles = ["Author", "Editor", "Subscriber", "Administrator"];
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [checkedRoles, setCheckedRoles] = useState([]);

    const handleFullNameChange = (event) => {
        const value = trim(event.target.value);
        setFullName(value);
        setFullNameError(
            FormValidation.validateFullName(value)
            ? ''
            : 'Please enter a valid full name'
        );
    };

    const handleEmailChange = (event) => {
        const value = trim(event.target.value);
        setEmail(value);
        setEmailError(
            FormValidation.validateEmail(value)
            ? ''
            : 'Please enter a valid email address'
        );
    };

    const toggleCheckbox = (item) => {
        const isChecked = checkedRoles.includes(item);
        if (isChecked) {
            setCheckedRoles(checkedRoles.filter((checkedRole) => checkedRole !== item));
        } else {
            setCheckedRoles([...checkedRoles, item]);
        }
    };

    return (
        <Layout>
            <form className="mx-auto">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    {emailError && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{emailError}</p>}
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name:</label>
                    <input type="text" id="name" value={fullName} onChange={handleFullNameChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    {fullNameError && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{fullNameError}</p>}
                </div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Roles:</label>
                <div className="flex items-center mb-4 space-x-3">
                {roles.map((item) => (
                    <label key={`label_role_${item}`} className="flex items-center p-4 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition duration-300 ease-in-out cursor-pointer">
                    <input
                        key={`role_${item}`}
                        type="checkbox"
                        className="form-checkbox mr-3 h-5 w-5 text-blue-500"
                        checked={checkedRoles.includes(item)}
                        onChange={() => toggleCheckbox(item)}
                    />
                    <span className="text-gray-800">{item}</span>
                  </label>
                ))}

                </div>
                <PrimaryButton>Register</PrimaryButton>
            </form>
        </Layout>
    )
}
