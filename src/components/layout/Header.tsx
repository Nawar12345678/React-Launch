import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export default function Header() {
    const { theme, toggle } = useTheme();

    return (
        <header className="h-14 border-b flex items-center justify-between px-4">
            <span className="font-semibold">ReactLaunch</span>
            <Button variant="ghost" size="icon" onClick={toggle}>
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
        </header>
    );
}
