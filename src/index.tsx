import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './styles/app.css';
import reportWebVitals from './reportWebVitals';

import App from './App';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import {Callback, LogoutCallback} from "Auth/Callback";

ReactDOM.createRoot(
    document.getElementById("root")!
).render(

    <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={<App />}
            />
            <Route
                path="/callback"
                element={<Callback />}
            />
            <Route
                path="/logout-callback"
                element={<LogoutCallback />}
            />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
