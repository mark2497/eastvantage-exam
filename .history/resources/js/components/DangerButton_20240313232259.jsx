import React from "react"

export default function DangerButton({ children, onClick, type = "button"}) {
    return (
        <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}
