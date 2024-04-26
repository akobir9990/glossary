import { create } from "zustand";
import { fakeData } from "../data/fakeData";

export const useStore = create((set) => ({
  fakeData: fakeData,
  search: (val) =>
    set((state) =>
      state.fakeData.filter((item) => {
        let text = val.toLowerCase();
        let term = item.term.toLowerCase();
        return term.indexOf(text);
      })
    ),
}));
