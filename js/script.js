const nav=document.querySelector('.mobileNav')
navMenuBtn=document.querySelector('.navMenuBtn')
navCloseBtn=document.querySelector('.navCloseBtn');

const navToggleFunc = () => nav.classList.add('active')
navMenuBtn.addEventListener("click",navToggleFunc)

const navToggleFunc2 = () => nav.classList.remove('active')
navCloseBtn.addEventListener("click",navToggleFunc2)



const themeBtn=document.querySelectorAll('.themeBtn');

for(let i=0;i<themeBtn.length;i++){
    themeBtn[i].addEventListener('click',function(){
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
        for(let j=0;j<themeBtn.length;j++){
            themeBtn[j].classList.toggle('light');
            themeBtn[j].classList.toggle('dark');
        }
    })
}