import React, {useContext} from "react";
import {useUserList} from "../context/UserListContext";

function UserTablePagination() {
    const {list, setPage} = useUserList();

    const pages = Math.ceil(list?.total / list?.per_page)
    const current = list?.current_page

    const paginationItem = [];

    for (let index = 1; index <= pages; index++) {

        let className = index == current
        ? "flex items-center justify-center px-4 h-10 leading-tight text-black bg-gray-300 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"

        paginationItem.push(
            <li key={index}>
                <a
                    onClick={()=>setPage(index)}
                    href="#"
                    className={className}>
                    {index}
                </a>
            </li>
        );
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="flex items-center justify-center -space-x-px h-10 text-base">
                {paginationItem}
            </ul>
        </nav>
    )
}
export default UserTablePagination
