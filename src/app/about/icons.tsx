import { FaReact, FaNode } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiVite,
  SiDocker,
  SiContentful,
  SiFigma,
  SiGithubactions,
  SiJenkins,
  SiMaterialdesign,
  SiRedis,
} from "react-icons/si";

const ICON_SIZE = 48;

export const ReactIcon = () => <FaReact size={ICON_SIZE} color="#61DAFB" />;
export const TypescriptIcon = () => (
  <SiTypescript size={ICON_SIZE} color="#3178C6" />
);
export const NodeIcon = () => <FaNode size={ICON_SIZE} color="#339933" />;
export const TailwindIcon = () => (
  <SiTailwindcss size={ICON_SIZE} color="#38B2AC" />
);
export const MongodbIcon = () => <SiMongodb size={ICON_SIZE} color="#47A248" />;
export const PostgresqlIcon = () => (
  <SiPostgresql size={ICON_SIZE} color="#336791" />
);

export const GraphqlIcon = () => <SiGraphql size={ICON_SIZE} color="#E10098" />;
export const ViteIcon = () => <SiVite size={ICON_SIZE} color="#646CFF" />;
export const DockerIcon = () => <SiDocker size={ICON_SIZE} color="#2496ED" />;

export const GithubActionsIcon = () => (
  <SiGithubactions size={ICON_SIZE} color="#2088FF" />
);
export const JenkinsIcon = () => <SiJenkins size={ICON_SIZE} color="#D24939" />;
export const RedisIcon = () => <SiRedis size={ICON_SIZE} color="#DC382D" />;
export const ContentfulIcon = () => (
  <SiContentful size={ICON_SIZE} color="#2478B5" />
);
export const FigmaIcon = () => <SiFigma size={ICON_SIZE} color="#F24E1E" />;
export const MaterialDesignIcon = () => (
  <SiMaterialdesign size={ICON_SIZE} color="#757575" />
);
