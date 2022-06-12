let block = document.createElement(`div`);
block.className = `block`;
block.style.position = 'absolute';
block.style.left = `${Math.floor((window.innerWidth / 2 - 50) / 10) * 10}px`;
block.style.top = `${Math.floor((window.innerHeight / 2 - 50) / 10) * 10}px`;
document.querySelector(`body`).append(block);

   
    window.addEventListener('keydown', (e) => {
        let moveBy = 10;
        let back = 30;
        let newLeft;
        let newTop;
    
        switch (e.key) {
            case 'ArrowLeft':
                newLeft = parseInt(block.style.left) - moveBy;
    
                if (newLeft >= 0) {
                    block.style.left = `${newLeft}px`;
                } else {
                    block.style.left = `${newLeft +  back}px`;

                    appendP();
                }
                break;
            case 'ArrowRight':
                newLeft = parseInt(block.style.left) + moveBy;
    
                if (newLeft <= window.innerWidth - 100 ) {
                    block.style.left = `${newLeft}px`;
                } else {
                    block.style.left = `${newLeft - back}px`;

                    appendP();
                }
    
                break;
            case 'ArrowUp':
                newTop = parseInt(block.style.top) - moveBy
    
                if (newTop >= 0) {
                    block.style.top = `${newTop}px`;
                } else {
                    block.style.top = `${newTop +  back}px`;

                    appendP();
                }
    
                break;
            case 'ArrowDown':
                newTop = parseInt(block.style.top) + moveBy
    
                if (newTop <= window.innerHeight - 100) {
                    block.style.top = `${newTop}px`;
                } else  {
                    block.style.top = `${newTop - back}px`;

                    appendP();
                }
    
                break;
        }
        
        
    });


    
 function appendP() {

       let text = document.createElement(`p`);
           text.innerHTML = 'БЭМС';
           document.querySelector(`div`).append(text);
           setTimeout(removeP, 2000);
           
   }
  
   function  removeP() {
    document.querySelector('p').remove('text');
}
