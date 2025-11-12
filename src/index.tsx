import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { SignIn } from "./screens/SignIn";
import { Dashboard } from "./screens/Dashboard";
import { MutualCommission } from "./screens/MutualCommission";
import { BrokingCommission } from "./screens/BrokingCommission";
import { ClientDetails } from "./screens/ClientDetails";
import { ClientActivity } from "./screens/ClientActivity";
import { ChangeFormat } from "./screens/ChangeFormat";
import { RevenueAnalysis } from "./screens/RevenueAnalysis";
import { DoDont } from "./screens/DoDont";
import Profile from "./screens/Profile";
import Layout from "./components/Layout";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />

          {/* Protected routes that should show the persistent sidebar and header */}
          <Route element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/revenue-analysis" element={<RevenueAnalysis />} />
            <Route path="/mutual-commission" element={<MutualCommission />} />
            <Route path="/broking" element={<BrokingCommission />} />
            <Route path="/client-management" element={<ClientDetails />} />
            <Route path="/client-activity" element={<ClientActivity />} />
            <Route path="/details" element={<ClientDetails />} />
            <Route path="/do-dont" element={<DoDont />} />
            <Route path="/change-format" element={<ChangeFormat />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
