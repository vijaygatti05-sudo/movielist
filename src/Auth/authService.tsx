import { userManager } from "./authConfig";

export const login = () => {
    return userManager.signinRedirect();
};

export const logout = () => {
    return userManager.signoutRedirect();
};

export const getUser = () => {
    console.log("inside getuser");
    return userManager.getUser();
};

export const handleSignin = () => {
    return userManager.signinRedirectCallback();
};

export const signoutRedirectCallback = () => {
    return userManager
            .signoutRedirectCallback();
};