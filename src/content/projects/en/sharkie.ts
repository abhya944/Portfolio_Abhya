import devopsImage from "../../../assets/images/projects/devops/devops-infrastructure.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Real-Time Monitoring with Prometheus, Grafana, and AWS CloudWatch",
  theme: "dark",
  tags: ["prometheus", "grafana", "aws"],
  videoBorder: false,
  description:
    "Centralized monitoring implementation for real-time performance tracking, system metrics visualization, and EC2 visibility.<br/><br/>Prometheus, Grafana, AWS CloudWatch, Node Exporter, and application-specific exporters were used to improve operational awareness and alerting.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: devopsImage,
        alt: "Monitoring dashboard and infrastructure metrics visual",
        caption: "Monitoring stack",
      },
    },
    {
      type: "list",
      props: {
        title: "Delivered",
        items: [
          "Implemented centralized Prometheus and Grafana monitoring.",
          "Integrated AWS CloudWatch for EC2 instance visibility.",
          "Deployed Node Exporter and application-specific telemetry exporters.",
          "Improved real-time performance tracking and operational alerting.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
