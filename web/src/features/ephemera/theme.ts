// Ephemera 私人紙品配色：沿用既有 skin、票根與地圖 token，不修改引擎。
// 四套皮肤在 Me 页切换,整套一起换;地图页那套 MAPPAL 跟着皮肤走。
// 一次约会自己的颜色(他从固定色组挑)只上历史票根、书脊、盒盖——不随外壳皮肤变(原型 PAST_COL 注释)。
import { F } from "../../fonts";

export type SkinKey = "ivory" | "blue" | "warm" | "bright";
export const SKIN_ORDER: SkinKey[] = ["ivory", "blue", "warm", "bright"];

export type Skin = {
  name: string;
  bg: string; ink: string; deep: string; btn: string; sh: string; // sh = 阴影用的 "r,g,b"
  big: { c: string; l: string; panel: string; art: string };
  paper: string; paper2: string;
  envPaper: string; envBack: string; seal: string; sealHi: string; tag: string; tagT: string;
  pack: string; // 首页 Hidden Plans 绳子捆的小纸包(原型 hidden[1])
};

export const SKINS: Record<SkinKey, Skin> = {
  ivory: { name: "森林紙", bg: "#F7F4EC", ink: "#2F3836", deep: "#314D44", btn: "#314D44", sh: "45,54,49",
    big: { c: "#E5E8DD", l: "#314D44", panel: "#CCD6CB", art: "#F7F4EC" }, paper: "#FFFEF9", paper2: "#E9E5DA",
    envPaper: "#ECE8DE", envBack: "#DAD9CF", seal: "#415B51", sealHi: "#AEBBAE", tag: "#314D44", tagT: "#fff", pack: "#E4E9E3" },
  blue: { name: "墨藍紙", bg: "#F4F4F0", ink: "#333D46", deep: "#303F50", btn: "#303F50", sh: "51,61,71",
    big: { c: "#D8E0E4", l: "#303F50", panel: "#BAC9D0", art: "#F8F9F6" }, paper: "#FCFCF9", paper2: "#E7ECEC",
    envPaper: "#E4E8E7", envBack: "#D5DEE0", seal: "#3C5162", sealHi: "#B1C0C4", tag: "#3C5162", tagT: "#fff", pack: "#E3E9EA" },
  warm: { name: "茶灰紙", bg: "#F6F1E9", ink: "#47413B", deep: "#655D50", btn: "#655D50", sh: "74,66,57",
    big: { c: "#EEE4D3", l: "#655D50", panel: "#D9CEBA", art: "#FFFBF5" }, paper: "#FFFAF2", paper2: "#E8DDCC",
    envPaper: "#EFE6D9", envBack: "#DED3C2", seal: "#716459", sealHi: "#D1C5B6", tag: "#655D50", tagT: "#fff", pack: "#E9E2D7" },
  bright: { name: "冷霧紙", bg: "#F6F7F5", ink: "#343F3C", deep: "#3C5750", btn: "#3C5750", sh: "53,62,58",
    big: { c: "#E1EAE4", l: "#3C5750", panel: "#C6D6CB", art: "#F7FAF8" }, paper: "#FFFFFF", paper2: "#E6ECE8",
    envPaper: "#E7EFE9", envBack: "#D2DED8", seal: "#416459", sealHi: "#AEC8B9", tag: "#416459", tagT: "#fff", pack: "#E3ECE6" },
};

// 地图页 / 路线页 / 纪念盒(--m-*)
export type MapPal = { page: string; land: string; street: string; water: string; park: string; ink: string; title: string;
  route: string; card: string; chip: string; chipDone: string; chipLock: string };
export const MAPPAL: Record<SkinKey, MapPal> = {
  ivory: { page: "#F2F0E7", land: "#F7F5EE", street: "#D6D6CA", water: "#B7CDD0", park: "#D5DFD1", ink: "#32443E", title: "#314D44", route: "#415B51", card: "#FFFEF9", chip: "#E1E8DE", chipDone: "#D3E3D5", chipLock: "#E9E8E1" },
  blue: { page: "#EEF0EF", land: "#F7F8F5", street: "#D4DBDD", water: "#B4CED8", park: "#D7E2DA", ink: "#333D46", title: "#303F50", route: "#3C5162", card: "#FCFCF9", chip: "#DDE6E9", chipDone: "#D7E5DE", chipLock: "#E8EBEC" },
  warm: { page: "#F2EDE3", land: "#FAF6EE", street: "#DED7CA", water: "#C0D1D2", park: "#DCE1CF", ink: "#47413B", title: "#655D50", route: "#716459", card: "#FFFAF2", chip: "#E9E1D5", chipDone: "#DDE5D5", chipLock: "#ECE7DE" },
  bright: { page: "#EFF3EF", land: "#F7F9F6", street: "#D7E2DB", water: "#BAD3D5", park: "#D3E1D5", ink: "#343F3C", title: "#3C5750", route: "#416459", card: "#FFFFFF", chip: "#DFEAE1", chipDone: "#D4E5D8", chipLock: "#E8EEEA" },
};

