import devopsImage from "../../../assets/images/projects/devops/devops-infrastructure.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Prometheus、Grafana、AWSによるリアルタイム監視",
  theme: "dark",
  tags: ["prometheus", "grafana", "aws"],
  videoBorder: false,
  description:
    "リアルタイムのパフォーマンス追跡、システムメトリクスの可視化、EC2の状態把握を目的とした集中監視を実装しました。<br/><br/>Prometheus、Grafana、AWS監視機能、各種エクスポーターを組み合わせ、運用状況とアラート対応を改善しました。",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: devopsImage,
        alt: "監視ダッシュボードとインフラメトリクスのビジュアル",
        caption: "監視スタック",
      },
    },
    {
      type: "list",
      props: {
        title: "成果",
        items: [
          "PrometheusとGrafanaによる集中監視を実装。",
          "AWSの監視機能を連携し、EC2インスタンスの可視性を向上。",
          "アプリケーション固有のテレメトリ取得を整備。",
          "リアルタイムな性能追跡と運用アラートを改善。",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
