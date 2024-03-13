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
    const [list, setList] =  useState([])
    const [page, setPage] = useState(1)

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



    useEffect(() => {
        getUsers()
    }, [page, pageSize]);

    return (
        <Layout>

            <Link to="/new" className="flex flex-row-reverse">
                <PrimaryButton>Add New User</PrimaryButton>
            </Link>

            <UserListContext.Provider value={(list)}>
                <UsersTable/>
                <UserTablePagination setPage={setPage}></UserTablePagination>
            </UserListContext.Provider>

        </Layout>
    )
}
