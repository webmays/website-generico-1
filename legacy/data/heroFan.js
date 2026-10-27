// [AI-FILE-PURPOSE]: Geometria vetorial do arco radial rotativo da Hero (fatias e recortes SVG pré-calculados).
// [AI-DO-NOT-BREAK]: A geometria dos arcos (`d`) e centros (`1520, 380`) foi rigorosamente desenhada para a proporção estética 2:1 no mobile e carrossel lateral no desktop. Não alterar os números dos paths.
// [AI-STYLE-RULE]: Cada fatia possui borda branca de 6px e filtro preto-e-branco elegante com hover colorido.

const unsplash = (id) => `https://images.unsplash.com/photo-${id}?q=80&w=1200&auto=format&fit=crop`;

// [AI-EDIT-ZONE]: Fotos utilizadas nas 16 fatias do carrossel rotativo
const PORTRAITS = [
  "1534528741775-53994a69daeb",
  "1517841905240-472988babdf9",
  "1524504388940-b1c1722653e1",
  "1544005313-94ddf0286df2",
  "1508214751196-bcfd4ca60f91",
  "1531746020798-e6953c6e8e04",
  "1573496359142-b8d87734a5a2",
  "1509967419530-da38b4704bc6"
];

/**
 * Precomputed ring slices (outer r=840, inner r=260) around (1520, 380).
 * 8 slices of 45° each (approx. 4 slices visible in the 180° dome at any time).
 * `size: 755` ensures the image fills each 45° slice completely.
 */
const SLICE_GEOMETRY = [
  {
    d: "M 1779.99 382.27 L 2359.97 387.33 A 840 840 0 0 1 2119.13 968.76 L 1705.45 562.24 A 260 260 0 0 0 1779.99 382.27 Z",
    x: 1656.4,
    y: 299.2,
    size: 755
  },
  {
    d: "M 1702.24 565.45 L 2108.76 979.13 A 840 840 0 0 1 1527.33 1219.97 L 1522.27 639.99 A 260 260 0 0 0 1702.24 565.45 Z",
    x: 1439.2,
    y: 516.4,
    size: 755
  },
  {
    d: "M 1517.73 639.99 L 1512.67 1219.97 A 840 840 0 0 1 931.24 979.13 L 1337.76 565.45 A 260 260 0 0 0 1517.73 639.99 Z",
    x: 848.1,
    y: 516.4,
    size: 755
  },
  {
    d: "M 1334.55 562.24 L 920.87 968.76 A 840 840 0 0 1 680.03 387.33 L 1260.01 382.27 A 260 260 0 0 0 1334.55 562.24 Z",
    x: 630.9,
    y: 299.2,
    size: 755
  },
  {
    d: "M 1260.01 377.73 L 680.03 372.67 A 840 840 0 0 1 920.87 -208.76 L 1334.55 197.76 A 260 260 0 0 0 1260.01 377.73 Z",
    x: 630.9,
    y: -291.9,
    size: 755
  },
  {
    d: "M 1337.76 194.55 L 931.24 -219.13 A 840 840 0 0 1 1512.67 -459.97 L 1517.73 120.01 A 260 260 0 0 0 1337.76 194.55 Z",
    x: 848.1,
    y: -509.1,
    size: 755
  },
  {
    d: "M 1522.27 120.01 L 1527.33 -459.97 A 840 840 0 0 1 2108.76 -219.13 L 1702.24 194.55 A 260 260 0 0 0 1522.27 120.01 Z",
    x: 1439.2,
    y: -509.1,
    size: 755
  },
  {
    d: "M 1705.45 197.76 L 2119.13 -208.76 A 840 840 0 0 1 2359.97 372.67 L 1779.99 377.73 A 260 260 0 0 0 1705.45 197.76 Z",
    x: 1656.4,
    y: -291.9,
    size: 755
  }
];

export const HERO_FAN_SLICES = SLICE_GEOMETRY.map((slice, index) => ({
  ...slice,
  image: unsplash(PORTRAITS[index % PORTRAITS.length])
}));

/** Desktop shows the side carousel; mobile crops the SVG to the top arc (dome). */
export const HERO_FAN_VIEWBOX = {
  desktop: "0 0 1440 760",
  mobile: "680 -460 1680 840"
};
