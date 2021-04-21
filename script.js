let caseActive = false;
document.querySelectorAll('.cases td').forEach(item =>{
    item.addEventListener('click', event => {
        if(!item.classList.contains('active')){
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        }
    })
})
