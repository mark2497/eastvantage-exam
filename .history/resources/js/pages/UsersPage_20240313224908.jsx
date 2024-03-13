import React, {useEffect} from "react"
import Layout from "../layout/Layout"
import PrimaryButton from "../components/PrimaryButton"
import UsersTable from "../components/UsersTable";
import { Link } from 'react-router-dom';
import axios from "axios"

export default function UsersPage() {
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
        <Layout>
            <Link to="/new" className="flex flex-row-reverse">
                <PrimaryButton>Add New User</PrimaryButton>
            </Link>
            <UsersTable/>
        </Layout>
    )
}
