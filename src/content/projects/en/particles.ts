import devopsImage from "../../../assets/images/projects/devops/devops-infrastructure.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Infrastructure Automation Lab",
  theme: "dark",
  tags: ["terraform", "ansible", "aws"],
  videoBorder: false,
  description:
    "A supporting infrastructure automation module kept for compatibility with the portfolio route loader.<br/><br/>It reflects the same DevOps focus as the active project set: repeatable provisioning, configuration management, and operational reliability.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: devopsImage,
        alt: "Infrastructure automation visual",
        caption: "Automation lab",
      },
    },
  ],
} as const satisfies ProjectContent;
