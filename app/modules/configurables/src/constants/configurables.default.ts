/*
 * Default Configurable Data — seeded into Mongo on first boot.
 *
 * BEFORE EDITING: read ./RULES.md (especially R5: schema and defaults must
 * stay in sync) and ./configurables.schema.ts. For per-type schema and
 * default-value samples, see RULES.md §5 "Field Type Reference".
 */

export type TBrandColor = {
  primary: string;
  secondary: string;
  accent: string;
};

export type TDefaultConfigurableData = {
  appName: string;
  logoUrl: string;
  brandColor: TBrandColor;
  heroHeading: string;
  heroSubheading?: string;
  heroBackgroundColor?: string;
  heroTextColor?: string;
};

export const defaultConfigurablesData: TDefaultConfigurableData = {
  appName: "Hello World",
  logoUrl: "FILL_LOGO_URL_HERE",
  brandColor: {
    primary: "#111827",
    secondary: "#374151",
    accent: "#6B7280",
  },
  heroHeading: "Hello World",
  heroSubheading: "",              // fill it here
  heroBackgroundColor: "#ffffff",  // fill it here
  heroTextColor: "#111827",        // fill it here
};
