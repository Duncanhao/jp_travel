
(()=>{'use strict';
const seed={sea:[
{id:'s1',name:'翱翔：夢幻奇航',zone:'地中海港灣',priority:'必玩',strategy:'開園直接排；太長改下午評估',hint:'你原本指定的第一站。入園時先處理冰雪奇緣 DPA，並查看翱翔即時等待。'},
{id:'s2',name:'地心探險之旅',zone:'神秘島',priority:'必玩',strategy:'DPA 候選',hint:'與海底兩萬哩同區域。'},
{id:'s3',name:'海底兩萬哩',zone:'神秘島',priority:'必玩',strategy:'一般排隊',hint:'排隊較短時可快速收集一格。'},
{id:'s4',name:'冰雪奇緣（安娜與艾莎）',zone:'夢幻泉鄉',priority:'必玩',strategy:'入園優先搶 DPA',hint:'實際取得的回場時間決定夢幻泉鄉順序。'},
{id:'s5',name:'樂佩公主天燈盛會',zone:'夢幻泉鄉',priority:'必玩',strategy:'DPA 候選',hint:'盡可能與另外兩項夢幻泉鄉設施一起玩。'},
{id:'s6',name:'小飛俠夢幻島歷險記',zone:'夢幻泉鄉',priority:'必玩',strategy:'DPA 候選',hint:'盡可能與另外兩項夢幻泉鄉設施一起玩。'},
{id:'s7',name:'忿怒雙神',zone:'失落河三角洲',priority:'想玩',strategy:'看現場等待',hint:'原始 Excel 分區誤寫為美國海濱，已修正。'},
{id:'s8',name:'玩具總動員瘋狂遊戲屋',zone:'美國海濱',priority:'想玩',strategy:'DPA 候選',hint:'與驚魂古塔同區，視 DPA 與排隊時間補玩。'},
{id:'s9',name:'驚魂古塔',zone:'美國海濱',priority:'想玩',strategy:'DPA 候選',hint:'與玩具總動員同區。'},
{id:'s10',name:'閃耀歡騰慶典',zone:'地中海港灣',priority:'有空再玩',strategy:'表演候補',hint:'依 11/12 官方演出資訊安排，與必玩衝突時可略過。',show:'依當日官方時刻'},
{id:'s11',name:'舞動全球！',zone:'美國海濱',priority:'有空再玩',strategy:'表演候補／可能需預約',hint:'可能需要報名體驗或 DPA。',show:'依當日官方時刻'},
{id:'s12',name:'夢想起飛',zone:'失落河三角洲',priority:'有空再玩',strategy:'表演候補／可能需預約',hint:'與必玩設施衝突時可以略過。',show:'依當日官方時刻'}],land:[
{id:'l1',name:'巨雷山',zone:'西部樂園',priority:'必玩',strategy:'開園先直排／DPA 候選',hint:'保留你原本想先玩的順序。'},
{id:'l2',name:'飛濺山',zone:'動物天地',priority:'必玩',strategy:'等待超過 45 分鐘可考慮 DPA',hint:'與巨雷山相鄰，順路安排。'},
{id:'l3',name:'美女與野獸「城堡奇緣」',zone:'夢幻樂園',priority:'必玩',strategy:'DPA 第一優先',hint:'入園先購買 DPA，再依回場時間調整。'},
{id:'l4',name:'小熊維尼獵蜜記',zone:'夢幻樂園',priority:'必玩',strategy:'依官方 App 查詢可用通行方式',hint:'與美女與野獸、幽靈公館同區。'},
{id:'l5',name:'幽靈公館',zone:'夢幻樂園',priority:'必玩',strategy:'一般排隊／依 App 查詢',hint:'留意季節性活動與排隊時間。'},
{id:'l6',name:'小飛俠天空之旅',zone:'夢幻樂園',priority:'有空再玩',strategy:'一般排隊',hint:'累了可改為休息、拍照。'},
{id:'l7',name:'怪獸電力公司「迷藏巡遊車」',zone:'明日樂園',priority:'必玩',strategy:'依官方 App 查詢可用通行方式',hint:'安排與星際旅行同區。'},
{id:'l8',name:'星際旅行：冒險續航',zone:'明日樂園',priority:'必玩',strategy:'一般排隊',hint:'你希望傍晚人少時再玩。'},
{id:'l9',name:'杯麵歡樂之旅',zone:'明日樂園',priority:'有空再玩',strategy:'DPA 候選／排隊短才玩',hint:'可略過以保留陸地悠閒節奏。'},
{id:'l10',name:'夜間電子大遊行～夢之光',zone:'遊行路線',priority:'想看',strategy:'晚上視當日演出',hint:'原先填的 19:00 時段尚未視為官方確認。',show:'晚上（待公告）'},
{id:'l11',name:'星彩聖誕（高空煙火）',zone:'城堡周邊',priority:'想看',strategy:'以當日公告與天氣為準',hint:'可能因天氣取消；不鎖定原 Excel 的時間。',show:'晚上（待公告）'}]};
const coords={sea:{'地中海港灣':[165,355],'神秘島':[340,300],'夢幻泉鄉':[575,105],'失落河三角洲':[554,294],'美國海濱':[190,125]},land:{'西部樂園':[158,300],'動物天地':[102,412],'夢幻樂園':[385,158],'明日樂園':[603,312],'遊行路線':[352,378],'城堡周邊':[381,294]}};
const color={'必玩':'#f7ca84','想玩':'#ace4e9','有空再玩':'#ace4e9','想看':'#ace4e9'};
const NAV={sea:{'地中海港灣':[12,25],'神秘島':[35,25],'夢幻泉鄉':[85,24],'失落河三角洲':[60,55],'美國海濱':[27,53]},land:{'西部樂園':[13,25],'動物天地':[12,47],'夢幻樂園':[49,37],'明日樂園':[84,55],'遊行路線':[52,80],'城堡周邊':[52,55]}};
const KEY='magical-route-2026-v1', icons={sea:'🌊',land:'🏰'};
let storageIssue=false;
let state=load(),park=new URLSearchParams(location.search).get('park')==='land'?'land':'sea',selected=state.order[park][0],hide=false,modalId=null,lastFocus=null;
const $=id=>document.getElementById(id);
function normalize(s){
 if(!s||typeof s!=='object'||!s.order||typeof s.order!=='object')throw Error('進度格式不正確');
 const clean=initial();
 for(const p of ['sea','land']){
  const ids=seed[p].map(x=>x.id),order=s.order[p],values=s[p];
  if(!Array.isArray(order)||order.length!==ids.length||new Set(order).size!==ids.length||order.some(id=>!ids.includes(id))||!values||typeof values!=='object'||Array.isArray(values))throw Error('行程站點不完整或有重複');
  clean.order[p]=order.slice();
  for(const id of ids){
   const v=values[id];if(v===undefined)continue;
   if(!v||typeof v!=='object'||Array.isArray(v))throw Error('設施進度格式不正確');
   const start=v.start||'',end=v.end||'',type=v.type||'';
   if(!validTime(start)||!validTime(end)||(!!start!==!!end)||(start&&end<=start))throw Error('預約時段需完整且結束晚於開始');
   if(!['','DPA','PP','Entry','Standby'].includes(type))throw Error('通行方式不正確');
   if(v.done!==undefined&&typeof v.done!=='boolean')throw Error('打卡資料格式不正確');
   clean[p][id]={done:!!v.done,start,end,type};
  }
 }
 return clean;
}
function validTime(t){return typeof t==='string'&&(t===''||/^([01]\d|2[0-3]):[0-5]\d$/.test(t))}
function initial(){return {sea:{},land:{},order:{sea:seed.sea.map(x=>x.id),land:seed.land.map(x=>x.id)}}}
function load(){try{const raw=localStorage.getItem(KEY);if(raw)return normalize(JSON.parse(raw))}catch(e){storageIssue=true}return initial()}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));storageIssue=false}catch(e){storageIssue=true}const el=document.getElementById('storageWarning');if(el)el.hidden=!storageIssue;}
function list(){return state.order[park].map(id=>seed[park].find(x=>x.id===id)).filter(Boolean)}
function pick(id){return seed[park].find(x=>x.id===id)}
function val(id){return state[park][id]||{}}
function escapeHtml(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function note(msg){const el=$('toast');el.textContent=msg;el.classList.add('show');clearTimeout(note.timer);note.timer=setTimeout(()=>el.classList.remove('show'),2300)}
function syncParkTabs(){document.querySelectorAll('.tab').forEach(b=>{const active=b.dataset.park===park;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1});$('parkContent').setAttribute('aria-labelledby','park-'+park);$('backDay').href='index.html?day='+(park==='sea'?1:2)+'#journey';}
function changePark(p){if(!['sea','land'].includes(p))return;park=p;selected=state.order[p][0];syncParkTabs();try{history.replaceState(null,'','?park='+park)}catch(e){}render()}
function update(id,v){state[park][id]={...val(id),...v};save();render()}
function navigate(delta){let order=state.order[park],i=order.indexOf(selected);selected=order[Math.max(0,Math.min(order.length-1,i+delta))];render()}
function render(){const a=list(),done=a.filter(x=>val(x.id).done),must=a.filter(x=>x.priority==='必玩');$('progressText').textContent=`${done.length} / ${a.length}`;$('mustText').textContent=`${must.filter(x=>val(x.id).done).length} / ${must.length}`;$('dpaText').textContent=a.filter(x=>val(x.id).start).length;$('progressFill').style.width=(a.length?done.length/a.length*100:0)+'%';$('dayLabel').textContent=park==='sea'?'DAY 01':'DAY 02';$('mapMode').textContent=park==='sea'?'SEA QUEST':'LAND QUEST';renderPoster();renderMap(a);renderFocus(a);renderList(a);renderReservations(a);renderStrategy();$('storageWarning').hidden=!storageIssue}
function renderPoster(){const s=pick(selected)||list()[0];const poster=park==='sea'?'assets/disney/sea-map.webp':'assets/disney/land-map.webp';if($('posterImage').getAttribute('src')!==poster)$('posterImage').src=poster;$('posterImage').alt=(park==='sea'?'海洋冒險':'樂園悠閒')+'原創幻想園區插畫地圖，非官方定位地圖';$('posterTitle').textContent=park==='sea'?'海洋篇｜一起收集所有必玩！':'樂園篇｜浪漫慢慢玩！';$('posterMode').textContent=park==='sea'?'DAY 01 · SEA':'DAY 02 · LAND';$('posterCurrent').textContent=`目前選取：${s.name}`;$('posterZone').textContent=`${s.zone} · ${s.priority}｜地圖光點代表目前選取的概念分區`;
 const a=NAV[park][s.zone]||[50,50];$('activeBeacon').style.left=a[0]+'%';$('activeBeacon').style.top=a[1]+'%';$('prevStop').disabled=state.order[park][0]===selected;$('nextStop').disabled=state.order[park].at(-1)===selected}
function renderMap(a){const svg=$('map'),zones=coords[park],positions={},zKeys=Object.keys(zones);
 let out='<defs><pattern id="starDots" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="7" cy="11" r="1.5" fill="#ffffff" opacity=".8"/></pattern><linearGradient id="skywash" x2="1" y2="1"><stop offset="0" stop-color="#edfbff"/><stop offset="1" stop-color="#dce8f8"/></linearGradient></defs><rect width="780" height="515" fill="url(#skywash)"/><rect width="780" height="515" fill="url(#starDots)"/>';
 if(park==='sea')out+='<ellipse class="water" cx="394" cy="243" rx="185" ry="105"/><path class="water" d="M0 450Q140 385 247 495L0 515Z"/>';
 else out+='<path class="water" d="M235 235Q400 177 540 285Q494 350 280 357Z"/>';
 zKeys.forEach((z,j)=>{const [x,y]=zones[z],r=z==='夢幻泉鄉'?120:96;out+=`<ellipse class="zone" cx="${x}" cy="${y}" rx="${r}" ry="80"/><text class="zoneLabel" x="${x}" y="${y-59}" text-anchor="middle">${escapeHtml(z)}</text>`});
 const counts={};const offs=[[0,0],[-59,20],[61,20],[-58,-33],[59,-33],[0,58]];
 seed[park].forEach(x=>{let index=counts[x.zone]||0;counts[x.zone]=index+1;let [cx,cy]=zones[x.zone]||[385,250];let [dx,dy]=offs[index%offs.length];positions[x.id]=[Math.max(33,Math.min(747,cx+dx)),Math.max(36,Math.min(480,cy+dy))]});
 const path=a.map(x=>positions[x.id].join(',')).join(' ');out+=`<polyline class="routeBg" points="${path}"/><polyline class="route" points="${path}"/>`;
 a.forEach((x,i)=>{const [cx,cy]=positions[x.id],v=val(x.id),done=!!v.done,active=x.id===selected,c=done?'#5ab8a7':color[x.priority]||'#a7e2ee';out+=`<g class="node ${done?'done':''} ${active?'active':''}" data-id="${x.id}" role="button" tabindex="0" aria-label="選擇第 ${i+1} 格 ${escapeHtml(x.name)}"><title>${escapeHtml(x.name)}</title><rect x="${cx-22}" y="${cy-21}" width="44" height="42" rx="12" fill="${c}"/><text x="${cx}" y="${cy+5}" text-anchor="middle">${done?'✓':i+1}</text></g>`});
 svg.innerHTML=out;svg.querySelectorAll('.node').forEach(n=>{let go=()=>{selected=n.dataset.id;render()};n.addEventListener('click',go);n.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}})})}
