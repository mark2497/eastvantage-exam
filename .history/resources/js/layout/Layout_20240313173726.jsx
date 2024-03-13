import React from "react"
import Navigation from "../components/Navigation"

const Layout  = ({children}) => {
    return (
        <div>
            <Navigation/>
            <section className="px-10 py-4">
                {children}
            </section>
        </div>
    );
}

export default Layout
