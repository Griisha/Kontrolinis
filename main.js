const intro = document.querySelector('.tabno1');
const work = document.querySelector('.tabno2');
const about = document.querySelector('.tabno3');
const contact = document.querySelector('.tabno4');
const major = document.querySelector('.meniu');


document.querySelector('.intro').addEventListener('click', () =>{
    major.classList.add('hidden');
    intro.classList.remove('hidden');
    document.querySelector('.close1').addEventListener('click', ()=> {
        major.classList.remove('hidden');
        intro.classList.add('hidden'); 
    });
}); 
document.querySelector('.work').addEventListener('click', () =>{
    major.classList.add('hidden');
    work.classList.remove('hidden');
    document.querySelector('.close2').addEventListener('click', ()=> {
        major.classList.remove('hidden');
        work.classList.add('hidden'); 
    });
}); 
document.querySelector('.about').addEventListener('click', () =>{
    major.classList.add('hidden');
    about.classList.remove('hidden');
    document.querySelector('.close3').addEventListener('click', ()=> {
        major.classList.remove('hidden');
        about.classList.add('hidden'); 
    });
});
document.querySelector('.contact').addEventListener('click', () =>{
    major.classList.add('hidden');
    contact.classList.remove('hidden');
    document.querySelector('.close4').addEventListener('click', ()=> {
        major.classList.remove('hidden');
        contact.classList.add('hidden'); 
    });
}); 