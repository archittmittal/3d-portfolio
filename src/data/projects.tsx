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
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
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
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <FaJava />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  leaflet: {
    title: "Leaflet",
    bg: "black",
    fg: "white",
    icon: <SiLeaflet />,
  },
  chartjs: {
    title: "Chart.js",
    bg: "black",
    fg: "white",
    icon: <SiChartdotjs />,
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
    id: "astramed",
    category: "Healthcare AI",
    title: "AstraMed: Clinical Risk AI",
    src: "/assets/projects-screenshots/astramed/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://clinical-risk-predictor-nine.vercel.app/",
    github: "https://github.com/archittmittal/clinical-risk-predictor",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Next-Generation Predictive Analytics &amp; Decision Support System
          </TypographyP>
          <TypographyP className="font-mono ">
            AstraMed is an AI-driven clinical decision support system for
            diabetes and chronic disease risk stratification. It leverages a
            &quot;Tri-Force&quot; ensemble of XGBoost, CatBoost, and LightGBM
            with SHAP-based explainability, counterfactual reasoning, and
            BioMistral-7B for medical-grade AI reports. Built for the Hack for
            Green Bharat hackathon.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Risk Scoring &amp; Stratification
          </TypographyH3>
          <p className="font-mono mb-2">
            Multi-level risk classification (Low / Medium / High) with
            confidence intervals, longitudinal tracking, and population-based
            percentile rankings.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Explainability &amp; Transparency
          </TypographyH3>
          <p className="font-mono mb-2">
            Every prediction is backed by SHAP values with feature importance
            rankings, force plots, and interactive charts — solving the
            &quot;black box&quot; problem in clinical AI.
          </p>
          <TypographyH3 className="my-4 mt-8">
            What-If Counterfactual Simulation
          </TypographyH3>
          <p className="font-mono mb-2">
            Interactive sliders let clinicians simulate outcomes — &quot;If the
            patient reduces BMI by 5%, how does their risk change?&quot; —
            empowering shared decision-making and personalized goal setting.
          </p>
          <TypographyH3 className="my-4 mt-8">
            AI-Powered Reports
          </TypographyH3>
          <p className="font-mono mb-2">
            BioMistral-7B generates clinical summaries for providers and
            plain-language explanations for patients, with exportable PDF
            reports.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Population Analytics
          </TypographyH3>
          <p className="font-mono mb-2">
            Digital twin matching finds similar patient outcomes, cohort
            analysis provides demographic comparisons, and trend detection
            reveals population-level patterns.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Pro Max UI/UX
          </TypographyH3>
          <p className="font-mono mb-2">
            Glassmorphism 2.0 aesthetic with bento grid layout,
            information-dense organized dashboard, and dual interfaces — a
            technical clinician dashboard and a simple patient portal with
            traffic-light risk gauges.
          </p>
        </div>
      );
    },
  },
  {
    id: "attendance-system",
    category: "Desktop App",
    title: "Attendance Eligibility System",
    src: "/assets/projects-screenshots/attendance-system/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.java],
      backend: [PROJECT_SKILLS.mysql],
    },
    live: "#",
    github: "https://github.com/archittmittal/Attendance-Eligibility-Management-System-JAVA-",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Smart Attendance Tracking &amp; 75% Eligibility Calculator
          </TypographyP>
          <TypographyP className="font-mono ">
            A comprehensive Java desktop application that automates attendance
            tracking and eligibility calculation for educational institutions.
            It helps students stay compliant with the mandatory 75% attendance
            rule through real-time calculations, predictive analysis, and
            intelligent schedule management.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            75% Attendance Calculator
          </TypographyH3>
          <p className="font-mono mb-2">
            Automatically calculates if a student meets the 75% attendance
            threshold with subject-wise and overall tracking. Shows how many
            classes can be missed or must be attended to stay eligible.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Predictive Analysis
          </TypographyH3>
          <p className="font-mono mb-2">
            Smart projections tell you exactly how many more classes you can
            skip while maintaining 75%, or how many consecutive classes you
            need to attend if you&apos;re below the threshold.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Holiday &amp; Leave Management
          </TypographyH3>
          <p className="font-mono mb-2">
            Factor in holidays, planned leaves (medical, personal), and
            weekly schedules for accurate attendance forecasting across the
            semester.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Multi-User System
          </TypographyH3>
          <p className="font-mono mb-2">
            Separate interfaces for students and administrators with
            role-based access. Student profiles, attendance history,
            report generation, and data export to CSV/Excel.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Built with Java Best Practices
          </TypographyH3>
          <p className="font-mono mb-2">
            Implements OOP, Collections Framework, JDBC with prepared
            statements, multithreading for responsive UI, and design
            patterns (Singleton, Factory, Observer, MVC). MySQL backend
            with auto-created tables on first launch.
          </p>
          <p className="font-mono mb-2 mt-8 text-center">
            🚧 Work in progress — actively being developed with new features.
          </p>
        </div>
      );
    },
  },
  {
    id: "eco-vyapaar",
    category: "Social Impact",
    title: "Eco-Vyapaar",
    src: "/assets/projects-screenshots/eco-vyapaar/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [],
    },
    live: "#",
    github: "https://github.com/archittmittal/Eco-Vyapaar-Project",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Tech Empowerment for India&apos;s Street Vendors
          </TypographyP>
          <TypographyP className="font-mono ">
            Eco-Vyapaar is a real-world solution to help India&apos;s small
            street food vendors access affordable, trusted raw materials and
            manage them smartly — even if they&apos;re not tech-savvy. It
            bridges the gap between street food vendors and wholesale suppliers
            with a focus on sustainable business practices.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Smart Marketplace
          </TypographyH3>
          <p className="font-mono mb-2">
            Connect directly with verified wholesale suppliers. Browse
            thousands of products across categories like fresh vegetables,
            grains, spices, dairy, and kitchen equipment with real-time
            pricing and vendor comparison.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Vendor-Friendly Platform
          </TypographyH3>
          <p className="font-mono mb-2">
            Designed specifically for street food vendors with simple ordering,
            flexible payment options, delivery tracking, and multi-language
            support for accessibility.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Sustainable Supply Chain
          </TypographyH3>
          <p className="font-mono mb-2">
            Promotes eco-friendly practices with sustainable packaging options,
            carbon-neutral delivery solutions, and a &quot;Donate for a Greener
            Tomorrow&quot; initiative connecting kitchen waste to NGOs and cow
            shelters.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Product Search &amp; Price Comparison
          </TypographyH3>
          <p className="font-mono mb-2">
            Search products across multiple vendors, compare prices and
            ratings side-by-side, and find the best deals by location —
            all with an intuitive, mobile-friendly interface.
          </p>
          <p className="font-mono mb-2 mt-8 text-center">
            🚧 Work in progress — actively being developed.
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
  {
    id: "foodwaste-management-system",
    category: "Full Stack / Social Impact",
    title: "Food Waste Management System",
    src: "/assets/projects-screenshots/foodwaste-management-system/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.mysql],
    },
    live: "#",
    github: "https://github.com/archittmittal/Foodwaste-Management-System.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Bridging the gap between food donors and receivers
          </TypographyP>
          <TypographyP className="font-mono ">
            A comprehensive web platform built to connect food donors (individuals, restaurants, events) with receivers (NGOs, shelters, individuals in need). It aims to reduce food waste and streamline donation logistics through dedicated role-based dashboards and an efficient Flask/MySQL backend.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Role-Based Dashboards
          </TypographyH3>
          <p className="font-mono mb-2">
            Separate interfaces for donors to list surplus food items and for receivers to browse and request available food donations seamlessly.
          </p>
          <TypographyH3 className="my-4 mt-8">
            WASM Integration &amp; Data Structures
          </TypographyH3>
          <p className="font-mono mb-2">
            Incorporates a custom C-based quicksort algorithm compiled to WebAssembly (WASM) for high-performance sorting in the browser. Also implements fundamental data structures like stacks, queues, and linked lists in C.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Full-Stack Architecture
          </TypographyH3>
          <p className="font-mono mb-2">
            Powered by a Python Flask backend and a robust MySQL database for managing users, food items, and donation requests securely with session management.
          </p>
          <p className="font-mono mb-2 mt-8 text-center">
            🚧 Work in progress — actively being developed with new features.
          </p>
        </div>
      );
    },
  },
  {
    id: "traffic-ai",
    category: "AI / Smart City",
    title: "TrafficAI: Intelligent Traffic Management",
    src: "/assets/projects-screenshots/traffic-ai/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.leaflet,
        PROJECT_SKILLS.chartjs,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "https://ai-traffic-flow-optimizer-and-emerg.vercel.app",
    github:
      "https://github.com/archittmittal/AI-Traffic-Flow-Optimizer-and-Emergency-Grid",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered Smart City Traffic Command Center
          </TypographyP>
          <TypographyP className="font-mono ">
            A real-time AI-powered traffic management dashboard designed for
            city traffic authorities to monitor intersections, control signals,
            manage emergency corridors, and detect incidents — all from a
            single command center interface. Built for the India Innovates
            hackathon to tackle India&apos;s ₹1.5 lakh crore annual
            congestion losses.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Real-Time Traffic Monitoring
          </TypographyH3>
          <p className="font-mono mb-2">
            Live city map with color-coded intersections (green/yellow/red),
            AI-powered vehicle detection with bounding boxes, and lane-wise
            density heatmaps — providing a bird&apos;s-eye view of the
            entire traffic network.
          </p>
          <TypographyH3 className="my-4 mt-8">
            AI Signal Control &amp; Override
          </TypographyH3>
          <p className="font-mono mb-2">
            Reinforcement Learning-based signal timing recommendations with
            manual override controls (Force Green / Pause / Reset), live
            countdown timers, and per-intersection signal efficiency scoring.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Emergency Corridor Management
          </TypographyH3>
          <p className="font-mono mb-2">
            Real-time emergency vehicle tracking with green corridor
            activation/deactivation, route visualization on the map, and
            ETA calculation — ensuring fastest possible emergency response.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Incident Detection &amp; Smart Rerouting
          </TypographyH3>
          <p className="font-mono mb-2">
            Automatic accident detection alerts, road blockage identification,
            congestion spike detection, and AI-suggested alternate routes to
            minimize disruption.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Predictive Analytics &amp; Insights
          </TypographyH3>
          <p className="font-mono mb-2">
            Congestion trends by hour and zone, signal efficiency analytics,
            emergency response time tracking, and AI-powered traffic
            prediction with a 6-hour horizon — enabling proactive traffic
            management.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Real-Time Architecture
          </TypographyH3>
          <p className="font-mono mb-2">
            WebSocket-based live updates via Socket.IO, REST API backend
            powered by Flask, background traffic simulation engine with
            multi-channel event system — delivering sub-second updates
            across the entire dashboard.
          </p>
        </div>
      );
    },
  },
];
export default projects;
