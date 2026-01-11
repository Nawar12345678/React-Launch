import type { Project } from "./types";

let projects: Project[] = [
    {
        id: "1",
        name: "First Project",
        createdAt: new Date().toISOString(),
    },
];

export function getProjects(): Promise<Project[]> {
    return new Promise(resolve => {
        setTimeout(() => resolve([...projects]), 500);
    });
}

export function createProject(name: string): Promise<Project> {
    return new Promise(resolve => {
        setTimeout(() => {
            const newProject: Project = {
                id: crypto.randomUUID(),
                name,
                createdAt: new Date().toISOString(),
            };
            projects.push(newProject);
            resolve(newProject);
        }, 500);
    });
}

export function deleteProject(id: string): Promise<void> {
    return new Promise(resolve => {
        setTimeout(() => {
            projects = projects.filter(p => p.id !== id);
            resolve();
        }, 500);
    });
}
