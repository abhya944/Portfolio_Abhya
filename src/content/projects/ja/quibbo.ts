import devopsImage from "../../../assets/images/projects/devops/devops-infrastructure.png";

import type { ProjectContent } from "../../types";

export default {
  title: "ERP/PLMアプリケーションのコンテナ化とロードバランシング",
  theme: "light",
  tags: ["docker", "kubernetes", "ansible", "aws"],
  videoBorder: true,
  description:
    "DockerとKubernetesを使ってレガシーERP/PLMアプリケーションをコンテナ化するための調査とPoCを進めました。<br/><br/>Kubernetesベースのロードバランシングと一貫した構成管理により、リソース利用、可用性、再現性の改善を目指しました。",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: devopsImage,
        alt: "コンテナオーケストレーションとロードバランシングのビジュアル",
        caption: "コンテナ化PoC",
      },
    },
    {
      type: "list",
      props: {
        title: "重点領域",
        items: [
          "DockerでレガシーERP/PLMワークロードをコンテナ化。",
          "KubernetesとAWS上のデプロイパターンを検証。",
          "Kubernetesベースのロードバランシング戦略を設計。",
          "分散環境の構成管理のためにAnsible playbookを作成。",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
