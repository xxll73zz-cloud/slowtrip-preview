export const wants=['放松慢游','自然风景','当地生活','拍照好看','吃得地道','住得舒服'];
export const avoids=['拥挤人多','排队等候','早起赶路','长距离步行','商业化','住宿嘈杂'];
export const types={spot:'景点',hotel:'住宿',food:'餐厅'};
// 景点坐标来自 OpenStreetMap；住宿和餐饮标记仅表示真实区域的选址参考。
export const DATASET_VERSION="hangzhou-real-v2";
export const places=[
 {
  "id": "s1",
  "type": "spot",
  "name": "曲院风荷",
  "sub": "沿着湖边走走，把下午留给风。",
  "price": 0,
  "time": "慢游建议 1–2 小时",
  "tags": [
   "放松慢游",
   "自然风景",
   "拍照好看"
  ],
  "risks": [],
  "desc": "西湖西侧的园林与湖边步道。可以把散步、看水和拍照放在同一段行程里。",
  "trade": "荷花有季节性；天气与人流未实时接入。",
  "art": "lake",
  "photo": "quyuan",
  "lat": 30.2521659,
  "lon": 120.1286767,
  "source": "https://www.openstreetmap.org/way/975710351",
  "referenceName": "曲院风荷",
  "isReal": true
 },
 {
  "id": "s2",
  "type": "spot",
  "name": "河坊街",
  "sub": "走进街巷，遇见杭州的另一面。",
  "price": 0,
  "time": "慢游建议 1 小时",
  "tags": [
   "当地生活",
   "放松慢游",
   "拍照好看"
  ],
  "risks": [
   "商业化"
  ],
  "desc": "位于杭州老城的历史街区。适合与附近的餐饮区域一起比较，也可以只留一段散步的时间。",
  "trade": "商业街区；店铺、人流与排队情况需现场确认。",
  "art": "street",
  "photo": "street",
  "lat": 30.2425251,
  "lon": 120.1689743,
  "source": "https://www.openstreetmap.org/way/489075434",
  "referenceName": "河坊街",
  "isReal": true
 },
 {
  "id": "s3",
  "type": "spot",
  "name": "中国茶叶博物馆",
  "sub": "走进茶田，给自己一段留白。",
  "price": 0,
  "time": "慢游建议 2 小时",
  "tags": [
   "自然风景",
   "放松慢游",
   "当地生活"
  ],
  "risks": [
   "长距离步行"
  ],
  "desc": "这里标注的是双峰馆区。可以把茶文化参观和周边自然体验放在一起比较。",
  "trade": "馆区与周边有步行路段；开放与预约信息需出行前确认。",
  "art": "tea",
  "photo": "tea",
  "lat": 30.2218039,
  "lon": 120.1091179,
  "source": "https://www.openstreetmap.org/relation/13237505",
  "referenceName": "中国茶叶博物馆",
  "isReal": true
 },
 {
  "id": "s4",
  "type": "spot",
  "name": "宝石山",
  "sub": "站高一点，看看湖和城市。",
  "price": 0,
  "time": "慢游建议 1–2 小时",
  "tags": [
   "自然风景",
   "拍照好看"
  ],
  "risks": [
   "早起赶路",
   "长距离步行"
  ],
  "desc": "西湖北侧的山地景观。适合愿意登高、希望把湖景作为重点的人。早起并非必须，可按自己的节奏安排。",
  "trade": "包含登高与步行；日出体验需要早起，天气影响视野。",
  "art": "hill",
  "photo": "hill",
  "lat": 30.2624214,
  "lon": 120.141408,
  "source": "https://www.openstreetmap.org/node/5580634142",
  "referenceName": "宝石山",
  "isReal": true
 },
 {
  "id": "s5",
  "type": "spot",
  "name": "浙江美术馆",
  "sub": "把一个下午，交给建筑与艺术。",
  "price": 0,
  "time": "慢游建议 1–2 小时",
  "tags": [
   "拍照好看",
   "放松慢游",
   "当地生活"
  ],
  "risks": [],
  "desc": "南山路一带的艺术场馆，可以与西湖南岸的行程一起比较，也能作为室内备选。",
  "trade": "展览、开放时间及预约政策尚未实时接入。",
  "art": "museum",
  "photo": "museum",
  "lat": 30.2334209,
  "lon": 120.1522667,
  "source": "https://www.openstreetmap.org/way/420546406",
  "referenceName": "浙江美术馆",
  "isReal": true
 },
 {
  "id": "s6",
  "type": "spot",
  "name": "雷峰塔",
  "sub": "在湖的南岸，换一个角度看风景。",
  "price": 40,
  "time": "慢游建议 1 小时",
  "tags": [
   "自然风景",
   "拍照好看",
   "当地生活"
  ],
  "risks": [
   "拥挤人多",
   "排队等候"
  ],
  "desc": "位于西湖南岸的真实景点。可以结合浙江美术馆和附近的湖岸区域比较位置。",
  "trade": "票价为演示参考，尚未核验实时票价、开放与排队情况。",
  "art": "market",
  "photo": "leifeng",
  "lat": 30.2338837,
  "lon": 120.1450125,
  "source": "https://www.openstreetmap.org/way/229726934",
  "referenceName": "雷峰塔",
  "isReal": true
 },
 {
  "id": "h1",
  "type": "hotel",
  "name": "湖滨住宿区域",
  "sub": "住在湖与城市之间。",
  "price": 480,
  "time": "一晚预算示例 · 区域参考",
  "tags": [
   "住得舒服",
   "放松慢游",
   "自然风景"
  ],
  "risks": [],
  "desc": "以湖滨银泰 IN77 附近作为选址参考，演示住在西湖东侧时与景点的距离。这里不是一家已经接入的酒店。",
  "trade": "仅为住宿选址演示，没有真实酒店房态或报价。",
  "art": "hotel",
  "photo": "city",
  "lat": 30.2556677,
  "lon": 120.1588264,
  "source": "https://www.openstreetmap.org/way/1110196946",
  "referenceName": "湖滨银泰·IN77",
  "isReal": false
 },
 {
  "id": "h2",
  "type": "hotel",
  "name": "河坊街住宿区域",
  "sub": "把老城街巷放在行程身边。",
  "price": 280,
  "time": "一晚预算示例 · 区域参考",
  "tags": [
   "当地生活",
   "吃得地道"
  ],
  "risks": [
   "住宿嘈杂"
  ],
  "desc": "以河坊街周边作为住宿选址参考。预算、噪声标签用于演示偏好取舍，不代表具体商家评价。",
  "trade": "没有接入具体酒店；噪声与价格只是演示设定。",
  "art": "street",
  "photo": "street",
  "lat": 30.2425251,
  "lon": 120.1689743,
  "source": "https://www.openstreetmap.org/way/489075434",
  "referenceName": "河坊街",
  "isReal": false
 },
 {
  "id": "h3",
  "type": "hotel",
  "name": "龙井住宿区域",
  "sub": "把一晚，留在绿色里。",
  "price": 680,
  "time": "一晚预算示例 · 区域参考",
  "tags": [
   "住得舒服",
   "自然风景",
   "放松慢游"
  ],
  "risks": [
   "长距离步行"
  ],
  "desc": "以龙井村作为住宿选址参考，比较山间区域与城区之间的位置关系。",
  "trade": "预算为演示设定，实际交通、住宿条件与房价需另外查询。",
  "art": "tea",
  "photo": "tea",
  "lat": 30.2218656,
  "lon": 120.098065,
  "source": "https://www.openstreetmap.org/node/4472025928",
  "referenceName": "龙井村",
  "isReal": false
 },
 {
  "id": "h4",
  "type": "hotel",
  "name": "武林住宿区域",
  "sub": "从城市中心，安排一段旅行。",
  "price": 380,
  "time": "一晚预算示例 · 区域参考",
  "tags": [
   "住得舒服",
   "放松慢游"
  ],
  "risks": [],
  "desc": "以武林广场周边作为选址参考。适合比较城市中心与西湖周边不同住宿区域的地理位置。",
  "trade": "没有接入具体酒店，预算不代表实时房价。",
  "art": "hotel",
  "photo": "city",
  "lat": 30.2746998,
  "lon": 120.1596218,
  "source": "https://www.openstreetmap.org/way/514668801",
  "referenceName": "武林广场",
  "isReal": false
 },
 {
  "id": "f1",
  "type": "food",
  "name": "河坊街餐饮区域",
  "sub": "给街巷里的味道，留一点时间。",
  "price": 65,
  "time": "人均预算示例 · 区域参考",
  "tags": [
   "吃得地道",
   "当地生活"
  ],
  "risks": [],
  "desc": "以河坊街周边作为用餐位置参考。可以先确定吃饭的区域，再挑具体商家。",
  "trade": "未接入真实菜单与商家；口味、价格均为演示。",
  "art": "food",
  "photo": "street",
  "lat": 30.2425251,
  "lon": 120.1689743,
  "source": "https://www.openstreetmap.org/way/489075434",
  "referenceName": "河坊街",
  "isReal": false
 },
 {
  "id": "f2",
  "type": "food",
  "name": "湖滨餐饮区域",
  "sub": "逛完湖，再好好吃一顿。",
  "price": 128,
  "time": "人均预算示例 · 区域参考",
  "tags": [
   "放松慢游",
   "拍照好看",
   "住得舒服"
  ],
  "risks": [],
  "desc": "以湖滨区域作为用餐位置参考，帮助比较景点和住宿附近是否顺路。",
  "trade": "没有真实商家、菜单、排队与价格信息。",
  "art": "food",
  "photo": "city",
  "lat": 30.2556677,
  "lon": 120.1588264,
  "source": "https://www.openstreetmap.org/way/1110196946",
  "referenceName": "湖滨银泰·IN77",
  "isReal": false
 },
 {
  "id": "f3",
  "type": "food",
  "name": "武林餐饮区域",
  "sub": "在城市里，找一顿喜欢的饭。",
  "price": 28,
  "time": "人均预算示例 · 区域参考",
  "tags": [
   "吃得地道",
   "当地生活"
  ],
  "risks": [
   "排队等候"
  ],
  "desc": "以武林广场周边作为餐饮位置参考，演示不同城区之间的选择。",
  "trade": "人均预算与排队标签仅用于原型演示。",
  "art": "food",
  "photo": "city",
  "lat": 30.2746998,
  "lon": 120.1596218,
  "source": "https://www.openstreetmap.org/way/514668801",
  "referenceName": "武林广场",
  "isReal": false
 },
 {
  "id": "f4",
  "type": "food",
  "name": "龙井餐饮区域",
  "sub": "茶香旁边，留一顿午餐。",
  "price": 88,
  "time": "人均预算示例 · 区域参考",
  "tags": [
   "自然风景",
   "吃得地道",
   "放松慢游"
  ],
  "risks": [],
  "desc": "以龙井村作为用餐区域参考，便于和茶文化体验一起考虑。",
  "trade": "尚未接入具体商家与营业、菜单信息。",
  "art": "tea",
  "photo": "tea",
  "lat": 30.2218656,
  "lon": 120.098065,
  "source": "https://www.openstreetmap.org/node/4472025928",
  "referenceName": "龙井村",
  "isReal": false
 }
];
export const byId=id=>places.find(p=>p.id===id);
export function distance(a,b){
 if(!a||!b||![a.lat,a.lon,b.lat,b.lon].every(Number.isFinite))throw new Error('缺少有效经纬度');
 const rad=x=>x*Math.PI/180,dp=rad(b.lat-a.lat),dl=rad(b.lon-a.lon);
 const h=Math.sin(dp/2)**2+Math.cos(rad(a.lat))*Math.cos(rad(b.lat))*Math.sin(dl/2)**2;
 return 6371.0088*2*Math.atan2(Math.sqrt(h),Math.sqrt(Math.max(0,1-h)));
}
export const defaults={wants:['放松慢游','自然风景'],avoids:['拥挤人多','排队等候'],strict:false,budget:500,maxDistance:2.5,note:''};
const aliases={'放松慢游':['放松','慢','休息','不赶','发呆'],'自然风景':['自然','风景','山水','湖','绿色'],'当地生活':['当地','生活','人文','老街'],'拍照好看':['拍照','出片','摄影'],'吃得地道':['地道','好吃','美食','当地菜'],'住得舒服':['舒适','舒服','睡好'],'拥挤人多':['人多','拥挤','人挤人'],'排队等候':['排队','等位'],'早起赶路':['早起','赶路'],'长距离步行':['走太多','走路太多','爬山','步行太多'],'商业化':['商业化','网红'],'住宿嘈杂':['吵','噪音','嘈杂']};
export function parseNote(note){
 const found={wants:[],avoids:[],unrecognized:false};
 const text=note.trim();
 for(const [tag,words] of Object.entries(aliases)) if(words.some(w=>text.includes(w))) (wants.includes(tag)?found.wants:found.avoids).push(tag);
 // 自然语言仅做关键词辅助，不把否定句猜测成用户的正向偏好。
 found.wants=found.wants.filter(tag=>!aliases[tag].some(w=>new RegExp('(不想|不要|不喜欢|不爱|不需要)\\s*'+w).test(text)));
 found.unrecognized=!!text&&!found.wants.length&&!found.avoids.length;
 return found;
}
export function effective(prefs){const parsed=parseNote(prefs.note||'');return {...prefs,wants:[...new Set([...prefs.wants,...parsed.wants])],avoids:[...new Set([...prefs.avoids,...parsed.avoids])]};}
export function evaluate(p,prefs){
 const pref=effective(prefs),matched=p.tags.filter(t=>pref.wants.includes(t)),conflicts=p.risks.filter(t=>pref.avoids.includes(t));
 const excluded=(p.type==='hotel'&&p.price>pref.budget)||(pref.strict&&conflicts.length>0);
 return {matched,conflicts,excluded,score:matched.length*4-conflicts.length*5,reason:matched.length?'符合你想要的「'+matched.join('、')+'」':'可以作为不同体验的备选',warning:conflicts.length?'可能遇到你不喜欢的「'+conflicts.join('、')+'」':p.trade};
}
export function candidates(prefs,votes={},type='spot'){return places.filter(p=>p.type===type&&!evaluate(p,prefs).excluded).sort((a,b)=>(evaluate(b,prefs).score+(votes[b.id]===1?6:0))-(evaluate(a,prefs).score+(votes[a.id]===1?6:0))||a.id.localeCompare(b.id));}
export function buildPlan(prefs,votes={},locked=[]){
 const valid=places.filter(p=>!evaluate(p,prefs).excluded&&votes[p.id]!==-1);
 const keep=valid.filter(p=>locked.includes(p.id));
 const sights=valid.filter(p=>p.type==='spot').sort((a,b)=>evaluate(b,prefs).score+(votes[b.id]===1?8:0)-evaluate(a,prefs).score-(votes[a.id]===1?8:0));
 const spots=[...keep.filter(p=>p.type==='spot')]; for(const p of sights)if(spots.length<2&&!spots.includes(p))spots.push(p);
 const hotels=valid.filter(p=>p.type==='hotel').sort((a,b)=>hotelScore(b)-hotelScore(a));
 function hotelScore(p){return evaluate(p,prefs).score+(votes[p.id]===1?8:0)-spots.reduce((s,x)=>s+distance(p,x),0);}
 const hotel=keep.find(p=>p.type==='hotel')||hotels[0];
 const anchor=spots.at(-1)||hotel;
 const foods=valid.filter(p=>p.type==='food').sort((a,b)=>foodScore(b)-foodScore(a));
 function foodScore(p){return evaluate(p,prefs).score+(votes[p.id]===1?8:0)-(anchor?distance(anchor,p):0)*2;}
 const food=keep.find(p=>p.type==='food')||foods[0];
 return [hotel,...spots,food].filter(Boolean).map(p=>p.id);
}
export function alternatives(id,prefs,votes={},selected=[]){const current=byId(id);if(!current)return [];return places.filter(p=>p.type===current.type&&p.id!==id&&!selected.includes(p.id)&&!evaluate(p,prefs).excluded&&votes[p.id]!==-1).sort((a,b)=>evaluate(b,prefs).score-distance(current,b)-evaluate(a,prefs).score+distance(current,a)).slice(0,2);}
export function segments(ids){return ids.slice(1).map((id,i)=>({from:byId(ids[i]),to:byId(id),km:distance(byId(ids[i]),byId(id))}));}
export function tally(members){return places.map(p=>{let yes=0,no=0;for(const m of members){if(m.votes?.[p.id]===1)yes++;if(m.votes?.[p.id]===-1)no++;}return {id:p.id,yes,no,voted:yes+no,pending:members.length-yes-no,rate:yes+no?yes/(yes+no):null};}).sort((a,b)=>(b.rate??-1)-(a.rate??-1)||b.yes-a.yes||a.id.localeCompare(b.id));}
