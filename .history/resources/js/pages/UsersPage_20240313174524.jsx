import React from "react"
import Layout from "../layout/Layout"
export default function UsersPage() {
    return (
        <Layout>
            <div className="flex min-h-screen justify-center">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-xl">
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
                        <tr className="border-b border-blue-gray-200">
                            <td className="py-3 px-4">Company A</td>
                            <td className="py-3 px-4">$50.25</td>
                            <td className="py-3 px-4">100</td>
                            <td className="py-3 px-4">$5025.00</td>
                            <td className="py-3 px-4">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-800">Edit</a>
                            </td>
                        </tr>
                        <tr className="border-b border-blue-gray-200">
                            <td className="py-3 px-4">Company B</td>
                            <td className="py-3 px-4">$75.60</td>
                            <td className="py-3 px-4">150</td>
                            <td className="py-3 px-4">$11340.00</td>
                            <td className="py-3 px-4">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-800">Edit</a>
                            </td>
                        </tr>
                        <tr className="border-b border-blue-gray-200">
                            <td className="py-3 px-4">Company C</td>
                            <td className="py-3 px-4">$30.80</td>
                            <td className="py-3 px-4">200</td>
                            <td className="py-3 px-4">$6160.00</td>
                            <td className="py-3 px-4">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-800">Edit</a>
                            </td>
                        </tr>
                        <tr className="border-b border-blue-gray-200">
                            <td className="py-3 px-4 font-medium">Total Wallet Value</td>
                            <td className="py-3 px-4"></td>
                            <td className="py-3 px-4"></td>
                            <td className="py-3 px-4 font-medium">$22525.00</td>
                            <td className="py-3 px-4"></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
        </Layout>
    )
}
