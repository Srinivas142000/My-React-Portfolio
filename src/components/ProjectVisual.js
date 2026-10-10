import { useEffect, useId, useRef } from "react";

// Animated SVG "cover art" for project cards. Each scene is drawn in a
// 320x200 box and animated with SMIL, so it needs no JS loop; animations
// pause while the card is off-screen and stay still for reduced-motion users.

const W = 320;
const H = 200;

// Small deterministic RNG so generated scenes look the same on every render
const rng = (seed) => () => {
  seed = (seed * 16807) % 2147483647;
  return seed / 2147483647;
};

const loop = { repeatCount: "indefinite" };

const Pulse = ({ grad, glow, a, b }) => {
  const ecg = "M0 105 H70 L82 105 L92 70 L104 145 L116 45 L128 125 L138 105 H190 L200 105 L208 88 L216 118 L224 105 H320";
  return (
    <>
      <path d={ecg} fill="none" stroke={a} strokeOpacity=".25" strokeWidth="2" />
      <path d={ecg} fill="none" stroke={grad} strokeWidth="3" strokeLinecap="round" strokeDasharray="110 700" filter={glow}>
        <animate attributeName="stroke-dashoffset" values="810;0" dur="2.4s" {...loop} />
      </path>
      {Array.from({ length: 15 }, (_, i) => (
        <line key={i} x1={48 + i * 16} x2={48 + i * 16} y1="185" y2="170" stroke={i % 2 ? a : b} strokeWidth="6" strokeLinecap="round" opacity=".85">
          <animate attributeName="y2" values={`175;${150 - (i % 5) * 6};168;${158 - (i % 3) * 8};175`} dur={`${1 + (i % 4) * 0.25}s`} {...loop} />
        </line>
      ))}
      <g transform="translate(270 42)">
        <path d="M0 6 C0 -4 -14 -4 -14 6 C-14 14 0 20 0 24 C0 20 14 14 14 6 C14 -4 0 -4 0 6Z" fill={a} filter={glow}>
          <animateTransform attributeName="transform" type="scale" values="1;1.25;1;1.15;1" dur="1.2s" {...loop} />
        </path>
      </g>
    </>
  );
};

const Voice = ({ grad, glow, a, b }) => (
  <>
    {Array.from({ length: 13 }, (_, i) => {
      const x = 36 + i * 9;
      const h = [14, 26, 40, 30, 48, 36, 54, 36, 48, 30, 40, 26, 14][i];
      return (
        <line key={i} x1={x} x2={x} y1={100 - h / 2} y2={100 + h / 2} stroke={grad} strokeWidth="5" strokeLinecap="round" filter={glow}>
          <animate attributeName="y1" values={`${100 - h / 2};${100 - h / 5};${100 - h / 2}`} dur={`${0.6 + (i % 3) * 0.2}s`} {...loop} />
          <animate attributeName="y2" values={`${100 + h / 2};${100 + h / 5};${100 + h / 2}`} dur={`${0.6 + (i % 3) * 0.2}s`} {...loop} />
        </line>
      );
    })}
    <path d="M160 100 h18 m-6 -6 l6 6 l-6 6" stroke="#fff" strokeOpacity=".6" strokeWidth="2" fill="none" />
    {[110, 80, 120, 64, 96].map((w, i) => (
      <rect key={i} x="194" y={56 + i * 20} height="8" rx="4" fill={i % 2 ? b : a} opacity=".9" width="0">
        <animate attributeName="width" values={`0;0;${w};${w};0`} keyTimes={`0;${0.1 + i * 0.12};${0.2 + i * 0.12};0.9;1`} dur="5s" {...loop} />
      </rect>
    ))}
  </>
);

