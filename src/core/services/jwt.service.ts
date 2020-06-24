class JwtService {
    setToken(token : string) : void {
        window.localStorage.setItem("access_token", token);
    }

    getToken() : string | undefined {
        return window.localStorage.getItem("access_token")?.toString();
    }

    clearToken() : void {
        window.localStorage.removeItem("access_token");
    }

    isAuthenticate() : boolean {
        return window.localStorage.getItem("access_token") ? true : false;
    }
}

export default new JwtService();
