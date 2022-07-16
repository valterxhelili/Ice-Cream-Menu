function openMenu(){
    let menu = window.document.getElementById('mobile-menu');
    if (!menu.classList.contains('open')){
        menu.classList.add('open');
    } else {
        menu.classList.remove('open');
    }
}