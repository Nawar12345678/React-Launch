import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/pages/Home";
import Dashboard from "./app/pages/Dashboard";
import Settings from "./app/pages/Settings";
import Layout from "./components/layout/Layout";
import ProjectsPage from "./features/projects/pages/ProjectsPage";
import LoginPage from "./features/auth/pages/LoginPage";
import ProtectedRoute from "./features/auth/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
