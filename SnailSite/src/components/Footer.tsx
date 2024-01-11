import { Map } from "@emotion-icons/boxicons-regular/Map";
import { School } from "@emotion-icons/ionicons-outline/School";
import { Telephone } from "@emotion-icons/bootstrap/Telephone";
import { EmailOutline } from "@emotion-icons/evaicons-outline/EmailOutline";
import { Instagram } from "@emotion-icons/boxicons-logos/Instagram";
import { Youtube } from "@emotion-icons/boxicons-logos/Youtube";
import { Github } from "@emotion-icons/boxicons-logos/Github";

const Footer = () => {
  return (
    <div className="bg-gray-700 flex py-10 px-32">
      <div className="grid grid-cols-3 justify-between w-full">
        <div className="flex flex-col my-auto text-white">
          <h1 className="text-3xl font-semibold">Parallel Universe</h1>
          <p>FRC Team 1257</p>
        </div>
        <img
          className="object-contain h-40 w-40 bg-black rounded-full justify-self-center"
          src={"/pics/logos/biggerWhite.png"}
          alt="2023_bot.JPG"
        />
        <div className="text-white flex flex-col justify-center justify-self-end">
          <div className="flex flex-row items-center gap-2">
            <School size={16} />
            <p>Union County Magnet High School</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Map size={16} />
            <p>1776 Raritan Rd, Scotch Plains, NJ 07076</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Telephone size={16} />
            <p>908-889-8288 x255</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <EmailOutline size={16} />
            <p>mcook@ucvts.org</p>
          </div>
          <div className="flex flex-row items-center mt-2 gap-2">
            <div className="rounded-full bg-black p-1">
              <Instagram size={32} />
            </div>
            <div className="rounded-full bg-black p-1">
              <Youtube size={32} />
            </div>
            <div className="rounded-full bg-black p-1">
              <Github size={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
