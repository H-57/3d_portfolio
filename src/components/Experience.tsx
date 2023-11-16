"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Image, { StaticImageData } from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef ,useState} from "react";
import { once } from "events";
interface Card {
  title: string;
  company: string;
  icon: StaticImageData;
  points: string[];
  date:string;
}

function CardDetail({ icon, title, points, company,date }: Card) {
  const ref = useRef(null);
  const IsInView = useInView(ref);
  const animator = useAnimation();
  const IconAnimator = useAnimation();
  

  useEffect(() => {
    if (IsInView) {
      // console.log("in view");
      animator.start("visible");
      IconAnimator.start("show")
    } else {
      // console.log("not");
      animator.set("hidden");
      IconAnimator.set("hide")
    }
  }, [IsInView]);
  return (
    <>
      <VerticalTimelineElement
        className=""
        contentStyle={{
          background: "#1d1836",
          color: "white",
          visibility: "visible",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={date}
        iconStyle={{ background: "white", visibility: "visible" }}
        icon={
          <motion.div
          variants={{show:{opacity:1,scale:1 },hide:{ opacity: 0, scale:1.5}}}
            initial={"hide"}
            transition={{ duration: 0.7, delay: 1.2 }}
            animate={IconAnimator}
          >
            <Image src={icon} width={200} height={200} alt="icon" />
          </motion.div>
        }
      >
        {" "}
        <motion.div
          ref={ref}
          variants={{
            hidden: {
              x: -200,
              opacity: 0,
              
            },
            visible: { x: 0, opacity: 1 },
          }}
          initial={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          animate={animator}
        >
          <h2 className="sm:!text-2xl md:!text-5xl !text-white capitalize font-semibold">{title}</h2>
          <h3 className="text-2xl uppercase">{company}</h3>
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
  const [experiences, setExperiences] = useState<Card[]>([]);
  useEffect(()=>{
    fetch("/api/experience").then(res=>res.json()).then(data=>{
      
      setExperiences(data)
    }).catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <>
      <VerticalTimeline>
        {experiences.map((elm, index) => (
          <CardDetail
            key={index}
            title={elm.title}
            company={elm.company}
            icon={elm.icon}
            points={elm.points}
            date={elm.date}
          />
        ))}
      </VerticalTimeline>
    </>
  );
};

export default Experience;
