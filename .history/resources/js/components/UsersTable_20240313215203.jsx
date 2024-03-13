import React, {useState, useEffect} from "react"
import axios from "axios"

export default function UsersTable() {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    const getUsers = () => {
        axios.get(`/users?page=${page}&size=${pageSize}`)
            .then((res) => {
                console.log("Get users: ", res.data);
                setUsers(res.data)
            })
            .catch((err) => {
                alert('Error getting users')
                console.error(err)
            })
    }

    useEffect(() => {
        getUsers()
    }, [page, pageSize]);
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
