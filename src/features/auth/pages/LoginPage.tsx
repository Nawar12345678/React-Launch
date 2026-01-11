import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "../context";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/");
        } catch {
            setError("Invalid credentials");
        }
    }

    return (
        <form
            onSubmit={submit}
            className="max-w-sm mx-auto mt-20 space-y-4 border p-6 rounded-md"
        >
            <h1 className="text-xl font-semibold">Login</h1>

            {error && <p className="text-destructive text-sm">{error}</p>}

            <input
                className="border rounded-md px-3 py-2 w-full"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <input
                type="password"
                className="border rounded-md px-3 py-2 w-full"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <Button className="w-full" type="submit">
                Login
            </Button>
        </form>
    );
}
