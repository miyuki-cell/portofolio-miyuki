// Certificate Carousel Script
(function() {
  const carousel = document.getElementById('certCarousel');
  let isDown = false, startX, scrollLeft, isAuto = true;
  let autoTimer = null;
  const AUTO_DELAY = 2200;
  const STEP = 190;

  carousel.addEventListener('pointerdown', (e) => {
    isDown = true;
    isAuto = false;
    carousel.setPointerCapture(e.pointerId);
    startX = e.clientX;
    scrollLeft = carousel.scrollLeft;
    carousel.style.scrollBehavior = 'auto';
    clearInterval(autoTimer);
  });
  
  carousel.addEventListener('pointermove', (e) => {
    if (!isDown) return; 
    const x = e.clientX;
    const walk = (startX - x);
    carousel.scrollLeft = scrollLeft + walk;
  });
  
  carousel.addEventListener('pointerup', (e) => {
    isDown = false;
    isAuto = true;
    carousel.releasePointerCapture(e.pointerId);
    carousel.style.scrollBehavior = 'smooth';
    startAuto();
  });
  
  carousel.addEventListener('pointercancel', () => {
    isDown = false;
    isAuto = true;
    startAuto();
  });
  
  carousel.addEventListener('mouseenter', () => { 
    isAuto = false; 
    clearInterval(autoTimer); 
  });
  
  carousel.addEventListener('mouseleave', () => { 
    isAuto = true; 
    startAuto(); 
  });
  
  function startAuto(){
    clearInterval(autoTimer);
    if (!isAuto) return;
    autoTimer = setInterval(() => {
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      if (Math.abs(carousel.scrollLeft - maxScroll) < 5) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: STEP, behavior: 'smooth' });
      }
    }, AUTO_DELAY);
  }
  
  startAuto();
  carousel.tabIndex = 0;
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') carousel.scrollBy({ left: STEP, behavior: 'smooth' });
    if (e.key === 'ArrowLeft') carousel.scrollBy({ left: -STEP, behavior: 'smooth' });
  });
})();

// Organisation Carousel Script
(function() {
  const carousel = document.getElementById('orgCarousel');
  let isDown = false, startX, scrollLeft, isAuto = true;
  let autoTimer = null;
  const AUTO_DELAY = 2400;
  const STEP = 350; // sesuai card width+gap

  carousel.addEventListener('pointerdown', (e) => {
    isDown = true; 
    isAuto = false;
    carousel.setPointerCapture(e.pointerId);
    startX = e.clientX; 
    scrollLeft = carousel.scrollLeft;
    carousel.style.scrollBehavior='auto'; 
    clearInterval(autoTimer);
  });
  
  carousel.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    const x = e.clientX, walk = (startX - x);
    carousel.scrollLeft = scrollLeft + walk;
  });
  
  carousel.addEventListener('pointerup', (e) => {
    isDown = false; 
    isAuto = true;
    carousel.releasePointerCapture(e.pointerId);
    carousel.style.scrollBehavior='smooth'; 
    startAuto();
  });
  
  carousel.addEventListener('pointercancel', () => { 
    isDown=false; 
    isAuto=true; 
    startAuto(); 
  });
  
  carousel.addEventListener('mouseenter', () => { 
    isAuto=false; 
    clearInterval(autoTimer); 
  });
  
  carousel.addEventListener('mouseleave', () => { 
    isAuto=true; 
    startAuto(); 
  });
  
  function startAuto(){
    clearInterval(autoTimer);
    if (!isAuto) return;
    autoTimer = setInterval(() => {
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      if (Math.abs(carousel.scrollLeft - maxScroll) < 5) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({left:STEP,behavior:'smooth'});
      }
    }, AUTO_DELAY);
  }
  
  startAuto();
  carousel.tabIndex = 0;
  carousel.addEventListener('keydown', (e) => {
    if (e.key==='ArrowRight') carousel.scrollBy({left:STEP,behavior:'smooth'});
    if (e.key==='ArrowLeft') carousel.scrollBy({left:-STEP,behavior:'smooth'});
  });
})();

// Panel toggle function
function togglePanel(id) {
  const panel = document.getElementById(id);
  panel.classList.toggle("active");
}