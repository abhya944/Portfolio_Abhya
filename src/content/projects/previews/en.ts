import thumbnailDevops from "../../../assets/images/projects/devops/devops-infrastructure.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "ERP & PLM Automation",
    slug: "streakon",
    thumbnail: thumbnailDevops,
    description: "Python and PowerShell deployment automation",
    stack: ["Python", "PowerShell", "Jenkins", "AWS"],
    summary:
      "Automated ERP and PLM configuration, server patching, and backup workflows to reduce manual deployment effort.",
  },
  {
    title: "Azure DevOps CI/CD",
    slug: "cubewar",
    thumbnail: thumbnailDevops,
    description: "In-house Git migration and YAML pipelines",
    stack: ["Azure DevOps", "Git", "YAML", "Jenkins"],
    summary:
      "Deployed Azure DevOps Server, migrated repositories from Bonobo Git Server, and standardized CI/CD execution.",
  },
  {
    title: "Containerization POC",
    slug: "quibbo",
    thumbnail: thumbnailDevops,
    description: "Docker, Kubernetes, Ansible, and EKS",
    stack: ["Docker", "Kubernetes", "Ansible", "EKS"],
    summary:
      "Built a proof of concept for containerizing legacy ERP/PLM systems with load balancing and repeatable configuration.",
  },
  {
    title: "Monitoring Stack",
    slug: "sharkie",
    thumbnail: thumbnailDevops,
    description: "Prometheus, Grafana, and CloudWatch metrics",
    stack: ["Prometheus", "Grafana", "CloudWatch", "EC2"],
    summary:
      "Created centralized real-time monitoring for infrastructure metrics, EC2 visibility, and application telemetry.",
  },
  {
    title: "Moodle Deployment",
    slug: "pokedex",
    thumbnail: thumbnailDevops,
    description: "Internal e-learning platform on LAMP stack",
    stack: ["Moodle", "MySQL", "PHP", "Apache"],
    summary:
      "Set up an internal learning platform with quizzes, certification, assessment, and employee progress tracking.",
  },
] as const satisfies ProjectPreview[];
