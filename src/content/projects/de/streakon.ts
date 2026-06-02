import devopsImage from "../../../assets/images/projects/devops/devops-infrastructure.png";

import type { ProjectContent } from "../../types";

export default {
  title: "ERP & PLM Configuration Automation",
  theme: "dark",
  tags: ["python", "powershell", "jenkins", "aws"],
  videoBorder: false,
  description:
    "Automation work for WFX ERP and PLM configuration processes, focused on faster deployments, repeatable server changes, and simpler backup management.<br/><br/>Python and PowerShell scripts were integrated with Jenkins so configuration tasks and server patches could move through a controlled CI/CD workflow.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: devopsImage,
        alt: "Cloud automation and CI/CD infrastructure visual",
        caption: "Automation architecture",
      },
    },
    {
      type: "list",
      props: {
        title: "Key responsibilities",
        items: [
          "Automated ERP and PLM configuration processes with Python and PowerShell.",
          "Created and deployed server patches through Jenkins-based workflows.",
          "Managed backup systems using Amazon S3.",
          "Reduced manual operational effort around server configuration and maintenance.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
