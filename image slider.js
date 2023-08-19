let slideIndex=0;
let slides=document.getElementsByClassName('slide');
function slideshow(index){
   for(let i=0;i<slides.length;i++){
    slides[i].style.display='none';
   }
   if(index<(slides.length)&&index>=0){
   slides[slideIndex].style.display='block';
   }else if(index>(slides.length-1)){
    alert('last image');
    slides[slideIndex-1].style.display='block';
    }
    else if(index<0){
        alert("no previous image");
        slides[slideIndex+1].style.display='block';
    }
 }
function Previous(){
    slideshow(--slideIndex);
}
function Next(){
    slideshow(++slideIndex);
}
slideshow(slideIndex);