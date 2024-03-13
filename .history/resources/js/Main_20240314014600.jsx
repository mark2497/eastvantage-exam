import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom"
import UsersForm from "./pages/UsersForm";
import UsersPage from "./pages/UsersPage"

const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UsersPage />}></Route>
                <Route path="/new" element={<UsersForm />}></Route>
                <Route path="/details/:id" element={<UsersForm/>}></Route>
            </Routes>
        </Router>
    )
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
