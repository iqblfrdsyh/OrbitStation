import { FaSatellite, FaRocket, FaGlobe, FaUsers, FaSpaceShuttle } from "react-icons/fa";

interface TimelineEvent {
    id: number;
    title: string;
    date: string;
    description: string;
    icon: any;
}

const timelineData: TimelineEvent[] = [
    {
        id: 1,
        title: "Launch of the First ISS Module",
        date: "November 20, 1998",
        description:
            "The first module, Zarya, was launched into orbit, marking the start of the ISS assembly.",
        icon: FaRocket,
    },
    {
        id: 2,
        title: "Arrival of Unity Module",
        date: "December 4, 1998",
        description:
            "The Unity module, the first U.S. component of the ISS, was launched aboard Space Shuttle Endeavour.",
        icon: FaSpaceShuttle,
    },
    {
        id: 3,
        title: "First Crew Arrival",
        date: "November 2, 2000",
        description:
            "Expedition 1, the first long-term crew, arrived on the ISS, beginning continuous human presence in orbit.",
        icon: FaUsers,
    },
    {
        id: 4,
        title: "Completion of U.S. Destiny Laboratory",
        date: "February 7, 2001",
        description:
            "The Destiny Laboratory Module, an advanced research lab, was installed on the ISS.",
        icon: FaSatellite,
    },
    {
        id: 5,
        title: "Completion of European Columbus Module",
        date: "February 2008",
        description:
            "The European Space Agency's Columbus laboratory was added, expanding scientific capabilities.",
        icon: FaGlobe,
    },
    {
        id: 6,
        title: "Completion of U.S. Segment",
        date: "2011",
        description:
            "The U.S. segment of the ISS was completed with the installation of the Tranquility module and Cupola.",
        icon: FaSatellite,
    },
    {
        id: 7,
        title: "First Commercial Resupply Mission",
        date: "October 8, 2012",
        description:
            "SpaceX's Dragon became the first commercial spacecraft to deliver cargo to the ISS.",
        icon: FaRocket,
    },
    {
        id: 8,
        title: "First Commercial Crew Mission",
        date: "May 30, 2020",
        description:
            "SpaceX Crew Dragon Demo-2 launched the first astronauts on a commercial spacecraft to the ISS.",
        icon: FaRocket,
    },
    {
        id: 9,
        title: "ISS 20th Anniversary",
        date: "November 2, 2020",
        description:
            "The ISS celebrated 20 years of continuous human presence in space.",
        icon: FaGlobe,
    },
    {
        id: 10,
        title: "Axiom Mission 1",
        date: "April 8, 2022",
        description:
            "The first all-private astronaut mission to the ISS, launched by SpaceX, marked a milestone in commercial spaceflight.",
        icon: FaRocket,
    },
    {
        id: 11,
        title: "Current Operation and Research",
        date: "Present Day",
        description:
            "The ISS continues to serve as a platform for international collaboration and advanced scientific research.",
        icon: FaGlobe,
    },
];

export { timelineData };
