import type { ReactNode } from "react";

import {
  Activity,
  Binary,
  Bot,
  BrainCircuit,
  Camera,
  ChevronRight,
  Clock3,
  Crosshair,
  Eye,
  FileImage,
  FileSearch,
  Globe,
  Layers3,
  Radar,
  ScanLine,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Waypoints,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  GrowlerMetric,
  GrowlerPanel,
  GrowlerSectionHeading,
  GrowlerStatusChip,
  GrowlerThreatMeter,
} from "./growler-primitives";

const bootLines = [
  "Initializing GROWLER Engine...",
  "Scanning Global Network...",
  "Threat Detection System: ACTIVE",
];

const liveFeed = [
  {
    title: "Detected: Suspicious Domain",
    source: "Node 41 // Eastern Europe",
    timestamp: "03:14:28 UTC",
    risk: 94,
    detail: "Rapid propagation pattern and cloaked redirects linked to repeated abuse clusters.",
  },
  {
    title: "Flagged: AI-generated content",
    source: "Media Sweep // Sector 12",
    timestamp: "03:15:01 UTC",
    risk: 88,
    detail: "Synthetic image chain matches known grooming signatures and illicit distribution prompts.",
  },
  {
    title: "Risk Level: HIGH",
    source: "Behavioral Model // Cluster R7",
    timestamp: "03:15:44 UTC",
    risk: 97,
    detail: "Escalation triggered after context classifier detected intent transfer across mirrored channels.",
  },
];

const widgets = [
  { label: "Threats Neutralized", value: "18,274", detail: "+312 in the last cycle" },
  { label: "Active Crawlers", value: "1,284", detail: "91 jurisdictions mapped" },
  { label: "Suppression Latency", value: "0.84s", detail: "Median response window" },
  { label: "Evidence Packages", value: "426", detail: "Chain-of-custody preserved" },
];

const impactPanels = [
  { label: "Psychological Harm Index", value: "0.91", detail: "Escalates when repeat exposure patterns appear." },
  { label: "Exploitation Risk Level", value: "SEV-5", detail: "Composite score combining vulnerability signals and spread intent." },
  { label: "Content Spread Velocity", value: "14.2x", detail: "Monitors how quickly harmful assets replicate across nodes." },
];

const legacyMethods = ["DNS Blocking", "IP Blocking", "Static Filters"];
const growlerMethods = ["Adaptive intelligence", "Pattern recognition", "Context-aware filtering"];

const engineLayers = [
  { name: "Layer 1", title: "Signal Collection", detail: "Crawlers, feeds, image hashes, link graphs, and operator telemetry." },
  { name: "Layer 2", title: "Semantic Analysis", detail: "Language models inspect meaning, intent, coercion cues, and coded references." },
  { name: "Layer 3", title: "Behavioral Modeling", detail: "Detects actor repetition, migration patterns, and relationship structures." },
  { name: "Layer 4", title: "Risk Scoring Engine", detail: "Assigns weighted confidence based on multi-signal convergence." },
  { name: "Layer 5", title: "Decision Layer", detail: "Routes suppression, escalation, and evidence preservation actions." },
];

const capabilities = [
  "Multi-format Content Intelligence",
  "Parallel Processing Engine",
  "Confidence-Based Decision System",
  "Continuous Learning Model",
  "Ultra-Low Latency Processing",
];

const logs = [
  "03:15:12 // Analyzing domain...",
  "03:15:13 // Mapping outbound links...",
  "03:15:14 // Intent detected: coercive funnel",
  "03:15:15 // Confidence threshold exceeded",
  "03:15:16 // Evidence block committed",
];

const timeline = [
  { time: "03:11:02", event: "Crawler beacon receives new hidden service pointer", status: "signal" as const },
  { time: "03:12:40", event: "Semantic engine correlates prompt patterns with prior incidents", status: "danger" as const },
  { time: "03:15:16", event: "Suppression workflow initiated and forensic extraction stored", status: "success" as const },
];

