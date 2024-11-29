import { services } from "@/constants";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "@/utils/motion";

function Services() {
  return (<>
    <motion.div
    variants={textVariant()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="text-center mx-auto"
  >
    <p className={"sectionSubText"}>What I have learnt so far</p>
    <h2 className={"sectionHeadText"}>Skills.</h2>
  </motion.div>
    <div className="mt-14 flex flex-wrap gap-10 justify-center">
        

      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  );
}

export default Services;
