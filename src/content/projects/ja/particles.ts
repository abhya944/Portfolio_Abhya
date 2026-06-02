import devopsImage from "../../../assets/images/projects/devops/devops-infrastructure.png";

import type { ProjectContent } from "../../types";

export default {
  title: "インフラ自動化ラボ",
  theme: "dark",
  tags: ["terraform", "ansible", "aws"],
  videoBorder: false,
  description:
    "ポートフォリオのルートローダー互換性のために保持している補助的なインフラ自動化モジュールです。<br/><br/>再現性のあるプロビジョニング、構成管理、運用信頼性というDevOpsの重点領域を表しています。",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: devopsImage,
        alt: "インフラ自動化のビジュアル",
        caption: "自動化ラボ",
      },
    },
  ],
} as const satisfies ProjectContent;
