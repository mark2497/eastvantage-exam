import React, {useState, useEffect} from "react"
import Layout from "../layout/Layout"
import PrimaryButton from "../components/PrimaryButton"
import UsersTable from "../components/UsersTable";
import { Link } from 'react-router-dom';
import axios from "axios"
import Swal from "sweetalert2";
import Alerts from "../utils/Alerts";
import UserTablePagination from "../components/UserTablePagination";
import UserListContext from "../context/UserListContext"

export default function UsersPage() {
    const [list, setList] =  useState([]);
    const [pagination, setPagination] = useState();
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)
    const [selectedRole, setRoleFilter] = useState('')

    const getUsers = () => {
        axios.get(`/users?page=${page}&size=${pageSize}&role=${selectedRole}`)
            .then(({data} = res) => {
                console.log(data)
                setList(data)
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
                axios.post(`/delete`, {id: id})
                .then(({data} = response) => {
                    Alerts.displayMessage(data.message)
                    getUsers()
                })
                .catch((error) => {
                    Alerts.dangerMessage(error)
                })
            }
          });
    }

    const updateUser = (id) => {
        console.log("update user")
    }

    const gotoPage = (number) => {
        setPage(number)
    }

    useEffect(() => {
        getUsers()
    }, [page, pageSize]);

    return (
        <Layout>
            <Link to="/new" className="flex flex-row-reverse">
                <PrimaryButton>Add New User</PrimaryButton>
            </Link>
            <UserListContext.Provider value={(list)}>
                <UsersTable onDeleteUser={deleteUser} onUpdateUser={updateUser}/>
                <UserTablePagination pages={Math.ceil(pagination?.total / pagination?.per_page)} current={pagination?.current_page} setPage={gotoPage}></UserTablePagination>
            </UserListContext.Provider>
        </Layout>
    )
}
