import devopsImage from "../../../assets/images/projects/devops/devops-infrastructure.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Azure DevOps Server CI/CD Pipeline and Git Migration",
  theme: "dark",
  tags: ["azure", "jenkins", "git", "powershell"],
  videoBorder: false,
  description:
    "Deployment of an in-house Azure DevOps Server for source control, branching strategy, and CI/CD automation at WFX.<br/><br/>The work included migrating repositories from Bonobo Git Server to Azure DevOps and streamlining pipeline execution across development teams.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: devopsImage,
        alt: "CI/CD pipeline and repository migration visual",
        caption: "CI/CD and Git migration",
      },
    },
    {
      type: "list",
      props: {
        title: "Scope",
        items: [
          "Set up Azure DevOps Server for source control and branching workflows.",
          "Migrated Git repositories from Bonobo Git Server.",
          "Built YAML pipeline foundations for repeatable CI/CD execution.",
          "Improved development team access to centralized version control and automation.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
