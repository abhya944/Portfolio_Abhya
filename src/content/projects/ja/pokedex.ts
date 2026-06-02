import devopsImage from "../../../assets/images/projects/devops/devops-infrastructure.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Moodleによる社内eラーニング基盤導入",
  theme: "light",
  tags: ["mysql", "html", "css", "aws"],
  videoBorder: true,
  description:
    "WFX社内の技術研修とオンボーディングのために、Moodleベースのeラーニング基盤を導入しました。<br/><br/>評価、クイズ、認定、進捗管理に対応し、従業員教育の標準化と管理側の可視性向上に貢献しました。",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: devopsImage,
        alt: "社内学習プラットフォーム導入のビジュアル",
        caption: "Moodle基盤導入",
      },
    },
    {
      type: "list",
      props: {
        title: "プラットフォームの成果",
        items: [
          "Moodle、MySQL、PHP、Apacheで基盤を構築。",
          "評価、クイズ、認定、進捗追跡をカスタマイズ。",
          "技術研修とオンボーディングの一貫性を改善。",
          "学習成果と従業員の進捗を管理者が確認できるようにしました。",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
