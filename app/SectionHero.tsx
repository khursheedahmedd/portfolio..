"use client";

import { assets } from "@/constant/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MotionProps, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import TypedText from "@/components/TypesText";

interface IAnimateImageProps extends MotionProps {
  className: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

const AnimatedImage = motion(Image);

export default function SectionHero(): JSX.Element {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const router = useRouter();

  const animatedImages: IAnimateImageProps[] = [
    {
      className:
        "w-[140px] h-auto lg:w-[180px] lg:h-[120px] absolute top-3 -left-16 z-[1]",
      src: assets.home.hero.zigZag,
      width: 180,
      height: 120,
      alt: "",
      initial: { opacity: 0, x: -100 },
      animate: inView ? { opacity: 1, x: 0 } : {},
      transition: { delay: 0.4, duration: 0.8 },
    },
    {
      className:
        "w-[110px] h-auto lg:w-[150px] lg:h-[140px] absolute top-6 -right-12 z-[1]",
      src: assets.home.hero.twistedTorus,
      width: 150,
      height: 140,
      alt: "",
      initial: { opacity: 0, x: 100 },
      animate: inView ? { opacity: 1, x: 0 } : {},
      transition: { delay: 0.6, duration: 0.8 },
    },
    {
      className:
        "w-[130px] h-auto lg:w-[170px] lg:h-[170px] absolute bottom-6 -left-14 z-[1]",
      src: assets.home.hero.quadrilateral,
      width: 170,
      height: 170,
      alt: "",
      initial: { opacity: 0, x: -100 },
      animate: inView ? { opacity: 1, x: 0 } : {},
      transition: { delay: 0.8, duration: 0.8 },
    },
    {
      className:
        "w-[192px] h-auto lg:w-[242px] lg:h-[202px] absolute bottom-8 -right-24 z-[1]",
      src: assets.home.hero.triangle,
      width: 242,
      height: 202,
      alt: "",
      initial: { opacity: 0, x: 100 },
      animate: inView ? { opacity: 1, x: 0 } : {},
      transition: { delay: 1, duration: 0.8 },
    },
  ];

  // Typing animation text state
  const titles = [
    "Full Stack Web Developer",
    "Generative AI Engineer",
    "Machine Learning Engineer",
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  // Typing effect logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      ref={ref}
      className="safe-x-padding mt-10 mb-[172px]"
      aria-label="Hero Section"
    >
      <div className="grid grid-flow-row gap-10 xl:grid-cols-2 xl:grid-flow-col xl:gap-0">
        {/* first */}
        <div className="flex flex-col items-center justify-center order-2 xl:items-start xl:order-1">
          <motion.h2
            className="font-montserrat mb-6 font-extrabold text-xl md:text-[44px] md:leading-[56px] lg:text-[46px] lg:leading-[88px] gradient-text  text-center xl:text-left"
            aria-label="Typing Animation for Developer Roles"
          >
            Hi There!<br></br>I&apos;m Khursheed Ahmed
          </motion.h2>
          <motion.p
            className="font-montserrat font-bold text-xl md:text-[28px] lg:text-[32px] text-accent mb-3 text-center xl:text-left"
            aria-label="Welcome to Khursheed's Portfolio"
          >
            A&nbsp;
            <TypedText /> {/* Render the typing effect */}
          </motion.p>
          {/* <motion.p
            className="text-base font-medium text-center md:text-xl lg:text-2xl text-accent xl:text-left"
            aria-label="I'm Khursheed Ahmed. A passionate Full Stack Web Developer and Generative AI Engineer."
          >
            I&apos;m Khursheed Ahmed. A passionate Full Stack Web Developer and
            Generative AI Engineer.
          </motion.p> */}

          {/* Work with Me Button */}
          <motion.button
            className="mt-6 px-6 py-2 text-white gradient-btn rounded-xl"
            onClick={() => router.push("/contact")}
          >
            Work With Me
          </motion.button>
        </div>

        {/* second */}
        <div className="xl:order-2">
          <div className="relative flex items-center justify-center order-1 xl:justify-end">
            <div className="relative">
              <motion.div className="relative w-[280px] h-[280px] md:w-[330px] md:h-[330px] lg:w-[480px] lg:h-[480px] bg-gray rounded-3xl overflow-clip">
                <AnimatedImage
                  className="w-[280px] h-[280px] md:w-[330px] md:h-[330px] lg:w-[480px] lg:h-[480px] absolute top-0 bottom-0 left-0 right-0"
                  src={assets.home.hero.avatarSmile}
                  width={480}
                  height={480}
                  alt=""
                  priority
                  initial={{ opacity: 0.5, y: 500 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 1 }}
                  aria-label="Khursheed's Avatar"
                />
              </motion.div>
              {animatedImages.map(
                (
                  {
                    className,
                    src,
                    width,
                    height,
                    alt,
                    initial,
                    animate,
                    transition,
                  },
                  index
                ) => (
                  <AnimatedImage
                    key={index}
                    className={className}
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                    initial={initial}
                    animate={animate}
                    transition={transition}
                    aria-hidden={!inView}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
