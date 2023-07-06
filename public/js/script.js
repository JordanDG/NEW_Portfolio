function MobileToggle() {
    var DropoutDiv = document.getElementById("dropout_div");
    var Icon = document.getElementById("Icon");

    if(DropoutDiv.style.height == "0px") {
        console.log("1");
        DropoutDiv.style.height = "130px";
        Icon.className = "fa-solid fa-xmark";
    } else {
        console.log("2");
        DropoutDiv.style.height = "0px";
        Icon.className = "fa-solid fa-bars";
    }
}

document.addEventListener("DOMContentLoaded", function(){
    const observer = new IntersectionObserver((entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // The element is now in view, so trigger the animation
            entry.target.classList.add('animated');
          } else {
            // The element is no longer in view, so remove the animation
            entry.target.classList.remove('animated');
          }
        }
      }, {
        threshold: 0.3, // This means that the element must be at least 30% visible in the viewport before the animation is triggered.
    });
    const element = document.querySelector('.section1_main');
    observer.observe(element);

    const element2 = document.querySelector('.header_main');
    observer.observe(element2);

    const element5 = document.querySelector('.section3_main');
    observer.observe(element5);


    const observer2 = new IntersectionObserver((entries, observer2) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // The element is now in view, so trigger the animation
          entry.target.classList.add('animatedRight');
        } else {
          // The element is no longer in view, so remove the animation
          entry.target.classList.remove('animatedRight');
        }
      }
    }, {
      threshold: 0.3, // This means that the element must be at least 30% visible in the viewport before the animation is triggered.
  });
  const element3 = document.querySelector('.section2_main');
  observer2.observe(element3);

  const element4 = document.querySelector('.arrowhead_container');
  observer2.observe(element4);

  // const element5 = document.querySelector('.header_main');
  // observer2.observe(element5);

});