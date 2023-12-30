// Get From here https://emotion-icons.dev/
import { DollarSign } from '@emotion-icons/fa-solid/DollarSign';
import { RequestPage } from '@emotion-icons/material/RequestPage';
import { BriefcaseFill } from '@emotion-icons/bootstrap/BriefcaseFill';
import { Link } from '@emotion-icons/boxicons-regular/Link';
import { Feedback } from '@emotion-icons/material/Feedback';
import { Mail } from '@emotion-icons/entypo/Mail';
import { EmailOutline } from '@emotion-icons/evaicons-outline/EmailOutline';
import { Instagram } from '@emotion-icons/boxicons-logos/Instagram';
import { Github } from "@emotion-icons/boxicons-logos/Github";

const LinkButton = (props: { link: string, text: string, iconComponent?: JSX.Element }) => {
    return (
        <div className="max-w-screen-sm mx-auto mb-4 ">
            <a
                href={props.link}
                className="flex items-center text-white bg-[#1cd64e] text-base font-medium py-4 px-4 rounded-md transition-transform transform hover:scale-105 sm:w-full md:w-full lg:w-full xl:w-full"
            >
                {props.iconComponent && (
                    <div className="mr-2 flex items-center">
                        {props.iconComponent}
                    </div>
                )}
                <div className="flex-grow">
                    <p className='text-center text-lg'>{props.text}</p>
                </div>
            </a>
        </div>
    );
}

const LinkTree = () => {
    return (
        <div className='py-3 px-2'>
            <div className="flex justify-center">
                <img className="w-32 relative" src={"/pics/logos/snail_black.png"} />
            </div>
            <div className="flex justify-center">
                {/* Make text like a header */}
                <h1 className='font-bold text-xl'>FRC Team 1257 LinkTree</h1>
            </div>
            <div className="flex justify-center mb-4">
                <h2 className='text-lg'>Resources for Parallel Universe: The UCVTS Robotics Team</h2>
            </div>

            <LinkButton link="https://magnetpsa.membershiptoolkit.com/ucvtsroboticsteam1257" text="Online Monetary Donation" iconComponent={<DollarSign size={35} />} />
            <LinkButton link="https://docs.google.com/document/d/17Fh9EfhPsfM_AIyTdZCUcq2oRNhVmU23-foT9kK2UjE/edit?usp=sharing" text="Donation Requests Letter" iconComponent={< RequestPage size={35} />} />
            <LinkButton link="https://docs.google.com/document/d/1KXl6Iq9SIzSLqnjDFEElFau6DdP6LLuYM7UHdGFDLuM/edit?usp=sharing" text="Corporate Sponsor Letter Request" iconComponent={<BriefcaseFill size={35} />} />
            <LinkButton link="https://sites.google.com/ucvts.org/team-1257-robotics/home" text="Parent/Guardian Resources" iconComponent={<Link size={35} />} />
            <LinkButton link="https://forms.gle/rccdjtiegZnMdVER7" text="Feedback Form" iconComponent={<Feedback size={35} />} />
            <LinkButton link='https://forms.gle/Bh4YFhyS7CT22MwY9' text='Join our Mailing List' iconComponent={<Mail size={35} />} />
            {/* Add more LinkButtons with different icons as needed */}
            {/* Add other socials in a row */}
            <div className="flex justify-center">
                <a href="https://www.instagram.com/frc1257/" className="text-green-400 hover:text-green-800 mr-1">
                    <Instagram size={35} />
                </a>
                <a href="mailto:robotics@ucvts.org" className="text-green-400 hover:text-green-800 mr-1">
                    <EmailOutline size={35} />
                </a>
                <a href="https://www.github.com/FRC1257" className="text-green-400 hover:text-green-800">
                    <Github size={35} />
                </a>
            </div>
        </div>
    );
};

export default LinkTree;
