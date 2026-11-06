import { MAPPAL, PLAN_COLORS, SKIN_ORDER, SKINS, planCol, segC } from "./theme";

const vividOriginal = /#(?:D92662|E9789F|C8475F|3FA1C6|F9C4D3|B0234F|C2185B)/i;

function luminance(value: string): number {
  const rgb = value.slice(1).match(/.{2}/g)!.map((h) => {
    const c = parseInt(h, 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

function contrast(a: string, b: string): number {
  const l1 = luminance(a), l2 = luminance(b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

describe("private paper palette", () => {
  it("keeps all existing skin and engine plan-color keys", () => {
    expect(SKIN_ORDER).toEqual(["ivory", "blue", "warm", "bright"]);
    expect(Object.keys(PLAN_COLORS).sort()).toEqual(["blush", "rose", "cream", "sky", "berry"].sort());
    expect(planCol("invalid")).toEqual(PLAN_COLORS.rose);
    expect(PLAN_COLORS.rose.inv).toBe(true); // preserve illustration inversion behavior
  });

  it("does not inherit saturated romantic palette colors", () => {
    for (const key of SKIN_ORDER) {
      expect(JSON.stringify(SKINS[key])).not.toMatch(vividOriginal);
      expect(JSON.stringify(MAPPAL[key])).not.toMatch(vividOriginal);
      for (let i = 0; i < 4; i++) expect(JSON.stringify(segC(key, i))).not.toMatch(vividOriginal);
    }
    expect(JSON.stringify(PLAN_COLORS)).not.toMatch(vividOriginal);
  });

  it("maintains readable foreground/background combinations", () => {
    for (const key of SKIN_ORDER) {
      const skin = SKINS[key];
      expect(contrast(skin.ink, skin.bg)).toBeGreaterThanOrEqual(4.5);
      expect(contrast(skin.deep, skin.bg)).toBeGreaterThanOrEqual(4.5);
      expect(contrast("#ffffff", skin.btn)).toBeGreaterThanOrEqual(4.5);
      expect(contrast("#ffffff", skin.seal)).toBeGreaterThanOrEqual(4.5);
    }
  });
});
