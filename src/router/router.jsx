import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard.jsx";
import Login from "../pages/public/Login.jsx";
import Register from "../pages/public/Register.jsx";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Route>
    )
)

export default router