const paths={
 compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5Z"/>',
 heart:'<path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z"/>',
 close:'<path d="m6 6 12 12M18 6 6 18"/>',undo:'<path d="M4 10h9a6 6 0 1 1-5.6 8M4 10l5-5M4 10l5 5"/>',
 map:'<path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2ZM9 3v16M15 5v16"/>',
 users:'<circle cx="9" cy="8" r="3"/><path d="M3 21v-2a6 6 0 0 1 12 0v2M17 5a3 3 0 0 1 0 6m1 4a5 5 0 0 1 3 4v2"/>',
 companions:'<circle cx="8" cy="7.5" r="3"/><circle cx="17" cy="8.5" r="2.5"/><path d="M2.5 20v-1.5a5.5 5.5 0 0 1 11 0V20m1.5-5.5a4.5 4.5 0 0 1 6.5 4V20"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="4"/><path d="M7 3v4m10-4v4M3 10h18m-13 5h3m-3 3h7m0-3h2"/>',
 landscape:'<path d="M2.5 19h19L15 8l-3.5 5.5L8 8l-5.5 11Z"/><circle cx="17.5" cy="5" r="1.5"/>',
 route:'<circle cx="6" cy="5" r="2"/><circle cx="18" cy="19" r="2"/><path d="M8 5h7a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h5"/>',
 sliders:'<path d="M4 7h4m6 0h6M4 17h10m6 0h0"/><circle cx="11" cy="7" r="3"/><circle cx="17" cy="17" r="3"/>',
 arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',pin:'<path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1"/>',
 hotel:'<path d="M3 20V5m18 15V10H3m0 6h18M6 6h5v4m3 0V6h5v4"/>',
 food:'<path d="M5 3v7m3-7v7m-6-7v7q3 4 6 0M5 13v8M18 3c-5 3-5 10 0 10V3v18"/>',
 photo:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="8" cy="9" r="1"/><path d="m3 16 5-4 4 3 4-5 5 6"/>',
 film:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 3v18M17 3v18M3 8h4m10 0h4M3 16h4m10 0h4"/>',
 check:'<path d="m5 12 4 4L19 6"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',target:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3"/>',
 star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9Z"/>'
};
export function icon(name,size=22){return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.compass}</svg>`;}
