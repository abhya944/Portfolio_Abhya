export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "git"
  | "aws"
  | "azure"
  | "jenkins"
  | "docker"
  | "kubernetes"
  | "ansible"
  | "terraform"
  | "prometheus"
  | "grafana"
  | "python"
  | "powershell"
  | "mssql"
  | "mysql"
  | "postgresql"
  | "ogl"
  | "glsl";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  git: "Git",
  aws: "AWS",
  azure: "Azure DevOps",
  jenkins: "Jenkins",
  docker: "Docker",
  kubernetes: "Kubernetes",
  ansible: "Ansible",
  terraform: "Terraform",
  prometheus: "Prometheus",
  grafana: "Grafana",
  python: "Python",
  powershell: "PowerShell",
  mssql: "MS SQL",
  mysql: "MySQL",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
} as const satisfies Record<TagVariant, string>;
