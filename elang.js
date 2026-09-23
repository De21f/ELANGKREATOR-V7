const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const toast=$('#toast');
function notify(t){toast.textContent=t;toast.classList.add('show');clearTimeout(window.__t);window.__t=setTimeout(()=>toast.classList.remove('show'),2300)}
function wa(name='konsultasi'){return 'https://wa.me/6281280380626?text='+encodeURIComponent(`Halo ELANGKREATOR, saya ingin ${name}.`)}
$('#waBtn').href=wa('konsultasi tentang layanan/produk');
$('#heartBtn').onclick=e=>{e.currentTarget.textContent=e.currentTarget.textContent==='♥'?'♡':'♥';notify(e.currentTarget.textContent==='♥'?'Ditambahkan ke favorit':'Dihapus dari favorit')};
$('#shareBtn').onclick=async()=>{try{if(navigator.share)await navigator.share({title:document.title,url:location.href});else{await navigator.clipboard.writeText(location.href);notify('Link berhasil disalin')}}catch{}};
$('#cartBtn').onclick=()=>notify('Keranjang siap dihubungkan ke checkout V7.7');
$('#menuBtn').onclick=()=>{const n=$('#nav');n.style.display=n.style.display==='flex'?'':'flex';n.style.position='absolute';n.style.top='70px';n.style.left='16px';n.style.right='16px';n.style.padding='18px';n.style.background='#fffdf9';n.style.border='1px solid #ddd6cd';n.style.borderRadius='18px';n.style.flexDirection='column'};
$('#searchForm').onsubmit=e=>{e.preventDefault();const q=$('#searchInput').value.trim();if(q)notify(`Pencarian: ${q}`)};

async function loadStore(){
 try{
  const r=await fetch('/api/store/products'); if(!r.ok)throw 0; const products=await r.json();
  if(!Array.isArray(products)||!products.length)return;
  const grid=$('#productGrid');
  grid.innerHTML=products.slice(0,6).map((p,i)=>`
   <article class="product-card">
    <div class="product-img"><img src="${p.image_url||['https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85'][i%2]}" alt="${escapeHtml(p.name||'Produk ELANGKREATOR')}"></div>
    <p>ELANGKREATOR DIGITAL</p><h3>${escapeHtml(p.name||'Produk')}</h3>
    <strong>${idr(p.price)}</strong><button class="buy" data-name="${escapeHtml(p.name||'Produk')}">Pesan</button>
   </article>`).join('');
  bindBuy();
  if(products[0]?.price)$('#heroPrice').textContent=idr(products[0].price);
 }catch{}
}
function bindBuy(){$$('.buy').forEach(b=>b.onclick=()=>window.open(wa('memesan '+b.dataset.name),'_blank','noopener'))}
function idr(v){return new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(Number(v)||0)}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
bindBuy();loadStore();
