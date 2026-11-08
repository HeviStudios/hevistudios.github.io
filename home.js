const features = {
 dash: {label:'YA DISPONIBLE EN APP STORE',title:'PELEJO<br><span>DASH</span>',tagline:'Pequeño perezoso. Gran aventura.',description:'El fuego avanza por la selva. Corre, salta y planea con Pelejo en una carrera que no te dará respiro.',image:'img/dash-landscape.jpg',character:true,genre:'ARCADE · AVENTURA',href:'https://apps.apple.com/pe/app/pelejo-dash/id6825958730',cta:'Descargar en App Store'},
 guardianes: {label:'DESCUBRE LAS LEYENDAS DEL PERÚ',title:'GUARDIANES<br><span>ANDINOS</span>',tagline:'Tres amigos. Un Perú por descubrir.',description:'Viaja con Pelejo, Wayra y Sipán por la selva, los Andes y la costa. Rescata animales y descubre a los guardianes de nuestras leyendas.',image:'img/portada.jpg',character:false,genre:'PLATAFORMAS · AVENTURA',href:'pelejo.html',cta:'Descubre el juego'},
 neuro: {label:'YA DISPONIBLE EN APP STORE',title:'NEURO<br><span>RETOS</span>',tagline:'Dale una nueva aventura a tu mente.',description:'16 minijuegos para entrenar memoria, atención y velocidad mental. Descubre hasta dónde puedes llegar, un reto a la vez.',image:'img/app-neuroretos.jpg',character:false,genre:'MEMORIA · AGILIDAD MENTAL',href:'https://apps.apple.com/pe/app/neuroretos/id6767064407',cta:'Descargar en App Store'}
};
document.querySelectorAll('[data-feature]').forEach(button=>button.addEventListener('click',()=>{
 const f=features[button.dataset.feature];
 document.querySelector('.hero-copy').classList.toggle('compact-title',button.dataset.feature==='guardianes');
 document.querySelectorAll('[data-feature]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 for(const [id,key] of [['hero-label','label'],['hero-tagline','tagline'],['hero-description','description'],['hero-genre','genre']])document.getElementById(id).textContent=f[key];
 document.getElementById('hero-title').innerHTML=f.title;
 const art=document.getElementById('hero-art');art.style.backgroundImage=`url("${f.image}")`;art.style.backgroundSize=button.dataset.feature==='neuro'?'auto 105%':'cover';art.style.backgroundColor=button.dataset.feature==='neuro'?'#160f27':'';art.style.backgroundPosition=button.dataset.feature==='neuro'?'85% center':'center 58%';
 document.getElementById('hero-character').hidden=!f.character;
 document.getElementById('hero-main').href=f.href;
 document.getElementById('hero-cta').textContent=f.cta;
}));
