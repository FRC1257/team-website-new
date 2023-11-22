import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ImageThingy = ({link}: {link: string}) => {
    return (
        <div>
            <img src={link} alt={link} 
                /* make the height and width smaller */
            />
            <p>{link}</p>
        </div>
    );
}

const Home = () => {
    const images = ['2016_bot.JPG', '2011_robot.jpg', '2012_bot.jpg', '2023_bot.JPG'];

    return (
        <div>
        <h1>Home</h1>
        <Carousel /* https://www.npmjs.com/package/react-responsive-carousel */
            dynamicHeight={false}
            width={"50%"}
            centerMode={true}
            autoPlay={true}
        >
            {/* Add a carousel with all the images in the public/img/robots folder */}
            {images.map((image, index) => (
            <ImageThingy key={index} link={process.env.PUBLIC_URL + "/img/robots/" + image} />
            ))}
        </Carousel>
        </div>
    );
};

export default Home;