const Room = ({ grad, glow, a, b }) => {
  const swatches = [a, b, "#2dd4bf", "#f59e0b"];
  return (
    <>
      <polygon points="70,72 160,36 160,124 70,160" fill={a} fillOpacity=".3" stroke={grad} strokeWidth="1.5">
        <animate attributeName="fill" values={swatches.concat(a).join(";")} dur="8s" {...loop} />
      </polygon>
      <polygon points="160,36 250,72 250,160 160,124" fill={b} fillOpacity=".3" stroke={grad} strokeWidth="1.5">
        <animate attributeName="fill" values={[b, "#2dd4bf", "#f59e0b", a, b].join(";")} dur="8s" {...loop} />
      </polygon>
      <polygon points="70,160 160,124 250,160 160,196" fill="#fff" fillOpacity=".04" stroke={grad} strokeWidth="1.5" />
      {[0.25, 0.5, 0.75].map((t) => (
        <g key={t} stroke="#fff" strokeOpacity=".12">
          <line x1={70 + 90 * t} y1={160 + 36 * t} x2={160 + 90 * t} y2={124 + 36 * t} />
          <line x1={160 - 90 * t} y1={124 + 36 * t} x2={250 - 90 * t} y2={160 + 36 * t} />
        </g>
      ))}
      <line x1="300" y1="200" x2="210" y2="100" stroke={a} strokeWidth="2" strokeDasharray="4 4" filter={glow}>
        <animate attributeName="x2" values="210;110;210" dur="8s" {...loop} />
        <animate attributeName="y2" values="100;110;100" dur="8s" {...loop} />
      </line>
      {swatches.map((c, i) => (
        <circle key={c} cx={270 + (i % 2) * 22} cy={24 + Math.floor(i / 2) * 22} r="8" fill={c} />
      ))}
      <circle cx="270" cy="24" r="12" fill="none" stroke="#fff" strokeWidth="2">
        <animate attributeName="cx" values="270;292;270;292;270" calcMode="discrete" dur="8s" {...loop} />
        <animate attributeName="cy" values="24;24;46;46;24" calcMode="discrete" dur="8s" {...loop} />
      </circle>
    </>
  );
};

const octagon = (cx, cy, r) =>
  Array.from({ length: 8 }, (_, i) => {
    const t = (i / 8) * Math.PI * 2;
    return `${cx + r * Math.cos(t)},${cy + r * Math.sin(t)}`;
  }).join(" ");

const Web = ({ grad, glow, a, b }) => {
  const nodes = [[1, 1], [3, 2], [5, 3], [7, 1], [2, 4], [6, 4], [0, 3], [4, 2]];
  return (
    <g>
      <animateTransform attributeName="transform" type="rotate" values="0 160 100;360 160 100" dur="80s" {...loop} />
      {[25, 50, 75, 100].map((r) => (
        <polygon key={r} points={octagon(160, 100, r)} fill="none" stroke={grad} strokeOpacity=".5" strokeWidth="1.2" />
      ))}
      {Array.from({ length: 8 }, (_, i) => {
        const t = (i / 8) * Math.PI * 2;
        return <line key={i} x1="160" y1="100" x2={160 + 100 * Math.cos(t)} y2={100 + 100 * Math.sin(t)} stroke={grad} strokeOpacity=".5" />;
      })}
      {nodes.map(([spoke, ring], i) => {
        const t = (spoke / 8) * Math.PI * 2;
        const x = 160 + ring * 25 * Math.cos(t);
        const y = 100 + ring * 25 * Math.sin(t);
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="4" fill={i % 2 ? a : b} filter={glow} />
            <circle cx={x} cy={y} r="4" fill="none" stroke={i % 2 ? a : b} strokeWidth="2">
              <animate attributeName="r" values="4;16" dur="2.4s" begin={`${i * 0.3}s`} {...loop} />
              <animate attributeName="opacity" values="1;0" dur="2.4s" begin={`${i * 0.3}s`} {...loop} />
            </circle>
          </g>
        );
      })}
      <circle cx="160" cy="100" r="7" fill="#fff" filter={glow} />
    </g>
  );
};

const ring = (cx, cy, r, n, offset = 0) =>
  Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2 + offset;
    return [cx + r * Math.cos(t), cy + r * Math.sin(t)];
  });

