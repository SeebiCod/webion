import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { LandingPage } from "./pages/LandingPage";
import { ContactPage } from "./pages/ContactPage";
import { AuthPage } from "./pages/AuthPage";
import { MemberPage } from "./pages/MemberPage";
import { WixVsSquarespacePage } from "./pages/compare/WixVsSquarespacePage";
import { WixVsWordPressPage } from "./pages/compare/WixVsWordPressPage";
import { WebDesignSmallBusinessPage } from "./pages/services/WebDesignSmallBusinessPage";
import { WebsitesForConsultantsPage } from "./pages/services/WebsitesForConsultantsPage";
import { WebsitesForCoachesPage } from "./pages/services/WebsitesForCoachesPage";
import { WebsiteCostUKPage } from "./pages/blog/WebsiteCostUKPage";
import { BestWebDesignAgenciesUKPage } from "./pages/blog/BestWebDesignAgenciesUKPage";
import { AuthProvider, useAuth } from "./auth/AuthContext";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/member"
            element={
              <ProtectedRoute>
                <MemberPage />
              </ProtectedRoute>
            }
          />
          <Route path="/compare/wix-vs-squarespace" element={<WixVsSquarespacePage />} />
          <Route path="/compare/wix-vs-wordpress" element={<WixVsWordPressPage />} />
          <Route path="/services/web-design-small-business" element={<WebDesignSmallBusinessPage />} />
          <Route path="/services/websites-for-consultants" element={<WebsitesForConsultantsPage />} />
          <Route path="/services/websites-for-coaches" element={<WebsitesForCoachesPage />} />
          <Route path="/blog/how-much-does-a-website-cost-uk" element={<WebsiteCostUKPage />} />
          <Route path="/blog/best-web-design-agencies-uk" element={<BestWebDesignAgenciesUKPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}
