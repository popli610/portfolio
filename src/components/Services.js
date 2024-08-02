import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNode,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiPostgresql, SiTypescript } from "react-icons/si";

import { Link } from "react-scroll";

import { useCursor } from "./CursorContext";

const services = [
  {
    name: "Technical Expertise",
    icons: [
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <FaNode />, name: "Node.js" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <FaJava />, name: "Java" },
      { icon: <FaAws />, name: "AWS" },
      // { icon: <FaDocker />, name: "Docker" },
      // { icon: <SiPostgresql />, name: "PostgreSQL" },
    ],
  },
  // {
  //   name: "Professional Experience",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam autem iusto neque accusamus, delectus laborum voluptatem asperiores numquam ratione molestias cumque vero possimus nisi ab amet consequatur minus dolorum in!",
  // },
  // {
  //   name: "Achievements",
  //   description: "Solved 500+ DSA problems.",
  // },
];

const Services = () => {
  const { leave, buttonEnter } = useCursor();
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text  */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Full-stack developer who loves building things that live on the
              internet.
            </h3>
            <Link
              to="work"
              onMouseEnter={buttonEnter}
              onMouseLeave={leave}
              activeClass="active"
              smooth={true}
              spy={true}
            >
              <button className="btn btn-sm">See My Work</button>
            </Link>
          </motion.div>
          {/* services  */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list  */}
            {services.map((service, index) => {
              const { name, icons } = service;
              return (
                <div key={index} className="mb-12">
                  <h1 className="tracking-wider font-primary font-semibold mb-6">
                    {name}
                  </h1>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 text-5xl">
                    {icons.map((item, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center border-2 border-purple-500 p-4 rounded-lg"
                      >
                        {item.icon}
                        <span className="text-sm mt-2">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
