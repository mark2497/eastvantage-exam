import React, {useState, useEffect} from "react"
import axios from "axios"

export default function UsersTable() {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [selectedRole, setRoleFilter] = useState('Author')

    const getUsers = () => {
        axios.get(`/users?page=${page}&size=${pageSize}&role=${selectedRole}`)
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
                <tr
                  className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Mark</td>
                  <td className="whitespace-nowrap px-6 py-4">Otto</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                </tr>
                <tr
                  className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                  <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                  <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                  <td className="whitespace-nowrap px-6 py-4">@fat</td>
                </tr>
                <tr
                  className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                  <td className="whitespace-nowrap px-6 py-4">Larry</td>
                  <td className="whitespace-nowrap px-6 py-4">Wild</td>
                  <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    )
}
