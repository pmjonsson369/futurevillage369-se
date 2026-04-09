import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import SmartGrowingSystems from "./pages/SmartGrowingSystems";
import SmartGarden from "./pages/SmartGarden";
import SmartGardenAnalysis from "./pages/SmartGardenAnalysis";
import SmartGreenhouse from "./pages/SmartGreenhouse";
import SmartVilla from "./pages/SmartVilla";
import Ecovillage from "./pages/Ecovillage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/smart-growing-systems" element={<SmartGrowingSystems />} />
            <Route path="/smart-garden" element={<SmartGarden />} />
            <Route path="/smart-garden-analysis" element={<SmartGardenAnalysis />} />
            <Route path="/smart-greenhouse" element={<SmartGreenhouse />} />
            <Route path="/smart-villa" element={<SmartVilla />} />
            <Route path="/ecovillage" element={<Ecovillage />} />
            <Route path="/om" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
