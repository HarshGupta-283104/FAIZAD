import { Cat2, GuidlinesStack, HatypoMobileWhite, HatypoPc, HatypoPc2, HoldPhone, Homical, HomicalLogo, Iphone1, Iphone2, Iphone2_2, OurServicePc, PcChair, VenAI } from "./Utills";
export const navItem = [ "works", "about", "Studio", "insight", "contact"];
export const MarqueeData = ['Featured Works', '©2024-2025'];

export const CardMarqueeData = [
    {
        id: 0,
        Heading: "hatypo Studio",
        Description: "The official website of Hatypo Studio embodies the essence of a design-driven approach, blending bold typography, dynamic layouts, and seamless interactivity. Designed to captivate and engage, the homepage serves as a gateway to the studio’s expertise in branding, UI/UX, and motion design.",
        linkText: "View Case Study",
        RightImage: [HatypoPc2, HatypoMobileWhite],
        BottomImage : [OurServicePc, PcChair, HatypoPc, HoldPhone],
    },
    {
        id: 1,
        Heading: "VENAI - chatbot ai",
        Description: "VenAI is a next-generation AI messaging app designed to revolutionize digital communication with intelligent, seamless, and adaptive interactions. This project showcases the complete visual identity and UI/UX design, combining futuristic aesthetics with user-friendly functionality. Every design choice reflects the synergy between technology and human connection, ensuring an intuitive and immersive messaging experience.",
        linkText: "View Case Study",
        RightImage: [GuidlinesStack, VenAI],
        BottomImage : [Iphone2, Iphone1, Iphone2_2, Iphone1],
    },
    {
        id: 2,
        Heading: "Homical real estate",
        Description: "Homical is a modern real estate brand built on trust, elegance, and innovation. Its visual identity combines clean typography, a balanced color palette, and a minimalist design to create a professional yet welcoming feel. The logo symbolizes stability and reliability, while the overall aesthetic ensures a strong, recognizable presence.Designed for both digital and print, Homical’s branding maintains clarity and consistency, making real estate more accessible and aspirational. Every detail reflects a commitment to quality and a fresh approach to property experiences.",
        linkText: "View Case Study",
        RightImage: [HomicalLogo, Homical ],
        BottomImage : [, Iphone1, Iphone2_2, Iphone1],
    }
];