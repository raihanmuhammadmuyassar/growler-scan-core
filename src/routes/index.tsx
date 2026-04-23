import { createFileRoute } from "@tanstack/react-router";

import { GrowlerExperience } from "@/components/growler/growler-experience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GROWLER — AI Threat Intelligence Engine" },
      {
        name: "description",
        content:
          "Immersive AI intelligence console for detecting illegal content, analyzing threat signals, preserving evidence, and orchestrating rapid suppression.",
      },
      { property: "og:title", content: "GROWLER — AI Threat Intelligence Engine" },
      {
        property: "og:description",
        content:
          "Live intelligence interface for analyzing illegal content networks, synthetic abuse escalation, and adaptive intervention workflows.",
      },
      { name: "twitter:title", content: "GROWLER — AI Threat Intelligence Engine" },
      {
        name: "twitter:description",
        content:
          "Interactive threat intelligence console for real-time AI detection, forensic extraction, and quantified suppression decisions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <GrowlerExperience />;
}
