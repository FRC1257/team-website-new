import image2023 from "./images/robots/2023_bot.jpg";
import image2022 from "./images/robots/2022.jpg";
import image2020 from "./images/robots/2020_robot.jpg";
import image2019 from "./images/robots/2019_shooting_shark.jpg";
import image2018 from "./images/robots/2018_bad_horse.jpg";
import image2017 from "./images/robots/2017_robot.jpg";
import image2016 from "./images/robots/2016_wall.jpg";
import image2015 from "./images/robots/2015_stacking.jpg";


export const images: string[] = [
  image2023,
  image2022,
  image2020,
  image2019,
  image2018,
  image2017,
  image2016,
  image2015,
];
export const carouselLen: number = images.length;

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
