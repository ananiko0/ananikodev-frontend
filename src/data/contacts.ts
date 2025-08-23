import { Github, Linkedin, Mail, Phone } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    value: "nikoleishviliana@gmail.com",
    href: "mailto:nikoleishviliana@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "in/ana-nikoleishvili",
    href: "https://www.linkedin.com/in/ana-nikoleishvili",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    value: "@ananiko0",
    href: "https://github.com/ananiko0",
    icon: Github,
  },
  {
    name: "Phone",
    value: "+995 599 13 18 16", // Georgian number format
    href: "tel:+995599131816",
    icon: Phone,
  },
];

export default contactLinks;
