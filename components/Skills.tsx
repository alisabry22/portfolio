"use client";

const flutterStack = [
  "Flutter",
  "Dart",
  "Riverpod",
  "Bloc",
  "GetX",
  "Provider",
  "Hive",
  "Isar",
  "Drift / SQLite",
  "Realm",
  "GoRouter",
  "Melos",
  "Firebase",
  "Supabase",
  "RevenueCat",
  "Stripe",
  "FCM / APNs",
  "Crashlytics",
  "Sentry",
  "Mixpanel",
  "Fastlane",
  "App Store Connect",
  "Play Console",
];

const groups = [
  {
    title: "Web & backend",
    items: ["Next.js", "TypeScript", "Node.js", "Express", "REST / GraphQL", "PostgreSQL", "Prisma"],
  },
  {
    title: "AI & integrations",
    items: ["OpenAI / Claude", "Whisper", "Vector DBs", "OCR", "LangChain", "On-device ML"],
  },
  {
    title: "Tooling & process",
    items: ["Git / GitHub", "CI / CD", "Figma → code", "Code review", "Agile sprints"],
  },
];

export default function Skills() {
  return (
    <section id="stack" className="divider py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div>
            <span className="eyebrow">Stack</span>
            <h2
              className="mt-4 font-display leading-[1] tracking-[-0.02em] text-[var(--text)]"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
            >
              Built around Flutter.
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] leading-[1.75] text-[var(--text-2)]">
              Mobile is my home base — paired with a wider stack so I can take
              a product from idea to App Store, Play Store, and the web.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Featured Flutter cluster */}
            <div className="card p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    Primary expertise
                  </div>
                  <h3 className="mt-2 text-[1.4rem] font-semibold text-[var(--text)]">
                    Senior Flutter / Dart
                  </h3>
                </div>
                <span className="tag tag-accent">6+ yrs</span>
              </div>
              <p className="mt-3 max-w-xl text-[0.88rem] leading-[1.7] text-[var(--text-2)]">
                Architecture, state management, performance, native channels,
                CI/CD, and store delivery — end to end.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {flutterStack.map((t, i) => (
                  <span
                    key={t}
                    className={i < 3 ? "tag tag-accent" : "tag"}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Other groups */}
            <div className="grid gap-3 sm:grid-cols-3">
              {groups.map((g) => (
                <div key={g.title} className="card p-5">
                  <h3 className="text-[0.92rem] font-semibold text-[var(--text)]">
                    {g.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {g.items.map((i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-[0.82rem] text-[var(--text-2)]"
                      >
                        <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
