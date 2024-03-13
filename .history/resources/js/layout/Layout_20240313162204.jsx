import React from "react"
import Navigation from "../components/Navigation"

const Layout  = ({children}) => {
    return (
        <>
            <Navigation/>
            <section>
                {children}
            </section>
        </>
    );
}

export default Layout