export function GrowlerExperience() {
  return (
    <main className="console-stage terminal-noise dark min-h-screen overflow-hidden bg-background text-foreground">
      <div className="data-stream" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 lg:px-8">
        <section className="console-section min-h-[92svh] pt-6 sm:pt-10">
          <div className="console-panel rounded-lg px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <GrowlerStatusChip label="Threat Monitoring Active" tone="signal" />
                <span className="console-label">GROWLER AI System</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="signal-chip">LAT 51.5074 • LON 0.1278</span>
                <span className="signal-chip">UTC 03:15:44</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 pt-8 lg:grid-cols-[1.3fr_0.8fr] lg:items-end">
            <div className="space-y-6">
              <div className="space-y-3">
                {bootLines.map((line, index) => (
                  <div className="boot-line" key={line} style={{ animationDelay: `${index * 180}ms` }}>
                    <span className={index === 2 ? "status-dot status-dot--success" : "status-dot"} />
                    <span>{line}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <p className="console-kicker">AI Threat Intelligence Engine</p>
                <h1 className="console-title glitch-text max-w-4xl text-balance">
                  GROWLER — Intelligence Against Illegal Content
                </h1>
                <p className="console-copy text-base sm:text-lg">
                  Real-time AI-powered detection, analysis, and suppression of harmful digital ecosystems.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="justify-between font-mono uppercase" size="lg" variant="signal">
                  Launch Interface
                  <ChevronRight />
                </Button>
                <Button className="font-mono uppercase" size="lg" variant="console">
                  Observe Live Signals
                </Button>
              </div>
            </div>

            <GrowlerPanel className="surface-glow overflow-hidden">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="console-label">System Overview</p>
                  <p className="mt-2 text-lg font-medium">Neural suppression mesh synchronized</p>
                </div>
                <Radar className="text-primary" />
              </div>
              <div className="hud-divider my-5" />
              <div className="grid gap-4 sm:grid-cols-2">
                {widgets.map((widget) => (
                  <GrowlerMetric key={widget.label} {...widget} />
                ))}
              </div>
              <div className="hud-divider my-5" />
              <div className="grid gap-3 font-mono text-xs text-muted-foreground">
                {logs.map((log) => (
                  <div className="flex items-center gap-3" key={log}>
                    <span className="status-dot" />
                    <span>{log}</span>
                  </div>
                ))}
              </div>
            </GrowlerPanel>
          </div>
        </section>

        <section className="console-section space-y-6">
          <GrowlerSectionHeading
            eyebrow="Live Threat Feed"
            title="Continuous threat discovery across domains, synthetic assets, and covert link maps"
            description="Signals arrive as live forensic events, scored and escalated by converging AI classifiers."
          />
          <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4">
              {liveFeed.map((item) => (
                <GrowlerPanel className="group transition-transform duration-200 hover:-translate-y-1" key={item.title}>
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <GrowlerStatusChip label={item.timestamp} tone="danger" />
                        <span className="console-label">{item.source}</span>
                      </div>
                      <h3 className="text-xl font-medium">{item.title}</h3>
                      <p className="max-w-2xl text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                    <div className="min-w-56 space-y-3 lg:max-w-64">
                      <GrowlerThreatMeter value={item.risk} />
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="rounded-md border border-border bg-surface/70 p-3">
                          <p className="console-label">Threat Class</p>
                          <p className="mt-2 font-mono text-primary">ILLEGAL CONTENT</p>
                        </div>
                        <div className="rounded-md border border-border bg-surface/70 p-3">
                          <p className="console-label">Priority</p>
                          <p className="mt-2 font-mono text-danger">Immediate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </GrowlerPanel>
              ))}
            </div>
            <GrowlerPanel>
              <p className="console-label">Detected Activity Timeline</p>
              <div className="mt-5 space-y-4">
                {timeline.map((item) => (
                  <div className="grid grid-cols-[auto_1fr] gap-4" key={item.time}>
                    <div className="flex flex-col items-center gap-2">
                      <GrowlerStatusChip label={item.time} tone={item.status} />
                    </div>
                    <div className="rounded-md border border-border bg-surface/60 p-4 text-sm text-muted-foreground">
                      {item.event}
                    </div>
                  </div>
                ))}
              </div>
              <div className="hud-divider my-5" />
              <div className="grid gap-3 sm:grid-cols-2">
                <GrowlerMetric label="Signals Ingested" value="8.4M" detail="Across text, image, URL, and metadata streams" />
                <GrowlerMetric label="Threat Confidence" value="92%" detail="Current live-model certainty after ensemble review" />
              </div>
            </GrowlerPanel>
          </div>
        </section>

        <section className="console-section space-y-6">
          <GrowlerSectionHeading
            eyebrow="Impact Visualization"
            title="Analytical panels quantify human harm, exploitation pressure, and spread velocity"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {impactPanels.map((panel, index) => (
              <GrowlerPanel key={panel.label} className="overflow-hidden">
                <div className="flex items-center justify-between gap-4">
                  <p className="max-w-40 text-base font-medium">{panel.label}</p>
                  {index === 0 ? <BrainCircuit className="text-primary" /> : index === 1 ? <ShieldAlert className="text-danger" /> : <Activity className="text-warning" />}
                </div>
                <p className="mt-8 font-mono text-4xl text-foreground">{panel.value}</p>
                <p className="mt-4 text-sm text-muted-foreground">{panel.detail}</p>
                <GrowlerThreatMeter className="mt-6" value={index === 0 ? 91 : index === 1 ? 96 : 84} />
              </GrowlerPanel>
            ))}
          </div>
        </section>

        <section className="console-section space-y-6">
          <GrowlerSectionHeading
            eyebrow="Suppression Benchmark"
            title="Traditional blocking fails once adversaries adapt. GROWLER continues learning in motion."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            <GrowlerPanel>
              <div className="flex items-center gap-3">
                <Siren className="text-danger" />
                <h3 className="text-xl font-medium">Old Methods</h3>
              </div>
              <div className="mt-6 space-y-3">
                {legacyMethods.map((item) => (
                  <div className="rounded-md border border-border bg-surface/60 p-4" key={item}>
                    <p className="font-mono text-sm text-muted-foreground">{item}</p>
                    <p className="mt-2 text-sm text-muted-foreground">Single-point interventions miss context, mutation, and coordinated evasion.</p>
                  </div>
                ))}
              </div>
            </GrowlerPanel>
            <GrowlerPanel className="surface-glow">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-primary" />
                <h3 className="text-xl font-medium">GROWLER AI</h3>
              </div>
              <div className="mt-6 space-y-3">
                {growlerMethods.map((item) => (
                  <div className="rounded-md border border-primary/25 bg-primary/10 p-4" key={item}>
                    <p className="font-mono text-sm text-primary">{item}</p>
                    <p className="mt-2 text-sm text-muted-foreground">Responds to narrative changes, behavioral drift, and cross-format signatures in real time.</p>
                  </div>
                ))}
              </div>
            </GrowlerPanel>
          </div>
        </section>

        <section className="console-section space-y-6">
          <GrowlerSectionHeading
            eyebrow="Inside the GROWLER Engine"
            title="Five layers coordinate signal intake, semantic reasoning, behavioral modeling, and final decisions"
          />
          <div className="grid gap-3 lg:grid-cols-5">
            {engineLayers.map((layer, index) => (
              <GrowlerPanel key={layer.title} className="flex min-h-64 flex-col justify-between gap-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="console-kicker">{layer.name}</span>
                  {index === 0 ? <Globe className="text-primary" /> : index === 1 ? <Bot className="text-primary" /> : index === 2 ? <Waypoints className="text-primary" /> : index === 3 ? <Binary className="text-primary" /> : <Crosshair className="text-primary" />}
                </div>
                <div>
                  <h3 className="text-lg font-medium">{layer.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{layer.detail}</p>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-primary">
                  <span className="status-dot" />
                  <span>{index === engineLayers.length - 1 ? "Actionable output ready" : "Streaming to next layer"}</span>
                </div>
              </GrowlerPanel>
            ))}
          </div>
        </section>

        <section className="console-section space-y-6">
          <GrowlerSectionHeading
            eyebrow="Deep Analysis Simulation"
            title="See text, imagery, links, and intent converge into one confidence-driven decision"
          />
          <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
            <GrowlerPanel>
              <div className="flex items-center justify-between gap-3">
                <p className="console-label">Live Object Review</p>
                <GrowlerStatusChip label="Confidence: 92%" tone="signal" />
              </div>
              <div className="mt-5 grid gap-4">
                <div className="rounded-md border border-border bg-surface/60 p-4">
                  <div className="flex items-center gap-2 text-sm">
                    <FileSearch className="size-4 text-primary" />
                    <span className="font-mono text-primary">Text Fragment</span>
                  </div>
                  <p className="mt-3 font-mono text-sm leading-6 text-muted-foreground">
                    “private vault / no trace / fast invite / new model set / access after crypto confirmation”
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <GrowlerStatusChip label="Intent Detected" tone="danger" />
                    <GrowlerStatusChip label="Context Classified" tone="signal" />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-md border border-border bg-surface/60 p-4">
                    <div className="flex items-center gap-2 text-sm">
                      <FileImage className="size-4 text-warning" />
                      <span className="font-mono text-warning">Image Flagged</span>
                    </div>
                    <div className="forensic-grid mt-4 aspect-[4/3] rounded-md border border-border bg-card/40 p-3">
                      <div className="flex h-full items-center justify-center rounded-md border border-danger/30 bg-danger/10">
                        <Eye className="text-danger" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md border border-border bg-surface/60 p-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Waypoints className="size-4 text-primary" />
                      <span className="font-mono text-primary">Link Mapping</span>
                    </div>
                    <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                      <div className="rounded-md border border-border p-3">Hub → mirror-17 → vault-store</div>
                      <div className="rounded-md border border-border p-3">Alias overlap detected in 3 nodes</div>
                      <div className="rounded-md border border-border p-3">Distribution graph expands at 14.2x baseline</div>
                    </div>
                  </div>
                </div>
              </div>
            </GrowlerPanel>

            <GrowlerPanel>
              <p className="console-label">Decision Trace</p>
              <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
                <TraceNode icon={<ScanLine className="text-primary" />} title="Parse" detail="Entity extraction" />
                <Layers3 className="mx-auto hidden text-primary lg:block" />
                <TraceNode icon={<BrainCircuit className="text-warning" />} title="Context" detail="Coercion markers" />
                <Layers3 className="mx-auto hidden text-primary lg:block" />
                <TraceNode icon={<ShieldAlert className="text-danger" />} title="Action" detail="Suppress + retain evidence" />
              </div>
              <div className="hud-divider my-6" />
              <div className="grid gap-4 md:grid-cols-3">
                <GrowlerMetric label="Intent Score" value="0.87" detail="Suspicious solicitation cues elevated" />
                <GrowlerMetric label="Context Match" value="0.93" detail="Similar to archived illegal ecosystems" />
                <GrowlerMetric label="Suppression Path" value="AUTO" detail="Immediate escalation to intervention layer" />
              </div>
            </GrowlerPanel>
          </div>
        </section>

        <section className="console-section space-y-6">
          <GrowlerSectionHeading
            eyebrow="Operational Capabilities"
            title="Designed for constant signal intake, precision scoring, and evidence-grade intervention"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {capabilities.map((capability, index) => (
              <GrowlerPanel key={capability} className="min-h-48 transition-transform duration-200 hover:-translate-y-1">
                <div className="flex h-full flex-col justify-between gap-8">
                  <div className="flex items-center justify-between gap-3">
                    <span className="console-kicker">0{index + 1}</span>
                    <Activity className="text-primary" />
                  </div>
                  <h3 className="text-lg font-medium text-balance">{capability}</h3>
                </div>
              </GrowlerPanel>
            ))}
          </div>
        </section>

        <section className="console-section space-y-6">
          <GrowlerSectionHeading
            eyebrow="Forensic Extraction Mode"
            title="A digital crime lab interface for capture, metadata validation, and evidence preservation"
          />
          <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
            <GrowlerPanel>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="console-label">Capture Interface</p>
                  <p className="mt-2 text-lg font-medium">Visual evidence session locked</p>
                </div>
                <Camera className="text-primary" />
              </div>
              <div className="forensic-grid mt-5 aspect-[16/9] rounded-lg border border-border bg-card/50 p-4">
                <div className="flex h-full flex-col justify-between rounded-md border border-primary/20 bg-panel/70 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <GrowlerStatusChip label="Screenshot Capture" tone="signal" />
                    <span className="console-label">Frame 0042</span>
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="rounded-md border border-border bg-surface/60 p-3">
                      <p className="console-label">Source</p>
                      <p className="mt-2 font-mono text-sm">hidden-service.onion</p>
                    </div>
                    <div className="rounded-md border border-border bg-surface/60 p-3">
                      <p className="console-label">Hash</p>
                      <p className="mt-2 font-mono text-sm">91AF:77D2</p>
                    </div>
                    <div className="rounded-md border border-border bg-surface/60 p-3">
                      <p className="console-label">Operator</p>
                      <p className="mt-2 font-mono text-sm">Node R-17</p>
                    </div>
                  </div>
                </div>
              </div>
            </GrowlerPanel>

            <div className="grid gap-4">
              <GrowlerPanel>
                <div className="flex items-center gap-3">
                  <Clock3 className="text-warning" />
                  <p className="text-lg font-medium">Metadata Logs</p>
                </div>
                <div className="mt-5 space-y-3 font-mono text-xs text-muted-foreground">
                  <div className="rounded-md border border-border bg-surface/60 p-3">03:15:22 // EXIF stripped, origin inferred via transport chain</div>
                  <div className="rounded-md border border-border bg-surface/60 p-3">03:15:25 // Visual fingerprint aligned with archived evidence pack</div>
                  <div className="rounded-md border border-border bg-surface/60 p-3">03:15:30 // Custody token issued for secure retention</div>
                </div>
              </GrowlerPanel>
              <GrowlerPanel>
                <div className="flex items-center gap-3">
                  <FileSearch className="text-primary" />
                  <p className="text-lg font-medium">Evidence Storage Blocks</p>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Case ID", "GR-2084"],
                    ["Retention", "Immutable"],
                    ["Jurisdiction", "Multi-region"],
                  ].map(([label, value]) => (
                    <div className="rounded-md border border-border bg-surface/60 p-3" key={label}>
                      <p className="console-label">{label}</p>
                      <p className="mt-2 font-mono text-sm text-primary">{value}</p>
                    </div>
                  ))}
                </div>
              </GrowlerPanel>
            </div>
          </div>
        </section>

        <section className="console-section pb-12">
          <GrowlerPanel className="surface-glow">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-4">
                <p className="console-kicker">Final Interface Access</p>
                <h2 className="console-title max-w-3xl text-balance">Request System Access</h2>
                <p className="console-copy text-sm sm:text-base">
                  Authorized teams gain access to live intelligence, forensic extraction workflows, and adaptive suppression controls.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button className="font-mono uppercase" size="lg" variant="signal">
                  Request Authorization
                </Button>
                <Button className="font-mono uppercase" size="lg" variant="console">
                  Contact Operations
                </Button>
              </div>
            </div>
          </GrowlerPanel>
        </section>

        <footer className="border-t border-border py-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-sm text-foreground">GROWLER AI System</p>
            <p className="text-sm text-muted-foreground">Monitoring • Analyzing • Protecting</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

function TraceNode({
  icon,
  title,
  detail,
}: {
  icon: ReactNode;
  title: string;
  detail: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-surface/60 p-4">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="font-mono text-sm text-primary">{title}</p>
          <p className="text-sm text-muted-foreground">{detail}</p>
        </div>
      </div>
    </div>
  );
}