function overlapping(x){let v=val(x.id);if(!v.start||!v.end)return[];return list().filter(y=>y.id!==x.id).filter(y=>{let k=val(y.id);return k.start&&k.end&&v.start<k.end&&k.start<v.end}).map(y=>y.name)}
function renderFocus(a){const x=pick(selected)||a[0];if(!x)return;const v=val(x.id),overlap=overlapping(x),idx=a.findIndex(y=>y.id===x.id)+1;
 $('focus').innerHTML=`<div class="small">✦ 第 ${idx} 格 / ${a.length} 格 · ${escapeHtml(x.zone)}</div><h3>${escapeHtml(x.name)}</h3><div class="meta"><span class="tag ${x.priority==='必玩'?'must':'optional'}">${escapeHtml(x.priority)}</span><span class="tag">${escapeHtml(x.strategy)}</span>${v.start?`<span class="tag">🎟️ ${escapeHtml(v.type||'DPA')} ${escapeHtml(v.start)}–${escapeHtml(v.end||'未填')}</span>`:''}${x.show?`<span class="tag">🕰️ ${escapeHtml(x.show)}</span>`:''}</div><p class="small" style="font-size:13px">${escapeHtml(x.hint)}</p>${overlap.length?`<div class="warnings">⚠️ 與已記錄的「${escapeHtml(overlap.join('、'))}」時段重疊，請確認預約。</div>`:''}<div class="focusActions"><button class="primary" id="focusDone">${v.done?'↩ 取消完成':'✓ 完成打卡'}</button><button class="outline" id="focusDpa">🎟️ 記錄 DPA／時段</button><a class="outline link" href="https://www.tokyodisneyresort.jp/${park==='sea'?'en/tds':'en/tdl'}/attraction/" target="_blank" rel="noopener noreferrer">官方設施資料 ↗</a></div>`;
 $('focusDone').onclick=()=>update(x.id,{done:!v.done});$('focusDpa').onclick=()=>openModal(x.id)}
