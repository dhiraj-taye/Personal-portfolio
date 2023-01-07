const sections = document.querySelectorAll('section');
const navli = document.querySelectorAll('.fixed-side ul li');

window.addEventListener('scroll', ()=> {
    let current='';

    sections.forEach( section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop - sectionHeight / 3){
            current = section.getAttribute("id");
        }
    });
    navli.forEach((li)  =>{
        li.classList.remove("active");

        if(li.classList.contains(current)){
            li.classList.add("active");
        }
    })
});

function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    reveals.forEach((reveal) => {
        var windowHeight = window.innerHeight;
        var elementTop = reveal.getBoundingClientRect().top;
        var elementVisible = 100;
        

        if(elementTop < windowHeight - elementVisible){
            reveal.classList.add("active");
        }else{
            reveal.classList.remove("active");
        }
    })
}
 window.addEventListener("scroll", reveal);