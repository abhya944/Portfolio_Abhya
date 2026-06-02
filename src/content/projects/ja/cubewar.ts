import devopsImage from "../../../assets/images/projects/devops/devops-infrastructure.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Azure DevOps Server CI/CDパイプラインとGit移行",
  theme: "dark",
  tags: ["azure", "jenkins", "git", "powershell"],
  videoBorder: false,
  description:
    "WFXでソース管理、ブランチ戦略、CI/CD自動化のための社内Azure DevOps Serverを導入しました。<br/><br/>Bonobo Git ServerからAzure DevOpsへリポジトリを移行し、開発チーム全体のバージョン管理とパイプライン実行を整理しました。",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: devopsImage,
        alt: "CI/CDパイプラインとリポジトリ移行のビジュアル",
        caption: "CI/CDとGit移行",
      },
    },
    {
      type: "list",
      props: {
        title: "スコープ",
        items: [
          "ソース管理とブランチ運用のためにAzure DevOps Serverを構築。",
          "Bonobo Git ServerからGitリポジトリを移行。",
          "再現性のあるCI/CD実行のためのパイプライン基盤を整備。",
          "開発チームが利用する集中型バージョン管理と自動化を改善。",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
