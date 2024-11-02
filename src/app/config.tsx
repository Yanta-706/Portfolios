import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter, FaDiscord } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill, RiOpenaiFill, RiWordpressFill } from "react-icons/ri";
import { 
    SiNextdotjs, 
    SiReact, 
    SiNodedotjs, 
    SiPython, 
    SiJavascript, 
    SiGithub, 
    SiVercel, 
    SiVisualstudiocode, 
    SiWindows, 
    SiCloudflare, 
    SiMarkdown 
} from 'react-icons/si';
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
        ],
technologies: {
            main: [
        {
            name: "Next.js",
            icon: <SiNextdotjs className="text-[#fff]" />,
            description: "A React framework for production",
        },
        {
            name: "React.js",
            icon: <SiReact className="text-[#61DAFB]" />,
            description: "A JavaScript UI library",
        },
        {
            name: "Node.js",
            icon: <SiNodedotjs className="text-[#339933]" />,
            description: "A JavaScript runtime",
        },
        {
            name: "Python",
            icon: <SiPython className="text-[#3776AB]" />,
            description: "A high-level programming language",
        },
        {
            name: "JavaScript",
            icon: <SiJavascript className="text-[#F7DF1E]" />,
            description: "The programming language of the web",
        },
        {
            name: "GitHub",
            icon: <SiGithub className="text-[#fff]" />,
            description: "A version control platform",
        },
    ],
    other: [
        {
            name: "Vercel",
            icon: <SiVercel className="text-[#fff]" />,
        },
        {
            name: "Visual Studio Code",
            icon: <SiVisualstudiocode className="text-[#007ACC]" />,
        },
        {
            name: "Windows",
            icon: <SiWindows className="text-[#00A4EF]" />,
        },
        {
            name: "Cloudflare",
            icon: <SiCloudflare className="text-[#F48120]" />,
        },
        {
            name: "Markdown",
            icon: <SiMarkdown className="text-[#fff]" />,
        },
    ],
        },
    }
};
