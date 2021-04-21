let caseActive = false;
document.querySelectorAll('.cases td').forEach(item =>{
    item.addEventListener('click', event => {
        if(!caseActive){
            item.classList.add('active');
            caseActive = true;
        }else{
            item.classList.remove('active');
            caseActive = false;
        }
    })
})
