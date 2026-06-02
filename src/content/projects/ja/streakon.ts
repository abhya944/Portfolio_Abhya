import devopsImage from "../../../assets/images/projects/devops/devops-infrastructure.png";

import type { ProjectContent } from "../../types";

export default {
  title: "ERP/PLM設定自動化",
  theme: "dark",
  tags: ["python", "powershell", "jenkins", "aws"],
  videoBorder: false,
  description:
    "WFXのERP/PLM設定プロセスを自動化し、デプロイの高速化、サーバー変更の再現性向上、バックアップ管理の簡素化を実現しました。<br/><br/>PythonとPowerShellのスクリプトをJenkinsと連携し、設定作業とサーバーパッチを管理されたCI/CDワークフローで実行できるようにしました。",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: devopsImage,
        alt: "クラウド自動化とCI/CDインフラのビジュアル",
        caption: "自動化アーキテクチャ",
      },
    },
    {
      type: "list",
      props: {
        title: "主な担当範囲",
        items: [
          "PythonとPowerShellでERP/PLM設定プロセスを自動化。",
          "Jenkinsベースのワークフローでサーバーパッチを作成・展開。",
          "Amazon S3を使ったバックアップ管理を実施。",
          "サーバー設定と保守に関わる手作業を削減。",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
