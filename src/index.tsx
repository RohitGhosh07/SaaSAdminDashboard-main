import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "./screens/SignIn";
import { Dashboard } from "./screens/Dashboard";
import { MutualCommission } from "./screens/MutualCommission";
import { BrokingCommission } from "./screens/BrokingCommission";
import { ClientDetails } from "./screens/ClientDetails";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/revenue-analysis" element={<MutualCommission />} />
        <Route path="/broking" element={<BrokingCommission />} />
        <Route path="/details" element={<ClientDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
