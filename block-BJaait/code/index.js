const imgBox = document.querySelector('.imgBox');
const whiteBoxes  = document.querySelector('.whiteBox');

imgBox.addEventListener('dragstart', (e) => {
   e.target.className += ' hold'; 
   setTimeout(() => {
    e.target.className = "hide";
   },0);
   e.target.className += 'hide';                                            // event listener for draggable element imgBox
});

imgBox.addEventListener('dragend', (e) => {
     e.target.className = "imgBox";                                          // div box me end kiya
});

for(whitebox of whiteBoxes){
    whitebox.addEventListener('dragover', (e) => {
        e.preventDefault();

    });

    whitebox.addEventListener('dragenter', (e) => {
       
    });

    whitebox.addEventListener('dragleave', (e) => {

    });

    whitebox.addEventListener('drop' , (e) => {
        e.target.append(imgBox);

    })

};