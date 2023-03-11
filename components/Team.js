import React from "react";
import {motion} from "framer-motion";
import TeamCard from "./TeamCard";
import { textSlideVariant } from "../variants/textVariants";

function Team() {
  return (
    <>
      <motion.h3
        className="heading"
        variants={textSlideVariant}
        initial="hidden"
        whileInView="visible"
      >
        فريق المنصة
      </motion.h3>
      <section className="bg-primary text-center min-h-[200px] py-5">
        <main className="container team">
          <TeamCard
            name="علي سامح"
            job="مبرمج واجهات أمامية"
            img="/images/ali.jpg"
          />
          <TeamCard
            name="علي سامح"
            job="محسن محركات البحث"
            img="/images/ali.jpg"
          />
          <TeamCard name="علي سامح" job="مصمم مواقع" img="/images/ali.jpg" />
          <TeamCard
            name="عمر خالد"
            job="مبرمج واجهات خلفية"
            img="/images/omar.jpg"
          />
        </main>
      </section>
    </>
  );
}

export default React.memo(Team);
