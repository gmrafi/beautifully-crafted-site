export function pageMeta(title: string, description: string) {
  return { meta: [
    { title: `${title} | Algorism Press` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | Algorism Press` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] };
}