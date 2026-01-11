import { createContext, useContext, useState } from "react";
import * as api from "./api";
import type { User } from "./types";

type AuthContextType = {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    async function loginHandler(email: string, password: string) {
        const user = await api.login(email, password);
        setUser(user);
    }

    async function logoutHandler() {
        await api.logout();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login: loginHandler, logout: logoutHandler }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
    return ctx;
}
