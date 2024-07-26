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
import { SiNextdotjs } from "react-icons/si";

import { Link } from "react-scroll";

import { useCursor } from "./CursorContext";

const services = [
  {
    name: "Technical Expertise",
    // description: "Lorem",
    icons: [
      <FaJava key="java" />,
      <SiNextdotjs key="nextJs" />,
      <FaJs key="javascript" />,
      <FaHtml5 key="html5" />,
      <FaCss3 key="css3" />,
      <FaReact key="react" />,
      <FaNode key="node" />,
      <FaAws key="aws" />,
      // <FaDocker key="docker" />,
    ],
  },
  // {
  //   name: "Professional Experience",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam autem iusto neque accusamus, delectus laborum voluptatem asperiores numquam ratione molestias cumque vero possimus nisi ab amet consequatur minus dolorum in!",
  // },
  {
    name: "Achievements",
    description: "Solved 500+ DSA problems.",
  },
];

const Services = () => {
  const { textEnter, leave, buttonEnter } = useCursor();
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
            <div>
              {services.map((service, index) => {
                // const { name, description, link } = service;
                const { name, description, icon, icons } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description || (
                          <div className="flex space-x-4 text-5xl">
                            {icons.map((Icon, i) => (
                              <span key={i}>{Icon}</span>
                            ))}
                          </div>
                        )}
                      </p>
                    </div>
                    {/* <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        Learn
                      </a>
                    </div> */}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
