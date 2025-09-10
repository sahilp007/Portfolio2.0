import {
    angularjs,
    backend,
    coding_ninjas,
    cogitate,
    creator,
    edge,
    figma,
    git,
    graphql,
    guildhub,
    javascript,
    jobit,
    mobile,
    mongodb,
    nextjs,
    nodejs,
    python,
    reactjs,
    redux,
    shopify,
    sinss,
    tailwind,
    threejs,
    tripguide,
    typescript,
    web,
    zestiot,
} from "../assets";

export const navLinks = [{
    id: "about", title: "About",
}, {
    id: "work", title: "Work",
}, {
    id: "contact", title: "Contact",
},];

const services = [{
    title: "FrontEnd Developer", icon: web,
}, {
    title: "FullStack Developer", icon: mobile,
}, {
    title: "Webflow Developer", icon: backend,
}, {
    title: "Automator", icon: creator,
},];

const technologies = [{
    name: "Angular JS", icon: angularjs,
}, {
    name: "React JS", icon: reactjs,
}, {
    name: "Next JS", icon: nextjs,
}, {
    name: "TypeScript", icon: typescript,
}, {
    name: "Redux Toolkit", icon: redux,
}, {
    name: "Tailwind CSS", icon: tailwind,
}, {
    name: "GraphQL", icon: graphql,
}, {
    name: "Three JS", icon: threejs,
}, {
    name: "Node JS", icon: nodejs,
}, {
    name: "MongoDB", icon: mongodb,
}, {
    name: "JavaScript", icon: javascript,
}, {
    name: "Python", icon: python,
}, {
    name: "Git", icon: git,
}, {
    name: "Figma", icon: figma,
}
//     name: "CSS 3", icon: css,
// }, {
//     name: "HTML 5", icon: html,
];

const experiences = [{
    title: "Senior Software Developer",
    company_name: "AVR Edge Networks",
    company_url: "https://zestiot.com/",
    icon: zestiot,
    iconBg: "#fdfdfd",
    date: "Jul 2024 - Present",
    points: [
        "Owned the design and delivery of 4 enterprise-scale aviation turnaround and IoT solutions, reducing deployment time by 15% and increasing customer adoption by 200%.",
        "Introduced brand guidelines and enforced code standards, architecting a modular front-end system.",
        "Trained the team to boost coding efficiency while onboarding 6 junior developers.",
        "Led modularization efforts to streamline development and improve maintainability.",
        "Created impactful solutions that enhanced productivity and accelerated project delivery.",
    ],
}, {
    title: "SDE 1",
    company_name: "AVR Edge Networks",
    company_url: "https://getedge.ai/",
    icon: edge,
    iconBg: "#383E56",
    date: "Aug 2023 - Oct 2023",
    points: ["Led the development of user-facing features, transforming complex designs into smooth, high-quality code.",
        "Worked closely with various teams, contributing to agile development cycles for efficient project completion.",
        "Conducted comprehensive code reviews, ensuring code quality and adherence to project standards.",
        "Translated intricate designs into functional code, ensuring seamless user experience and interface.",
        "Collaborated cross-functionally, fostering a team-oriented environment for efficient problem-solving and project progression.",],
}, {
    title: "Full stack Developer",
    company_name: "Cogitate Technology Solutions",
    company_url: "https://cogitate.us/",
    icon: cogitate,
    iconBg: "#383E56",
    date: "Oct 2022 - Apr 2023",
    points: ["Created Packages and libraries for the organization to enhance organization-wide productivity and reduce development time.",
        "Demonstrated ability to work independently and efficiently, serving as the sole front-end developer on projects",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",],
}, {
    title: "Website Designer and animator",
    company_name: "Sinss Nasik",
    company_url: "https://sinss.in/",
    icon: sinss,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Dec 2021",
    points: ["Decreased the on site loading time by 60%.",
        "Added flashy animations and transitions.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Created a sales assisting product which increased sales by 40%.",],
}, {
    title: "Website Designer and Developer",
    company_name: "Shopping Square",
    // company_url: "https://shoppingsquare.in/",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2021 - May 2021",
    points: ["Created a WordPress E-Commerce portal with payment gateway, package tracking, dynamic database, and vendor dashboard amongst other requirements.",],
}, {
    title: "Campus Ambassador",
    company_name: "Coding Ninjas",
    company_url: "https://www.codingninjas.com/0",
    icon: coding_ninjas,
    iconBg: "#E6DEDD",
    date: "Sept 2020 - Dec 2020",
    points: ["Organized seminars and events across colleges.",
        "Created coding communities, helped them upscale.",
        "3rd best Sales intern in the 4th quarter.",],
},];

const testimonials = [
    {
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    }, {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    }, {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },];

const projects = [{
    name: "GuildHub",
    description: "A dynamic communication platform enabled with Real-time messaging, Multimedia sharing, Live streaming, Video Communications and diverse channels.",
    tags: [{
        name: "NextJS", color: "blue-text-gradient",
    }, {
        name: "MySQL", color: "green-text-gradient",
    }, {
        name: "Socket.io", color: "pink-text-gradient",
    },],
    image: guildhub,
    source_code_link: "https://github.com/sahilp007/meta-discord",
    deployed_link: "https://guildhub.netlify.app/",
}, {
    name: "Job IT",
    description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [{
        name: "react", color: "blue-text-gradient",
    }, {
        name: "restapi", color: "green-text-gradient",
    }, {
        name: "scss", color: "pink-text-gradient",
    },],
    image: jobit,
    source_code_link: "https://github.com/",
}, {
    name: "Trip Guide",
    description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [{
        name: "nextjs", color: "blue-text-gradient",
    }, {
        name: "supabase", color: "green-text-gradient",
    }, {
        name: "css", color: "pink-text-gradient",
    },],
    image: tripguide,
    source_code_link: "https://github.com/",
},];

export {services, technologies, experiences, testimonials, projects};
