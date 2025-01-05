import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from '../../../public/html.png';
import css from '../../../public/css.png';
import strapi from '../../../public/strapi.svg';
import js from '../../../public/js.png';
import ts from '../../../public/ts.svg';
import react from '../../../public/react.png';
import nextjs from '../../../public/nextjs.jpeg';
import figma from '../../../public/figma.svg';
import cplus from '../../../public/c++.jpeg';
import tailwind from '../../../public/tailwind.svg';
import git from '../../../public/git.png';
import jira from '../../../public/jira.svg';
import nodejs from '../../../public/nodejs.png';
import mongodb from '../../../public/mongodb.svg';
import english from '../../../public/uk.svg';
import macedonian from '../../../public/macedonia.svg';
import albanian from '../../../public/albania.svg';
import teamwork from '../../../public/teamwork.svg';
import workethic from '../../../public/workethic.svg';
import creative from '../../../public/creative.svg';

import FramerWrapper from "@/components/animation/FramerWrapper";

const skillPage = () => {
  const language = [
    { alt: "html", img: html },
    { alt: "css", img: css },
    { alt: "js", img: js },
    { alt: "ts", img: ts },
    { alt: "cplus", img: cplus },
  ];
  
  const framework = [
    { alt: "react", img: react },
    { alt: "nextjs", img: nextjs },
    { alt: "nodejs", img: nodejs },
    { alt: "mongodb", img: mongodb },
    { alt: "strapi", img: strapi },
    { alt: "tailwind", img: tailwind },
    { alt: "git", img: git },
    { alt: "jira", img: jira },
    { alt: "figma", img: figma },
  ];

  const softSkills = [
    { alt: "teamwork", img: teamwork, caption: "Teamwork" },
    { alt: "workethic", img: workethic, caption: "Work Ethic" },
    { alt: "creative", img: creative, caption: "Creativity" },
  ];  

    const languages = [
    { alt: "english", img: english },
    { alt: "macedonian", img: macedonian },
    { alt: "albanian", img: albanian },
  ];

  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
            Currently I am a junior and I have a solid understanding of HTML5, CSS3, Tailwind, Strapi, JS, TS, React, and Next.js, including
            creating reusable components, teamwork, and creating responsive design principles. I specialize in building web
            applications and sites using JavaScript, TypeScript, React, and Next.js.
          </p>
        </FramerWrapper>
        
        <FramerWrapper y={100} delay={0.30} className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Programming Languages
          </h1>
          <div className="w-full h-fit grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <SkillsFooter items={language} />
          </div>
        </FramerWrapper>
        
        <FramerWrapper className="block" y={100} delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Tech Stack & Tools
          </h1>
          <div className="w-full h-fit grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <SkillsFooter items={framework} />
          </div>
        </FramerWrapper>

        <FramerWrapper className="block" y={100} delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Soft Skills
          </h1>
          <div className="w-full h-fit grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <SkillsFooter items={softSkills} />
          </div>
        </FramerWrapper>


        <FramerWrapper className="block" y={100} delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Languages
          </h1>
          <div className="w-full h-fit grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <SkillsFooter items={languages} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default skillPage;
