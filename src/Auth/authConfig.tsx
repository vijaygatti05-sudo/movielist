import { UserManager, WebStorageStateStore } from "oidc-client-ts";
import { idserverurl } from "data/globalconstants" 


export const userManager = new UserManager({
    authority: idserverurl,

    client_id: "movies-react",

    redirect_uri: "http://localhost:3000/callback",

    post_logout_redirect_uri:
        "http://localhost:3000/logout-callback",

    response_type: "code",

    scope: "openid profile moviesapi",

    automaticSilentRenew: true,

    loadUserInfo: true,

    userStore: new WebStorageStateStore({
        store: window.localStorage
    })
});