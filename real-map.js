import {places,byId,distance,segments} from './core.js?v=3';
import {icon} from './icons.js?v=3';
export const MAP_CONFIG={tileUrl:'https://tile.openstreetmap.org/{z}/{x}/{y}.png',attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',center:[30.246,120.14]};
let map=null,markers=null,routeLayer=null,lastFocus=null,tilesLoaded=0,tilesFailed=0,tileLayer=null,resizeObserver=null;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function updateRealMap(state,callbacks){
 const root=document.querySelector('#map');
 if(!root.querySelector('#leaflet-map')){
  root.innerHTML=`<div class="real-map-frame"><div id="leaflet-map" role="region" aria-label="杭州真实地图，可拖动和双指缩放"></div><div class="map-top"><div class="map-location"><span class="location-icon">${icon('pin',18)}</span><div><h2>杭州 · 西湖附近</h2><p>真实地点 / 地图上的旅行灵感</p></div></div><span class="live-map-badge"><i></i> 真实地图</span></div><div class="map-filter-bar">${[['plan','我的行程'],['spot','景点'],['hotel','住宿区域'],['food','餐饮区域']].map(([k,v])=>`<button data-map-filter="${k}">${v}</button>`).join('')}</div><div id="map-notice" class="map-network-note" role="status">正在加载地图…</div><div class="map-controls"><button data-real-zoom="in" aria-label="放大地图">${icon('plus')}</button><button data-real-zoom="out" aria-label="缩小地图">${icon('minus')}</button><button data-real-zoom="fit" aria-label="查看全部地点">${icon('target')}</button></div><div id="map-selection" class="map-bottom"></div></div>`;
  root.addEventListener('click',e=>{const filter=e.target.closest('[data-map-filter]'),zoom=e.target.closest('[data-real-zoom]');if(filter){state.mapFilter=filter.dataset.mapFilter;updateRealMap(state,callbacks);fit(state)}if(zoom&&map){if(zoom.dataset.realZoom==='in')map.zoomIn();else if(zoom.dataset.realZoom==='out')map.zoomOut();else fit(state);}});
 }
 const visible=window.innerWidth>700||state.view==='map';
 if(!visible)return;
 if(!globalThis.L){document.querySelector('#map-notice').textContent='地图组件加载失败，请刷新后重试。';return;}
 if(!map){
  map=L.map('leaflet-map',{
   zoomControl:false,
   attributionControl:true,
   scrollWheelZoom:true,
   touchZoom:true,
   maxZoom:19,
   minZoom:9,
  }).setView(MAP_CONFIG.center,13);
  markers=L.layerGroup().addTo(map);routeLayer=L.layerGroup().addTo(map);
  tileLayer=L.tileLayer(MAP_CONFIG.tileUrl,{maxZoom:19,attribution:MAP_CONFIG.attribution,keepBuffer:2}).addTo(map);
  tileLayer.on('tileload',()=>{tilesLoaded++;const notice=document.querySelector('#map-notice');if(notice)notice.hidden=true;});
  tileLayer.on('tileerror',()=>{tilesFailed++;if(!tilesLoaded){const notice=document.querySelector('#map-notice');if(notice){notice.hidden=false;notice.innerHTML='当前网络暂时加载不了地图。 <a href="https://www.openstreetmap.org/#map=13/30.246/120.140" target="_blank" rel="noopener">打开原地图 ↗</a>';}}});
  resizeObserver=new ResizeObserver(()=>{if(root.offsetWidth)map.invalidateSize({pan:false})});resizeObserver.observe(root);
 }
 requestAnimationFrame(()=>map.invalidateSize({pan:false}));
 const filter=state.mapFilter||'plan';root.querySelectorAll('[data-map-filter]').forEach(b=>b.classList.toggle('active',b.dataset.mapFilter===filter));markers.clearLayers();routeLayer.clearLayers();
 const ps=visiblePlaces(state),colors={spot:'#bf8b48',hotel:'#6e8da8',food:'#bc7871'};
 for(const p of ps){const selected=state.plan.includes(p.id),active=state.focus===p.id;const marker=L.marker([p.lat,p.lon],{icon:L.divIcon({className:'real-pin-wrap',html:`<span class="real-pin ${active?'focused':''} ${p.type!=='spot'?'area-pin':''}" style="--pin-color:${colors[p.type]}">${icon(p.type==='spot'?'pin':p.type==='hotel'?'hotel':'food',18)}${selected?'<i>✓</i>':''}</span>`,iconSize:[38,43],iconAnchor:[19,40]}),keyboard:true,title:p.name,alt:p.name}).addTo(markers);marker.getElement()?.setAttribute('aria-label','查看'+p.name);marker.bindTooltip(p.name,{direction:'top',offset:[0,-40],className:'place-tooltip',permanent:selected||active});marker.on('click',()=>{state.focus=p.id;updateRealMap(state,callbacks);});}
 for(const s of segments(state.plan)){L.polyline([[s.from.lat,s.from.lon],[s.to.lat,s.to.lon]],{color:s.km>state.prefs.maxDistance?'#d38567':'#5c777c',weight:3,opacity:.75,dashArray:'5 9'}).addTo(routeLayer);}
 const p=byId(state.focus),hotel=state.plan.map(byId).find(p=>p.type==='hotel');
 document.querySelector('#map-selection').innerHTML=`<div class="map-small-icon">${icon(p?.type==='hotel'?'hotel':'pin',20)}</div><div class="map-selection-copy"><small>${p?p.type==='spot'?'真实景点':'区域选址参考 · 示例':'把喜欢的地方连起来'}</small><h3>${esc(p?.name||'从哪里住，到哪里玩。')}</h3><p>${p&&hotel&&p.id!==hotel.id?`距所选住宿区域 ${distance(p,hotel).toFixed(1)} km · 直线距离`:p?p.type==='spot'?'位置来自 OpenStreetMap，点击查看详情。':'这是区域参考位置，尚未接入真实商家。':`已选 ${state.plan.length} 处 · 虚线为直线连接，非导航路线`}</p></div><button class="primary" id="map-detail-button">${icon('arrow',19)}</button>`;
 document.querySelector('#map-detail-button').setAttribute('aria-label',p?'查看'+p.name+'详情':'查看我的行程');document.querySelector('#map-detail-button').onclick=()=>p?callbacks.onDetail(p.id):callbacks.onView('plan');
 if(p&&lastFocus!==p.id){lastFocus=p.id;map.panTo([p.lat,p.lon],{animate:!window.matchMedia('(prefers-reduced-motion: reduce)').matches,duration:.45});}
}
function visiblePlaces(state){const filter=state.mapFilter||'plan';return places.filter(p=>filter==='plan'?state.plan.includes(p.id)||p.id===state.focus:p.type===filter);}
function fit(state){if(!map)return;const list=visiblePlaces(state);if(list.length)map.fitBounds(list.map(p=>[p.lat,p.lon]),{paddingTopLeft:[60,160],paddingBottomRight:[60,180],maxZoom:15,animate:false});else map.setView(MAP_CONFIG.center,13);}
