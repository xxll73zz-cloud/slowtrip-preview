const imageMap={lake:'quyuan',tea:'tea',street:'street',hill:'hill',museum:'museum',market:'leifeng',hotel:'city',food:'street'};
export function artwork(kind='lake'){return `<img class="travel-photo" src="./assets/${imageMap[kind]||'city'}.jpg" alt="杭州旅行实景参考" decoding="async">`;}
