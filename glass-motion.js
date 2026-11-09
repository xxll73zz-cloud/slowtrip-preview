export function setScenicPhoto(name){
 const backdrop=document.querySelector('#scenic-backdrop');
 if(!backdrop||!name||backdrop.dataset.photo===name)return;
 backdrop.dataset.photo=name;
 const next=new Image();next.className='scene-layer';next.alt='';next.src=`./assets/${name}.jpg`;
 next.decode().then(()=>{
  if(backdrop.dataset.photo!==name)return;
  const earlier=[...backdrop.querySelectorAll('.scene-layer')];backdrop.append(next);
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
   if(backdrop.dataset.photo!==name){next.remove();return;}
   next.classList.add('visible');for(const image of earlier){image.classList.remove('visible');setTimeout(()=>image.remove(),700);}
  }));
 }).catch(()=>{if(backdrop.dataset.photo===name)delete backdrop.dataset.photo;});
}

// A single pointer listener serves mouse, pen and touch without intercepting scrolling or swipes.
export function installGlassMotion(){
 const surfaces='.header,.quiet-button,.nav,.nav button,.segmented,.segmented button,.pref-summary button,.pref-summary .pill,.cinematic-card,.cinematic-card button,.decision-button,.undo-button,.together-banner,.map-location,.map-bottom,.map-filter-bar,.map-filter-bar button,.map-controls button,.map-bottom button,.panel .memory-tile,.panel .ranking,.panel .route-stop,.panel .soft-box,.panel .primary,.panel .secondary,.sheet,.sheet button,.sheet .alternative,.sheet .input';
 const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
 let hot=null,pressed=null,photo=null,frame=0,pending=null,touchId=null,releaseTimer=0;
 const resetPhoto=()=>{if(photo){photo.style.removeProperty('--photo-x');photo.style.removeProperty('--photo-y');photo=null;}};
 const resetHot=()=>{hot?.removeAttribute('data-glass-hot');hot=null;resetPhoto();};
 function illuminate(node,x,y){
  const r=node.getBoundingClientRect();if(!r.width||!r.height)return;
  node.style.setProperty('--glass-x',Math.max(0,Math.min(100,(x-r.left)/r.width*100)).toFixed(1)+'%');
  node.style.setProperty('--glass-y',Math.max(0,Math.min(100,(y-r.top)/r.height*100)).toFixed(1)+'%');
 }
 function flush(){
  frame=0;const p=pending;pending=null;if(!p)return;
  if(p.node!==hot){hot?.removeAttribute('data-glass-hot');hot=p.node?.isConnected?p.node:null;hot?.setAttribute('data-glass-hot','');}
  if(hot)illuminate(hot,p.x,p.y);
  const currentPhoto=p.card?.isConnected?p.card:null;
  if(currentPhoto!==photo){resetPhoto();photo=currentPhoto;}
  if(photo&&!motion.matches){const r=photo.getBoundingClientRect(),dx=((p.x-r.left)/r.width-.5)*9,dy=((p.y-r.top)/r.height-.5)*7;photo.style.setProperty('--photo-x',Math.max(-5,Math.min(5,dx)).toFixed(1)+'px');photo.style.setProperty('--photo-y',Math.max(-4,Math.min(4,dy)).toFixed(1)+'px');illuminate(photo,p.x,p.y);}
  if(!motion.matches&&document.body.dataset.current!=='map'){
   const fx=p.x/window.innerWidth,fy=p.y/window.innerHeight;
   document.body.style.setProperty('--ambient-x',(fx*100).toFixed(1)+'%');document.body.style.setProperty('--ambient-y',(fy*100).toFixed(1)+'%');
   document.body.style.setProperty('--scene-x',((fx-.5)*8).toFixed(1)+'px');document.body.style.setProperty('--scene-y',((fy-.5)*8).toFixed(1)+'px');
  }
 }
 function track(event){
  const target=event.target instanceof Element?event.target:null;
  pending={x:event.clientX,y:event.clientY,type:event.pointerType,node:target?.closest(surfaces)||null,card:target?.closest('.cinematic-card')||null};
  if(!frame)frame=requestAnimationFrame(flush);
 }
 document.addEventListener('pointermove',e=>{if(e.pointerType==='mouse'||e.pointerType==='pen'||e.pointerId===touchId)track(e);},{passive:true});
 document.addEventListener('pointerdown',e=>{
  if(!e.isPrimary)return;
  clearTimeout(releaseTimer);
  if(e.pointerType!=='mouse')touchId=e.pointerId;
  pressed?.removeAttribute('data-glass-pressed');pressed=e.target instanceof Element?e.target.closest(surfaces):null;pressed?.setAttribute('data-glass-pressed','');track(e);
 },{passive:true});
 function release(e){
  pressed?.removeAttribute('data-glass-pressed');pressed=null;
  if(e.pointerType!=='mouse'){
   touchId=null;
   if(e.type==='pointercancel'){pending=null;resetHot();return;}
   releaseTimer=setTimeout(()=>{pending=null;resetHot();},160);
  }
 }
 document.addEventListener('pointerup',release,{passive:true});document.addEventListener('pointercancel',release,{passive:true});
 document.addEventListener('pointerout',e=>{if(e.pointerType==='mouse'&&!e.relatedTarget){pending=null;resetHot();}},{passive:true});
 window.addEventListener('blur',()=>{clearTimeout(releaseTimer);pressed?.removeAttribute('data-glass-pressed');pressed=null;touchId=null;pending=null;resetHot();});
}
