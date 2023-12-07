// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral50: "#F8FAFC",
  neutral100: "#F1F5F9",
  neutral200: "#E2E8F0",
  neutral300: "#CBD5E1",
  neutral400: "#94A3B8",
  neutral500: "#64748B",
  neutral600: "#475569",
  neutral700: "#334155",
  neutral800: "#1E293B",
  neutral900: "#0F172A",
  neutral950: "#020617",

  primary50: "#F2F7FD",
  primary100: "#E4EEFA",
  primary200: "#C2DDF5",
  primary300: "#8CC0ED",
  primary400: "#4F9FE1",
  primary500: "#2883CF",
  primary600: "#1967B0",
  primary700: "#16538E",
  primary800: "#164776",
  primary900: "#183C62",
  primary950: "#122C4B",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
}
