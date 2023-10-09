"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "./constant";
import Image, { StaticImageData } from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { once } from "events";
interface Card {
  projectName: string;
  company: string;
  icon: StaticImageData;
  points: string[];
}

function CardDetail({ icon, projectName, points, company }: Card) {
  const ref = useRef(null);
  const IsInView = useInView(ref);
  const animator=useAnimation()
  useEffect(() => {
    animator.start({x:0,opacity:1})
    if (IsInView) {
      console.log("in view");
      animator.start("visible")
    } else {
      console.log("not");
      // animator.start({x:-400,opacity:0})
    }
  }, [IsInView]);
  return (
    <>
      <VerticalTimelineElement
        className=""
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
          visibility: "visible",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date="2011 - present"
        iconStyle={{ background: "white", visibility: "visible" }}
        icon={<Image src={icon} width={200} height={200} alt="icon" />}
      >
        {" "}
        <motion.div
          ref={ref}
          variants={{hidden:{x:-200,opacity:0},
          visible:{x:0,opacity:1}
        }}
          initial={{ opacity: 0, x: -300 }}
          // animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="vertical-timeline-element-title">{projectName}</h2>
          <h3 className="vertical-timeline-element-subtitle">{company}</h3>
          <ul className=" list-disc flex my-7 flex-col">
            {points.map((point, index) => (
              <li className="" key={index}>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </VerticalTimelineElement>
    </>
  );
}

const Experience: React.FunctionComponent = () => {
  return (
    <>
      <VerticalTimeline>
        {experiences.map((elm, index) => (
          <CardDetail
            key={index}
            projectName={elm.projectName}
            company={elm.company}
            icon={elm.icon}
            points={elm.points}
          />
        ))}
      </VerticalTimeline>
    </>
  );
};

export default Experience;
