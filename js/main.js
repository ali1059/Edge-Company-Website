
     function initMap() {
       const loc = { lat:42.361145, lng: -71.057083 };
       const map = new google.maps.Map(document.querySelector('.map'), {
         zoom: 15,
         center:loc
       });
       const marker = new google.maps.Marker({position:loc,map:map});
     }

// Sticky Menu
window.addEventListener('scroll',function(){
  if(window.scrollY > 150){
    document.querySelector("#navbar").style.opacity = 0.9;
  }
  else{
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click',function(event){
  if(this.hash !== ''){
    event.preventDefault();
    const hash = this.hash;

    $('html,body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }

});
