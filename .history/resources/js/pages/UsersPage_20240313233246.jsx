import React, {useState, useEffect} from "react"
import Layout from "../layout/Layout"
import PrimaryButton from "../components/PrimaryButton"
import UsersTable from "../components/UsersTable";
import { Link } from 'react-router-dom';
import axios from "axios"
import Swal from "sweetalert2";
import Alerts from "../utils/Alerts";

export default function UsersPage() {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [selectedRole, setRoleFilter] = useState('')

    const getUsers = () => {
        axios.get(`/users?page=${page}&size=${pageSize}&role=${selectedRole}`)
            .then(({data} = res) => {
                console.log(data.data)
                setUsers(data.data)
            })
            .catch((err) => {
                alert('Error getting users')
                console.error(err)
            })
    }

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
                axios.delete(`/delete/${id}`)
                .then(({data} = response) => {
                    Alerts.displayMessage(data.message)
                })
                .catch((error) => {
                    if (error.response.status = 422) {
                        distributeErrors(error.response.data.errors)
                    }
                })
            }
          });
    }

    const updateUser = (id) => {
        console.log("update user")
    }

    useEffect(() => {
        getUsers()
    }, [page, pageSize]);

    return (
        <Layout>
            <Link to="/new" className="flex flex-row-reverse">
                <PrimaryButton>Add New User</PrimaryButton>
            </Link>
            <UsersTable users={users} onDeleteUser={deleteUser} onUpdateUser={updateUser}/>
        </Layout>
    )
}
