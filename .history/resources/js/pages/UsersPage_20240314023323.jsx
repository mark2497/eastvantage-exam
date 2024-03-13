import React, {useState, useEffect} from "react"
import Layout from "../layout/Layout"
import PrimaryButton from "../components/PrimaryButton"
import UsersTable from "../components/UsersTable";
import { Link } from 'react-router-dom';
import axios from "axios"
import UserTablePagination from "../components/UserTablePagination";
import {useUserList} from "../context/UserListContext"

export default function UsersPage() {
    const { list, getUsers, setPage } = useUserList();
    return (
        <Layout>

            <Link to="/new" className="flex flex-row-reverse">
                <PrimaryButton>Add New User</PrimaryButton>
            </Link>
            <UsersTable />
            <UserTablePagination></UserTablePagination>

        </Layout>
    )
}
