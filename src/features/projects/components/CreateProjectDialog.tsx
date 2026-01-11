import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCreateProject } from "../hooks";

export default function CreateProjectDialog() {
    const [name, setName] = useState("");
    const createProject = useCreateProject();

    function submit() {
        if (!name) return;
        createProject.mutate(name);
        setName("");
    }

    return (
        <div className="flex gap-2">
            <input
                className="border rounded-md px-3 py-2 text-sm"
                placeholder="Project name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <Button onClick={submit}>Create</Button>
        </div>
    );
}
