import { create } from "zustand";

export const ClippingType = {
  BOX: "box",
  SPHERE: "sphere",
  PLANES: "planes",
} as const;

export type ClippingType = (typeof ClippingType)[keyof typeof ClippingType];

type ClippingSelectorState = {
  clippingType: ClippingType;
  setClippingType: (clippingType: ClippingType) => void;
};

const useClippingSelector = create<ClippingSelectorState>((set) => ({
  clippingType: ClippingType.SPHERE,
  setClippingType: (clippingType: ClippingType) => set({ clippingType }),
}));

export default useClippingSelector;
