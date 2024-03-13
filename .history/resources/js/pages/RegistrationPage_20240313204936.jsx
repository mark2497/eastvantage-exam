import React, {useEffect, useState} from "react"
import Layout from "../layout/Layout"
import PrimaryButton from "../components/PrimaryButton"
import FormValidation from '../utils/FormValidation';
import Swal from "sweetalert2";
import axios from "axios";

export default function RegistrationPage() {
    const roles = ["Author", "Editor", "Subscriber", "Administrator"];
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        checkedRoles: [],
        errors: {
            fullName: '',
            email: '',
            role: ''
        }
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
          errors: {
            ...formData.errors,
            [name]: name === 'fullName' ? FormValidation.validateFullName(value) ? '' : 'Please enter a valid full name' :
                      name === 'email' ? FormValidation.validateEmail(value) ? '' : 'Please enter a valid email address' :
                      formData.errors[name]
          }
        });
    };

    const toggleCheckbox = (item) => {
        const isChecked = formData.checkedRoles.includes(item);
        setFormData({
          ...formData,
          checkedRoles: isChecked ? formData.checkedRoles.filter(role => role !== item) : [...formData.checkedRoles, item],
          errors: {
            ...formData.errors,
            role: FormValidation.validateRole(isChecked ? formData.checkedRoles.filter(role => role !== item) : [...formData.checkedRoles, item]) ? '' : 'Please select at least 1 role'
          }
        });
    };

    const validate = () => {
        const { fullName, email, checkedRoles } = formData;
        let allValid = true;

        const fullNameError = FormValidation.validateFullName(fullName) ? '' : 'Please enter a valid full name';
        if (fullNameError !== '') {
            allValid = false;
        }

        const emailError = FormValidation.validateEmail(email) ? '' : 'Please enter a valid email address';
        if (emailError !== '') {
            allValid = false;
        }

        const roleError = FormValidation.validateRole(checkedRoles) ? '' : 'Please select at least 1 role';
        if (roleError !== '') {
            allValid = false;
        }

        setFormData({
            ...formData,
            errors: {
            fullName: fullNameError,
            email: emailError,
            role: roleError
            }
        });

        return allValid;
    };

    const submit = () => {
        if (validate()) {
            Swal.fire({
                title: "Are you sure?",
                text: "You may double  check your information before proceeding.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
              }).then((result) => {
                if (result.isConfirmed) {
                    axios.post('/new', formData)
                    .then(({data} = response) => {
                        successMessage(data.message)
                    })
                    .catch((error) => {
                        if (error.response.status = 422) {
                            console.log(error.response.data)
                        }
                    })
                }
              });
        }
    };

    const successMessage = (message) => {
        Swal.fire({
            title: 'Info',
            text: message,
            icon: 'info',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = '/';
            }
          });
    }

    return (
        <Layout>
            <form className="mx-auto">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    {formData.errors.email && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formData.errors.email}</p>}
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name:</label>
                    <input type="text" id="name" name="fullName" value={formData.fullName} onChange={handleInputChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    {formData.errors.fullName && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formData.errors.fullName}</p>}
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Roles:</label>
                    <div className="flex items-center mb-4 space-x-3">
                        {roles.map((role, index) => (
                            <label key={index} className="flex items-center p-4 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition duration-300 ease-in-out cursor-pointer">
                            <input
                                key={index}
                                type="checkbox"
                                className="form-checkbox mr-3 h-5 w-5 text-blue-500"
                                checked={formData.checkedRoles.includes(role)}
                                onChange={() => toggleCheckbox(role)}
                            />
                            <span className="text-gray-800">{role}</span>
                        </label>
                        ))}
                    </div>
                    {formData.errors.role && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formData.errors.role}</p>}
                </div>
                <PrimaryButton onClick={submit}>Register</PrimaryButton>
            </form>
        </Layout>
    )
}
