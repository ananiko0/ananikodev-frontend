import { Outlet } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import ScrollToTop from "./ScrollToTop";

const MainLayout = () => {
  return (
    <div className=" min-h-screen bg-background">
      {/* Navigation */}
      <ScrollToTop />
      <Navigation />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 min-h-screen pt-20">
        <Outlet />
      </main>

      {/* Footer - we'll add this later */}
      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © 2024 Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
