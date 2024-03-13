import React from "react"
import Navigation from "../components/Navigation"

const Layout  = ({children}) => {
    return (
        <div>
            <Navigation/>
            <section className="px-6 py-2">
                {children}
            </section>
        </div>
    );
}

export default Layout
