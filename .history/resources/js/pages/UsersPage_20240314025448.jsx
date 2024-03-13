import React from "react"
import Layout from "../layout/Layout"
import PrimaryButton from "../components/PrimaryButton"
import UsersTable from "../components/UsersTable";
import { Link } from 'react-router-dom';
// import UserTablePagination from "../components/UserTablePagination";
import { UserListProvider, useUserList} from "../context/UserListContext"

export default function UsersPage() {
    useUserList();
    return (
        <Layout>

            <Link to="/new" className="flex flex-row-reverse">
                <PrimaryButton>Add New User</PrimaryButton>
            </Link>
            <UserListProvider>
                <UsersTable />
                <UserTablePagination></UserTablePagination>
            </UserListProvider>

        </Layout>
    )
}
