import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Nirmani",
  lastName: "Umasha",
  name: `Nirmani Umasha`,
  role: "CS Undergraduate - Bachelor of Science Honours in Computer Science - UCSC",
  avatar: "/images/avatar.jpeg",
  email: "snirmani228@gmail.com",
  location: "Asia/Colombo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Sinhala"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sachininirmani",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "http://www.linkedin.com/in/nirmani-umasha-49634a285",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Progress through practice</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Experience</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/eyespeak-sinhala",
  },
  subline: (
    <>
I'm Nirmani, a Computer Science undergraduate at the University of Colombo School of Computing, <br />
focused on building reliable and user-centric software solutions. <br />
Beyond academics, I work on full-stack projects and research-driven systems. <br />
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a Computer Science undergraduate with hands-on experience as a Software Engineer Intern,
         where I worked on real-world systems, code quality improvements, and modern web technologies. 
         I enjoy collaborating in teams, learning deeply,
         and building software that is both practical and reliable.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "GTN Technologies (Pvt) Ltd",
        timeframe: "Nov 2024 – Apr 2025",
        role: "Software Engineer Intern",
        achievements: [
        <>
          Worked on the GTN Invest Monitoring System by configuring development
          environments using Zookeeper, Spring Boot, and Angular, and contributing
          to core modules such as AMT and Status.
        </>,
        <>
          Led the Angular framework upgrade from version 17 to 19, resolving
          breaking changes, updating test cases, and ensuring system stability.
        </>,
        <>
          Performed code cleanup, bug fixes, and CR resolutions while maintaining
          coding standards, API documentation (Stoplight), and CI/CD automation
          using Playwright.
        </>,
      ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-02.jpeg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
  display: true,
  title: "Education",
  institutions: [
    {
      name: "University of Colombo School of Computing (UCSC)",
      description: (
        <>
          BSc (Hons) in Computer Science — Fourth-year undergraduate
          <br />
          GPA: 3.59 / 4.00
          <br />
          Strong foundation in OOP, Data Structures, Algorithms, and Software
          Design Patterns.
        </>
      ),
    },
    {
      name: "St. Paul’s Girls’ School, Milagiriya",
      description: (
        <>
          GCE Advanced Level (Common Stream)
          <br />
          Subjects: Combined Mathematics, ICT, Physics
          <br />
          Z-Score: 1.5917
          <br />
          GCE Ordinary Level: 9 A’s
        </>
      ),
    },
  ],
},
  technical: {
  display: true,
  title: "Technical Skills",
  skills: [
    {
      title: "Full-Stack Development",
      description: (
        <>
          Experience building full-stack web applications using modern frontend
          frameworks and robust backend architectures, following clean coding
          practices and MVC / client-server designs.
        </>
      ),
      tags: [
        { name: "Java", icon: "java" },
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Python", icon: "python" },
        { name: "C / C++", icon: "cplusplus" },
      ],
      images: [],
    },
    {
      title: "Frameworks & Libraries",
      description: (
        <>
          Hands-on experience developing applications using React and Spring Boot,
          with exposure to MERN stack development and RESTful API integration.
        </>
      ),
      tags: [
        { name: "React", icon: "react" },
        { name: "Spring Boot", icon: "spring" },
        { name: "MERN Stack", icon: "nodejs" },
      ],
      images: [],
    },
    {
      title: "Databases & Tools",
      description: (
        <>
          Comfortable working with relational databases, API testing tools, and
          modern IDEs to support development, debugging, and documentation.
        </>
      ),
      tags: [
        { name: "SQL", icon: "database" },
        { name: "MySQL", icon: "mysql" },
        { name: "Postman", icon: "postman" },
        { name: "VS Code", icon: "vscode" },
        { name: "IntelliJ IDEA", icon: "intellij" },
      ],
      images: [],
    },
    {
      title: "Research & Assistive Technology",
      description: (
        <>
          Developing an eye-controlled Sinhala virtual keyboard using a Tobii eye
          tracker, focusing on dwell-free interaction, optimized layouts, and
          multi-stage vowel and diacritic prediction to improve accessibility and
          text-entry efficiency.
        </>
      ),
      tags: [
        { name: "HCI", icon: "eye" },
        { name: "Accessibility", icon: "accessibility" },
        { name: "Research", icon: "search" },
      ],
      images: [],
    },
  ],
},
};

const blog: Blog = {
  path: "/blog",
  label: "Certifications",
  title: "Certifications...",
  description: `See the certifications ${person.name} has achieved recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
