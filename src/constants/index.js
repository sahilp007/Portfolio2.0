import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    cogitate,
    coding_ninjas,
    sinss,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [{
    id: "about", title: "About",
}, {
    id: "work", title: "Work",
}, {
    id: "contact", title: "Contact",
},];

const services = [{
    title: "Web Developer", icon: web,
}, {
    title: "React Native Developer", icon: mobile,
}, {
    title: "Backend Developer", icon: backend,
}, {
    title: "Content Creator", icon: creator,
},];

const technologies = [{
    name: "HTML 5", icon: html,
}, {
    name: "CSS 3", icon: css,
}, {
    name: "JavaScript", icon: javascript,
}, {
    name: "TypeScript", icon: typescript,
}, {
    name: "React JS", icon: reactjs,
}, {
    name: "Redux Toolkit", icon: redux,
}, {
    name: "Tailwind CSS", icon: tailwind,
}, {
    name: "Node JS", icon: nodejs,
}, {
    name: "MongoDB", icon: mongodb,
}, {
    name: "Three JS", icon: threejs,
}, {
    name: "git", icon: git,
}, {
    name: "figma", icon: figma,
}, {
    name: "docker", icon: docker,
},];

const experiences = [{
    title: "Full stack Developer",
    company_name: "Cogitate Technology Solutions",
    company_url: "https://cogitate.us/",
    icon: cogitate,
    iconBg: "#383E56",
    date: "Feb 2022 - Present",
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
    date: "Oct 2021 - Dec 2021",
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

const testimonials = [{
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
    name: "Car Rent",
    description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [{
        name: "react", color: "blue-text-gradient",
    }, {
        name: "mongodb", color: "green-text-gradient",
    }, {
        name: "tailwind", color: "pink-text-gradient",
    },],
    image: carrent,
    source_code_link: "https://github.com/",
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
