
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import Inspiration from "./pages/Inspiration";
import Login from "./pages/Login";
import Artwork from "./pages/Artwork";
import ArtistProfile from "./pages/ArtistProfile";
import Artists from "./pages/Artists";
import SellArt from "./pages/SellArt";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/artwork/:id" element={<Artwork />} />
          <Route path="/artist/:id" element={<ArtistProfile />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/sell" element={<SellArt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
