import sponsorimg from "../../components/images/outreach/sponsor.png";

const body: string =
  "Our team is community funded, meaning that we do not receive any financial support from our school and that nearly all our funds come from local sponsoring businesses. Since we are a county robotics team, we have members from many different towns. This diversity is reflected by our team being sponsored from local companies from 21 different towns. We engage with our sponsor by inviting them to tour our Makerspace to learn about our robot and team and by sending weekly newsletters to our sponsors. This year, our team introduced a new fundraising initiative. Our operations subteam trains all team members with how to fundraise and equips everyone with sponsor and promotional materials, including brochures, email templates, posters, and more. Each team member is required to fundraise 200 dollars from local businesses. The result was incredible: we raised nearly $20,000 all from our local community. Our community is investing in our team mission, and we return the favor by spreading STEM in our school and surrounding towns. We give directly back to our community by running technology classes, robotics summer camp, inviting scout troops, hosting the Hydrogen Car Challenge, and more. As our team grows, we aim to continue fostering close ties and giving back to the community that sustains us. Here is part of the flyer our members use to outreach to local businesses!";

const LocalSponsors = () => {
  return (
    <div>
      <div className="p-24 bg-gradient-to-r from-blue-500 to-fuchsia-800">
        <h1 className="text-center text-white lg:text-5xl text-3xl font-bold mb-8">
          Local Sponsors
        </h1>
      </div>
      <div className="lg:p-24 p-12 bg-background">
        <div className="flex flex-col max-w-[96rem] mx-auto gap-10">
          <p className="text-xl flex flex-wrap leading-relaxed text-white">
            {body}
          </p>
          <img
            // srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
            src={sponsorimg}
            alt={"stuff"}
            loading="lazy"
            className="block w-auto h-[600px] mx-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LocalSponsors;
