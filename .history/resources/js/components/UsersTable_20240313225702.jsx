import React from "react"
export default function UsersTable({users, onDeleteUser, onUpdateUser}) {
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
                    {
                        users.map((user, index) => {
                            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td className="whitespace-nowrap px-10 py-4 font-medium">{user.id}</td>
                                <td className="whitespace-nowrap px-10 py-4">{user.fullname}</td>
                                <td className="whitespace-nowrap px-10 py-4">{user.email}</td>
                                <td className="whitespace-nowrap px-10 py-4">
                                    {user.roles.map((role, index) => {
                                        return <span>{role.role}</span>
                                    })}
                                </td>
                            </tr>
                        })
                    }
                    <tr
                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        <td className="whitespace-nowrap px-10 py-4 font-medium">1</td>
                        <td className="whitespace-nowrap px-10 py-4">Mark</td>
                        <td className="whitespace-nowrap px-10 py-4">Otto</td>
                        <td className="whitespace-nowrap px-10 py-4">@mdo</td>
                    </tr>

                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    )
}
