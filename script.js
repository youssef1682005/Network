const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let type='all';
function apply(){
  const t=$('#s').value.trim().toLowerCase();
  $$('.q').forEach(q=>{
    const ok=(type==='all'||q.querySelector('i.'+type))&&(!t||q.textContent.toLowerCase().includes(t));
    q.hidden=!ok;
  });
  $$('.qs').forEach(b=>b.hidden=!b.querySelector('.q:not([hidden])'));
}
$('#s').addEventListener('input',apply);
$$('[data-f]').forEach(b=>b.addEventListener('click',()=>{
  type=b.dataset.f;
  $$('[data-f]').forEach(x=>x.setAttribute('aria-pressed',x===b));
  apply();
}));
$('#h').addEventListener('click',e=>{
  const on=document.body.classList.toggle('hide');
  e.target.setAttribute('aria-pressed',on);
  e.target.textContent=on?'اظهر الإجابات':'اخفي الإجابات (مذاكرة)';
  $$('.q').forEach(q=>q.classList.remove('open'));
});
document.addEventListener('click',e=>{
  const h=e.target.closest('.q h4');
  if(h&&document.body.classList.contains('hide'))h.parentElement.classList.toggle('open');
});
