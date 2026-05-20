import { Routes, Route } from "react-router-dom";
import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { InfoPage } from "./pages/InfoPage";
import { NewsPage } from "./pages/NewsPage";
import { SolutionsPage } from "./pages/SolutionsPage";
import { WarrantyPage } from "./pages/WarrantyPage";
import "./components/ui/ui.css";
import "./pages/sitePages.css";
import "./pages/homeShowcase.css";
import "./pages/layoutPresets.css";

export default function App() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/warranty" element={<WarrantyPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
