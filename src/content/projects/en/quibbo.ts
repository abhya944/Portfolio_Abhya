import devopsImage from "../../../assets/images/projects/devops/devops-infrastructure.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Containerization and Load Balancing of ERP/PLM Applications",
  theme: "light",
  tags: ["docker", "kubernetes", "ansible", "aws"],
  videoBorder: true,
  description:
    "Ongoing research and proof-of-concept work for containerizing legacy ERP and PLM applications with Docker and Kubernetes.<br/><br/>The goal is to improve resource usage, availability, and repeatability through Kubernetes-based load balancing and consistent configuration management.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: devopsImage,
        alt: "Container orchestration and load balancing visual",
        caption: "Containerization POC",
      },
    },
    {
      type: "list",
      props: {
        title: "Focus areas",
        items: [
          "Containerized legacy ERP and PLM workloads with Docker.",
          "Explored Kubernetes and EKS deployment patterns.",
          "Designed Kubernetes-based load balancing strategies.",
          "Created Ansible playbooks for consistent distributed configuration.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
