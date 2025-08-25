import { Button } from "../ui/button";

function ContactButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Button asChild className="transition-colors duration-300">
      <a href="/#contact" onClick={handleClick}>
        Contact
      </a>
    </Button>
  );
}

export default ContactButton;
