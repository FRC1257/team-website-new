import image1 from "../assets/imgGallery/DSC_8289-min.jpeg";
import image2 from "../assets/imgGallery/IMG_6706-min.jpeg";
import image3 from "../assets/imgGallery/IMG_6231-min.jpeg";
import image4 from "../assets/imgGallery/IMG_1318-min.jpeg";
import image5 from "../assets/imgGallery/IMG_6605-min.jpeg";
import image6 from "../assets/imgGallery/IMG_6463-min.jpeg";
import image7 from "../assets/imgGallery/DSC_8301-min.jpeg";

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
