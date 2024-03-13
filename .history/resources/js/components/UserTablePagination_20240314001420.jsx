import React from "react";

function UserTablePagination({pages, current, setPage}) {
    return (
        <nav aria-label="Page navigation">
            <ul className="flex items-center justify-center -space-x-px h-10 text-base">
                <li>
                    <a
                        onClick={()=>setPage(current--)}
                        href="#"
                        className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Prev
                    </a>
                </li>
                {pages?.map((page, index) => (
                    <li>
                        <a
                            onClick={()=>setPage(index+1)}
                            href="#"
                            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            {index+1}
                        </a>
                    </li>
                ))}
                <li>
                    <a
                        onClick={()=>setPage(current++)}
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}
export default UserTablePagination
