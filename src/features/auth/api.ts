import type { User } from "./types";

export function login(email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!email || !password) {
                reject("Invalid credentials");
            }

            resolve({
                id: crypto.randomUUID(),
                email,
                role: email.includes("admin") ? "admin" : "user",
            });
        }, 600);
    });
}

export function logout(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 300));
}
