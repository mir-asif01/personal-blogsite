// responsive menu
const showMenuBtn = document.getElementById('show-menu');
const hideMenuBtn = document.getElementById('hide-menu');
hideMenuBtn.style.display = 'none';
showMenuBtn.addEventListener('click',function(){
    const navitems = document.getElementById('res-nav');
    navitems.style.display = 'block';
    showMenuBtn.style.display = 'none';
    hideMenuBtn.style.display = 'block';
})
hideMenuBtn.addEventListener('click',function(){
    const navitems = document.getElementById('res-nav');
    navitems.style.display = 'none';
    hideMenuBtn.style.display = 'none';
    showMenuBtn.style.display = 'block';

})