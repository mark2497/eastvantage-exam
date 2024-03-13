import React, { useState } from "react"
import DangerButton from "./DangerButton"
import SecondaryButton from "./SecondaryButton"
import { Link } from "react-router-dom"
// import useUserList from "../context/UserListContext"

function UsersTable() {
    // const { list, deleteUser } = useUserList();
    [list, setList] = useState([])''
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                        <th scope="col" className="px-10 py-4">#</th>
                        <th scope="col" className="px-10 py-4">Full Name</th>
                        <th scope="col" className="px-10 py-4">Email Address</th>
                        <th scope="col" className="px-10 py-4">Roles</th>
                        <th scope="col" className="px-10 py-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list?.data?.map((user, index) => (
                            <tr key={index} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td className="whitespace-nowrap px-10 py-4 font-medium">{user.id}</td>
                                <td className="whitespace-nowrap px-10 py-4">{user.fullname}</td>
                                <td className="whitespace-nowrap px-10 py-4">{user.email}</td>
                                <td className="whitespace-nowrap px-10 py-4">
                                    {user.roles.map(({role} = role, index) => (
                                        <p key={index}>{role.role}</p>
                                    ))}
                                </td>
                                <td className="whitespace-nowrap px-10 py-4">
                                    <Link to={`/details/${user.id}`}>
                                        <SecondaryButton>Update</SecondaryButton>
                                    </Link>
                                    <DangerButton onClick={() => deleteUser(user.id)}>Delete</DangerButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}
export default UsersTable
