import devopsImage from "../../../assets/images/projects/devops/devops-infrastructure.png";

import type { ProjectContent } from "../../types";

export default {
  title: "In-House E-Learning Platform Deployment Using Moodle",
  theme: "light",
  tags: ["mysql", "html", "css", "aws"],
  videoBorder: true,
  description:
    "Internal Moodle-based e-learning deployment for technical and onboarding training at WFX.<br/><br/>The platform supported assessments, quizzes, certification, performance tracking, and consistent training delivery for employees and management.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: devopsImage,
        alt: "Internal learning platform deployment visual",
        caption: "Moodle platform deployment",
      },
    },
    {
      type: "list",
      props: {
        title: "Platform outcomes",
        items: [
          "Set up Moodle with MySQL, PHP, and Apache.",
          "Customized assessments, quizzes, certifications, and progress tracking.",
          "Improved consistency of technical and onboarding training.",
          "Enabled management visibility into learning outcomes and employee progress.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