const Topology = ({ glow, a, b }) => {
  const server = [80, 96];
  const clients = ring(80, 96, 54, 5, -Math.PI / 2);
  const peers = ring(240, 96, 54, 5, -Math.PI / 2);
  return (
    <>
      {clients.map(([x, y], i) => (
        <line key={i} x1={x} y1={y} x2={server[0]} y2={server[1]} stroke={a} strokeOpacity=".4" />
      ))}
      {peers.map(([x, y], i) =>
        peers.slice(i + 1).map(([x2, y2], j) => (
          <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke={b} strokeOpacity=".35" />
        ))
      )}
      {clients.map(([x, y], i) => {
        const [tx, ty] = clients[(i + 2) % 5];
        return (
          <circle key={i} r="3.5" fill="#fff" filter={glow}>
            <animateMotion path={`M${x} ${y} L${server[0]} ${server[1]} L${tx} ${ty}`} dur="2.6s" begin={`${i * 0.5}s`} {...loop} />
          </circle>
        );
      })}
      {peers.map(([x, y], i) => {
        const [tx, ty] = peers[(i + 2) % 5];
        return (
          <circle key={i} r="3.5" fill="#fff" filter={glow}>
            <animateMotion path={`M${x} ${y} L${tx} ${ty}`} dur="1.6s" begin={`${i * 0.3}s`} {...loop} />
          </circle>
        );
      })}
      <rect x={server[0] - 12} y={server[1] - 12} width="24" height="24" rx="5" fill={a} filter={glow} />
      {clients.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="7" fill="#1d1d25" stroke={a} strokeWidth="2" />)}
      {peers.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="7" fill="#1d1d25" stroke={b} strokeWidth="2" />)}
      <text x="80" y="186" textAnchor="middle" className="pv-label">CLIENT–SERVER</text>
      <text x="240" y="186" textAnchor="middle" className="pv-label">PEER-TO-PEER</text>
    </>
  );
};

const MapScene = ({ grad, glow, a, b }) => {
  const vp = [160, 40];
  const verticals = [-140, -60, 20, 100, 220, 300, 380, 460];
  const horizontals = [66, 74, 86, 102, 124, 154, 194];
  const route = "M150 200 L176 150 L150 112 L186 82";
  return (
    <>
      {verticals.map((x) => {
        const t = (200 - 62) / (200 - vp[1]);
        return <line key={x} x1={x} y1="200" x2={x + (vp[0] - x) * t} y2="62" stroke={b} strokeOpacity=".35" />;
      })}
      {horizontals.map((y) => <line key={y} x1="0" x2={W} y1={y} y2={y} stroke={b} strokeOpacity=".3" />)}
      <path d={route} fill="none" stroke={grad} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10" filter={glow}>
        <animate attributeName="stroke-dashoffset" values="40;0" dur="0.8s" {...loop} />
      </path>
      {[[70, 120], [252, 100]].map(([x, y], i) => (
        <g key={i}>
          <polygon points={`${x},${y - 9} ${x + 8},${y - 4} ${x + 8},${y + 5} ${x},${y + 10} ${x - 8},${y + 5} ${x - 8},${y - 4}`} fill="none" stroke={a} strokeWidth="2" />
          <circle cx={x} cy={y} r="10" fill="none" stroke={a}>
            <animate attributeName="r" values="10;26" dur="2s" begin={`${i}s`} {...loop} />
            <animate attributeName="opacity" values=".9;0" dur="2s" begin={`${i}s`} {...loop} />
          </circle>
        </g>
      ))}
      <ellipse cx="186" cy="84" rx="10" ry="4" fill={a} opacity=".5">
        <animate attributeName="rx" values="10;18;10" dur="1.2s" {...loop} />
      </ellipse>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -8;0 0" dur="1.2s" {...loop} />
        <path d="M186 80 C174 66 174 50 186 48 C198 50 198 66 186 80Z" fill={a} filter={glow} />
        <circle cx="186" cy="60" r="4" fill="#111118" />
      </g>
      <path d="M14 26 V14 H26 M294 14 H306 V26" stroke="#fff" strokeOpacity=".5" strokeWidth="2" fill="none" />
    </>
  );
};

