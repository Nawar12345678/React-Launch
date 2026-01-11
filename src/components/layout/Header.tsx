import { Button } from "@/components/ui/button";
import { Moon, Sun, LogOut } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useAuth } from "@/features/auth/context";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const { theme, toggle } = useTheme();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        await logout();
        navigate("/login");
    }

    return (
        <header className="h-14 border-b flex items-center justify-between px-4">
            <span className="font-semibold">ReactLaunch</span>

            <div className="flex items-center gap-2">
                {/* Theme toggle */}
                <Button variant="ghost" size="icon" onClick={toggle}>
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </Button>

                {/* Logout (only if logged in) */}
                {user && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleLogout}
                        title="Logout"
                    >
                        <LogOut size={18} />
                    </Button>
                )}
            </div>
        </header>
    );
}
