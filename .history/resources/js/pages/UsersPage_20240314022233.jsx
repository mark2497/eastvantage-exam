import React, {useState, useEffect} from "react"
import Layout from "../layout/Layout"
import PrimaryButton from "../components/PrimaryButton"
import UsersTable from "../components/UsersTable";
import { Link } from 'react-router-dom';
import axios from "axios"
import UserTablePagination from "../components/UserTablePagination";
import UserListContext from "../context/UserListContext"

export default function UsersPage() {
    const [list, setList] =  useState([])
    const [page, setPage] = useState(1)
    const [selectedRole, setRole] = useState('');

    const getUsers = () => {
        axios.get(`/users?page=${page}&size=3&role=${selectedRole}`)
            .then(({data} = res) => {
                setList(data)
            })
            .catch((err) => {
                alert('Error getting users')
            })
    }

    useEffect(() => {
        getUsers()
    }, [page, selectedRole]);

    return (
        <Layout>

            <Link to="/new" className="flex flex-row-reverse">
                <PrimaryButton>Add New User</PrimaryButton>
            </Link>

            <UserListContext.Provider value={{ list, getUsers, setPage}}>
                <UsersTable />
                <UserTablePagination></UserTablePagination>
            </UserListContext.Provider>

        </Layout>
    )
}
