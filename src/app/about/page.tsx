import { Metadata } from "next";
import * as TechIcons from "./icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { JobPosition } from "./job-position";
import { SocialLinks } from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "About",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
  },
};

const skills = [
  {
    name: "React",
    icon: TechIcons.ReactIcon,
  },
  {
    name: "Typescript",
    icon: TechIcons.TypescriptIcon,
  },
  {
    name: "Node.js",
    icon: TechIcons.NodeIcon,
  },
  {
    name: "Tailwind CSS",
    icon: TechIcons.TailwindIcon,
  },
  {
    name: "MongoDB",
    icon: TechIcons.MongodbIcon,
  },
  {
    name: "PostgreSQL",
    icon: TechIcons.PostgresqlIcon,
  },
  {
    name: "GraphQL",
    icon: TechIcons.GraphqlIcon,
  },
  {
    name: "Vite",
    icon: TechIcons.ViteIcon,
  },
  {
    name: "Docker",
    icon: TechIcons.DockerIcon,
  },

  {
    name: "GitHub Actions",
    icon: TechIcons.GithubActionsIcon,
  },
  {
    name: "Jenkins",
    icon: TechIcons.JenkinsIcon,
  },
  {
    name: "Redis",
    icon: TechIcons.RedisIcon,
  },
  {
    name: "Material Design",
    icon: TechIcons.MaterialDesignIcon,
  },
  {
    name: "Contentful",
    icon: TechIcons.ContentfulIcon,
  },
  {
    name: "Figma",
    icon: TechIcons.FigmaIcon,
  },
];

export default function About() {
  return (
    <section>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">About me</h1>
          <div className="flex flex-col gap-4">
            <p className="leading-relaxed">
              I am Frontend Tech Lead with 9 years of software development
              experience, currently driving the N26 website, one of
              EuropeEurope&apos;s leading mobile banks. I lead a team of 4 web
              engineers while staying deeply involved in solution architecture,
              performance optimization, and coding. Acting as the main bridge
              between product and engineering, I combine technical leadership
              with hands-on expertise to deliver scalable, high-quality web
              solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Technical Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <Tooltip key={skill.name}>
                  <TooltipTrigger asChild>
                    <IconComponent />
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">My Links</h2>
          <div className="flex flex-wrap gap-4">
            <SocialLinks size={24} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Professional Experience</h2>
          <div className="flex gap-4">
            <div className="">
              <JobPosition
                title="Web Tech Lead"
                company="N26"
                period="May 2025 - Present"
                logo="/images/companies/n26-logo.png"
                link="https://n26.com"
                points={[
                  "Lead and mentor a team of 4 web engineers, providing architectural guidance and acting as the primary interface between tech and business stakeholders for the N26 Website.",
                  "Implemented a scalable static asset delivery solution using distributed S3 buckets and CloudFront caching, enabling efficient CDN usage and significantly improving website scalability and performance by 20%.",
                  "Introduced engineering best practices (design system, documentation, code review guidelines, CI/CD improvements), raising code quality and accelerating delivery speed.",
                ]}
              />
              <JobPosition
                title="Senior Web Engineer"
                company="N26"
                period="Nov 2021 - May 2025"
                logo="/images/companies/n26-logo.png"
                link="https://n26.com"
                points={[
                  "Architected and implemented an A/B testing framework (Contentful + Statsig) for the N26 website, empowering the business to run 50+ experiments in a single year and drive data-informed decisions.",
                  "Designed and rolled out the website Design System (Radix UI + Tailwind), partnering with designers and enabling faster, more consistent development across teams.",
                  "Migrated the N26 website to the Remix framework, improving average performance by 25% and delivering a faster, more scalable platform.",
                ]}
              />
              <JobPosition
                title="Frontend Engineer"
                company="Aklamio"
                period="Feb 2019 - Nov 2021"
                logo="/images/companies/aklamio-logo.png"
                link="https://get.aklamio.com"
                points={[
                  "Implemented a white-label templating system that reduced lead time for launching new web widget instances by 50%, accelerating product rollout and scalability.",
                  "Partnered with Design and Branding teams to build an in-house UI library aligned with the company’s Design System, improving consistency and developer productivity.",
                  "Worked in the implementation of the Partner analytics dashboard, using React, Redux Saga and SupersetUI to build visual charts and data insights for partners.",
                ]}
              />
              <JobPosition
                title="Frontend Engineer"
                company="AB InBev"
                period="Jan 2017 - Jan 2019"
                logo="/images/companies/ab-inbev-logo.png"
                link="https://ab-inbev.com"
                points={[
                  "Owned the frontend development of Brazil’s largest beer e-commerce platform, delivering high-visibility campaigns and landing pages for top national brands.",
                  "Developed and launched major seasonal campaigns (e.g., Father’s Day, Black Friday), driving significant spikes in traffic and revenue.",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
