export default function sitemap() {
  return [
    {
      url: "https://pachecoshardwoodfloor.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];
}
