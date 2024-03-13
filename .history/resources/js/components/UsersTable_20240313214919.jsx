import React, {useState, useEffect} from "react"

export default function UsersTable() {
    return (
        <div>
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
            </tbody>
            </table>
        </div>
    )
}
