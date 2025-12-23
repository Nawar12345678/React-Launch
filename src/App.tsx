import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./app/pages/Home";
import Dashboard from "./app/pages/Dashboard";
import Settings from "./app/pages/Settings";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