const Eye = ({ grad, glow, id, a }) => {
  const almond = "M80 100 Q160 30 240 100 Q160 170 80 100Z";
  const blink = { dur: "4s", keyTimes: "0;0.8;0.86;0.92;1", ...loop };
  return (
    <>
      <defs>
        <clipPath id={`${id}-eye`}>
          <path d={almond} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-eye)`}>
        <rect x="80" y="30" width="160" height="140" fill="#fff" opacity=".06" />
        <circle cx="160" cy="100" r="30" fill={grad} filter={glow}>
          <animate attributeName="cx" values="150;170;160;150" dur="6s" {...loop} />
        </circle>
        <circle cx="160" cy="100" r="12" fill="#0c0c10">
          <animate attributeName="cx" values="150;170;160;150" dur="6s" {...loop} />
        </circle>
        <rect x="80" y="30" width="160" height="0" fill="#16161d">
          <animate attributeName="height" values="0;0;70;0;0" {...blink} />
        </rect>
        <rect x="80" y="170" width="160" height="0" fill="#16161d">
          <animate attributeName="y" values="170;170;100;170;170" {...blink} />
          <animate attributeName="height" values="0;0;70;0;0" {...blink} />
        </rect>
      </g>
      <path d={almond} fill="none" stroke={grad} strokeWidth="2.5" />
      <path d="M60 40 V28 H72 M248 28 H260 V40 M260 160 V172 H248 M72 172 H60 V160" stroke={a} strokeWidth="2.5" fill="none" />
      <line x1="60" x2="260" y1="40" y2="40" stroke={a} strokeOpacity=".7">
        <animate attributeName="y1" values="36;164;36" dur="3s" {...loop} />
        <animate attributeName="y2" values="36;164;36" dur="3s" {...loop} />
      </line>
      <text x="160" y="192" textAnchor="middle" className="pv-label" fill="#4ade80">
        ● DRIVER ALERT
        <animate attributeName="opacity" values="1;1;0;1;1" {...blink} />
      </text>
      <text x="160" y="192" textAnchor="middle" className="pv-label" fill="#f87171" opacity="0">
        ● DROWSINESS DETECTED
        <animate attributeName="opacity" values="0;0;1;0;0" {...blink} />
      </text>
    </>
  );
};

const Terminal = ({ id, a, b }) => {
  const lines = [
    ["> look around", a],
    ["Sand stretches in every direction.", "#d4d4d8"],
    ["> go north", a],
    ["You find an old canteen.", "#d4d4d8"],
    ["> drink canteen", a],
  ];
  return (
    <>
      <rect x="36" y="26" width="248" height="150" rx="10" fill="#0c0c10" stroke={b} strokeOpacity=".6" />
      <rect x="36" y="26" width="248" height="22" rx="10" fill="#1d1d25" />
      {["#f87171", "#facc15", "#4ade80"].map((c, i) => <circle key={c} cx={52 + i * 14} cy="37" r="4" fill={c} />)}
      <text x="246" y="41" textAnchor="end" className="pv-label">survivor.java</text>
      {lines.map(([text, color], i) => (
        <g key={i}>
          <clipPath id={`${id}-l${i}`}>
            <rect x="48" y={60 + i * 20} height="16" width="0">
              <animate attributeName="width" values={`0;0;230;230`} keyTimes={`0;${i * 0.16};${i * 0.16 + 0.12};1`} dur="7s" {...loop} />
            </rect>
          </clipPath>
          <text x="50" y={72 + i * 20} className="pv-mono" fill={color} clipPath={`url(#${id}-l${i})`}>{text}</text>
        </g>
      ))}
      <rect x="50" y="160" width="8" height="12" fill={a}>
        <animate attributeName="opacity" values="1;0" dur="0.9s" calcMode="discrete" {...loop} />
      </rect>
    </>
  );
};

