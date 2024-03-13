import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom"
import RegistrationPage from "./pages/RegistrationPage";
import UsersPage from "./pages/UsersPage"
import NotFound from "./pages/NotFound"
import UserDetails from "./pages/UserDetails";

const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UsersPage />}></Route>
                <Route path="/new" element={<RegistrationPage />}></Route>
                    <Route path="/details/:id" element={<UserDetails/>}/></Route>
                    {/* Add more routes as needed */}
                {/* Add a 404 route if needed */}
                <Route element={<NotFound/>} />
            </Routes>
        </Router>
    )
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
