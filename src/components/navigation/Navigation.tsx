import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import drawing from "@/assets/Octagon/drawing.svg";

const Navigation = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    //     { name: "Blog", path: "/blog" },
    //     { name: "Gallery", path: "/gallery" },
    //     { name: "Roadmap", path: "/roadmap" },
    //     { name: "Calendar", path: "/calendar" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center gap-[10px]">
            <img src={drawing} alt="Logo" className="w-8 h-8" />
            <Link to="/" className="text-xl font-bold text-blue-500">
              AnaNiko
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.path}>
                    <Link
                      key={item.path}
                      to={item.path}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
