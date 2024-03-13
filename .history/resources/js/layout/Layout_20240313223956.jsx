import React from "react"
import Navigation from "../components/Navigation"

const Layout  = ({children}) => {
    return (
        <div className="w-full relative">
            <Navigation/>
            <section className="px-2 py-4 flex justify-center my-1">
                <div className="overflow-x-auto">
                    {children}
                </div>
            </section>
        </div>
    );
}

export default Layout
