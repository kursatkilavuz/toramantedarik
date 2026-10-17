document.documentElement.classList.add('js');
  document.querySelectorAll('.cards,.services-grid').forEach(function(g){
    [].forEach.call(g.children, function(c,i){ c.classList.add('reveal'); c.style.transitionDelay=(i*0.12)+'s'; });
  });
  document.querySelectorAll('.features').forEach(function(g){
    [].forEach.call(g.children, function(c,i){ c.classList.add(i%2?'slide-right':'slide-left'); c.style.transitionDelay=(i*0.12)+'s'; });
  });
  document.querySelectorAll('.gallery-grid').forEach(function(g){
    [].forEach.call(g.children, function(c,i){ c.classList.add(i%2?'slide-right':'slide-left'); c.style.transitionDelay=((i%3)*0.12)+'s'; });
  });
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  },{threshold:0, rootMargin:'0px 0px 12% 0px'});
  document.querySelectorAll('.reveal,.slide-left,.slide-right,.fade-title').forEach(function(el){ io.observe(el); });
  // mobile menu: close when tapping anywhere outside it, or on a link
  var menu = document.getElementById('menu');
  var menuBtn = document.querySelector('.menu-btn');
  document.addEventListener('click', function(e){
    if(menu.classList.contains('open') && !menu.contains(e.target) && !menuBtn.contains(e.target)){
      menu.classList.remove('open');
    }
  });
  menu.addEventListener('click', function(e){
    if(e.target.tagName === 'A'){ menu.classList.remove('open'); }
  });
