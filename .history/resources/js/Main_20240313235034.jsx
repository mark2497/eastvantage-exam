import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom"
import RegistrationPage from "./pages/RegistrationPage";
import UsersPage from "./pages/UsersPage"
import UserDetails from "./pages/UserDetails";

const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UsersPage />}></Route>
                <Route path="/new" element={<RegistrationPage />}></Route>
                <Route path="/details/:id" element={<RegistrationPage/>}></Route>
            </Routes>
        </Router>
    )
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}