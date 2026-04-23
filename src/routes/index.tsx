import { createFileRoute } from "@tanstack/react-router";

import { GrowlerExperience } from "@/components/growler/growler-experience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GROWLER — AI Threat Intelligence Engine" },
      {
        name: "description",
        content:
          "Immersive AI intelligence console for live detection, forensic analysis, and suppression of illegal digital content.",
      },
      { property: "og:title", content: "GROWLER — AI Threat Intelligence Engine" },
      {
        property: "og:description",
        content:
          "Live intelligence interface for detecting suspicious domains, analyzing harmful content, and orchestrating rapid response.",
      },
      { name: "twitter:title", content: "GROWLER — AI Threat Intelligence Engine" },
      {
        name: "twitter:description",
        content:
          "Interactive threat intelligence console for real-time AI-powered detection and forensic extraction.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <GrowlerExperience />;
}