function renderList(a){$('list').innerHTML=a.map((x,i)=>{const v=val(x.id);if(hide&&v.done)return'';return `<div class="item ${selected===x.id?'sel':''} ${v.done?'isdone':''}" data-id="${x.id}"><button type="button" class="num" data-action="select" aria-label="選取第 ${i+1} 站">${i+1}</button><button type="button" class="itemTitleButton" data-action="select"><span class="itemTitle">${x.priority==='必玩'?'⭐ ':''}${escapeHtml(x.name)}</span><span class="itemDesc">${escapeHtml(x.zone)} · ${escapeHtml(x.priority)}${v.start?' · 🎟️ '+escapeHtml(v.start)+'–'+escapeHtml(v.end||''):''}</span></button><div class="itemBtns"><button class="iconBtn" type="button" data-action="up" ${i===0?'disabled':''} title="往前一格" aria-label="往前一格">↑</button><button class="iconBtn" type="button" data-action="down" ${i===a.length-1?'disabled':''} title="往後一格" aria-label="往後一格">↓</button><input class="tick" data-action="done" type="checkbox" ${v.done?'checked':''} aria-label="標記 ${escapeHtml(x.name)} 完成"></div></div>`}).join('');
 $('list').querySelectorAll('.item').forEach(el=>{el.addEventListener('click',e=>{let action=e.target.closest('[data-action]')?.dataset.action,id=el.dataset.id;if(!action)return;const restore=()=>document.querySelector(`.item[data-id="${id}"] [data-action="${action}"]`)?.focus();if(action==='select'){selected=id;render()}else if(action==='done'){update(id,{done:e.target.checked});restore()}else if(action==='up'||action==='down'){const z=state.order[park],i=z.indexOf(id),j=i+(action==='up'?-1:1);if(j<0||j>=z.length)return;[z[i],z[j]]=[z[j],z[i]];save();render();restore()}})})}
