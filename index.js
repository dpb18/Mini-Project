function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  
  function openNav1() {
    document.getElementById("mySidebar").style.width = "450px";
    document.getElementById("main").style.marginLeft = "450px";
  }
  
  function closeNav1() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  function openNav2() {
    document.getElementById("mySidebar1").style.width = "450px";
    document.getElementById("main").style.marginLeft = "450px";
  }
  function closeNav2() {
    document.getElementById("mySidebar1").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  function openNav3() {
    document.getElementById("mySidebar2").style.width = "450px";
    document.getElementById("main").style.marginLeft = "450px";
  }
  function closeNav3() {
    document.getElementById("mySidebar2").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }


 var coll = document.getElementsByClassName("collapsible");
 var i;
 
 for (i = 0; i < coll.length; i++) {
   coll[i].addEventListener("click", function() {
     this.classList.toggle("active");
     var content = this.nextElementSibling;
     if (content.style.maxHeight){
       content.style.maxHeight = null;
     } else {
       content.style.maxHeight = content.scrollHeight + "px";
     } 
   });
 }

 var coll = document.getElementsByClassName("collapsible1");
 var j;
 
 for (j = 0; j < coll.length; j++) {
   coll[j].addEventListener("click", function() {
     this.classList.toggle("active");
     var content = this.nextElementSibling;
     if (content.style.maxHeight){
       content.style.maxHeight = null;
     } else {
       content.style.maxHeight = content.scrollHeight + "px";
     } 
   });
 }

 let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function openNav4() {
  document.getElementById("myNav1").style.width = "100%";
}
function closeNav4() {
  document.getElementById("myNav1").style.width = "0%";
}
function openNav5() {
  document.getElementById("myNav2").style.width = "100%";
}
function closeNav5() {
  document.getElementById("myNav2").style.width = "0%";
}
function openNav6() {
  document.getElementById("myNav3").style.width = "100%";
}
function closeNav6() {
  document.getElementById("myNav3").style.width = "0%";
}
function openNav7() {
  document.getElementById("myNav4").style.width = "100%";
}
function closeNav7() {
  document.getElementById("myNav4").style.width = "0%";
}
function openNav8() {
  document.getElementById("myNav5").style.width = "100%";
}
function closeNav8() {
  document.getElementById("myNav5").style.width = "0%";
}
function openNav9() {
  document.getElementById("myNav6").style.width = "100%";
}
function closeNav9() {
  document.getElementById("myNav6").style.width = "0%";
}
function openNav10() {
  document.getElementById("myNav7").style.width = "100%";
}
function closeNav10() {
  document.getElementById("myNav7").style.width = "0%";
}
function openNav11() {
  document.getElementById("myNav8").style.width = "100%";
}
function closeNav11() {
  document.getElementById("myNav8").style.width = "0%";
}
function openNav12() {
  document.getElementById("myNav9").style.width = "100%";
}
function closeNav12() {
  document.getElementById("myNav9").style.width = "0%";
}
function openNav13() {
  document.getElementById("myNav10").style.width = "100%";
}
function closeNav13() {
  document.getElementById("myNav10").style.width = "0%";
}
function openNav14() {
  document.getElementById("myNav11").style.width = "100%";
}
function closeNav14() {
  document.getElementById("myNav11").style.width = "0%";
}
function openNav15() {
  document.getElementById("myNav12").style.width = "100%";
}
function closeNav15() {
  document.getElementById("myNav12").style.width = "0%";
}
function openNav16() {
  document.getElementById("myNav13").style.width = "100%";
}
function closeNav16() {
  document.getElementById("myNav13").style.width = "0%";
}
function openNav17() {
  document.getElementById("myNav14").style.width = "100%";
}
function closeNav17() {
  document.getElementById("myNav14").style.width = "0%";
}
function openNav18() {
  document.getElementById("myNav15").style.width = "100%";
}
function closeNav18() {
  document.getElementById("myNav15").style.width = "0%";
}
function openNav19() {
  document.getElementById("myNav16").style.width = "100%";
}
function closeNav19() {
  document.getElementById("myNav16").style.width = "0%";
}
function openNav20() {
  document.getElementById("myNav17").style.width = "100%";
}
function closeNav20() {
  document.getElementById("myNav17").style.width = "0%";
}
function openNav21() {
  document.getElementById("myNav18").style.width = "100%";
}
function closeNav21() {
  document.getElementById("myNav18").style.width = "0%";
}
function openNav22() {
  document.getElementById("myNav19").style.width = "100%";
}
function closeNav22() {
  document.getElementById("myNav19").style.width = "0%";
}
function openNav23() {
  document.getElementById("myNav20").style.width = "100%";
}
function closeNav23() {
  document.getElementById("myNav20").style.width = "0%";
}
function openNav24() {
  document.getElementById("myNav21").style.width = "100%";
}
function closeNav24() {
  document.getElementById("myNav21").style.width = "0%";
}
function openNav25() {
  document.getElementById("myNav22").style.width = "100%";
}
function closeNav25() {
  document.getElementById("myNav22").style.width = "0%";
}
function openNav26() {
  document.getElementById("myNav23").style.width = "100%";
}
function closeNav26() {
  document.getElementById("myNav23").style.width = "0%";
}
function openNav27() {
  document.getElementById("myNav24").style.width = "100%";
}
function closeNav27() {
  document.getElementById("myNav24").style.width = "0%";
}
function openNav28() {
  document.getElementById("myNav25").style.width = "100%";
}
function closeNav28() {
  document.getElementById("myNav25").style.width = "0%";
}
function openNav29() {
  document.getElementById("myNav26").style.width = "100%";
}
function closeNav29() {
  document.getElementById("myNav26").style.width = "0%";
}
function openNav30() {
  document.getElementById("myNav27").style.width = "100%";
}
function closeNav30() {
  document.getElementById("myNav27").style.width = "0%";
}
function openNav31() {
  document.getElementById("myNav28").style.width = "100%";
}
function closeNav31() {
  document.getElementById("myNav28").style.width = "0%";
}
function openNav32() {
  document.getElementById("myNav29").style.width = "100%";
}
function closeNav32() {
  document.getElementById("myNav29").style.width = "0%";
}
function openNav33() {
  document.getElementById("myNav30").style.width = "100%";
}
function closeNav33() {
  document.getElementById("myNav30").style.width = "0%";
}
function openNav34() {
  document.getElementById("myNav31").style.width = "100%";
}
function closeNav34() {
  document.getElementById("myNav31").style.width = "0%";
}
function openNav35() {
  document.getElementById("myNav32").style.width = "100%";
}
function closeNav35() {
  document.getElementById("myNav32").style.width = "0%";
}