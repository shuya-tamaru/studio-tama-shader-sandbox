export const TAGS = {
  RHINO: "Rhinoceros",
  GH: "Grasshopper",
  THREE_JS: "Three.js",
  BLENDER: "Blender",
  R3F: "R3F",
  GH_MODELING: "GH Modeling",
  PYTHON: "Python",
  CSHARP: "C#",
  PLUGIN: "Plugin",
  BASIC: "Basic",
  KANGAROO: "Kangaroo",
  REACT: "React",
  TIPS: "Tips",
  IFC: "IFC",
  AI: "AI",
} as const;

export const TAGS_LIST = Object.values(TAGS);
export type TagsType = (typeof TAGS)[keyof typeof TAGS];
