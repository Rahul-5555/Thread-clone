import { atom } from "recoil";

const postsAtom = atom({
  key: "position",
  default: [],
});

export default postsAtom;