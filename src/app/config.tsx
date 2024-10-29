import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter, FaDiscord } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill, RiOpenaiFill, RiWordpressFill } from "react-icons/ri";
import { SiTypescript, SiShadcnui, SiPrisma, SiWoocommerce, SiReact, SiJavascript } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";

export const siteConfig = {
    name: "Evan Huang",
    title: "Evan Huang | Front-End Developer",
    email: "evan.huang000@proton.me",
    alias: "Evan",
    description: "Hello 👋 My name is Evan Huang I am an engineer specializing in web development, mastering HTML, CSS, JavaScript, Next.js and Python. I have strong programming and design skills, and currently focus on front-end development. My passion is to create outstanding digital experiences, and user experience is my biggest concern. As for the future development direction, I look forward to continuous learning and growth.",
    keywords: "Evan Huang, front-end developer, web development, Next.js, Python, JavaScript",
    url: "https://tech-huang.us.kg",
    taglines: [
        "🚀 Coding Simplicity, Crafting Solutions: Bringing Ideas to Life, One Line at a Time. ✨ Let's transform challenges into digital possibilities with precision and creativity!",
        "🎨 Where Code Meets Creativity: Building Digital Experiences that Matter. 🌐 From intuitive interfaces to powerful backend systems, I create solutions that engage and inspire.",
        "💡 Innovating Beyond the Screen: Crafting Seamless Digital Journeys. 🌟 From concept to completion, let’s build the future, one pixel and one line of code at a time.",
    ],
    titles: ["Front-End Developer", "NextJS Developer", "Python Developer"],
    socialLinks: [
        {
            icon: <FaGithub />,
            url: "https://github.com/Dev-Huang1",
        },
        /*{
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/auroradream04/",
        },*/
        {
            icon: <FaSquareXTwitter />,
            url: "https://x.com/Dev_Huang1",
        },
        {
            icon: <FaDiscord />,
            url: "https://discord.com/invite/xCeAQ3RS",
        },
        {
            icon: <IoIosMail />,
            url: "mailto:evan.huang000@proton.me",
        },
    ],
    sections: {
        tableOfContents: [
            {
                id: "about-me",
                label: "ABOUT ME"
            },
            {
                id: "experiences",
                label: "EXPERIENCES"
            },
            {
                id: "projects",
                label: "PROJECTS"
            }, 
            {
                id: "blogs",
                label: "BLOGS"
            },
            {
                id: "contact",
                label: "CONTACT"
            }
        ],
        aboutMe: `
            <p>
                Hello everyone! I am <strong>Evan Huang</strong>, a <strong>front-end developer</strong> who started my programming journey in <strong>2023</strong>. I master <strong>HTML, CSS, JavaScript and NextJS</strong>
            </p>
            <p>
                When I'm not coding, you can find me on social media <strong>X</strong>, <strong>Threads</strong>, and <strong>Instagram</strong> Let's connect - I'd love to help with your next project!
            </p>
        `,
        experiences: [
            {
                company: "Tech-Art Studio",
                position: "Founder | Developer | Marketing",
                duration: "2024 - Present",
                description: "Founded a community-driven web development studio focused on delivering high-quality websites and custom digital solutions. Open to participation from developers of all skill levels, the studio embraces collaboration throughout the development process, from project ideation and planning to design implementation and deployment. "
            },
        ],
        projects: [
            {
                title: "One Captcha",
                description: "A captcha application created with static JavaScript, free, secure, privacy-preserving, end-to-end encryption, no third-party tracking, multi-language, and fast.",
                logo: "/logox.png",
                repoLink: "https://github.com/Dev-Huang1/One-Captcha",
                technologies: [
                    {
                        icon: <SiJavascript className="text-[#FFF]" />,
                        name: "JavaScript"
                    },
                ],
                link: "https://onecaptcha.us.kg"
            },
            /*{
                title: "Genzify AI",
                description: "GenZify is an AI-powered tool I developed to transform everyday text into trendy Gen Z-style language. I managed both the front-end design and back-end development, integrating AI functionality for smooth and creative rephrasings. The platform delivers a fun, engaging experience, perfect for anyone looking to add a modern twist to their communication. This project highlights my skills in blending AI with user-centric design to create a playful, interactive web tool.",
                logo: "/genzify-logo.png",
                repoLink: "https://github.com/auroradream04/genzify-app",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js"
                    },
                    {
                        icon: <RiOpenaiFill className="text-[#412991]" />,
                        name: "OpenAI API"
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS"
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript"
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI"
                    }
                ],
                link: "https://genzify-app-wine.vercel.app/"
            },
            {
                title: "WhatAboutPets",
                description: "WhatAboutPets is a comprehensive blog and e-commerce platform I built to provide valuable insights into pet care, health, and wellness. Alongside engaging articles, the site features an integrated WooCommerce store, offering a variety of pet-related products. I managed everything from designing the user-friendly interface to implementing SEO strategies and setting up the online shop. This project highlights my expertise in both content-driven sites and e-commerce solutions, creating a complete experience for pet lovers.",
                logo: "/whataboutpets-logo.png",
                repoLink: "",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js"
                    },
                    {
                        icon: <RiWordpressFill className="text-[#21759B]" />,
                        name: "WordPress"
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript"
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS"
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI"
                    },
                    {
                        icon: <GrGraphQl className="text-[#E10098]" />,
                        name: "GraphQL"
                    },
                    {
                        icon: <SiWoocommerce className="text-[#96588A]" />,
                        name: "Woocommerce"
                    }
                ],
                link: "https://whataboutpets.com"
            },
            {
                title: "丹丹影院 - ynct55.com",
                description: "ynct55.com is a Chinese-language streaming platform offering free access to a diverse library of movies, TV shows, and anime. Managed all aspects of the project, from backend infrastructure and database setup to front-end design and user experience. Implemented efficient streaming solutions and optimized the platform for SEO to reach a broader audience. This project highlights my skills in building and maintaining a complete streaming site, tailored specifically for a Chinese-speaking user base.",
                logo: "/ynct55-logo.png",
                repoLink: "",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js"
                    },
                    {
                        icon: <RiWordpressFill className="text-[#21759B]" />,
                        name: "WordPress"
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript"
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS"
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI"
                    },
                    {
                        icon: <SiPrisma className="text-[#2D3748]" />,
                        name: "Prisma"
                    }
                ],
                link: "https://www.ynct55.com"
            }*/
        ]
    }
};
