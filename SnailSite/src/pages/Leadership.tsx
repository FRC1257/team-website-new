// TODO: fix this spaghetti

import React, { useEffect, useState } from "react";

interface Leader {
  name: string;
  role: string;
  school: string;
  grade: string;
  email: string;
}

const Leadership: React.FC = () => {
  const [leadershipData, setLeadershipData] = useState<Leader[]>([]);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/leadership.json");
        const data = await response.json();
        setLeadershipData(data);
      } catch (error) {
        console.error("Error fetching leadership data:", error);
      }
    };

    fetchData();
  }, []);

  const getColorClass = (role: string): string => {
    // if (role.toLowerCase().includes('president')) {
    //     return 'bg-gradient-to-b from-green-200 to-green-300';
    // } else if (role.toLowerCase().includes('manager')) {
    //     return 'bg-gradient-to-b from-green-200 to-green-300';
    // } else if (role.toLowerCase().includes('liaison')) {
    //     return 'bg-gradient-to-b from-green-200 to-green-300';
    // } else if (role.toLowerCase().includes('director')) {
    //     return 'bg-gradient-to-b from-purple-300 to-purple-500';
    // } else {
    //     return 'bg-gray-200'; // Default color if none of the conditions are met
    // }
    if (role) {
      return "bg-gradient-to-b from-purple-300 to-purple-500";
    }
    return "bg-gradient-to-b from-purple-300 to-purple-500";
  };

  const handleCardClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="text-center pr-10 pl-10 pt-3 pb-10 bg-background">
      <h1 className="lg:text-5xl text-3xl font-bold mb-4 text-white">
        Student Leadership
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {leadershipData.map((leader) => (
          <div
            key={leader.name}
            className={`p-4 border border-gray-300 rounded transition-transform transform ${
              hoveredCard === leader.name ? "scale-105" : "scale-100"
            } ${getColorClass(leader.role)}`}
            onMouseEnter={() => setHoveredCard(leader.name)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(leader.email)}
            style={{ cursor: "pointer" }}
          >
            <strong>{leader.name}</strong>
            <br />
            <span className="text-sm text-gray-600">{leader.role}</span>
            <br />
            <span className="text-xs">
              {leader.school}, Grade {leader.grade}
            </span>
          </div>
        ))}
      </div>

      <h1 className="text-5xl font-bold mt-8 mb-4 text-white">Advisors</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div
          key="Mrs. Cook"
          className={`p-4 border border-gray-300 rounded transition-transform transform ${
            hoveredCard === "Mrs. Cook" ? "scale-105" : "scale-100"
          } ${getColorClass("Advisor")}`}
          onMouseEnter={() => setHoveredCard("Mrs. Cook")}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick("mcook@ucvts.org")}
          style={{ cursor: "pointer" }}
        >
          <strong>Mrs. Cook</strong>
          <br />
          <span className="text-sm text-gray-600">Advisor</span>
          <br />
          <span className="text-xs">Magnet</span>
        </div>
        <div
          key="Mr. Tollin"
          className={`p-4 border border-gray-300 rounded transition-transform transform ${
            hoveredCard === "Mr. Tollin" ? "scale-105" : "scale-100"
          } ${getColorClass("Advisor")}`}
          onMouseEnter={() => setHoveredCard("Mr. Tollin")}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick("mtollin@ucvts.org")}
          style={{ cursor: "pointer" }}
        >
          <strong>Mr. Tollin</strong>
          <br />
          <span className="text-sm text-gray-600">Advisor</span>
          <br />
          <span className="text-xs">Magnet</span>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
