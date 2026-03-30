import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Gateway from "./pages/Gateway";
import HomeResidential from "./pages/HomeResidential";
import HomeCommercial from "./pages/HomeCommercial";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import ServicePage from "./pages/ServicePage";
import ServicesLanding from "./pages/ServicesLanding";
import OurWork from "./pages/OurWork";

function Router() {
  return (
    <Switch>
      {/* Gateway — persona selector */}
      <Route path="/" component={Gateway} />

      {/* Residential path */}
      <Route path="/residential" component={HomeResidential} />
      <Route path="/our-work" component={OurWork} />

      {/* Commercial / Investor path */}
      <Route path="/commercial" component={HomeCommercial} />

      {/* Services landing page */}
      <Route path="/services" component={ServicesLanding} />

      {/* Service detail pages — all 11 services */}
      <Route path="/services/:slug" component={ServicePage} />

      {/* Case Studies (linked from commercial side) */}
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/case-studies/:id" component={CaseStudyDetail} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
