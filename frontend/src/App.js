import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "./contexts/LanguageContext";
import "@/App.css";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

export default App;