function renderReservations(a){const booked=a.filter(x=>val(x.id).start).sort((x,y)=>val(x.id).start.localeCompare(val(y.id).start));$('reservations').innerHTML=booked.length?booked.map(x=>{const v=val(x.id),conflict=overlapping(x).length;return `<button class="reservationChip ${conflict?'conflict':''}" data-id="${x.id}"><strong>${escapeHtml(v.start)}–${escapeHtml(v.end)} · ${escapeHtml(v.type||'時段')}</strong>${escapeHtml(x.name)}${conflict?' · ⚠ 時段重疊':''}</button>`}).join(''):'<p class="small">還沒有記錄時段。選擇設施後，按「記錄 DPA／時段」加入。</p>';$('reservations').querySelectorAll('button').forEach(b=>b.onclick=()=>{selected=b.dataset.id;render();$('boardSection').scrollIntoView({behavior:'smooth',block:'start'});$('focusDpa').focus()})}
function renderStrategy(){const sea=[['開園先做','入園先為兩人查詢並購買冰雪奇緣 DPA，確認翱翔排隊時間。'],['上午','翱翔 → 地心探險、海底兩萬哩。若 DPA 早場則先赴夢幻泉鄉。'],['午後','冰雪奇緣、樂佩、小飛俠盡量集中，順路再補忿怒雙神。'],['傍晚','玩具總動員、驚魂古塔；表演僅在不犧牲必玩時加入。'],['全天策略','海洋以必玩六項為核心；餐飲機動、依 DPA 時間改路線。']],land=[['開園先做','先確認美女與野獸 DPA，再查其他設施的當日通行方式。'],['上午','依個人偏好先玩巨雷山 → 飛濺山，不刻意衝刺。'],['中午後','夢幻樂園安排美女與野獸、小熊維尼及幽靈公館。'],['下午','明日樂園的怪獸電力公司、星際旅行；杯麵為候補。'],['晚上','遊行、煙火視當天時刻與天候彈性安排，留時間拍照。']];$('strategy').innerHTML=(park==='sea'?sea:land).map(([t,d],i)=>`<div class="timelineRow"><div class="time">0${i+1} · ${escapeHtml(t)}</div><div class="tline">${escapeHtml(d)}</div></div>`).join('')}
function openModal(id){modalId=id;lastFocus=document.activeElement;const x=pick(id),v=val(id);$('modalName').textContent=x.name;$('dpaStart').value=v.start||'';$('dpaEnd').value=v.end||'';$('passType').value=v.type||'DPA';$('formError').hidden=true;$('modal').inert=false;$('modal').classList.add('show');$('modal').setAttribute('aria-hidden','false');document.body.style.overflow='hidden';document.querySelector('main').inert=true;document.querySelector('.tripNav').inert=true;$('dpaStart').focus()}
function closeModal(){if(!$('modal').classList.contains('show'))return;$('modal').classList.remove('show');$('modal').setAttribute('aria-hidden','true');document.body.style.overflow='';document.querySelector('main').inert=false;document.querySelector('.tripNav').inert=false;$('modal').inert=true;if(lastFocus?.isConnected)lastFocus.focus();else $('focusDpa')?.focus()}
$('closeModal').onclick=closeModal;$('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()});document.addEventListener('keydown',e=>{if(!$('modal').classList.contains('show'))return;if(e.key==='Escape'){e.preventDefault();closeModal()}if(e.key==='Tab'){const nodes=[...$('dpaForm').querySelectorAll('input,select,button')].filter(n=>!n.disabled);const first=nodes[0],last=nodes.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
$('dpaForm').onsubmit=e=>{e.preventDefault();const s=$('dpaStart').value,t=$('dpaEnd').value;if(!s||!t||!validTime(s)||!validTime(t)||t<=s){$('formError').textContent='請填完整開始與結束時間，且結束須晚於開始。';$('formError').hidden=false;return}update(modalId,{start:s,end:t,type:$('passType').value});closeModal();note(storageIssue?'時段已記錄，請匯出備份':'已儲存時段（請以官方 App 為準）')};
$('removeDpa').onclick=()=>{update(modalId,{start:'',end:'',type:''});closeModal();note('已清除時段')};
document.querySelectorAll('.tab').forEach(b=>{b.onclick=()=>changePark(b.dataset.park);b.onkeydown=e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();changePark(e.key==='Home'?'sea':e.key==='End'?'land':park==='sea'?'land':'sea');$('park-'+park).focus()}}});$('prevStop').onclick=()=>navigate(-1);$('nextStop').onclick=()=>navigate(1);$('activeBeacon').onclick=()=>{$('boardSection').scrollIntoView({behavior:'smooth',block:'start'})};
$('hideCompleted').onclick=e=>{hide=!hide;e.target.textContent=`隱藏已完成：${hide?'開':'關'}`;render()};
$('sortOriginal').onclick=()=>{state.order[park]=seed[park].map(x=>x.id);save();render();note('已還原建議路線')};
$('sortZone').onclick=()=>{const a=list(),seen=[];a.forEach(x=>{if(!seen.includes(x.zone))seen.push(x.zone)});state.order[park]=a.sort((x,y)=>seen.indexOf(x.zone)-seen.indexOf(y.zone)).map(x=>x.id);save();render();note('已將同分區設施集中')};
$('reset').onclick=()=>{if(confirm('確定清除兩天所有打卡、DPA 時段與自訂順序？')){state=initial();save();selected=state.order[park][0];render();note('已恢復原始行程')}};
$('export').onclick=()=>{const raw=JSON.stringify({version:2,exportedAt:new Date().toISOString(),state},null,2),url=URL.createObjectURL(new Blob([raw],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='Duncan_Kelly_迪士尼大富翁進度.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1500)};
$('import').onclick=()=>$('fileInput').click();$('fileInput').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{if(f.size>1024*1024)throw Error('檔案過大，請選擇匯出的進度 JSON');const payload=JSON.parse(await f.text());if(![1,2].includes(payload.version))throw Error('不支援此進度版本');const s=normalize(payload.state);if(!confirm('匯入將取代兩天的打卡、時段與順序，確定繼續？')){e.target.value='';return;}state=s;save();selected=state.order[park][0];render();note('成功匯入進度')}catch(err){alert('匯入失敗：'+err.message)}e.target.value=''};
$('posterToggle').onclick=()=>{const collapsed=document.querySelector('.mapArtCard').classList.toggle('posterCollapsed');$('posterToggle').setAttribute('aria-expanded',String(!collapsed));$('posterToggle').textContent=collapsed?'展開插畫':'收起插畫'};
syncParkTabs();render();
})();
