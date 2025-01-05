import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink, Github } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Linkedin", link: "https://www.linkedin.com/in/stefan-gjorgjevski-636806230/", icon: <Linkedin /> },
    { name: "GitHub", link: "https://github.com/stefangjj", icon: <Github /> },
  ];

  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link 
              target="_blank"
              href={itm.link}
              className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
