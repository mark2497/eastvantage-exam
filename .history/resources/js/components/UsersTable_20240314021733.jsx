import React, {useContext} from "react"
import DangerButton from "./DangerButton"
import SecondaryButton from "./SecondaryButton"
import { Link } from "react-router-dom"
import UserListContext from "../context/UserListContext"
import Swal from "sweetalert2"
import axios from "axios"
import Alerts from "../utils/Alerts"

function UsersTable() {
    const  userlist = useContext(UserListContext)

    const deleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You may double  check your information before proceeding.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#9E9E9E",
            confirmButtonText: "Yes, delete it"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.post(`/delete`, {id: id})
                .then(({data} = response) => {
                    Alerts.displayMessage(data.message)
                    getUsers()
                })
                .catch((error) => {
                    console.log(error)
                    Alerts.dangerMessage(error)
                })
            }
          });
    }

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
                        {userlist?.data?.map((user, index) => (
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