const Chart = ({ grad, glow, a, b }) => {
  const bars = [40, 62, 50, 88, 72, 110, 128];
  const trend = "M48 150 L84 132 L120 138 L156 104 L192 114 L228 78 L264 58";
  return (
    <>
      <line x1="34" y1="170" x2="290" y2="170" stroke="#fff" strokeOpacity=".2" />
      {bars.map((h, i) => (
        <line key={i} x1={48 + i * 36} x2={48 + i * 36} y1="168" y2={168 - h} stroke={i % 2 ? b : a} strokeOpacity=".55" strokeWidth="18">
          <animate attributeName="y2" values={`168;${168 - h};${168 - h};168`} keyTimes="0;0.3;0.85;1" dur="5s" begin={`${i * 0.1}s`} {...loop} />
        </line>
      ))}
      <path d={trend} fill="none" stroke={grad} strokeWidth="3" strokeDasharray="260" filter={glow}>
        <animate attributeName="stroke-dashoffset" values="260;0;0;260" keyTimes="0;0.4;0.85;1" dur="5s" {...loop} />
      </path>
      <circle r="5" fill="#fff" filter={glow}>
        <animateMotion path={trend} dur="5s" keyPoints="0;1;1;0" keyTimes="0;0.4;0.85;1" calcMode="linear" {...loop} />
      </circle>
      <rect x="36" y="24" width="34" height="24" rx="7" fill={a} />
      <path d="M49 30 L60 36 L49 42Z" fill="#fff" />
      <text x="80" y="41" className="pv-label">AD VIEWS ↑</text>
    </>
  );
};

const Lock = ({ glow, grad, id, a, b }) => {
  const rand = rng(7);
  const shield = "M160 36 L208 54 V98 Q208 142 160 166 Q112 142 112 98 V54 Z";
  return (
    <>
      {Array.from({ length: 16 }, (_, i) => {
        const x = 12 + i * 20;
        const dur = 3 + rand() * 4;
        return (
          <text key={i} x={x} y="0" className="pv-mono pv-rain" fill={b}>
            {Array.from({ length: 8 }, (_, j) => (
              <tspan key={j} x={x} dy="16">{rand() > 0.5 ? "1" : "0"}</tspan>
            ))}
            <animateTransform attributeName="transform" type="translate" values="0 -140;0 220" dur={`${dur}s`} begin={`-${rand() * dur}s`} {...loop} />
          </text>
        );
      })}
      <defs>
        <clipPath id={`${id}-shield`}>
          <path d={shield} />
        </clipPath>
      </defs>
      <path d={shield} fill="#111118" stroke={grad} strokeWidth="3" filter={glow}>
        <animate attributeName="stroke-width" values="3;5;3" dur="2s" {...loop} />
      </path>
      <path d="M146 96 V84 a14 14 0 0 1 28 0 V96" fill="none" stroke="#fff" strokeWidth="5" />
      <rect x="138" y="96" width="44" height="34" rx="6" fill={a} />
      <circle cx="160" cy="110" r="4" fill="#111118" />
      <rect x="157" y="112" width="6" height="10" rx="2" fill="#111118" />
      <rect x="112" y="40" width="96" height="4" fill="#4ade80" opacity=".7" clipPath={`url(#${id}-shield)`}>
        <animate attributeName="y" values="36;166;36" dur="2.6s" {...loop} />
      </rect>
    </>
  );
};

