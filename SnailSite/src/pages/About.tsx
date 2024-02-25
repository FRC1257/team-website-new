"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { SparklesCore } from "../components/ui/sparkles";
import { TracingBeam } from "../components/ui/tracing-beam";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { HeroParallax } from "../components/ui/hero-parallax";

import image2023 from "../components/images/robots/2023_bot.jpg";
import image2022 from "../components/images/robots/2022.jpg";
import image2020 from "../components/images/robots/2020_robot.jpg";
import image2019 from "../components/images/robots/2019_shooting_shark.jpg";
import image2018 from "../components/images/robots/2018_bad_horse.jpg";
import image2017 from "../components/images/robots/2017_robot.jpg";
import image2016 from "../components/images/robots/2016_wall.jpg";
import image2015 from "../components/images/robots/2015_stacking.jpg";

export const robots = [
  /* {
    title: "2004 Robot",
    link: "https://www.thebluealliance.com/team/1257/2004",
    thumbnail:
      "images/robots/2004_robot.jpg",
  },
  {
    title: "2011 Robot",
    link: "https://www.thebluealliance.com/team/1257/2011",
    thumbnail:
      "images/robots/2011_robot.jpg",
  },
  {
    title: "2012 Robot",
    link: "https://www.thebluealliance.com/team/1257/2012",
    thumbnail:
      "images/robots/2012_bot.jpg",
  }, *//* 
  {
    title: "2013 Robot",
    link: "https://www.thebluealliance.com/team/1257/2013",
    thumbnail:
      image2013
  },
  {
    title: "2014 Robot",
    link: "https://www.thebluealliance.com/team/1257/2014",
    thumbnail:
      image2014
  }, */
  {
    title: "2015 Robot",
    link: "https://www.thebluealliance.com/team/1257/2015",
    thumbnail:
      image2015
  },
  {
    title: "2016 Robot",
    link: "https://www.thebluealliance.com/team/1257/2016",
    thumbnail:
      image2016
  },
  {
    title: "2017 Robot",
    link: "https://www.thebluealliance.com/team/1257/2017",
    thumbnail:
      image2017
  },
  {
    title: "2018 Robot",
    link: "https://www.thebluealliance.com/team/1257/2018",
    thumbnail:
      image2018
  },
  {
    title: "2019 Robot",
    link: "https://www.thebluealliance.com/team/1257/2019",
    thumbnail:
      image2019
  },
  {
    title: "2020 Robot",
    link: "https://www.thebluealliance.com/team/1257/2020",
    thumbnail:
      image2020
  },
  {
    title: "2022 Robot",
    link: "https://www.thebluealliance.com/team/1257/2022",
    thumbnail:
      image2022
  },
  {
    title: "2023 Robot",
    link: "https://www.thebluealliance.com/team/1257/2023",
    thumbnail:
      image2023
  },
];


function About() {
  return (
    <><div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF" />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Enter our Universe ...
      </h1>
    </div>
    <TracingBeam className="bg-black">
    <div className="max-w-2xl mx-auto antialiased pt-4 relative bg-black">
      <div key={`content-0`} className="mb-10">

        <p className={twMerge("text-xl mb-4")}>
          Founded in 2006
        </p>

        <div className="text-sm  prose prose-sm dark:prose-invert">
          <Image
            src={image2023}
            alt="blog thumbnail"
            height="1000"
            width="1000"
            className="rounded-lg mb-10 object-cover"
          />
          
          We love FIRST.
        </div>
      </div>
      <TextGenerateEffect words="My brother what the heck is going on. I love robots and robotics. My name is Turbo the snail nice to meet you" />
      <HeroParallax products={robots}/>
    </div>
    </TracingBeam>
    </>
  );
}

export default About;
