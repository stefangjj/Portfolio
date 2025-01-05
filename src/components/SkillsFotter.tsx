import Image from "next/image";
import React from "react";

interface MyComponentProps {
  items: Array<{ alt: string; img: any; caption?: string }>;
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <>
      {items.map((val, indx) => (
        <div className="p-4 flex flex-col items-center" key={indx}>
          <Image
            src={val.img}
            alt={val.alt}
            className="rounded-full w-auto max-h-20"
            width={80}
            height={80}
          />
          {val.caption && (
            <p className="mt-2 text-sm uppercase font-bold text-center text-gray-500">
              {val.caption}
            </p>
          )}
        </div>
      ))}
    </>
  );
};

export default SkillsFooter;
