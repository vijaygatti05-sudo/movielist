import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleSignin, signoutRedirectCallback } from "./authService";

export function Callback() {

    const navigate = useNavigate();

    useEffect(() => {

        async function processLogin() {

            try {

                await handleSignin();

                navigate("/");
            }
            catch (err) {

                console.error(err);
            }
        }

        processLogin();

    }, [navigate]);

    return (
        <div>
            Signing in...
        </div>
    );
}

export function LogoutCallback() {

    useEffect(() => {
            signoutRedirectCallback()
            .then(() => {
                window.location.href = "/";
            });

    }, []);

    return <div>Signing out...</div>;
}