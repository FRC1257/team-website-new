export interface AwardProps {
  year: number; comp: string; award: string
}

export type AwardPropsList = AwardProps[];

const awards = [
  { year: 2024, comp: "FMA Seneca Event", award: "Winner" }, 
  { year: 2024, comp: "FMA Seneca Event", award: "Engineering Inspiration Award" },
  { year: 2023, comp: "FMA Montgomery Event", award: "Finalist" },
  { year: 2023, comp: "FMA Montgomery Event", award: "Autonomous Award sponsored by Ford" },
  { year: 2023, comp: "FMA Robbinsville Event", award: "Gracious Professionalism Award" },
  { year: 2022, comp: "FMA Mount Olive Event", award: "Semifinalist" },
  { year: 2022, comp: "FMA Bridgewater-Raritan Event", award: "Imagery Award in Honor of Jack Kamen" },
  { year: 2019, comp: "FMA Championship", award: "Gracious Professionalism Award sponsored by Johnson & Johnson" },
  { year: 2019, comp: "FMA District Bridgewater-Raritan Event", award: "Gracious Professionalism Award sponsored by Johnson & Johnson" },
  { year: 2019, comp: "FMA District Mount Olive Event", award: "Gracious Professionalism Award sponsored by Johnson & Johnson" },
  { year: 2018, comp: "MAR District Hatboro-Horsham Event", award: "Gracious Professionalism Award sponsored by Johnson & Johnson" },
  { year: 2017, comp: "Brunswick Eruption", award: "Winner" },
  { year: 2017, comp: "MAR District Bridgewater-Raritan Event", award: "Entrepreneurship Award sponsored by Kleiner Perkins Caufield and Byers" },
  { year: 2017, comp: "MAR District Hatboro-Horsham Event", award: "Excellence in Engineering Sponsored By Delphi" },
  { year: 2016, comp: "FRC World Championship - Archimedes", award: "Semifinalist" },
  { year: 2016, comp: "MAR District Championship", award: "Winner" },
  { year: 2016, comp: "MAR District Bridgewater-Raritan Event", award: "Finalist & 1st Seed Alliance Captain" },
  { year: 2016, comp: "MAR District Bridgewater-Raritan Event", award: "Gracious Professionalism Award" },
  { year: 2016, comp: "MAR District Mount Olive Event", award: "Winner & Alliance Captain" },
  { year: 2015, comp: "MAR District Mount Olive Event", award: "Industrial Safety Award sponsored by Underwriters Labratories" },
  { year: 2015, comp: "MAR District North Brunswick Event", award: "Finalist" },
  { year: 2015, comp: "MAR District North Brunswick Event", award: "Industrial Safety Award sponsored by Underwriters Labratories" },
  { year: 2015, comp: "MAR District North Brunswick Event", award: "Team Spirit Award sponsored by Chrysler" },
  { year: 2014, comp: "MAR District Clifton Event", award: "Winner" },
  { year: 2013, comp: "TCNJ FIRST Robotics District Competition", award: "Industrial Safety Award sponsored by Underwriters Labratories" },
  { year: 2010, comp: "New Jersey Regional", award: "Industrial Safety Award sponsored by Underwriters Labratories" },
  { year: 2005, comp: "Chesapeake Regional", award: "Engineering Inspiration Award" },
  { year: 2005, comp: "New York City Regional", award: "Autodesk Visualization Award" },
  { year: 2005, comp: "New York City Regional", award: "Xerox Creativity Award" },
  { year: 2004, comp: "Chesapeake Regional", award: "Rookie Inspiration Award" },

  {
    year: 2004, comp: "New Jersey Regional", award: "DaimlerChrysler Team Spirit Award"
  }]

export default awards
