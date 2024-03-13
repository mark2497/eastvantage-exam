import React from "react"
import ReactDOM from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RegistrationPage from "./pages/RegistrationPage";
import UsersPage from "./pages/UsersPage"

const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UsersPage />}></Route>
                <Route path="/new" element={<RegistrationPage />}></Route>
                <Route element={<NotFound/>} />
            </Routes>
        </Router>
    )
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
