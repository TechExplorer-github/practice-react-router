import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import Layout from "./components/layouts/Layout";
import RequireAuth from "./components/auth/RequireAuth";
import LoginPage from "./pages/LoginPage";
import PublicPage from "./pages/PublicPage";
import ProtectedPage from "./pages/ProtectedPage";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <h1>Auth Example</h1>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<PublicPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPage />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