const Neural = ({ glow, a, b }) => {
  const layers = [3, 5, 5, 2].map((n, l) =>
    Array.from({ length: n }, (_, i) => [56 + l * 70, 100 + (i - (n - 1) / 2) * 30])
  );
  const edges = [];
  layers.slice(0, -1).forEach((layer, l) =>
    layer.forEach((p) => layers[l + 1].forEach((q) => edges.push([p, q, l])))
  );
  return (
    <>
      {edges.map(([p, q], i) => (
        <line key={i} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke={i % 2 ? a : b} strokeOpacity=".22" />
      ))}
      {edges.filter((_, i) => i % 3 === 0).map(([p, q, l], i) => (
        <circle key={i} r="3" fill="#fff" filter={glow}>
          <animateMotion path={`M${p[0]} ${p[1]} L${q[0]} ${q[1]}`} dur="0.9s" begin={`${l * 0.9 + (i % 4) * 0.12}s`} {...loop} />
        </circle>
      ))}
      {layers.map((layer, l) =>
        layer.map(([x, y], i) => (
          <circle key={`${l}-${i}`} cx={x} cy={y} r="8" fill="#1d1d25" stroke={l % 2 ? b : a} strokeWidth="2.5">
            <animate attributeName="fill" values={`#1d1d25;${l % 2 ? b : a};#1d1d25`} dur="2.7s" begin={`${l * 0.6}s`} {...loop} />
          </circle>
        ))
      )}
    </>
  );
};

const Geo = ({ glow, a, b }) => {
  const rand = rng(42);
  const outline = "M40 50 L250 46 L262 60 L280 150 L44 156 L36 120 L52 96 Z";
  const dots = Array.from({ length: 70 }, () => {
    const cluster = rand() < 0.5;
    return cluster
      ? [80 + (rand() - 0.5) * 50, 92 + (rand() - 0.5) * 50]
      : [50 + rand() * 220, 56 + rand() * 94];
  });
  return (
    <>
      <path d={outline} fill="#fff" fillOpacity=".04" stroke={b} strokeOpacity=".5" strokeDasharray="4 4" />
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.4" fill={i % 3 ? a : b} opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes={`0;${(i / dots.length) * 0.5};${(i / dots.length) * 0.5 + 0.05};0.9;1`} dur="6s" {...loop} />
        </circle>
      ))}
      <circle cx="80" cy="92" r="10" fill="none" stroke={a} strokeWidth="2">
        <animate attributeName="r" values="10;40" dur="2s" {...loop} />
        <animate attributeName="opacity" values="1;0" dur="2s" {...loop} />
      </circle>
      <path d="M292 20 L280 40 H290 L284 58 L300 34 H290 Z" fill="#facc15" filter={glow}>
        <animate attributeName="opacity" values="1;.4;1" dur="1.5s" {...loop} />
      </path>
      <text x="80" y="182" textAnchor="middle" className="pv-label">KING COUNTY · 50%+</text>
    </>
  );
};

const Layers = ({ id, a, b }) => {
  const planes = [
    { label: "SHADING", move: "0 0;0 34;0 34;0 0", fill: `url(#${id}-shade)` },
    { label: "REFLECTANCE", move: "0 0;0 0;0 0;0 0", fill: b },
    { label: "IMAGE", move: "0 0;0 -34;0 -34;0 0", fill: `url(#${id}-g)` },
  ];
  return (
    <>
      <defs>
        <linearGradient id={`${id}-shade`} x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".7" />
          <stop offset="1" stopColor="#000" stopOpacity=".6" />
        </linearGradient>
      </defs>
      {planes.map((p, i) => (
        <g key={p.label}>
          <animateTransform attributeName="transform" type="translate" values={p.move} keyTimes="0;0.35;0.75;1" dur="5s" {...loop} />
          <g transform="translate(150 100) scale(1 .5) rotate(45)">
            <rect x="-52" y="-52" width="104" height="104" rx="6" fill={p.fill} fillOpacity=".85" stroke="#fff" strokeOpacity=".5" />
            {p.label === "REFLECTANCE" &&
              [[-40, -40, a], [0, -40, "#2dd4bf"], [-40, 0, "#f59e0b"], [0, 0, a]].map(([x, y, c], j) => (
                <rect key={j} x={x + 4} y={y + 4} width="32" height="32" rx="3" fill={c} opacity=".8" />
              ))}
          </g>
          <text x="232" y="104" className="pv-label" opacity="0">
            {p.label}
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.35;0.75;1" dur="5s" {...loop} />
          </text>
        </g>
      ))}
    </>
  );
};