// 当天连票:右侧副券跳色,每格不同,随皮肤换 [底, 插画, 检票章]
const SEGCOLS: Record<SkinKey, Array<[string, string, string]>> = {
  ivory: [["#D4DFD4", "#314D44", "#415B51"], ["#DCE1DA", "#314D44", "#55665E"], ["#CDD9D9", "#303F50", "#415B51"], ["#E6DFD3", "#655D50", "#314D44"]],
  bright: [["#D8E7DD", "#3C5750", "#416459"], ["#E2EAE3", "#3C5750", "#52675D"], ["#CBDDD9", "#343F3C", "#416459"], ["#E4E9E2", "#3C5750", "#416459"]],
  blue: [["#D6E1E5", "#303F50", "#3C5162"], ["#E0E7E7", "#303F50", "#3C5162"], ["#C8D7DD", "#303F50", "#3C5162"], ["#D2DADF", "#303F50", "#3C5162"]],
  warm: [["#E7DDCE", "#655D50", "#716459"], ["#E4DFD4", "#655D50", "#716459"], ["#DCDDD1", "#655D50", "#716459"], ["#E8E1D6", "#655D50", "#716459"]],
};
export const segC = (skin: SkinKey, i: number) => {
  const [bg, art, stamp] = SEGCOLS[skin][i % 4];
  return { bg, art, stamp };
};

// 一次约会自己的颜色:他从五个里挑(引擎 COLORS),每个对应原型里一种历史票根配色
// (原型 PAST_COL + 下一次大票色;inv=插画用反相那张,panel=插画底)
export type PlanColor = "blush" | "rose" | "cream" | "sky" | "berry";
export type TicketCol = { c: string; t: string; art: string; inv?: boolean; panel?: string };
export const PLAN_COLORS: Record<PlanColor, TicketCol> = {
  blush: { c: "#E6E0D6", t: "#3A4A42", art: "#3A4A42" },
  rose: { c: "#D4E0D6", t: "#314D44", art: "#314D44", inv: true, panel: "#C4D2C8" },
  cream: { c: "#F7F2E9", t: "#655D50", art: "#655D50" },
  sky: { c: "#CFDDE1", t: "#303F50", art: "#303F50" },
  berry: { c: "#40574C", t: "#FFFDF8", art: "#FFFDF8" },
};
export const planCol = (c: string | null | undefined): TicketCol => PLAN_COLORS[(c as PlanColor) in PLAN_COLORS ? (c as PlanColor) : "rose"];

export const rgba = (sh: string, a: number) => `rgba(${sh},${a})`;

/** 两色按比例混(原型 color-mix(in srgb, A p%, B)) */
export function mix(a: string, b: string, p: number): string {
  const pa = hex(a), pb = hex(b);
  const m = pa.map((v, i) => Math.round(v * p + pb[i] * (1 - p)));
  return `#${m.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}
function hex(h: string): [number, number, number] {
  const n = parseInt(h.replace("#", ""), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
export const alpha = (h: string, a: number) => {
  const [r, g, b] = hex(h);
  return `rgba(${r},${g},${b},${a})`;
};

// 字体:用打包字体时不写 fontWeight(字重靠换文件选)。拉丁字体里出现中文 → 改用思源宋
const CJK400 = "NotoSerifSC-Regular-app", CJK500 = F.ephSerif500, CJK700 = "NotoSerifSC-Bold-app", CJK900 = F.ephSerif900;
// web: every Latin face is a stack ending in the Chinese serif of the same weight, so a Chinese character in a
// Latin line is drawn in the serif, never in the browser's default sans
const stack = (latin: string, cjk: string) => `${latin}, ${cjk}`;
export const FF = {
  serif: CJK400, // 400
  serif5: CJK500, // 500
  serif7: CJK700, // 700
  serif9: CJK900, // 900
  pf: stack(F.playfairRegular, CJK400), // 400
  pfI: stack(F.playfairRegularItalic, CJK400), // 400 italic
  pf7: stack(F.playfair, CJK700), // 700
  pf7I: stack(F.playfairItalic, CJK700), // 700 italic
  pf9: stack(F.playfairBlack, CJK900), // 900
  script: stack(F.script, CJK500),
  corm: stack(F.cormorant, CJK500), // 500
  corm6: stack(F.cormorantSemi, CJK500), // 600
  mono: stack(F.type, CJK700), // Courier Prime 700
  monoR: stack(F.typeRegular, CJK400), // 400
} as const;

const CJK = /[¥　-〿぀-ヿ㐀-鿿豈-﫿＀-￯]/;
export const hasCJK = (s: string | null | undefined) => !!s && CJK.test(s);
/** 拉丁字体排的字里要是有中日文,整段换成对应字重的思源宋(不让 iOS 退到苹方黑体) */
export function ff(text: string | null | undefined, latin: string, cjk: string = FF.serif7): string {
  return hasCJK(text) ? cjk : latin;
}
