import React from "react"
import Navigation from "../components/Navigation"

const Layout  = ({children}) => {
    return (
        <div className="w-full relative">
            <Navigation/>
            <section className="px-10 py-4 flex min-h-screen justify-center my-1">
                <div className="overflow-x-auto" style="width: 80%;">
                    {children}
                </div>
            </section>
        </div>
    );
}

export default Layout
