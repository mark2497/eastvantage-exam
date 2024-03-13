import React from "react"
import Layout from "../layout/Layout"
import PrimaryButton from "../components/PrimaryButton"
export default function RegistrationPage() {
    return (
        <Layout>
            <form className="mx-auto">
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span> Username available!</p>
                </div>
                <div className="mb-5">
                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username already taken!</p>
                </div>
                <PrimaryButton type="submit">Register</PrimaryButton>
            </form>
        </Layout>
    )
}
