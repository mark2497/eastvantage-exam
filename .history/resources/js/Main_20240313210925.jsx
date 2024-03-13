import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom"
import RegistrationPage from "./pages/RegistrationPage";
import UsersPage from "./pages/UsersPage"
import NotFound from "./pages/NotFound";

const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UsersPage />}></Route>
                <Route path="/new" element={<RegistrationPage />}></Route>
                <Switch>
                    <Route path="/details/:id">
                        <h1>user details</h1>
                    </Route>
                    {/* Add more routes as needed */}
                </Switch>
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
