import { login , logout} from "./authService";

export const Login = function () {

    return (
        <button onClick={login}>
            Login
        </button>
    );
}

export const Logout = function () {

    return (
        <button onClick={logout}>
            Logout
        </button>
    );
}