const Dehaze = ({ id, a, b }) => (
  <>
    <defs>
      <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={b} />
        <stop offset="1" stopColor={a} />
      </linearGradient>
      <clipPath id={`${id}-haze`}>
        <rect x="0" y="0" width="160" height={H}>
          <animate attributeName="width" values="60;260;60" dur="6s" {...loop} />
        </rect>
      </clipPath>
    </defs>
    <rect width={W} height={H} fill={`url(#${id}-sky)`} opacity=".7" />
    <circle cx="236" cy="56" r="20" fill="#fde68a" />
    <polygon points="0,150 60,92 110,130 170,70 240,128 290,96 320,120 320,200 0,200" fill="#312e81" />
    <polygon points="0,170 80,128 150,160 220,122 320,166 320,200 0,200" fill="#1e1b4b" />
    <rect width={W} height={H} fill="#e5e7eb" opacity=".72" clipPath={`url(#${id}-haze)`} />
    <line y1="0" y2={H} stroke="#fff" strokeWidth="2.5">
      <animate attributeName="x1" values="60;260;60" dur="6s" {...loop} />
      <animate attributeName="x2" values="60;260;60" dur="6s" {...loop} />
    </line>
    <text x="16" y="24" className="pv-label" fill="#374151">HAZY</text>
    <text x="304" y="24" textAnchor="end" className="pv-label">CLEAR</text>
  </>
);

// Rotating wireframe cube: projected frames are precomputed and tweened with SMIL
const cubeFrames = (() => {
  const v = [-1, 1].flatMap((x) => [-1, 1].flatMap((y) => [-1, 1].map((z) => [x, y, z])));
  const edges = [];
  v.forEach((p, i) => v.forEach((q, j) => {
    if (j > i && p.filter((c, k) => c !== q[k]).length === 1) edges.push([i, j]);
  }));
  const tilt = -0.5;
  return Array.from({ length: 37 }, (_, f) => {
    const t = (f / 36) * Math.PI * 2;
    const pts = v.map(([x, y, z]) => {
      const x1 = x * Math.cos(t) + z * Math.sin(t);
      const z1 = -x * Math.sin(t) + z * Math.cos(t);
      const y1 = y * Math.cos(tilt) - z1 * Math.sin(tilt);
      return [220 + x1 * 38, 100 + y1 * 38];
    });
    return edges.map(([i, j]) => `M${pts[i][0].toFixed(1)} ${pts[i][1].toFixed(1)}L${pts[j][0].toFixed(1)} ${pts[j][1].toFixed(1)}`).join("");
  }).join(";");
})();

const Cube = ({ grad, glow, a, b }) => (
  <>
    <rect x="34" y="62" width="76" height="76" rx="6" fill="#fff" fillOpacity=".05" stroke={a} strokeWidth="2" />
    <polygon points="42,128 64,96 80,116 90,104 102,128" fill={b} opacity=".8" />
    <circle cx="90" cy="80" r="7" fill={a} />
    <path d="M124 100 h30 m-8 -8 l8 8 l-8 8" stroke="#fff" strokeOpacity=".5" strokeWidth="2" fill="none" />
    <path fill="none" stroke={grad} strokeWidth="2.5" strokeLinejoin="round" filter={glow}>
      <animate attributeName="d" values={cubeFrames} dur="7s" {...loop} />
    </path>
    <line x1="170" x2="270" stroke={a} strokeOpacity=".8" strokeWidth="2">
      <animate attributeName="y1" values="40;160;40" dur="3s" {...loop} />
      <animate attributeName="y2" values="40;160;40" dur="3s" {...loop} />
    </line>
    <text x="72" y="160" textAnchor="middle" className="pv-label">2D</text>
    <text x="220" y="178" textAnchor="middle" className="pv-label">3D</text>
  </>
);

