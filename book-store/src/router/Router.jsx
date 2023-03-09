import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookPage from "../pages/book-page/BookPage";
import Dashboard from "../pages/dashboard/Dashboard";
import LoginSignup from "../pages/login-signup/LoginSignup";

export default function Router() {
    const [state, setState] = useState({
        authorizationToken: localStorage.getItem('authorizationToken')
    });
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={state.authorizationToken ? <Dashboard /> : <LoginSignup />} />
                    <Route path="/login" element={<LoginSignup tab="login"/>} />
                    <Route path="/signup" element={<LoginSignup tab="signup"/>} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/book" element={<BookPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}