import thumbnailDevops from "../../../assets/images/projects/devops/devops-infrastructure.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "ERP/PLM自動化",
    slug: "streakon",
    thumbnail: thumbnailDevops,
    description: "PythonとPowerShellによるデプロイ自動化",
    stack: ["Python", "PowerShell", "Jenkins", "AWS"],
    summary: "ERP/PLM設定、サーバーパッチ、バックアップ作業を自動化し、手作業の運用負荷を削減しました。",
  },
  {
    title: "Azure DevOps CI/CD",
    slug: "cubewar",
    thumbnail: thumbnailDevops,
    description: "社内Git移行とCI/CD基盤",
    stack: ["Azure DevOps", "Git", "YAML", "Jenkins"],
    summary: "Azure DevOps Serverを導入し、Bonobo Git Serverから移行してCI/CD実行を標準化しました。",
  },
  {
    title: "コンテナ化PoC",
    slug: "quibbo",
    thumbnail: thumbnailDevops,
    description: "Docker、Kubernetes、Ansibleによる検証",
    stack: ["Docker", "Kubernetes", "Ansible", "AWS"],
    summary: "レガシーERP/PLMのコンテナ化、ロードバランシング、構成管理の再現性を検証しました。",
  },
  {
    title: "監視スタック",
    slug: "sharkie",
    thumbnail: thumbnailDevops,
    description: "Prometheus、Grafana、AWS監視",
    stack: ["Prometheus", "Grafana", "AWS", "EC2"],
    summary: "インフラメトリクス、EC2可視化、アプリケーションテレメトリを一元監視しました。",
  },
  {
    title: "Moodle導入",
    slug: "pokedex",
    thumbnail: thumbnailDevops,
    description: "社内eラーニング基盤",
    stack: ["Moodle", "MySQL", "PHP", "Apache"],
    summary: "クイズ、認定、評価、進捗管理を備えた社内トレーニング基盤を構築しました。",
  },
] as const satisfies ProjectPreview[];
