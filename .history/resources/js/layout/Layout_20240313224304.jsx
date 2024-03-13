import React from "react"
import Navigation from "../components/Navigation"

const Layout  = ({children}) => {
    return (
        <div className="w-full relative">
            <Navigation/>
            <section className="px-10 py-4 flex justify-center my-1">
                    {children}
            </section>
        </div>
    );
}

export default Layout
