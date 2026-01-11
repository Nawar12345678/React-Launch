import CreateProjectDialog from "../components/CreateProjectDialog";
import { useProjects, useDeleteProject } from "../hooks";
import { useAuth } from "@/features/auth/context";

export default function ProjectsPage() {
    const { user } = useAuth();
    const { data, isLoading, isError } = useProjects();
    const deleteProject = useDeleteProject();

    //  Role-based access
    if (user?.role !== "admin") {
        return (
            <div className="p-6 text-sm text-muted-foreground">
                You do not have permission to access this page.
            </div>
        );
    }

    //  Loading state
    if (isLoading) {
        return (
            <div className="p-6 text-sm text-muted-foreground">
                Loading projects...
            </div>
        );
    }

    //  Error state
    if (isError) {
        return (
            <div className="p-6 text-sm text-destructive">
                Failed to load projects.
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Projects</h1>
                <CreateProjectDialog />
            </div>

            {/* Empty state */}
            {data?.length === 0 ? (
                <div className="border rounded-md p-6 text-sm text-muted-foreground">
                    No projects yet. Create your first project.
                </div>
            ) : (
                <ul className="space-y-2">
                    {data?.map(project => (
                        <li
                            key={project.id}
                            className="flex justify-between items-center border rounded-md p-3"
                        >
                            <div className="flex flex-col">
                                <span className="font-medium">{project.name}</span>
                                <span className="text-xs text-muted-foreground">
                                    Created {new Date(project.createdAt).toLocaleDateString()}
                                </span>
                            </div>

                            <button
                                className="text-sm text-destructive hover:underline"
                                onClick={() => deleteProject.mutate(project.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
