export const social = [
  { url: "mailto:abhya.s944@outlook.com", name: "mail" },
  { url: "https://www.github.com/abhya944", name: "github" },
  { url: "https://www.linkedin.com/in/abhya944/", name: "linkedin" },
  { url: "https://abhya-s944.medium.com/", name: "medium" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "medium" | "x" }[];
