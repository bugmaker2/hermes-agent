import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Activity, BarChart3, Clock, FileText, KeyRound, MessageSquare, Package, Settings } from "lucide-react";
import StatusPage from "@/pages/StatusPage";
import ConfigPage from "@/pages/ConfigPage";
import EnvPage from "@/pages/EnvPage";
import SessionsPage from "@/pages/SessionsPage";
import LogsPage from "@/pages/LogsPage";
import AnalyticsPage from "@/pages/AnalyticsPage";
import CronPage from "@/pages/CronPage";
import SkillsPage from "@/pages/SkillsPage";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n";

const NAV_ITEMS = [
  { path: "/", labelKey: "status" as const, icon: Activity },
  { path: "/sessions", labelKey: "sessions" as const, icon: MessageSquare },
  { path: "/analytics", labelKey: "analytics" as const, icon: BarChart3 },
  { path: "/logs", labelKey: "logs" as const, icon: FileText },
  { path: "/cron", labelKey: "cron" as const, icon: Clock },
  { path: "/skills", labelKey: "skills" as const, icon: Package },
  { path: "/config", labelKey: "config" as const, icon: Settings },
  { path: "/env", labelKey: "keys" as const, icon: KeyRound },
] as const;

export default function App() {
  const { t } = useI18n();

  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      {/* Ambient background orbs — Nous blue palette */}
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      {/* Subtle noise grain overlay */}
      <div className="noise-overlay" />
      <div className="warm-glow" />

      {/* Fixed header with glass effect */}
      <header className="fixed top-0 left-0 right-0 z-40 glass border-b border-glass-border">
        <div className="mx-auto flex h-12 max-w-[1400px] items-stretch">

          {/* Brand — compact terminal mark */}
          <div className="flex items-center border-r border-glass-border px-3 sm:px-5 shrink-0 group">
            <span className="font-collapse text-base sm:text-lg font-bold tracking-[0.15em] uppercase text-foreground/70 group-hover:text-foreground transition-colors duration-200">
              H<span className="hidden sm:inline">ermes</span>
            </span>
            {/* Live indicator dot — Nous blue */}
            <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[#3050FF] pulse-glow" />
          </div>

          {/* Navigation */}
          <nav className="flex items-stretch overflow-x-auto scrollbar-none">
            {NAV_ITEMS.map(({ path, labelKey, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `group relative inline-flex items-center gap-1 sm:gap-1.5 border-r border-glass-border px-2.5 sm:px-4 py-2 font-display text-[0.65rem] sm:text-[0.8rem] tracking-[0.12em] uppercase whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover-lift ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon className="h-4 w-4 sm:h-3.5 sm:w-3.5 shrink-0" />
                    <span className="hidden sm:inline">{t.app.nav[labelKey]}</span>
                    {/* Hover glow effect */}
                    <span className="absolute inset-0 bg-foreground pointer-events-none transition-opacity duration-150 group-hover:opacity-5 opacity-0" />
                    {/* Active indicator — Nous blue accent line */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3050FF] to-transparent" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Header actions */}
          <div className="ml-auto flex items-center gap-2 px-2 sm:px-4">
            <LanguageSwitcher />
            <span className="hidden sm:inline font-display text-[0.7rem] tracking-[0.15em] uppercase opacity-40">
              {t.app.webUi}
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-2 mx-auto w-full max-w-[1400px] flex-1 px-3 sm:px-6 pt-16 sm:pt-20 pb-4 sm:pb-8">
        <div className="page-enter">
          <Routes>
            <Route path="/" element={<StatusPage />} />
            <Route path="/sessions" element={<SessionsPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/logs" element={<LogsPage />} />
            <Route path="/cron" element={<CronPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/config" element={<ConfigPage />} />
            <Route path="/env" element={<EnvPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-2 glass border-t border-glass-border">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-3 sm:px-6 py-3">
          <span className="font-display text-[0.7rem] sm:text-[0.8rem] tracking-[0.12em] uppercase opacity-40">
            {t.app.footer.name}
          </span>
          <span className="font-display text-[0.6rem] sm:text-[0.7rem] tracking-[0.15em] uppercase text-foreground/30">
            {t.app.footer.org}
          </span>
        </div>
      </footer>
    </div>
  );
}
