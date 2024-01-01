import image1 from "./images/robots/2020_robot.jpg";
import image2 from "./images/robots/2019_shooting_shark.jpg";
import image3 from "./images/robots/2018_bad_horse.jpg";
import image4 from "./images/robots/2017_robot.jpg";
import image5 from "./images/robots/2016_wall.jpg";
import image6 from "./images/robots/2015_stacking.jpg";
import image7 from "./images/robots/2013_hanging.jpg";

export const images: string[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
];
export const carouselLen: number = images.length;

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
