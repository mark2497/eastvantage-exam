import React from "react"
import Navigation from "../components/Navigation"

const Layout  = ({children}) => {
    return (
        <div>
            <Navigation/>
            <section>
                {children}
            </section>
        </div>
    );
}

export default Layout
