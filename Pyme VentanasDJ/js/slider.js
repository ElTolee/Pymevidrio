(function(){
    
    const sliders = [...document.querySelectorAll('.galeria__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentgalery = document.querySelector('.galeria__body--show').dataset.id;
        value = Number(currentgalery);
        value+= add;


        sliders[Number(currentgalery)-1].classList.remove('galeria__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('galeria__body--show');

    }

})();