const Chat = ({ glow, a, b, warn }) => {
  const bubbles = warn
    ? [["in", 120, "Your package is held. Pay $2 here:"], ["in", 96, "Hi! Lunch tomorrow?"]]
    : [["in", 130, "I've had a rough week..."], ["out", 140, "I'm here for you. Want to talk?"], ["in", 70, "Yes, thank you"]];
  return (
    <>
      <rect x="96" y="12" width="128" height="176" rx="18" fill="#0c0c10" stroke="#fff" strokeOpacity=".25" />
      {bubbles.map(([side, w, text], i) => {
        const x = side === "in" ? 106 : 214 - w;
        const y = 34 + i * 46;
        const flagged = warn && i === 0;
        return (
          <g key={i} opacity="0">
            <animate attributeName="opacity" values="0;0;1;1;0" keyTimes={`0;${0.12 + i * 0.22};${0.18 + i * 0.22};0.92;1`} dur="6s" {...loop} />
            <rect x={x} y={y} width={w} height="34" rx="10" fill={side === "in" ? "#26262f" : a} stroke={flagged ? "#f87171" : "none"} strokeWidth="2" />
            <foreignObject x={x + 6} y={y + 3} width={w - 12} height="30">
              <div className="pv-bubble">{text}</div>
            </foreignObject>
            {flagged && (
              <g transform={`translate(${x + w - 6} ${y - 6})`}>
                <circle r="11" fill="#f87171" filter={glow} />
                <text y="4" textAnchor="middle" className="pv-label" fill="#fff">!</text>
              </g>
            )}
          </g>
        );
      })}
      {!warn && (
        <g>
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={118 + i * 10} cy="170" r="3.5" fill={b}>
              <animate attributeName="cy" values="170;164;170" dur="0.9s" begin={`${i * 0.15}s`} {...loop} />
            </circle>
          ))}
        </g>
      )}
      {warn && (
        <g transform="translate(270 100)" filter={glow}>
          <path d="M0 -26 L22 -18 V0 Q22 18 0 28 Q-22 18 -22 0 V-18 Z" fill="none" stroke={b} strokeWidth="3">
            <animate attributeName="stroke-opacity" values="1;.4;1" dur="1.4s" {...loop} />
          </path>
          <path d="M-9 1 L-2 8 L10 -7" stroke="#4ade80" strokeWidth="3" fill="none" />
        </g>
      )}
    </>
  );
};

const SCENES = {
  pulse: Pulse,
  voice: Voice,
  room: Room,
  web: Web,
  topology: Topology,
  map: MapScene,
  eye: Eye,
  terminal: Terminal,
  chart: Chart,
  lock: Lock,
  neural: Neural,
  geo: Geo,
  layers: Layers,
  dehaze: Dehaze,
  cube: Cube,
  chat: Chat,
  shield: (props) => <Chat {...props} warn />,
};

export const ProjectVisual = ({ type, colors = ["#ff5fc8", "#6d7dff"] }) => {
  const id = `pv${useId().replace(/:/g, "")}`;
  const ref = useRef(null);
  const Scene = SCENES[type] || Neural;
  const [a, b] = colors;

  useEffect(() => {
    const svg = ref.current;
    if (!svg || !svg.pauseAnimations) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      svg.pauseAnimations();
      svg.setCurrentTime(2.5);
      return;
    }
    const observer = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? svg.unpauseAnimations() : svg.pauseAnimations()
    );
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <svg ref={ref} className="project-visual" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} stopOpacity=".28" />
          <stop offset="1" stopColor={b} stopOpacity=".1" />
        </linearGradient>
        {/* userSpaceOnUse so the gradient also paints perfectly straight lines */}
        <linearGradient id={`${id}-g`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={W} y2={H}>
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
        <pattern id={`${id}-dots`} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#fff" opacity=".08" />
        </pattern>
        {/* Sized to the whole scene: a box relative to a straight line would have zero area */}
        <filter id={`${id}-glow`} filterUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width={W} height={H} fill="#111118" />
      <rect width={W} height={H} fill={`url(#${id}-bg)`} />
      <rect width={W} height={H} fill={`url(#${id}-dots)`} />
      <Scene id={id} a={a} b={b} grad={`url(#${id}-g)`} glow={`url(#${id}-glow)`} />
    </svg>
  );
};
