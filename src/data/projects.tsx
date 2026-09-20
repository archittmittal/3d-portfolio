import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiChartdotjs,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiJavascript,
  SiLeaflet,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiFastapi,
  SiSqlite,
  SiPrometheus,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js (SSR Architecture)",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra (Component System)",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js (Async Backend)",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python (AI / Scripting)",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  fastapi: {
    title: "FastAPI (High-Speed API)",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  prisma: {
    title: "Prisma (Type-Safe ORM)",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL (Relational DB)",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB (NoSQL Store)",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express (Web Framework)",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query (Cache Layer)",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "Shadcn (UI Architecture)",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity (Premium UI)",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind (Utility CSS)",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker (Containerization)",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js (Real-time CRDT)",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase (Cloud Services)",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io (Real-time events)",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript (Core Runtime)",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript (Static Safety)",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js (Reactive UI)",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React (Component UI)",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity (Headless CMS)",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline (3D Scenes)",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP (Motion Engine)",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion (Animations)",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase (Cloud BaaS)",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  java: {
    title: "Java (Enterprise Core)",
    bg: "black",
    fg: "white",
    icon: <FaJava />,
  },
  mysql: {
    title: "MySQL (Relational SQL)",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  flask: {
    title: "Flask (Python Backend)",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  leaflet: {
    title: "Leaflet (Interactive Maps)",
    bg: "black",
    fg: "white",
    icon: <SiLeaflet />,
  },
  chartjs: {
    title: "Chart.js (Data ViZ)",
    bg: "black",
    fg: "white",
    icon: <SiChartdotjs />,
  },
  sqlite: {
    title: "SQLite (Embedded DB)",
    bg: "black",
    fg: "white",
    icon: <SiSqlite />,
  },
  prometheus: {
    title: "Prometheus (Observability)",
    bg: "black",
    fg: "white",
    icon: <SiPrometheus />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "agentscope",
    category: "AI Observability / DevTools",
    title: "AgentsScope: Multi-Agent Observability",
    src: "/assets/projects-screenshots/agentscope/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "#",
    github: "https://github.com/PxA-Labs/AgentsScope",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Lightweight Observability for Multi-Agent AI Pipelines
          </TypographyP>
          <TypographyP className="font-mono ">
            AgentsScope is an open-source, self-hosted observability dashboard designed specifically for multi-agent AI pipelines. Instead of sifting through massive terminal logs with verbose flags, AgentsScope provides a clear local dashboard with two lines of Python code—tracking real-time agent events, DAG call hierarchies, token usage, latency heatmaps, and session history without external cloud dependencies.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Real-Time Agent Observability
          </TypographyH3>
          <p className="font-mono mb-2">
            Live event feed streaming every LLM call, prompt, output, tool execution, and state transition in real-time with sub-millisecond precision.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Agent DAG Graph Visualization
          </TypographyH3>
          <p className="font-mono mb-2">
            Interactive directed acyclic graph mapping dynamic multi-agent workflows, parent-child hierarchies, branching decisions, and concurrent agent chains.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Token &amp; Cost Intelligence
          </TypographyH3>
          <p className="font-mono mb-2">
            Granular token breakdown by model, agent role, and session with built-in cost estimation and latency heatmaps across pipeline runs.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Zero-Overhead Local SDK
          </TypographyH3>
          <p className="font-mono mb-2">
            Non-blocking async Python SDK (`AgentScopeCallback`) integrating seamlessly with LangChain, LlamaIndex, and custom agent architectures with zero cloud lock-in.
          </p>
        </div>
      );
    },
  },
  {
    id: "automaintainer",
    category: "Autonomous AI / DevTools",
    title: "AutoMaintainer: Autonomous AI Engineering Team",
    src: "/assets/projects-screenshots/automaintainer/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.supabase,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://huggingface.co/spaces/purvansh01/AutoMaintainer",
    github: "https://github.com/PxA-Labs/AutoMaintainer",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An Always-On Autonomous AI Software Engineering Team
          </TypographyP>
          <TypographyP className="font-mono ">
            AutoMaintainer is an autonomous multi-agent software engineering system that operates natively inside GitHub repositories. Built with LangGraph, FastAPI, Next.js, and Groq LPU inference, it coordinates a 5-agent hierarchy to brainstorm ideas, create GitHub Issues, write code, submit Pull Requests, perform automated reviews, self-correct bugs, and merge verified code into production.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            5-Agent Specialized Hierarchy
          </TypographyH3>
          <p className="font-mono mb-2">
            Coordinates Architect, Visionary, Reviewer, Implementer, and Maintainer agents to autonomously plan, implement, and verify complex codebases.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Native GitHub Lifecycle Operations
          </TypographyH3>
          <p className="font-mono mb-2">
            Autonomous execution across GitHub Issues, branches, and PR reviews. Implementer agents automatically read review comments and push iterative fixes until PR passes.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Supabase Real-Time Architecture &amp; Web IDE
          </TypographyH3>
          <p className="font-mono mb-2">
            High-performance Supabase Realtime pub/sub event stream paired with an in-browser VS Code-style Web IDE and interactive PTY terminal connecting directly to backend runners.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Sub-20s Execution via Groq LPU
          </TypographyH3>
          <p className="font-mono mb-2">
            Ultra-fast LLM inference delivering complete software cycles—from architecture planning to merged pull request—in under 20 seconds.
          </p>
        </div>
      );
    },
  },
  {
    id: "reliadl",
    category: "Systems / Resilient Networking",
    title: "ReliaDL: Resilient Parallel Download Engine",
    src: "/assets/projects-screenshots/reliadl/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.prometheus],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.docker],
    },
    live: "https://pypi.org/project/reliadl/",
    github: "https://github.com/PxA-Labs/ReliaDL",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Production-Grade Resilient Download &amp; Streaming Engine
          </TypographyP>
          <TypographyP className="font-mono ">
            ReliaDL is a production-grade, fault-tolerant parallel file download framework and high-throughput streaming engine designed for high-reliability enterprise pipelines and non-stationary channels. It combines stochastic network optimization, cryptographic chunk integrity verification, corporate proxy tunneling, async rate limiting, and Prometheus observability.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Cryptographic Integrity &amp; Segment Localization
          </TypographyH3>
          <p className="font-mono mb-2">
            Per-chunk SHA-256 validation, homomorphic LtHash aggregation, and 4 KB Merkle tree segment localization to detect and repair corrupt byte ranges instantly without redownloading entire files.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Corporate Proxy Tunneling
          </TypographyH3>
          <p className="font-mono mb-2">
            SOCKS5 (RFC 1928 / 1929) and HTTP CONNECT proxy tunneling with destination-based TLS verification and remote DNS resolution.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Stochastic Network Optimization &amp; Pacing
          </TypographyH3>
          <p className="font-mono mb-2">
            Lyapunov-based dynamic chunk sizing (AdaChunk) and restless multi-armed bandit (Whittle index) scheduling paired with Token Bucket rate limiting to eliminate thundering herd spikes.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Enterprise Cloud Adapters &amp; Telemetry
          </TypographyH3>
          <p className="font-mono mb-2">
            Plug-and-play streaming adapters for AWS S3, GCS, and Azure Blob Storage alongside native Prometheus metric exporters and structured JSON logging.
          </p>
        </div>
      );
    },
  },
  {
    id: "patient-appointment-scheduling",
    category: "Full Stack / Healthcare",
    title: "Patient Appointment Scheduling System",
    src: `${BASE_PATH}/patient-appointment-scheduling/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.mysql],
    },
    live: "#",
    github: "https://github.com/archittmittal/Patient-Appointment-Scheduling-System",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A DSA-based healthcare appointment scheduling system that
            minimizes patient wait times using Greedy Algorithms, Dynamic
            Programming, Priority Queues, and Predictive Analytics. Designed
            to address real-world OPD challenges in Indian healthcare — long
            wait times, overbooking conflicts, emergency delays, and
            uneven doctor utilization.
          </TypographyP>
          <ProjectsLinks
            live={""}
            repo="https://github.com/archittmittal/Patient-Appointment-Scheduling-System"
          />
          <TypographyH3 className="my-4 mt-8">
            Core Algorithms
          </TypographyH3>
          <p className="font-mono mb-2">
            Implements seven DSA strategies — Greedy slot allocation
            (Activity Selection), Priority Queue (Min-Heap) for emergency
            handling, Dynamic Programming for interval partitioning and
            multi-doctor assignment, Hash Maps for O(1) patient UID
            verification, Weighted Job Scheduling for variable case
            complexity, and Load Balancing for even patient distribution.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Smart Queue Management
          </TypographyH3>
          <p className="font-mono mb-2">
            Real-time live queue with priority-based ordering, emergency
            override insertion, dynamic reheapifying, and predictive wait
            time estimation combining current queue state (60%) with
            historical data (40%). Includes no-show prediction to proactively
            send reminders and fill cancelled slots from waitlists.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Role-Based Features
          </TypographyH3>
          <p className="font-mono mb-2">
            Patients can book appointments, view queue position, and get
            estimated wait times. Receptionists manage check-ins, call next
            patients, and handle emergencies. Doctors view schedules with
            complexity tags and configure buffer times. Admins manage
            departments, configure algorithm parameters, and monitor
            analytics dashboards.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Database &amp; API Design
          </TypographyH3>
          <p className="font-mono mb-2">
            MySQL database with 7 interconnected tables — appointments,
            time_slots, live_queue, queue_history, doctor_schedules,
            departments, and patients. 11 stored procedures implementing DSA
            logic (heap insert, extract-min, greedy slot finder, no-show
            predictor, load balancer). Full REST API with endpoints for
            authentication, patients, doctors, appointments, queue
            management, and load balancing.
          </p>
          <p className="font-mono mb-2 mt-8 text-center">
            🚧 Work in progress — not ready yet, under active development.
          </p>
        </div>
      );
    },
  },
];

export default projects;
