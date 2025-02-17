import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            September 2021 - 2024
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Bachelor of Computer Science, <br /> SEEU University Tetovo
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I am currently pursuing a Bachelor’s degree in Computer Science
              and Technology at SEEU University. This program has given me a
              comprehensive education, blending a solid theoretical background
              with hands-on experience in various aspects of computer science
              and technology.
            </p>
          </FramerWrapper>
        </div>
      </div>
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Courses
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Courses</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">

          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 gap-3"
          >
            <ul className="flex flex-col p-4 ml-2 gap-4 list-disc">
              <li className="text-2xl font-normal max-sm:text-xl">
              React - The Complete Guide 2023 (incl. React Router & <br />
                Redux) , Udemy
              </li>
              <li className="text-2xl font-normal max-sm:text-xl">
              Complete Web & Mobile Designer in 2023: UI/UX, Figma, <br />
              Udemy
              </li>
              <li className="text-2xl font-normal max-sm:text-xl">
              Complete DApp - Solidity & React - Blockchain Development, <br />
              Udemy
              </li>
            </ul>

          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
