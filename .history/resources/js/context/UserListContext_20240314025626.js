import {createContext, useContext, useEffect, useState} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Alerts from '../utils/Alerts';

const UserListContext = createContext();

const UserListProvider = ({ children }) => {
    const [list, setList] =  useState({ data: [] });
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

    useEffect(() => {
        getUsers()
    }, [page, selectedRole]);


    return (
      <UserListContext.Provider value={{ list, getUsers, deleteUser, setPage }}>
        {children}
      </UserListContext.Provider>
    );
};

const useUserList = () => {
    return useContext(UserListContext);
};

export { UserListProvider, useUserList };
