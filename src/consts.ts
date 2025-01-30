import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Sleep Forever",
  EMAIL: "fox015@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A place to log my thoughts, and document self worth.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Musings and random thoughts of Rob Gilbert.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "My work history.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A mix of software, hardware and automotive stuff.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/fox015",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/fox015"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/rob-gilbert-a491b413/",
  }
];
