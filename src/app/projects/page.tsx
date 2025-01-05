import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "SMZH",
      description:
        `Official website for SMZH Company`,
      tags: ["NextJs", "Strapi", "CSS", "Tailwind"],
      link:'https://www.smzh.ch/de',
      status:'Published ✅'
    },
    {
      title: "Streetstylex - E-commerce website for buying or selling used/new clothes",
      description:
        `Streetstylex is an ecommerce website where customers can buy used products graded from A to F for
        their quality and condition.`,
      tags: ["React", "Mongodb", "CSS", "Node.js"],
      link:'https://github.com/Streetstylex/streetstylex',
      status:'In Progress 🟡'
    },
   
    {
      title: "Petx",
      description:
        `Website for buying/selling and offering services related to animals/pets. Breeds can sell verified
        animal species, pet shops can sell their products and vets can offer their services. `,
      tags: ["React", "Javascript", "CSS", "Mongodb"],
      link:'https://github.com/stefangjj/petX',
      status:'Done ✅'
    },
    {
      title: "BoKompani",
      description:
        "Static responsive website for a welder company.",
      tags: ["React", "CSS", "Javascript"],
      link:'https://bokompani.netlify.app/',
      status:'Published ✅'
    },
    {
      title: "Weather Moods",
      description:
        "Three js project where 3D objects are imported and user can change weathers and animations are applied based on the weather(rain, sun, clouds).",
      tags: ["Three.js", "Javascript", "HTML5"],
      link:'https://github.com/stefangjj/weather-moods',
      status:'Done ✅'
    },
    {
      title: "Acko KV Transport",
      description:
        "Website for transport company where people can book their trips from the given events.",
      tags: ["React", "Mongodb", "Node.js","CSS"],
      link:'https://github.com/stefangjj/KV-Transport',
      status:'In Progress 🟡'
    }
    

  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
