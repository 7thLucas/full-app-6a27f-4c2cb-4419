import { useConfigurables } from "~/modules/configurables";

export default function IndexPage() {
  const { config, loading } = useConfigurables();

  const heading = loading ? "" : (config.heroHeading ?? "Hello W");
  const subheading = loading ? "" : (config.heroSubheading ?? "");
  const bgColor = loading ? "#ffffff" : (config.heroBackgroundColor ?? "#ffffff");
  const textColor = loading ? "#111827" : (config.heroTextColor ?? "#111827");

  return (
    <main
      className="min-h-screen w-full flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <section className="text-center px-6 select-none">
        {loading ? (
          <div className="w-64 h-20 bg-gray-100 rounded-2xl animate-pulse mx-auto" />
        ) : (
          <>
            <h1
              className="font-extrabold tracking-tight leading-none text-7xl sm:text-8xl lg:text-9xl"
              style={{ color: textColor }}
            >
              {heading}
            </h1>
            {subheading && (
              <p
                className="mt-6 text-xl sm:text-2xl font-light"
                style={{ color: textColor, opacity: 0.65 }}
              >
                {subheading}
              </p>
            )}
          </>
        )}
      </section>
    </main>
  );
}
