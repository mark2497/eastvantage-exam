import React from "react"
import Layout from "../layout/Layout"
import PrimaryButton from "../components/PrimaryButton"
import { Link } from 'react-router-dom';

export default function UsersPage() {
    return (
        <Layout>
                <table className="min-w-full bg-white shadow-md rounded-xl">
                <caption>
                    <Link to="/new">
                        <PrimaryButton>Add New User</PrimaryButton>
                    </Link>
                </caption>
                <thead>
                    <tr className="bg-blue-gray-100 text-gray-700">
                        <th className="py-3 px-4 text-left">ID</th>
                        <th className="py-3 px-4 text-left">Full Name</th>
                        <th className="py-3 px-4 text-left">Email Address</th>
                        <th className="py-3 px-4 text-left">Roles</th>
                        <th className="py-3 px-4 text-left">Action</th>
                    </tr>
                </thead>
                <tbody className="text-blue-gray-900">
                </tbody>
                </table>
            </div>
        </Layout>
    )
}
